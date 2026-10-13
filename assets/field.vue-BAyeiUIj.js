const e={title:"带说明与校验的字段",description:"组织标签、输入、帮助和错误信息，切换字段方向与状态，观察可访问关联和控件状态继承。",component:"XField",controls:{label:{label:"标签"},description:{label:"帮助说明"},error:{label:"错误信息"},orientation:{label:"排列方向",options:["vertical","horizontal","responsive"]},required:{label:"必填"},disabled:{label:"禁用"},readonly:{label:"只读"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},presets:[{label:"校验失败",state:{error:"项目名称至少需要 2 个字符。"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XField",source:"XField",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1}],sideEffect:!1}],statements:[{names:["value"],chunks:["const value = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"label",raw:':label="state.label"',expression:{key:"label",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}},{directive:"bind",arg:"error",raw:':error="state.error || undefined"',expression:{left:{key:"error",model:void 0},operator:"||",right:{absent:!0}}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"required",raw:':required="state.required"',expression:{key:"required",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"label-for",value:"demo-field"}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-field"},{directive:"model",arg:void 0,raw:'v-model="value"',expression:{raw:["value"]}},{name:"placeholder",value:"例如：设计系统升级"}],children:[]}]},{text:""}]}],styles:`
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
`},defaults:{label:"项目名称",description:"一个简短且容易识别的名称。",error:"",orientation:"vertical",required:!0,disabled:!1,readonly:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XField, XInput } from '@libingchen/x-ui'

interface State {
  label: string
  description: string
  error: string
  orientation: 'vertical' | 'horizontal' | 'responsive'
  required: boolean
  disabled: boolean
  readonly: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const value = ref('')
<\/script>

<template>
  <div class="demo">
    <XField
      :label="state.label"
      :description="state.description"
      :error="state.error || undefined"
      :orientation="state.orientation"
      :required="state.required"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :size="state.size"
      label-for="demo-field"
      ><XInput id="demo-field" v-model="value" placeholder="例如：设计系统升级"
    /></XField>
    <p role="status" class="note">当前名称：{{ value || '尚未填写' }}</p>
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
</style>`,start:408,end:575};export{e as default};
