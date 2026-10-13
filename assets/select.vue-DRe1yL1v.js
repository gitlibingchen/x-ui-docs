const e={title:"选择办公城市",description:"选择一项数据，体验清除、多选、只读和自定义选项内容。",component:"XSelect",controls:{value:{label:"当前值",kind:"json",api:"modelValue"},multiple:{label:"多选"},clearable:{label:"允许清除"},disabled:{label:"禁用"},readonly:{label:"只读"},variant:{label:"外观",options:["outlined","borderless"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},placeholder:{label:"占位文案"},custom:{label:"自定义选项",api:"option slot"},empty:{label:"空数据",api:"options"}},presets:[{label:"多选城市",state:{multiple:!0,value:["hangzhou","shanghai"]}},{label:"自定义内容",state:{custom:!0}},{label:"无可用数据",state:{empty:!0,value:""}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSelect",source:"XSelect",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string | string[] | undefined>(",{key:"value"},")"]},{names:["options"],chunks:[`const options = [
  { value: 'hangzhou', label: '杭州' },
  { value: 'shanghai', label: '上海' },
  { value: 'beijing', label: '北京' },
  { value: 'chengdu', label: '成都', disabled: true },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-select"}],children:[{text:"办公城市"}]},{tag:"XSelect",unwrap:!1,selfClosing:void 0,props:[{name:"id",value:"demo-select"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"options",raw:':options="state.empty ? [] : options"',expression:{condition:{key:"empty",model:void 0},yes:{array:[]},no:{raw:["options"]}}},{directive:"bind",arg:"multiple",raw:':multiple="state.multiple"',expression:{key:"multiple",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.custom"',expression:{key:"custom",model:void 0}},{directive:"slot",arg:"option",raw:'#option="{ option }"',expression:{raw:["{ option }"]}}],children:[{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{interpolation:{raw:["option.label"]}}]},{tag:"small",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:" · "},{interpolation:{raw:["option.value"]}}]}]}]},{text:""}]}],styles:`
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
`},defaults:{value:"hangzhou",multiple:!1,clearable:!0,disabled:!1,readonly:!1,variant:"outlined",size:void 0,placeholder:"选择办公城市",custom:!1,empty:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSelect, XLabel } from '@libingchen/x-ui'

interface State {
  value: string | string[] | undefined
  multiple: boolean
  clearable: boolean
  disabled: boolean
  readonly: boolean
  variant: 'outlined' | 'borderless'
  size: 'sm' | 'md' | 'lg' | undefined
  placeholder: string
  custom: boolean
  empty: boolean
}
const state = reactive<State>(`,after:`)
const options = [
  { value: 'hangzhou', label: '杭州' },
  { value: 'shanghai', label: '上海' },
  { value: 'beijing', label: '北京' },
  { value: 'chengdu', label: '成都', disabled: true },
]
<\/script>

<template>
  <div class="demo">
    <XLabel for="demo-select">办公城市</XLabel
    ><XSelect
      id="demo-select"
      v-model="state.value"
      :options="state.empty ? [] : options"
      :multiple="state.multiple"
      :clearable="state.clearable"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :variant="state.variant"
      :size="state.size"
      :placeholder="state.placeholder"
      ><template v-if="state.custom" #option="{ option }"
        ><span>{{ option.label }}</span
        ><small class="note"> · {{ option.value }}</small></template
      ></XSelect
    >
    <p role="status" class="note">当前选择：{{ JSON.stringify(state.value) ?? '未选择' }}</p>
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
</style>`,start:448,end:648};export{e as default};
