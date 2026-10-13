const e={title:"远程加载数据",description:"统一 load 读取、onAction 接收操作、apply 回填外部计算结果。支持按需分组读取、查询选择和历史。",component:"XDataTable",controls:{access:{label:"接入权限",options:["完整权限","记录只读","锁定字段","锁定视图"]},scenario:{label:"业务场景",options:["全部任务","按阶段分组","少量记录","空台账","只读查看","慢速网络","首次读取失败","分页读取失败","保存失败"]},delay:{label:"请求延迟（毫秒）",min:0,max:3e3,step:100},height:{label:"表格高度",min:280,step:20}},presets:[{label:"锁定字段",state:{access:"锁定字段"}},{label:"锁定视图",state:{access:"锁定视图"}},{label:"按阶段分组",state:{scenario:"按阶段分组"}},{label:"少量记录",state:{scenario:"少量记录"}},{label:"空台账",state:{scenario:"空台账"}},{label:"只读查看",state:{scenario:"只读查看"}},{label:"慢速网络",state:{scenario:"慢速网络",delay:1200}},{label:"首次读取失败",state:{scenario:"首次读取失败"}},{label:"分页读取失败",state:{scenario:"分页读取失败"}},{label:"保存失败",state:{scenario:"保存失败"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"computed",source:"computed",typeOnly:!1},{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"onMounted",source:"onMounted",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"watch",source:"watch",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XButton",source:"XButton",typeOnly:!1},{name:"XDataTable",source:"XDataTable",typeOnly:!1},{name:"xToast",source:"xToast",typeOnly:!1},{name:"XDataTableApi",source:"type XDataTableApi",typeOnly:!1},{name:"XDataTableFieldDescriptor",source:"type XDataTableFieldDescriptor",typeOnly:!1},{name:"XDataTableView",source:"type XDataTableView",typeOnly:!1},{name:"XDataTableLoadResult",source:"type XDataTableLoadResult",typeOnly:!1},{name:"XDataTableApplyPatch",source:"type XDataTableApplyPatch",typeOnly:!1},{name:"XDataTableHistoryResult",source:"type XDataTableHistoryResult",typeOnly:!1},{name:"XDataTableSelection",source:"type XDataTableSelection",typeOnly:!1}],sideEffect:!1}],statements:[{names:["table","refreshing","serviceId","lifetime"],chunks:[`const table = ref<XDataTableApi>(),
  refreshing = ref(false),
  serviceId = ref(''),
  lifetime = new AbortController()`]},{names:["generation","exportUrl"],chunks:[`let generation = 0,
  exportUrl: string | undefined`]},{names:["scenarios"],chunks:[`const scenarios: Record<string, string> = {
  全部任务: 'standard',
  按阶段分组: 'grouped',
  少量记录: 'small',
  空台账: 'empty',
  只读查看: 'readonly',
  慢速网络: 'slow',
  首次读取失败: 'first-reject',
  分页读取失败: 'page-reject',
  保存失败: 'write-reject',
}`]},{names:["descriptions"],chunks:[`const descriptions: Record<string, string> = {
  standard: '跨团队交付台账，按需读取记录。修改值后保留当前位置，刷新或调整查询时重新排列。',
  grouped: '组列表与组内记录分别按需读取，组统计由服务返回完整范围结果。',
  small: '少量记录与大量记录使用同一套读取和操作接口。',
  empty: '点击添加记录建立第一条任务，最终 ID 由服务生成。',
  readonly: '只读查看仍可筛选、排序、分组和查看历史。',
  slow: '读取较慢时可浏览已有内容；提交后立即结束编辑，后台处理操作。',
  'first-reject': '首次读取失败后，可通过重试恢复。',
  'page-reject': '滚动读取失败后刷新重试。',
  'write-reject': '外部写入失败只提示错误，内部修改保留；刷新后显示外部实际数据。',
}`]},{names:["description"],chunks:["const description = computed(() => descriptions[scenarios[",{key:"scenario",model:void 0},"] ?? 'standard'])"]},{names:["permissions"],chunks:[`const permissions = computed(() => ({
  records: {
    add: `,{key:"access",model:void 0},` !== '记录只读',
    update: `,{key:"access",model:void 0},` !== '记录只读',
    remove: `,{key:"access",model:void 0},` !== '记录只读',
  },
  fields: {
    add: `,{key:"access",model:void 0},` !== '锁定字段',
    update: `,{key:"access",model:void 0},` !== '锁定字段',
    remove: `,{key:"access",model:void 0},` !== '锁定字段',
  },
  view: { update: `,{key:"access",model:void 0},` !== '锁定视图' },
}))`]},{names:["http"],chunks:[`async function http<T>(path: string, body: unknown, signal = lifetime.signal): Promise<T> {
  const response = await fetch(\`/__data-table/\${path}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  const result = await response.json()
  if (!response.ok) throw new Error(result.error.message)
  return result
}`]},{names:["initialize"],chunks:[`async function initialize() {
  const owner = ++generation
  refreshing.value = true
  try {
    const scenario = scenarios[`,{key:"scenario",model:void 0},`]
    const config = await http<{
      id: string
      fields: XDataTableFieldDescriptor[]
      view: XDataTableView
    }>('create', {
      profile: 'projects',
      total: scenario === 'empty' ? 0 : scenario === 'small' ? 6 : 10000,
      grouped: scenario === 'grouped',
      fault: scenario,
      delay: scenario === 'slow' ? 1200 : `,{key:"delay",model:void 0},`,
    })
    if (owner !== generation) return
    serviceId.value = config.id
    const call = <T,>(method: string, request: unknown, signal = lifetime.signal) =>
      http<T>(\`\${config.id}/\${method}\`, { request }, signal)
    await table.value
      ?.init({
        fields: config.fields,
        view: config.view,
        load: (request, { signal }) => call<XDataTableLoadResult>('load', request, signal),
        generateId: async ({ signal }) =>
          (await call<{ id: string }>('generate-id', {}, signal)).id,
        onAction: async (action) => {
          const patch = await call<XDataTableApplyPatch>('action', action)
          if (owner === generation && Object.keys(patch).length) table.value?.apply(patch)
        },
        loadHistory: (request, { signal }) =>
          call<XDataTableHistoryResult>('history', request, signal),
      })
      .catch(() => {})
  } catch (cause) {
    if ((cause as Error).name !== 'AbortError') xToast.error((cause as Error).message)
  } finally {
    if (owner === generation) refreshing.value = false
  }
}`]},{names:["reload"],chunks:[`async function reload() {
  try {
    await table.value?.reload()
  } catch (cause) {
    if ((cause as Error).name !== 'AbortError') xToast.error((cause as Error).message)
  }
}`]},{names:["exportSelection"],chunks:[`async function exportSelection(selection: XDataTableSelection) {
  try {
    const result = await http<{ records: unknown[] }>(\`\${serviceId.value}/export\`, { selection })
    if (exportUrl) URL.revokeObjectURL(exportUrl)
    exportUrl = URL.createObjectURL(
      new Blob([JSON.stringify(result.records, null, 2)], { type: 'application/json' }),
    )
    const link = document.createElement('a')
    link.href = exportUrl
    link.download = '交付任务.json'
    link.click()
  } catch (cause) {
    xToast.error((cause as Error).message)
  }
}`]},{names:[],chunks:["onMounted(initialize)"]},{names:[],chunks:[`watch(
  () => [`,{key:"scenario",model:void 0},", ",{key:"delay",model:void 0},`],
  () => {
    void initialize()
  },
)`]},{names:[],chunks:[`onBeforeUnmount(() => {
  generation++
  lifetime.abort()
  if (exportUrl) URL.revokeObjectURL(exportUrl)
})`]},{names:[],chunks:["defineExpose({ state, refresh: initialize })"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid gap-3"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{raw:["description"]}}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="refreshing"',expression:{raw:["refreshing"]}},{directive:"on",arg:"click",raw:'@click="initialize"',expression:{raw:["initialize"]}}],children:[{text:"重新载入示例"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="reload"',expression:{raw:["reload"]}}],children:[{text:"刷新数据"}]}]},{tag:"XDataTable",unwrap:!1,selfClosing:void 0,props:[{name:"ref",value:"table"},{directive:"bind",arg:"height",raw:':height="state.height"',expression:{key:"height",model:void 0}},{directive:"bind",arg:"readonly",raw:`:readonly="state.scenario === '只读查看'"`,expression:{left:{key:"scenario",model:void 0},operator:"===",right:{literal:"只读查看"}}},{directive:"bind",arg:"permissions",raw:':permissions="permissions"',expression:{raw:["permissions"]}},{name:"aria-label",value:"项目交付台账"}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"toolbar",raw:'#toolbar="{ selection, selectAll, clearSelection }"',expression:{raw:["{ selection, selectAll, clearSelection }"]}}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:`@click="selectAll({ scope: 'loaded' })"`,expression:{raw:["selectAll({ scope: 'loaded' })"]}}],children:[{text:"选择已加载"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:`@click="selectAll({ scope: 'query' })"`,expression:{raw:["selectAll({ scope: 'query' })"]}}],children:[{text:"选择查询全集"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="clearSelection"',expression:{raw:["clearSelection"]}}],children:[{text:"清除选择"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{directive:"on",arg:"click",raw:'@click="exportSelection(selection)"',expression:{raw:["exportSelection(selection)"]}}],children:[{text:"导出所选"}]},{tag:"span",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-sm"}],children:[{interpolation:{condition:{left:{raw:["selection.kind"]},operator:"===",right:{literal:"query"}},yes:{literal:"已选择查询全集"},no:{raw:["`已选择 ${selection.ids.length} 条`"]}}}]}]}]}]}],styles:""},defaults:{scenario:"全部任务",access:"完整权限",delay:200,height:480},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import {
  XButton,
  XDataTable,
  xToast,
  type XDataTableApi,
  type XDataTableFieldDescriptor,
  type XDataTableView,
  type XDataTableLoadResult,
  type XDataTableApplyPatch,
  type XDataTableHistoryResult,
  type XDataTableSelection,
} from '@libingchen/x-ui'
const state = reactive(`,after:`)
const table = ref<XDataTableApi>(),
  refreshing = ref(false),
  serviceId = ref(''),
  lifetime = new AbortController()
