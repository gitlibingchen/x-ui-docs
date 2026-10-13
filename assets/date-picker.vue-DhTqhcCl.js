const e={title:"安排项目评审日期与时间",description:"切换纯日期、时分、秒、12 小时制与时间在前的完整格式。格式只改变显示与输入，隐藏的时分秒仍保留。",component:"XDatePicker",controls:{format:{label:"日期格式",options:["YYYY/MM/DD","YYYY-MM-DD","DD/MM/YYYY","YYYY年M月D日","YYYY-MM-DD HH","YYYY-MM-DD HH:mm","YYYY-MM-DD HH:mm:ss","YYYY-MM-DD hh:mm A","YYYY-MM-DD hh:mm:ss a","YYYY年M月D日 HH:mm","HH:mm YYYY-MM-DD"],unset:!0},date:{label:"选中日期时间",api:"modelValue",hint:"当地日期时间 YYYY-MM-DDTHH:mm:ss；也可输入 YYYY-MM-DD"},disabled:{label:"禁用"},readonly:{label:"只读"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},weekStartsOn:{label:"每周起始日",api:"parts.calendar.weekStartsOn",options:[0,1],group:"advanced"},editable:{label:"允许输入日期"},clearable:{label:"允许清除"},variant:{label:"外观",options:["outlined","borderless"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"computed",source:"computed",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XScrollArea",source:"XScrollArea",typeOnly:!1},{name:"XDatePicker",source:"XDatePicker",typeOnly:!1},{name:"XDatePickerValue",source:"type XDatePickerValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelDate"],chunks:["const modelDate = ref<string>(",{key:"date"},")"]},{names:["selected"],chunks:[`const selected = computed(() => {
  const date = new Date(`,{key:"date",model:"modelDate.value"},".length === 10 ? ",{key:"date",model:"modelDate.value"}," + 'T00:00:00' : ",{key:"date",model:"modelDate.value"},`)
  return Number.isNaN(date.getTime()) ? undefined : date
})`]},{names:["update"],chunks:[`function update(value: XDatePickerValue | undefined) {
  if (!(value instanceof Date)) {
    `,{key:"date",model:"modelDate.value"}," = ''\n    return\n  }\n  const pad = (part: number) => String(part).padStart(2, '0')\n  const date = `${String(value.getFullYear()).padStart(4, '0')}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`\n  ",{key:"date",model:"modelDate.value"}," = `${date}T${pad(value.getHours())}:${pad(value.getMinutes())}:${pad(value.getSeconds())}`\n}"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目评审日期"}]},{tag:"XScrollArea",unwrap:!1,selfClosing:void 0,props:[{name:"orientation",value:"horizontal"},{directive:"bind",arg:"parts",raw:`:parts="{ viewport: { tabindex: 0, 'aria-label': '日期预览' } }"`,expression:{object:[{name:"viewport",value:{object:[{name:"tabindex",value:{literal:0}},{name:"'aria-label'",value:{literal:"日期预览"}}]}}]}}],children:[{tag:"XDatePicker",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"format",raw:':format="state.format"',expression:{key:"format",model:void 0}},{directive:"bind",arg:"model-value",raw:':model-value="selected"',expression:{raw:["selected"]}},{directive:"bind",arg:"default-month",raw:':default-month="new Date(2026, 8, 1)"',expression:{raw:["new Date(2026, 8, 1)"]}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"parts",raw:':parts="{ calendar: { weekStartsOn: state.weekStartsOn } }"',expression:{object:[{name:"calendar",value:{object:[{name:"weekStartsOn",value:{key:"weekStartsOn",model:void 0}}]}}]}},{directive:"bind",arg:"editable",raw:':editable="state.editable"',expression:{key:"editable",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{name:"aria-label",value:"项目评审日期"},{directive:"on",arg:"update:model-value",raw:'@update:model-value="update"',expression:{raw:["update"]}}],children:[]}]},{text:""}]}],styles:`
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
`},defaults:{format:void 0,date:"2026-09-15T14:30:45",disabled:!1,readonly:!1,size:void 0,weekStartsOn:1,editable:!0,clearable:!0,variant:"outlined"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, computed } from 'vue'
import { XScrollArea, XDatePicker, type XDatePickerValue } from '@libingchen/x-ui'

interface State {
  format: string | undefined
  date: string
  disabled: boolean
  readonly: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  weekStartsOn: 0 | 1
  editable: boolean
  clearable: boolean
  variant: 'outlined' | 'borderless'
}
const state = reactive<State>(`,after:`)
const selected = computed(() => {
  const date = new Date(state.date.length === 10 ? state.date + 'T00:00:00' : state.date)
  return Number.isNaN(date.getTime()) ? undefined : date
})
function update(value: XDatePickerValue | undefined) {
  if (!(value instanceof Date)) {
    state.date = ''
    return
  }
  const pad = (part: number) => String(part).padStart(2, '0')
  const date = \`\${String(value.getFullYear()).padStart(4, '0')}-\${pad(value.getMonth() + 1)}-\${pad(value.getDate())}\`
  state.date = \`\${date}T\${pad(value.getHours())}:\${pad(value.getMinutes())}:\${pad(value.getSeconds())}\`
}
<\/script>

<template>
  <div class="demo">
    <strong>项目评审日期</strong>
    <XScrollArea
      orientation="horizontal"
      :parts="{ viewport: { tabindex: 0, 'aria-label': '日期预览' } }"
    >
      <XDatePicker
        :format="state.format"
        :model-value="selected"
        :default-month="new Date(2026, 8, 1)"
        :disabled="state.disabled"
        :readonly="state.readonly"
        :size="state.size"
        :parts="{ calendar: { weekStartsOn: state.weekStartsOn } }"
        :editable="state.editable"
        :clearable="state.clearable"
        :variant="state.variant"
        aria-label="项目评审日期"
        @update:model-value="update"
      />
    </XScrollArea>
    <p role="status" class="note">评审日期：{{ state.date || '尚未安排' }}</p>
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
</style>`,start:460,end:651};export{e as default};
