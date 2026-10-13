const e={title:"录入资产编号",description:"资产编号保留前导零。可以直接编辑，也可以通过扫码入口录入；只读与禁用会限制对应操作。",component:"XScanInput",controls:{value:{label:"资产编号",api:"modelValue"},editable:{label:"允许键盘编辑"},readonly:{label:"只读"},disabled:{label:"禁用"},clearable:{label:"允许清除"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},variant:{label:"外观",options:["outlined","borderless"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XScanInput",source:"XScanInput",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-asset-code"}],children:[{text:"资产编号"}]},{tag:"XScanInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-asset-code"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"editable",raw:':editable="state.editable"',expression:{key:"editable",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{name:"scan-label",value:"扫描资产编号"},{directive:"bind",arg:"scanner-props",raw:`:scanner-props="{ title: '扫描资产编号' }"`,expression:{object:[{name:"title",value:{literal:"扫描资产编号"}}]}}],children:[]},{text:""}]}],styles:`
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
`},defaults:{value:"0019283746",editable:!0,readonly:!1,disabled:!1,clearable:!0,size:void 0,variant:"outlined"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XScanInput, XLabel } from '@libingchen/x-ui'

interface State {
  value: string
  editable: boolean
  readonly: boolean
  disabled: boolean
  clearable: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  variant: 'outlined' | 'borderless'
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XLabel for="demo-asset-code">资产编号</XLabel
    ><XScanInput
      id="demo-asset-code"
      v-model="state.value"
      :editable="state.editable"
      :readonly="state.readonly"
      :disabled="state.disabled"
      :clearable="state.clearable"
      :size="state.size"
      :variant="state.variant"
      scan-label="扫描资产编号"
      :scanner-props="{ title: '扫描资产编号' }"
    />
    <p role="status" class="note">资产编号：{{ state.value || '未填写' }}</p>
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
</style>`,start:371,end:514};export{e as default};
