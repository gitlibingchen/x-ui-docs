const e={title:"安排项目周期",description:"范围选择具有不同的数据结构，使用独立示例展示起止日期、清除与选择结果。",component:"XDatePicker",controls:{format:{label:"日期格式",options:["YYYY/MM/DD","YYYY-MM-DD","DD/MM/YYYY","YYYY年M月D日"],unset:!0},start:{label:"开始日期",api:"modelValue.from"},end:{label:"结束日期",api:"modelValue.to"},clearable:{label:"允许清除"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"computed",source:"computed",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDatePicker",source:"XDatePicker",typeOnly:!1},{name:"XCalendarValue",source:"type XCalendarValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelEnd"],chunks:["const modelEnd = ref<string>(",{key:"end"},")"]},{names:["modelStart"],chunks:["const modelStart = ref<string>(",{key:"start"},")"]},{names:["date"],chunks:[`function date(text: string) {
  const value = new Date(text + 'T00:00:00')
  return Number.isNaN(value.getTime()) ? undefined : value
}`]},{names:["range"],chunks:["const range = computed(() => ({ from: date(",{key:"start",model:"modelStart.value"},"), to: date(",{key:"end",model:"modelEnd.value"},") }))"]},{names:["format"],chunks:["function format(value?: Date) {\n  return value\n    ? `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`\n    : ''\n}"]},{names:["update"],chunks:[`function update(value: XCalendarValue | undefined) {
  if (value && !(value instanceof Date) && !Array.isArray(value)) {
    `,{key:"start",model:"modelStart.value"},` = format(value.from)
    `,{key:"end",model:"modelEnd.value"},` = format(value.to)
  } else {
    `,{key:"start",model:"modelStart.value"},` = ''
    `,{key:"end",model:"modelEnd.value"},` = ''
  }
}`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XDatePicker",unwrap:!1,selfClosing:!0,props:[{name:"mode",value:"range"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"format",raw:':format="state.format"',expression:{key:"format",model:void 0}},{directive:"bind",arg:"model-value",raw:':model-value="range"',expression:{raw:["range"]}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"aria-label",value:"项目周期"},{directive:"on",arg:"update:model-value",raw:'@update:model-value="update"',expression:{raw:["update"]}}],children:[]},{text:""}]}],styles:`
.demo {
  display: grid;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  font-size: 14px;
  line-height: 1.6;
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
.stack {
  display: grid;
  gap: 0.5rem;
  min-width: 0;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
`},defaults:{format:void 0,start:"2026-09-10",end:"2026-09-18",clearable:!0,disabled:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, computed } from 'vue'
import { XDatePicker, type XCalendarValue } from '@libingchen/x-ui'

interface State {
  format: string | undefined
  start: string
  end: string
  clearable: boolean
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
function date(text: string) {
  const value = new Date(text + 'T00:00:00')
  return Number.isNaN(value.getTime()) ? undefined : value
}
const range = computed(() => ({ from: date(state.start), to: date(state.end) }))
function format(value?: Date) {
  return value
    ? \`\${value.getFullYear()}-\${String(value.getMonth() + 1).padStart(2, '0')}-\${String(value.getDate()).padStart(2, '0')}\`
    : ''
}
function update(value: XCalendarValue | undefined) {
  if (value && !(value instanceof Date) && !Array.isArray(value)) {
    state.start = format(value.from)
    state.end = format(value.to)
  } else {
    state.start = ''
    state.end = ''
  }
}
<\/script>

<template>
  <div class="demo">
    <XDatePicker
      mode="range"
      :size="state.size"
      :format="state.format"
      :model-value="range"
      :clearable="state.clearable"
      :disabled="state.disabled"
      aria-label="项目周期"
      @update:model-value="update"
    />
    <p role="status" class="note">
      项目周期：{{ state.start || '未选择' }} → {{ state.end || '未选择' }}
    </p>
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
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}
.stack {
  display: grid;
  gap: 0.5rem;
  min-width: 0;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
</style>`,start:361,end:486};export{e as default};
