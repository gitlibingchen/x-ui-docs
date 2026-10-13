const e={title:"设置每日提醒时间",description:"由完整格式决定小时制与精度，可切换展示方式与候选间隔。",component:"XTimePicker",controls:{variant:{label:"外观",options:["outlined","borderless"]},value:{label:"提醒时间",kind:"json",api:"modelValue"},format:{label:"时间格式",options:["HH:mm","HH:mm:ss","hh:mm A","hh:mm:ss a"]},editable:{label:"文本输入"},presentation:{label:"展示方式",options:["popover","inline"]},interval:{label:"候选间隔（分钟）",options:[1,5,15,30],api:"interval"},disabled:{label:"禁用"},readonly:{label:"只读"},clearable:{label:"允许清除"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTimePicker",source:"XTimePicker",typeOnly:!1},{name:"XTimeValue",source:"type XTimeValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<XTimeValue | undefined>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"每日提醒"}]},{tag:"XTimePicker",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"format",raw:':format="state.format"',expression:{key:"format",model:void 0}},{directive:"bind",arg:"editable",raw:':editable="state.editable"',expression:{key:"editable",model:void 0}},{directive:"bind",arg:"presentation",raw:':presentation="state.presentation"',expression:{key:"presentation",model:void 0}},{directive:"bind",arg:"interval",raw:':interval="state.interval"',expression:{key:"interval",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{name:"aria-label",value:"每日提醒时间"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{variant:"outlined",format:"HH:mm",value:{hour:9,minute:30},editable:!0,presentation:"popover",interval:15,disabled:!1,readonly:!1,clearable:!0,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XTimePicker, type XTimeValue } from '@libingchen/x-ui'

interface State {
  variant: 'outlined' | 'borderless'
  value: XTimeValue | undefined
  format: string
  editable: boolean
  presentation: 'popover' | 'inline'
  interval: 1 | 5 | 15 | 30
  disabled: boolean
  readonly: boolean
  clearable: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <strong>每日提醒</strong
    ><XTimePicker
      v-model="state.value"
      :format="state.format"
      :editable="state.editable"
      :presentation="state.presentation"
      :interval="state.interval"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :clearable="state.clearable"
      :size="state.size"
      :variant="state.variant"
      aria-label="每日提醒时间"
    />
    <p role="status" class="note">
      提醒时间：{{
        state.value
          ? \`\${state.value.hour}:\${String(state.value.minute).padStart(2, '0')}\`
          : '未设置'
      }}
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
</style>`,start:479,end:695};export{e as default};
