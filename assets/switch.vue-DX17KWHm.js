const e={title:"通知偏好设置",description:"切换开关并观察业务状态，调整尺寸和禁用状态。",component:"XSwitch",controls:{value:{label:"开启状态",api:"modelValue"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用"},required:{label:"必填",group:"advanced"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSwitch",source:"XSwitch",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<boolean>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XSwitch",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-switch"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"required",raw:':required="state.required"',expression:{key:"required",model:void 0}}],children:[]},{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-switch"}],children:[{text:"接收项目活动通知"}]}]},{text:""}]}],styles:`
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
`},defaults:{value:!1,size:void 0,disabled:!1,required:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSwitch, XLabel } from '@libingchen/x-ui'

interface State {
  value: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
  required: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XSwitch
        id="demo-switch"
        v-model="state.value"
        :size="state.size"
        :disabled="state.disabled"
        :required="state.required"
      /><XLabel for="demo-switch">接收项目活动通知</XLabel>
    </div>
    <p role="status" class="note">
      当前状态：{{
        state.value === true ? '已开启' : state.value === false ? '已关闭' : '部分选中'
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
</style>`,start:291,end:358};export{e as default};
