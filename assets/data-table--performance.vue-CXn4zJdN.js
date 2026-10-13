const e={title:"大数据与异步读取",description:"独立观察宽表的虚拟滚动、固定列与按需读取；模拟延迟用于查看加载过程。",component:"XDataTable",controls:{height:{label:"高度",min:180,step:20}},presets:[{label:"百万行远程",state:{dataMode:"remote"}},{label:"远程 200ms",state:{dataMode:"remote",delay:200}},{label:"远程 800ms",state:{dataMode:"remote",delay:800}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onMounted",source:"onMounted",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDataTable",source:"XDataTable",typeOnly:!1},{name:"XDataTableApi",source:"type XDataTableApi",typeOnly:!1},{name:"XDataTableLoadResult",source:"type XDataTableLoadResult",typeOnly:!1},{name:"XDataTableApplyPatch",source:"type XDataTableApplyPatch",typeOnly:!1}],sideEffect:!1}],statements:[{names:["table"],chunks:["const table = ref<XDataTableApi>()"]},{names:["request"],chunks:[`async function request<T>(path: string, value: unknown, signal?: AbortSignal): Promise<T> {
  const response = await fetch(\`/api/table/\${path}\`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value), signal,
  })
  if (!response.ok) throw new Error('请求失败')
  return response.json()
}`]},{names:[],chunks:[`onMounted(async () => {
  await table.value?.init({
    fields: [{ key: 'title', label: '任务名称', required: true }, { key: 'notes', label: '备注' }],
    load: (query, { signal }) => request<XDataTableLoadResult>('load', query, signal),
    generateId: async ({ signal }) => (await request<{ id: string }>('id', {}, signal)).id,
    onAction: async action => {
      const patch = await request<XDataTableApplyPatch>('action', action)
      table.value?.apply(patch)
    },
  })
})`]}],template:[{tag:"XDataTable",unwrap:!1,selfClosing:!0,props:[{name:"ref",value:"table"},{directive:"bind",arg:"height",raw:':height="420"',expression:{literal:420}}],children:[]}],styles:""},defaults:{dataMode:"wide",delay:0,height:320},before:`<script setup lang="ts">
import { createMemoryTable } from '../../lib/data-table-memory'

import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import {
  xToast,
  XButton,
  XDataTable,
  type XDataTableApi,
  type XDataTableFieldDescriptor,
  type XDataTableLoad,
  type XDataTableView,
} from '@libingchen/x-ui'
interface State {
  dataMode: 'wide' | 'remote'
  delay: number
  height: number
}
const state = reactive<State>(`,after:`)
function dataMode(): 'wide' | 'remote' {
  return state.dataMode
}
const table = ref<XDataTableApi>()
let noticeId: string | number | undefined
let disposed = false
function notify(message = '') {
  if (disposed) return
  if (noticeId !== undefined) xToast.dismiss(noticeId)
  noticeId = message ? xToast.error(message) : undefined
}
onBeforeUnmount(() => {
  disposed = true
  if (noticeId !== undefined) xToast.dismiss(noticeId)
})
const fields: readonly XDataTableFieldDescriptor[] = Array.from(
  { length: dataMode() === 'remote' ? 100 : 40 },
  (_, index) => ({ key: \`f\${index}\`, label: \`字段 \${index + 1}\` }),
)
function view(): XDataTableView {
  return {
    rowHeight: 'md',
    columns: fields.map((field, index) => ({
      key: field.key,
      width: 160,
      fixed: index === 0 ? 'left' : null,
    })),
  }
}
const reads = ref(0)
const changes = ref(0)
const cached = ref('')
/** 仅生成请求范围；逻辑百万行不建立数组或百万身份索引。 */
function range(start: number, length: number) {
  return Array.from({ length }, (_, index) => {
    const row = start + index
    return {
      id: row,
      ...Object.fromEntries(
        fields.map((field, column) => [
          field.key,
          row % 29 === 0 ? \`项\${row % 97}\\n\${column}\` : \`\${row.toString(36)}·\${column}\`,
        ]),
      ),
    }
  })
}
const load: XDataTableLoad = async (request, context) => {
  if (request.kind !== 'records') throw new Error('此演示只支持范围读取')
  reads.value++
  if (state.delay > 0)
    await new Promise<void>((resolve, reject) => {
      const cancel = () => {
        clearTimeout(timer)
        reject(new Error('读取已取消'))
      }
      const timer = setTimeout(() => {
        context.signal.removeEventListener('abort', cancel)
        resolve()
      }, state.delay)
      context.signal.addEventListener('abort', cancel, { once: true })
    })
  if (context.signal.aborted) throw new Error('读取已取消')
  const start = request.start ?? 0
  return {
    records: range(start, Math.max(0, Math.min(request.limit, 1_000_000 - start))),
    total: 1_000_000,
    summary: request.query.summary.map((rule) => ({
      ...rule,
      value: rule.method === 'count' ? 1_000_000 : null,
    })),
  }
}
/** 按需读取 getter，避免监控本身逐帧枚举缓存。 */
function inspectCache() {
  const records = table.value?.records.getLoaded() ?? []
  cached.value = \`\${records.length} 条 / 估算 \${JSON.stringify(records).length * 2} 字节\`
}

onMounted(async () => {
  try {
    await table.value?.init({
      onAction: () => {
        changes.value++
      },
      fields,
      load: dataMode() === 'remote' ? load : createMemoryTable(range(0, 10_000)).load,
      limits: { pageRows: 200, maxPages: 10 },
      view: view(),
    })
  } catch (cause) {
    notify('操作失败，请重试')
  }
})
<\/script>
<template>
  <div class="demo">
    <p>
      {{
        dataMode() === 'remote'
          ? '模拟远程按需读取：1,000,000 行 × 100 字段'
          : '本地宽表：10,000 行 × 40 字段'
      }}
    </p>
    <p class="note">
      首列固定，横向与纵向滚动仅渲染可见区域。选中单元格后按 Ctrl+End 跳到末尾，Ctrl+Home
      返回首行。远程场景只读，数据在本地生成。
    </p>
    <XDataTable
      ref="table"
      :height="state.height"
      :readonly="dataMode() === 'remote'"
      aria-label="大数据网格"
    />
    <div class="row">
      <XButton size="sm" variant="outline" @click="inspectCache">查看缓存规模</XButton
      ><span role="status"
        >{{ cached || '按需查看已加载记录' }} · 读取 {{ reads }} 次 · 已提交
        {{ changes }} 次修改</span
      >
    </div>
  </div>
</template>
<style scoped>
.demo {
  display: grid;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  font-size: 14px;
  line-height: 1.6;
}
.demo p {
  margin: 0;
}
.note,
.row {
  font-size: 12px;
  color: var(--x-muted-foreground);
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
</style>`,start:476,end:519};export{e as default};