let generation = 0,
  exportUrl: string | undefined
const scenarios: Record<string, string> = {
  全部任务: 'standard',
  按阶段分组: 'grouped',
  少量记录: 'small',
  空台账: 'empty',
  只读查看: 'readonly',
  慢速网络: 'slow',
  首次读取失败: 'first-reject',
  分页读取失败: 'page-reject',
  保存失败: 'write-reject',
}
const descriptions: Record<string, string> = {
  standard: '跨团队交付台账，按需读取记录。修改值后保留当前位置，刷新或调整查询时重新排列。',
  grouped: '组列表与组内记录分别按需读取，组统计由服务返回完整范围结果。',
  small: '少量记录与大量记录使用同一套读取和操作接口。',
  empty: '点击添加记录建立第一条任务，最终 ID 由服务生成。',
  readonly: '只读查看仍可筛选、排序、分组和查看历史。',
  slow: '读取较慢时可浏览已有内容；提交后立即结束编辑，后台处理操作。',
  'first-reject': '首次读取失败后，可通过重试恢复。',
  'page-reject': '滚动读取失败后刷新重试。',
  'write-reject': '外部写入失败只提示错误，内部修改保留；刷新后显示外部实际数据。',
}
const description = computed(() => descriptions[scenarios[state.scenario] ?? 'standard'])
const permissions = computed(() => ({
  records: {
    add: state.access !== '记录只读',
    update: state.access !== '记录只读',
    remove: state.access !== '记录只读',
  },
  fields: {
    add: state.access !== '锁定字段',
    update: state.access !== '锁定字段',
    remove: state.access !== '锁定字段',
  },
  view: { update: state.access !== '锁定视图' },
}))
async function http<T>(path: string, body: unknown, signal = lifetime.signal): Promise<T> {
  const response = await fetch(\`/__data-table/\${path}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  const result = await response.json()
  if (!response.ok) throw new Error(result.error.message)
  return result
}
async function initialize() {
  const owner = ++generation
  refreshing.value = true
  try {
    const scenario = scenarios[state.scenario]
    const config = await http<{
      id: string
      fields: XDataTableFieldDescriptor[]
      view: XDataTableView
    }>('create', {
      profile: 'projects',
      total: scenario === 'empty' ? 0 : scenario === 'small' ? 6 : 10000,
      grouped: scenario === 'grouped',
      fault: scenario,
      delay: scenario === 'slow' ? 1200 : state.delay,
    })
    if (owner !== generation) return
    serviceId.value = config.id
    const call = <T,>(method: string, request: unknown, signal = lifetime.signal) =>
      http<T>(\`\${config.id}/\${method}\`, { request }, signal)
    await table.value
      ?.init({
        fields: config.fields,
        view: config.view,
        load: (request, { signal }) => call<XDataTableLoadResult>('load', request, signal),
        generateId: async ({ signal }) =>
          (await call<{ id: string }>('generate-id', {}, signal)).id,
        onAction: async (action) => {
          const patch = await call<XDataTableApplyPatch>('action', action)
          if (owner === generation && Object.keys(patch).length) table.value?.apply(patch)
        },
        loadHistory: (request, { signal }) =>
          call<XDataTableHistoryResult>('history', request, signal),
      })
      .catch(() => {})
  } catch (cause) {
    if ((cause as Error).name !== 'AbortError') xToast.error((cause as Error).message)
  } finally {
    if (owner === generation) refreshing.value = false
  }
}
async function reload() {
  try {
    await table.value?.reload()
  } catch (cause) {
    if ((cause as Error).name !== 'AbortError') xToast.error((cause as Error).message)
  }
}
async function exportSelection(selection: XDataTableSelection) {
  try {
    const result = await http<{ records: unknown[] }>(\`\${serviceId.value}/export\`, { selection })
    if (exportUrl) URL.revokeObjectURL(exportUrl)
    exportUrl = URL.createObjectURL(
      new Blob([JSON.stringify(result.records, null, 2)], { type: 'application/json' }),
    )
    const link = document.createElement('a')
    link.href = exportUrl
    link.download = '交付任务.json'
    link.click()
  } catch (cause) {
    xToast.error((cause as Error).message)
  }
}
onMounted(initialize)
watch(
  () => [state.scenario, state.delay],
  () => {
    void initialize()
  },
)
onBeforeUnmount(() => {
  generation++
  lifetime.abort()
  if (exportUrl) URL.revokeObjectURL(exportUrl)
})
defineExpose({ state, refresh: initialize })
<\/script>
<template>
  <div class="demo grid gap-3">
    <p class="text-sm text-muted-foreground">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <XButton :loading="refreshing" @click="initialize">重新载入示例</XButton
      ><XButton variant="outline" @click="reload">刷新数据</XButton>
    </div>
    <XDataTable
      ref="table"
      :height="state.height"
      :readonly="state.scenario === '只读查看'"
      :permissions="permissions"
      aria-label="项目交付台账"
    >
      <template #toolbar="{ selection, selectAll, clearSelection }"
        ><XButton size="sm" variant="outline" @click="selectAll({ scope: 'loaded' })"
          >选择已加载</XButton
        ><XButton size="sm" variant="outline" @click="selectAll({ scope: 'query' })"
          >选择查询全集</XButton
        ><XButton size="sm" variant="outline" @click="clearSelection">清除选择</XButton
        ><XButton size="sm" @click="exportSelection(selection)">导出所选</XButton
        ><span class="text-sm">{{
          selection.kind === 'query' ? '已选择查询全集' : \`已选择 \${selection.ids.length} 条\`
        }}</span></template
      >
    </XDataTable>
  </div>
</template>`,start:433,end:494};export{e as default};
