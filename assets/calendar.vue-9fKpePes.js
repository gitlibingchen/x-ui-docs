const e={title:"安排项目评审日期",description:"选择日期并查看业务值，体验月份导航与周起始日。",component:"XCalendar",controls:{date:{label:"选中日期",api:"modelValue",hint:"使用 YYYY-MM-DD 格式"},disabled:{label:"禁用"},readonly:{label:"只读"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},weekStartsOn:{label:"每周起始日",options:[0,1],group:"advanced"},captionLayout:{label:"月份标题",options:["label","dropdown","dropdown-months","dropdown-years"]},numberOfMonths:{label:"月份数量",min:1,max:2}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"computed",source:"computed",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XScrollArea",source:"XScrollArea",typeOnly:!1},{name:"XCalendar",source:"XCalendar",typeOnly:!1},{name:"XCalendarValue",source:"type XCalendarValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelDate"],chunks:["const modelDate = ref<string>(",{key:"date"},")"]},{names:["selected"],chunks:[`const selected = computed(() => {
  const date = new Date(`,{key:"date",model:"modelDate.value"},` + 'T00:00:00')
  return Number.isNaN(date.getTime()) ? undefined : date
})`]},{names:["update"],chunks:[`function update(value: XCalendarValue | undefined) {
  `,{key:"date",model:"modelDate.value"}," =\n    value instanceof Date\n      ? `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, '0')}-${String(value.getDate()).padStart(2, '0')}`\n      : ''\n}"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目评审日期"}]},{tag:"XScrollArea",unwrap:!1,selfClosing:void 0,props:[{name:"orientation",value:"horizontal"},{directive:"bind",arg:"parts",raw:`:parts="{ viewport: { tabindex: 0, 'aria-label': '日期预览' } }"`,expression:{object:[{name:"viewport",value:{object:[{name:"tabindex",value:{literal:0}},{name:"'aria-label'",value:{literal:"日期预览"}}]}}]}}],children:[{tag:"XCalendar",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"model-value",raw:':model-value="selected"',expression:{raw:["selected"]}},{directive:"bind",arg:"default-month",raw:':default-month="new Date(2026, 8, 1)"',expression:{raw:["new Date(2026, 8, 1)"]}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"week-starts-on",raw:':week-starts-on="state.weekStartsOn"',expression:{key:"weekStartsOn",model:void 0}},{directive:"bind",arg:"caption-layout",raw:':caption-layout="state.captionLayout"',expression:{key:"captionLayout",model:void 0}},{directive:"bind",arg:"number-of-months",raw:':number-of-months="state.numberOfMonths"',expression:{key:"numberOfMonths",model:void 0}},{directive:"on",arg:"update:model-value",raw:'@update:model-value="update"',expression:{raw:["update"]}}],children:[]}]},{text:""}]}],styles:`
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
`},defaults:{date:"2026-09-15",disabled:!1,readonly:!1,size:void 0,weekStartsOn:1,captionLayout:"dropdown",numberOfMonths:1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, computed } from 'vue'
import { XScrollArea, XCalendar, type XCalendarValue } from '@libingchen/x-ui'

interface State {
  date: string
  disabled: boolean
  readonly: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  weekStartsOn: 0 | 1
  captionLayout: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'
  numberOfMonths: number
}
const state = reactive<State>(`,after:`)
const selected = computed(() => {
  const date = new Date(state.date + 'T00:00:00')
  return Number.isNaN(date.getTime()) ? undefined : date
})
function update(value: XCalendarValue | undefined) {
  state.date =
    value instanceof Date
      ? \`\${value.getFullYear()}-\${String(value.getMonth() + 1).padStart(2, '0')}-\${String(value.getDate()).padStart(2, '0')}\`
      : ''
}
<\/script>

<template>
  <div class="demo">
    <strong>项目评审日期</strong>
    <XScrollArea
      orientation="horizontal"
      :parts="{ viewport: { tabindex: 0, 'aria-label': '日期预览' } }"
    >
      <XCalendar
        :model-value="selected"
        :default-month="new Date(2026, 8, 1)"
        :disabled="state.disabled"
        :readonly="state.readonly"
        :size="state.size"
        :week-starts-on="state.weekStartsOn"
        :caption-layout="state.captionLayout"
        :number-of-months="state.numberOfMonths"
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
</style>`,start:451,end:602};export{e as default};
