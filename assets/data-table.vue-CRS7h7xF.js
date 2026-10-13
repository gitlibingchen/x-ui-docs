const n={title:"字段与交互总览",description:"一个业务表覆盖文本、数字、单选、多选、布尔、日期与日期时间，以及自定义金额、嵌套访问器、自定义展示与插槽。通过内置筛选、排序、字段分组、行高和预设体验空值、只读、标签折叠及同步／异步校验。选中单格或矩形后，可在单元格右键菜单中清除内容；打开详情时，表格同步勾选当前记录整行。",component:"XDataTable",controls:{height:{label:"高度",min:180,step:20},validationDelay:{label:"模拟校验延迟",min:0,max:5e3,step:200,hint:"单位 ms，仅用于申请数量的本地模拟检查。"}},presets:[{label:"多级分组",state:{section:"grouping",recordCount:96,height:720}},{label:"全部字段",state:{section:"all"}},{label:"校验反馈",state:{section:"validation"}},{label:"自定义扩展",state:{section:"extensions"}},{label:"少量记录",state:{recordCount:3,height:260}},{label:"空表",state:{recordCount:0,height:260}},{label:"多行内容",state:{section:"planning",rowHeight:"xl",height:420}},{label:"只读查看",state:{readonly:!0,rowHeight:"lg"}},{label:"禁用状态",state:{disabled:!0}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onMounted",source:"onMounted",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDataTable",source:"XDataTable",typeOnly:!1},{name:"XDataTableApi",source:"type XDataTableApi",typeOnly:!1},{name:"XDataTableLoadResult",source:"type XDataTableLoadResult",typeOnly:!1},{name:"XDataTableApplyPatch",source:"type XDataTableApplyPatch",typeOnly:!1}],sideEffect:!1}],statements:[{names:["table"],chunks:["const table = ref<XDataTableApi>()"]},{names:["request"],chunks:[`async function request<T>(path: string, value: unknown, signal?: AbortSignal): Promise<T> {
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
})`]}],template:[{tag:"XDataTable",unwrap:!1,selfClosing:!0,props:[{name:"ref",value:"table"},{directive:"bind",arg:"height",raw:':height="420"',expression:{literal:420}}],children:[]}],styles:""},defaults:{section:"overview",readonly:!1,disabled:!1,height:720,recordCount:96,rowHeight:"md",fixedTitle:!0,validationDelay:800},before:`<script setup lang="ts">
import { applyMemoryAction } from '../../lib/data-table-actions'
import { createMemoryTable } from '../../lib/data-table-memory'

import '@libingchen/x-ui/styles.css'
import { defineComponent, h, onBeforeUnmount, onMounted, reactive, ref, type Component } from 'vue'
import {
  xToast,
  XBadge,
  XButton,
  XDataTable,
  XInput,
  XSwitch,
  XLabel,
  xDataTableField,
  xDataTableType,
  type XDataTableApi,
  type XDataTableField,
  type XDataTableView,
  type XDataTableEditorContext,
  type XDataTableCellContext,
  type XDataTableValidation,
} from '@libingchen/x-ui'

type Money = { minor: bigint } | null
interface Row {
  id: number | string
  title: string
  notes: string
  owner: string
  phase: string | null
  status: string | null
  labels: string[]
  confirmed: boolean
  quantity: number
  quota: number
  due: string | null
  appointment: string | null
  amount: Money
  address: { city: string; zip: string }
  score: number | null
  review: string
}
type Section = 'grouping' | 'overview' | 'planning' | 'validation' | 'extensions' | 'all'
interface State {
  section: Section
  readonly: boolean
  disabled: boolean
  height: number
  recordCount: number
  rowHeight: NonNullable<XDataTableView['rowHeight']>
  fixedTitle: boolean
  validationDelay: number
}
const state = reactive<State>(`,after:`)
const table = ref<XDataTableApi<Row>>()
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

function formatMoney(value: Money) {
  if (value === null) return ''
  const absolute = value.minor < 0n ? -value.minor : value.minor
  return \`\${value.minor < 0n ? '-' : ''}\${absolute / 100n}.\${String(absolute % 100n).padStart(2, '0')}\`
}
function parseMoney(text: string): Money {
  if (!text.trim()) return null
  if (!/^-?\\d+(\\.\\d{0,2})?$/.test(text.trim())) throw new Error('请输入最多两位小数的金额')
  const [whole, fraction = ''] = text.trim().replace('-', '').split('.')
  return {
    minor:
      (BigInt(whole!) * 100n + BigInt(fraction.padEnd(2, '0'))) *
      (text.trim().startsWith('-') ? -1n : 1n),
  }
}
// 与表格共用编辑上下文；把业务值和输入中的未完成文字分开。
const MoneyEditor = defineComponent(
  (props: XDataTableEditorContext<Money>) => {
    const text = ref(props.replacement ?? formatMoney(props.value))
    const unregister = props.register({
      commit() {
        try {
          props.input(parseMoney(text.value))
          return true
        } catch (cause) {
          props.invalidate('请输入有效金额，最多保留两位小数')
          return false
        }
      },
    })
    onBeforeUnmount(unregister)
    return () =>
      h(XInput as Component, {
        ...props.controlProps,
        modelValue: text.value,
        'onUpdate:modelValue': (value: string | number) => {
          text.value = String(value)
          props.touch()
        },
      })
  },
  {
    props: [
      'value',
      'replacement',
      'field',
      'error',
      'controlProps',
      'input',
      'touch',
      'invalidate',
      'register',
      'registerBoundary',
    ],
  },
)
const moneyType = xDataTableType<Money>({
  type: 'custom:money',
  query: {
    isEmpty: (value) => value === null,
    compare: (a, b) => (a!.minor === b!.minor ? 0 : a!.minor < b!.minor ? -1 : 1),
    operators: [
      {
        id: 'gte',
        label: '金额不少于',
        input: 'text',
        normalize(value) {
          if (typeof value !== 'string' || parseMoney(value) === null) throw new Error('请输入金额')
          return formatMoney(parseMoney(value))
        },
        test: (value, operand) =>
          value !== null && value.minor >= parseMoney(String(operand))!.minor,
      },
    ],
  },

  is: (value): value is Money =>
    value === null ||
    (!!value && typeof value === 'object' && 'minor' in value && typeof value.minor === 'bigint'),
  empty: () => null,
  clone: (value) => (value === null ? null : { minor: value.minor }),
  equal: (a, b) => a?.minor === b?.minor,
  validate: () => undefined,
  validateSettings: (settings) =>
    settings === undefined ? undefined : { code: 'settings', message: '金额类型没有额外设置' },
  parse: parseMoney,
  format: formatMoney,
  encode: (value) => (value === null ? null : { minor: value.minor.toString() }),
  decode: (value) => {
    if (value === null) return null
    if (
      !value ||
      typeof value !== 'object' ||
      !('minor' in value) ||
      typeof value.minor !== 'string' ||
      !/^-?\\d+$/.test(value.minor)
    )
      throw new Error('金额协议值无效')
    return { minor: BigInt(value.minor) }
  },
  editor: MoneyEditor,
  defaultDisplay: (context: XDataTableCellContext<unknown, Money>) =>
    h('span', context.text ? \`¥ \${context.text}\` : ''),
})
type Address = Row['address']
const isAddress = (value: unknown): value is Address =>
  !!value &&
  typeof value === 'object' &&
  'city' in value &&
  typeof value.city === 'string' &&
  'zip' in value &&
  typeof value.zip === 'string'
const formatAddress = (value: Readonly<Address>) =>
  [value.city, value.zip].filter(Boolean).join(' · ')
function parseAddress(text: string): Address {
  const [city = '', zip = '', ...extra] = text.split('·').map((part) => part.trim())
  if (extra.length) throw new Error('请按“城市 · 邮编”填写地址')
  return { city, zip }
}
const AddressEditor = defineComponent(
  (props: XDataTableEditorContext<Address>) => {
    const text = ref(props.replacement ?? formatAddress(props.value))
    const unregister = props.register({
      commit() {
        try {
          props.input(parseAddress(text.value))
          return true
        } catch (cause) {
          props.invalidate('请填写有效地址')
          return false
        }
      },
    })
    onBeforeUnmount(unregister)
    return () =>
      h(XInput as Component, {
        ...props.controlProps,
        modelValue: text.value,
        placeholder: '城市 · 邮编',
        'onUpdate:modelValue': (value: string | number) => {
          text.value = String(value)
          props.touch()
        },
      })
  },
  {
    props: [
      'value',
      'field',
      'replacement',
      'error',
      'controlProps',
      'input',
      'touch',
      'invalidate',
      'register',
      'registerBoundary',
    ],
  },
)
// 显式声明访问器的结构来源及空值；创建不依赖已有记录推断嵌套对象。
const addressType = xDataTableType<Address>({
  type: 'custom:address',
  is: isAddress,
  empty: () => ({ city: '', zip: '' }),
  clone: (value) => ({ ...value }),
  equal: (a, b) => a.city === b.city && a.zip === b.zip,
  validate: () => undefined,
  validateSettings: (settings) =>
    settings === undefined ? undefined : { code: 'settings', message: '地址类型没有额外设置' },
  parse: parseAddress,
  format: formatAddress,
  encode: (value) => ({ ...value }),
  decode: (value) => {
    if (!isAddress(value)) throw new Error('地址协议值无效')
    return { city: value.city, zip: value.zip }
  },
  editor: AddressEditor,
  defaultDisplay: (context: XDataTableCellContext<unknown, Address>) => h('span', context.text),
})
const city = xDataTableField<Row, string>({
  key: 'city',
  label: '城市',
  display: 'text',
  dependsOn: ['address'],
  getValue: (record) => record.address.city,
  setValue: (record, value) => ({ ...record, address: { ...record.address, city: value } }),
})
const summary = xDataTableField<Row, string>({
  key: 'summary',
  label: '地址摘要',
  display: 'text',
  readonly: true,
  dependsOn: ['address'],
  getValue: (record) => formatAddress(record.address),
})
// 模拟服务检查；取消编辑、重置或卸载时由 signal 清理计时器。
function checkQuantity(value: number, signal: AbortSignal) {
  return new Promise<XDataTableValidation>((resolve, reject) => {
    const cancel = () => {
      clearTimeout(timer)
      reject(new Error('检查已取消'))
    }
    const timer = setTimeout(() => {
      signal.removeEventListener('abort', cancel)
      resolve(
        value === 13
          ? { code: 'reserved', message: '数量 13 暂不可申请，请换一个数量' }
          : undefined,
      )
    }, state.validationDelay)
    signal.addEventListener('abort', cancel, { once: true })
    if (signal.aborted) cancel()
  })
}
const fields: readonly XDataTableField<Row>[] = [
  {
    key: 'title',
    label: '任务名称',
    defaultValue: '新任务',
    display: 'text',
    required: true,
    validator: (value) =>
      value === '重复任务'
        ? { code: 'duplicate', message: '任务名称已存在，请换一个名称' }
        : undefined,
  },
  {
    key: 'status',
    label: '状态',
    type: 'singleSelect',
    display: 'tag',
    options: [
      { value: '待开始', label: '待开始', color: '#64748b' },
      { value: '进行中', label: '进行中', color: '#2563eb' },
      { value: '已完成', label: '已完成', color: '#16a34a' },
    ],
    dependsOn: ['confirmed'],
    validator: (value, { record }) =>
      value === '已完成' && !record.confirmed
        ? { code: 'review', message: '请先确认验收，再标记为已完成' }
        : undefined,
  },
  { key: 'owner', label: '负责人' },
  {
    key: 'phase',
    label: '阶段',
    type: 'singleSelect',
    options: [
      { value: '需求确认', label: '需求确认' },
      { value: '开发联调', label: '开发联调' },
      { value: '验收交付', label: '验收交付' },
    ],
  },
  {
    key: 'labels',
    label: '标签',
    type: 'multiSelect',
    display: 'tag',
    options: [
      { value: '设计', label: '设计', color: '#9333ea' },
      { value: '前端', label: '前端', color: '#2563eb' },
      { value: '后端', label: '后端', color: '#0891b2' },
      { value: '紧急', label: '紧急', color: '#dc2626' },
      { value: '评审', label: '评审', color: '#d97706' },
      { value: '跨团队协作与完整验收', label: '跨团队协作与完整验收' },
    ],
    validator: (value) =>
      value.length > 3 ? { code: 'limit', message: '每项任务最多选择 3 个标签' } : undefined,
  },
  {
    key: 'confirmed',
    label: '验收确认',
    type: 'boolean',
    display: 'checkbox',
    dependsOn: ['quantity'],
    validator: (value, { record }) =>
      value && record.quantity === 0
        ? { code: 'empty', message: '申请数量为 0，暂不能确认验收' }
        : undefined,
  },
  {
    key: 'quantity',
    defaultValue: 0,
    label: '申请数量',
    type: 'number',
    display: 'text',
    required: true,
    min: 0,
    step: 1,
    dependsOn: ['quota'],
    validator: (value, { record, signal }) =>
      value > (record.quota ?? 0)
        ? { code: 'quota', message: '申请数量不能超过额度' }
        : checkQuantity(value, signal),
  },
  {
    key: 'quota',
    defaultValue: 100,
    label: '可用额度',
    type: 'number',
    display: 'text',
    readonly: true,
    required: true,
  },
  {
    key: 'due',
    label: '截止日期',
    type: 'date',
    display: 'text',
    format: 'YYYY-MM-DD',
    validator: (value) =>
      value && value < '2026-09-01'
        ? { code: 'date', message: '请选择 2026 年 9 月或之后的日期' }
        : undefined,
  },
  {
    key: 'appointment',
    label: '预约时间',
    type: 'date',
    display: 'text',
    format: 'YYYY-MM-DD HH:mm',
    validator: (value) =>
      value?.startsWith('2026-09-24')
        ? { code: 'busy', message: '9 月 24 日的预约已满，请调整时间' }
        : undefined,
  },
  {
    key: 'amount',
    label: '预算',
    type: 'custom:money',
    display: (context: XDataTableCellContext<Row, Money>) =>
      h('span', context.text ? \`¥ \${context.text}\` : ''),
    validator: (value) =>
      value && (value.minor < 0n || value.minor > 1000000n)
        ? { code: 'budget', message: '预算应在 0 至 10,000 元之间' }
        : undefined,
  },
  {
    key: 'address',
    label: '地址（城市 · 邮编）',
    type: 'custom:address',
    defaultValue: { city: '', zip: '' },
  },
  city,
  summary,
  {
    key: 'score',
    label: '评分',
    type: 'number',
    min: 0,
    max: 5,
    step: 1,
    display: (context: XDataTableCellContext<Row, number | null>) =>
      h(
        'span',
        { 'aria-label': context.value === null ? '暂无评分' : \`\${context.value} 分\` },
        context.value === null ? '' : \`\${'★'.repeat(context.value)} \${context.value}/5\`,
      ),
  },
  { key: 'notes', label: '验收说明', display: 'text' },
  {
    key: 'review',
    label: '评审结论',
    readonly: true,
    display: (context: XDataTableCellContext<Row, string>) =>
      context.selected
        ? h('span', context.text)
        : context.text
          ? h(
              XBadge as Component,
              { variant: 'secondary', size: 'sm' },
              () => context.text.split('\\n')[0] || '',
            )
          : null,
  },
]
const sections = [
  {
    value: 'grouping',
    label: '分组与聚合',
    keys: ['title', 'status', 'owner', 'phase', 'confirmed', 'quantity', 'quota', 'due', 'notes'],
  },
  {
    value: 'overview',
    label: '任务概览',
    keys: ['title', 'status', 'labels', 'confirmed', 'quantity', 'due'],
  },
  {
    value: 'planning',
    label: '日期与长文本',
    keys: ['title', 'due', 'appointment', 'notes', 'review'],
  },
  {
    value: 'validation',
    label: '校验与反馈',
    keys: [
      'title',
      'quantity',
      'quota',
      'status',
      'labels',
      'confirmed',
      'due',
      'appointment',
      'amount',
    ],
  },
  {
    value: 'extensions',
    label: '预算与地址',
    keys: ['title', 'amount', 'city', 'summary', 'score', 'review'],
  },
  { value: 'all', label: '全部字段', keys: fields.map((field) => field.key) },
] as const
const widths: Record<string, number> = {
  title: 220,
  labels: 210,
  confirmed: 110,
  quantity: 120,
  quota: 110,
  notes: 300,
  review: 240,
  appointment: 210,
  summary: 200,
}
function view(
  section = state.section,
  rowHeight: XDataTableView['rowHeight'] = state.rowHeight,
  fixedTitle = state.fixedTitle,
): XDataTableView {
  const visible: readonly string[] = sections.find((item) => item.value === section)!.keys
  return {
    rowHeight,
    ...(section === 'grouping'
      ? {
          group: ['status', 'owner', 'phase'],
          summary: [
            { key: 'quantity', method: 'sum' as const },
            { key: 'quota', method: 'avg' as const },
          ],
        }
      : {}),
    columns: fields.map((field) => ({
      key: field.key,
      width: widths[field.key] ?? 160,
      fixed: fixedTitle && field.key === 'title' ? 'left' : null,
      hidden: !visible.includes(field.key),
    })),
  }
}
const titles = [
  '确认需求范围',
  '完成交互评审',
  '联调业务接口',
  '执行验收测试',
  '整理使用说明',
  '准备发布交接',
]
function initialData(): Row[] {
  return Array.from({ length: state.recordCount }, (_, index) => ({
    id: index + 1,
    title: \`\${['账号与权限', '项目空间', '客户门户', '订单中心', '知识库', '移动工作台', '数据报表', '通知中心'][Math.floor(index / 6) % 8]} · \${titles[(index + Math.floor(index / 12)) % titles.length]}\`,
    owner: ['林澄', '陈远', '周宁', '许言'][Math.floor(index / 3) % 4]!,
    phase: index === 2 ? null : ['需求确认', '开发联调', '验收交付'][Math.floor(index / 12) % 3]!,
    notes:
      index === 2
        ? ''
        : index === 0
          ? '梳理使用场景与交付范围\\n补充异常流程\\n由产品与研发共同确认验收标准'
          : '核对主流程、空值与权限边界；长文本会根据行高折叠，选中后可展开查看。',
    status: index === 2 ? null : index % 3 === 0 ? '待开始' : index % 3 === 1 ? '进行中' : '已完成',
    labels:
      index === 2
        ? []
        : index % 3 === 0
          ? ['设计', '前端', '跨团队协作与完整验收']
          : ['后端', '紧急'],
    confirmed: index % 3 === 2,
    quantity: index === 0 ? 10 : index === 1 ? 0 : index < 12 ? 20 : (index % 10) * 10,
    quota: 100,
    due: index === 2 ? null : '2026-09-30T00:00:00',
    appointment: index === 2 ? null : '2026-09-23T14:30:00',
    amount: index === 2 ? null : { minor: BigInt(12345 + index * 10000) },
    address: {
      city: ['杭州', '上海', '北京'][index % 3]!,
      zip: ['310000', '200000', '100000'][index % 3]!,
    },
    score: index === 2 ? null : index % 6,
    review:
      index === 0
        ? '待复核\\n需求范围、异常流程及跨团队协作需要共同确认。\\n验收清单：\\n主流程与权限边界\\n空值与错误恢复\\n长文本与窄屏布局\\n异步保存与取消\\n补齐验收记录后更新最终结论。'
        : '已通过',
  }))
}
async function changeLayout(section = state.section) {
  if (!table.value) return
  try {
    const visible = new Set(sections.find((item) => item.value === section)!.keys)
    await table.value.view.update({
      ...(section === 'grouping'
        ? {
            group: ['status', 'owner', 'phase'],
            summary: [
              { key: 'quantity', method: 'sum' as const },
              { key: 'quota', method: 'avg' as const },
            ],
          }
        : state.section === 'grouping'
          ? { group: [], summary: [] }
          : {}),
      columns: table.value.view
        .get()
        .columns!.map((column) => ({ ...column, hidden: !visible.has(column.key) })),
    })
    state.section = section
    notify('')
  } catch (cause) {
    notify('操作失败，请重试')
  }
}
onMounted(async () => {
  const memory = createMemoryTable<Row>(initialData(), {
    fields: fields as import('@libingchen/x-ui').XDataTableFieldDescriptor[],
    getValue: (record, key) =>
      key === 'city'
        ? (record.address as Address).city
        : key === 'summary'
          ? formatAddress(record.address as Address)
          : record[key as keyof Row],
    test: (record, condition) =>
      condition.key === 'amount' && condition.operator === 'gte'
        ? record.amount !== null &&
          (record.amount as NonNullable<Money>).minor >= parseMoney(String(condition.value))!.minor
        : undefined,
    compare: (key, a, b) =>
      key === 'amount'
        ? (a as NonNullable<Money>).minor === (b as NonNullable<Money>).minor
          ? 0
          : (a as NonNullable<Money>).minor < (b as NonNullable<Money>).minor
            ? -1
            : 1
        : undefined,
  })
  try {
    await table.value?.init({
      fieldTypes: [moneyType, addressType],
      fields,
      load: memory.load,
      onAction: (action) => applyMemoryAction(table.value!, memory, action),
      view: view(),
    })
  } catch (cause) {
    notify('操作失败，请重试')
  }
})
<\/script>

<template>
  <div class="demo">
    <div class="intro">
      <strong>项目交付清单</strong><span>在表格中管理任务、负责人和交付进度。</span>
      <a href="#data-table/example-data-table--remote">体验远程加载数据</a>
    </div>
    <div class="toolbar" role="group" aria-label="字段分组">
      <XButton
        v-for="section in sections"
        :key="section.value"
        size="sm"
        :variant="state.section === section.value ? 'secondary' : 'ghost'"
        :aria-pressed="state.section === section.value"
        :disabled="!table?.status.ready"
        @click="changeLayout(section.value)"
        >{{ section.label }}</XButton
      >
    </div>
    <div class="toolbar" role="group" aria-label="权限状态">
      <XLabel class="toggle"><XSwitch v-model="state.readonly" aria-label="只读" />只读</XLabel>
      <XLabel class="toggle"><XSwitch v-model="state.disabled" aria-label="禁用" />禁用</XLabel>
    </div>
    <div v-if="state.section === 'validation'" class="help">
      <strong>填写申请信息</strong>
      <p>申请数量不能超过额度。检查中可以继续修改或按 Escape 取消。</p>
      <p>
        首行未确认验收，选择“已完成”会失败；第四个标签、9 月之前的截止日期、9 月 24 日的预约和超过
        10,000 元的预算也会提示原因。第二行数量为 0，点击确认可查看布尔字段的反馈。
      </p>
      <p>如有填写问题，可将鼠标移到提示图标上查看原因，也可按 F1。</p>
    </div>
    <p v-else-if="state.section === 'extensions'" class="help">
      预算以金额显示，修改城市后地址摘要会同步更新。双击评分即可修改。
    </p>
    <p v-else-if="state.section === 'grouping'" class="help">
      按状态、负责人和阶段三级分组；96
      条默认任务包含多行备注、空值与零值。组内新增继承分组值，折叠不改变完整统计。
    </p>
    <p v-else-if="state.section === 'planning'" class="help">
      日期与日期时间分别展示；切换行高比较多行文字折叠，选中可展开阅读。评审结论只读，第三行展示空值。
    </p>
    <!-- @vue-generic {Row} -->
    <XDataTable
      ref="table"
      :height="state.height"
      :readonly="state.readonly"
      :disabled="state.disabled"
      aria-label="任务网格"
    />
    <div class="help">
      <p>
        拖动正文选择矩形，Shift 点击或方向键扩选；勾选行号选择记录，Shift
        点击表头连续选列。全选与清除在表格左上角和底部。
      </p>
      <p v-if="state.disabled">当前已禁用，单元格不可选择或编辑。</p>
      <p v-else-if="state.readonly">当前只读。单击选择单元格，长文本可在展开区域内滚动查看。</p>
      <p v-else>
        单击选择，再次单击或 Enter 编辑；Shift+Enter 换行，Tab 连续录入，Escape
        取消。修改仅保留在本页。
      </p>
      <p>
        筛选与表格共用文本、数字、日期和选项输入控件，数字沿用字段格式，选项标签可逐个移除。日期条件可在值区选择具体日期、今天或本周等范围；多选区分完整集合等于和包含任一选项。工具栏支持筛选条件组与多字段排序；拖动排序行左侧手柄调整优先级，也可聚焦手柄按上下方向键。面板内编辑后点击应用，取消不改变当前视图。切换字段分组与行高保留已提交内容；页面预设和重置恢复示例数据。编辑中请先提交或取消。
      </p>
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
.intro {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 1rem;
}
.intro span,
.help {
  color: var(--x-muted-foreground);
  font-size: 12px;
}
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}
.help {
  display: grid;
  gap: 0.35rem;
  margin: 0;
}
.help p {
  margin: 0;
}
</style>`,start:1336,end:1497};export{n as default};
