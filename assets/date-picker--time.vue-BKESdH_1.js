const e={title:"安排日期与时间",description:"完整 format 自动开启时间，日期与时间分区输入，各自展开面板。选择日期保留时间，也可直接输入、清除或限制工作时段。",component:"XDatePicker",controls:{variant:{label:"外观",options:["outlined","borderless"]},dateTime:{label:"预约日期时间",api:"modelValue",hint:"当地时间，使用 YYYY-MM-DDTHH:mm:ss 格式，不带时区后缀"},editable:{label:"允许输入日期时间"},interval:{label:"候选间隔（分钟）",api:"interval",options:[1,5,15,30]},businessHours:{label:"仅允许 09:00–17:00",api:"minTime / maxTime"},format:{label:"日期时间格式",options:["YYYY/MM/DD HH:mm","YYYY-MM-DD HH:mm:ss","YYYY年M月D日 HH:mm"],unset:!0},clearable:{label:"允许清除"},disabled:{label:"禁用"},readonly:{label:"只读"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},presets:[{label:"直接输入",state:{editable:!0}},{label:"秒级记录",state:{dateTime:"2026-09-15T14:30:45",format:"YYYY-MM-DD HH:mm:ss",interval:1}},{label:"工作时段",state:{editable:!0,businessHours:!0}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"computed",source:"computed",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDatePicker",source:"XDatePicker",typeOnly:!1},{name:"XDatePickerValue",source:"type XDatePickerValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelDateTime"],chunks:["const modelDateTime = ref<string>(",{key:"dateTime"},")"]},{names:["selected"],chunks:[`const selected = computed(() => {
  const value = new Date(`,{key:"dateTime",model:"modelDateTime.value"},`)
  return Number.isNaN(value.getTime()) ? undefined : value
})`]},{names:["update"],chunks:[`function update(value: XDatePickerValue | undefined) {
  if (!(value instanceof Date)) {
    `,{key:"dateTime",model:"modelDateTime.value"}," = ''\n    return\n  }\n  const pad = (part: number) => String(part).padStart(2, '0')\n  const date = `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`\n  ",{key:"dateTime",model:"modelDateTime.value"}," = `${date}T${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`\n}"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目评审预约"}]},{tag:"XDatePicker",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"model-value",raw:':model-value="selected"',expression:{raw:["selected"]}},{directive:"bind",arg:"interval",raw:':interval="state.interval"',expression:{key:"interval",model:void 0}},{directive:"bind",arg:"default-time",raw:':default-time="{ hour: 9, minute: 0 }"',expression:{object:[{name:"hour",value:{literal:9}},{name:"minute",value:{literal:0}}]}},{directive:"bind",arg:"min-time",raw:':min-time="state.businessHours ? { hour: 9, minute: 0 } : undefined"',expression:{condition:{key:"businessHours",model:void 0},yes:{object:[{name:"hour",value:{literal:9}},{name:"minute",value:{literal:0}}]},no:{absent:!0}}},{directive:"bind",arg:"max-time",raw:':max-time="state.businessHours ? { hour: 17, minute: 0 } : undefined"',expression:{condition:{key:"businessHours",model:void 0},yes:{object:[{name:"hour",value:{literal:17}},{name:"minute",value:{literal:0}}]},no:{absent:!0}}},{directive:"bind",arg:"default-month",raw:':default-month="new Date(2026, 8, 1)"',expression:{raw:["new Date(2026, 8, 1)"]}},{directive:"bind",arg:"editable",raw:':editable="state.editable"',expression:{key:"editable",model:void 0}},{directive:"bind",arg:"format",raw:':format="state.format"',expression:{key:"format",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{name:"aria-label",value:"项目评审预约"},{directive:"bind",arg:"parts",raw:`:parts="{ calendar: { calendarLabel: '预约日期' } }"`,expression:{object:[{name:"calendar",value:{object:[{name:"calendarLabel",value:{literal:"预约日期"}}]}}]}},{directive:"on",arg:"update:model-value",raw:'@update:model-value="update"',expression:{raw:["update"]}}],children:[]},{text:""}]}],styles:`
.demo {
  display: grid;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  font-size: 14px;
  line-height: 1.6;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
`},defaults:{variant:"outlined",dateTime:"2026-09-15T14:30:00",editable:!0,interval:15,businessHours:!1,format:"YYYY-MM-DD HH:mm",clearable:!0,disabled:!1,readonly:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { computed, reactive } from 'vue'
import { XDatePicker, type XDatePickerValue } from '@libingchen/x-ui'

interface State {
  variant: 'outlined' | 'borderless'
  dateTime: string
  editable: boolean
  interval: 1 | 5 | 15 | 30
  businessHours: boolean
  format: string | undefined
  clearable: boolean
  disabled: boolean
  readonly: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const selected = computed(() => {
  const value = new Date(state.dateTime)
  return Number.isNaN(value.getTime()) ? undefined : value
})
function update(value: XDatePickerValue | undefined) {
  if (!(value instanceof Date)) {
    state.dateTime = ''
    return
  }
  const pad = (part: number) => String(part).padStart(2, '0')
  const date = \`\${value.getFullYear()}-\${pad(value.getMonth() + 1)}-\${pad(value.getDate())}\`
  state.dateTime = \`\${date}T\${pad(value.getHours())}:\${pad(value.getMinutes())}:\${pad(value.getSeconds())}\`
}
<\/script>

<template>
  <div class="demo">
    <strong>项目评审预约</strong>
    <XDatePicker
      :model-value="selected"
      :interval="state.interval"
      :default-time="{ hour: 9, minute: 0 }"
      :min-time="state.businessHours ? { hour: 9, minute: 0 } : undefined"
      :max-time="state.businessHours ? { hour: 17, minute: 0 } : undefined"
      :default-month="new Date(2026, 8, 1)"
      :editable="state.editable"
      :format="state.format"
      :clearable="state.clearable"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :size="state.size"
      :variant="state.variant"
      aria-label="项目评审预约"
      :parts="{ calendar: { calendarLabel: '预约日期' } }"
      @update:model-value="update"
    />
    <p role="status" class="note">预约时间：{{ state.dateTime || '尚未安排' }}</p>
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
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
</style>`,start:482,end:707};export{e as default};
