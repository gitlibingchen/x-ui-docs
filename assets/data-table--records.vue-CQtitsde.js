const e={title:"新增与删除记录",description:"表尾先校验默认值；侧栏顶部提交或连续新增，详情顶部切换记录，字段确认即保存。",component:"XDataTable",controls:{delay:{label:"ID 生成延迟",min:0,max:3e3,step:100}},presets:[{label:"即时生成",state:{delay:0}},{label:"等待 800ms",state:{delay:800}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onMounted",source:"onMounted",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDataTable",source:"XDataTable",typeOnly:!1},{name:"XDataTableApi",source:"type XDataTableApi",typeOnly:!1},{name:"XDataTableLoadResult",source:"type XDataTableLoadResult",typeOnly:!1},{name:"XDataTableApplyPatch",source:"type XDataTableApplyPatch",typeOnly:!1}],sideEffect:!1}],statements:[{names:["table"],chunks:["const table = ref<XDataTableApi>()"]},{names:["request"],chunks:[`async function request<T>(path: string, value: unknown, signal?: AbortSignal): Promise<T> {
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
})`]}],template:[{tag:"XDataTable",unwrap:!1,selfClosing:!0,props:[{name:"ref",value:"table"},{directive:"bind",arg:"height",raw:':height="420"',expression:{literal:420}}],children:[]}],styles:""},defaults:{delay:500},before:`<script setup lang="ts">
import { createMemoryTable } from '../../lib/data-table-memory'

import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { xToast, XButton, XDataTable, type XDataTableApi } from '@libingchen/x-ui'
const state = reactive(`,after:`)
const table = ref<XDataTableApi>()
const generated = ref(0),
  notifications = ref(0)
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
const parameters = new URLSearchParams(location.search)
async function initialize(defaults: boolean) {
  generated.value = 0
  await table.value?.init({
    onAction: () => {
      notifications.value++
    },
    fields: [
      {
        key: 'title',
        label: '任务名称',
        required: true,
        ...(defaults ? { defaultValue: '新任务' } : {}),
      },
      { key: 'notes', label: '备注', defaultValue: '默认备注' },
      { key: 'amount', label: '金额', type: 'number', min: 0, defaultValue: 0 },
      { key: 'confirmed', label: '已确认', type: 'boolean' },
      { key: 'due', label: '截止日期', type: 'date', format: 'YYYY-MM-DD' },
      {
        key: 'tags',
        label: '标签',
        type: 'multiSelect',
        options: [
          { value: '常规', label: '常规' },
          { value: '优先', label: '优先' },
        ],
        defaultValue: ['常规'],
      },
      {
        key: 'status',
        label: '状态',
        type: 'singleSelect',
        options: [
          { value: '待开始', label: '待开始' },
          { value: '已完成', label: '已完成' },
        ],
        defaultValue: '待开始',
      },
    ],
    load: createMemoryTable([
      {
        id: 'original',
        title: '原有任务',
        notes: '',
        amount: 12,
        confirmed: false,
        due: '2026-10-01T00:00:00',
        tags: ['常规'],
        status: '待开始',
      },
    ]).load,
    async generateId({ signal }) {
      generated.value++
      await new Promise<void>((resolve, reject) => {
        const abort = () => {
          clearTimeout(timer)
          reject(new Error('已取消'))
        }
        const timer = setTimeout(() => {
          signal.removeEventListener('abort', abort)
          resolve()
        }, state.delay)
        signal.addEventListener('abort', abort, { once: true })
      })
      return crypto.randomUUID()
    },
  })
}
async function run(defaults: boolean) {
  try {
    await initialize(defaults)
    notify('')
  } catch (cause) {
    notify('操作失败，请重试')
  }
}
onMounted(() => run(parameters.has('defaults')))
<\/script>
<template>
  <div class="demo">
    <div class="records-actions">
      <XButton variant="outline" @click="run(false)">必填未填</XButton>
      <XButton variant="outline" @click="run(true)">默认值已满足必填</XButton>
    </div>
    <p>
      表尾加号先校验默认值，通过后等待生成
      ID；未通过时进入侧栏。侧栏可拖拽调整宽度，透明遮罩保留背景表格；新增在顶部提交，可选择提交后继续添加；详情顶部切换上下行；可编辑字段直接显示编辑器，字段确认后直接保存，布尔字段点击整个编辑区域即可勾选。校验错误显示在字段名旁的图标和浮层中，不挤动后续字段。右键菜单可查看详情或删除记录；悬停当前行时，首列右侧显示查看详情图标。
    </p>
    <XDataTable ref="table" :height="340" />
    <p data-testid="creation-evidence">
      生成 ID {{ generated }} 次；变化通知 {{ notifications }} 次
    </p>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}
.records-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>`,start:297,end:311};export{e as default};
