const e={title:"有标签的表单控件",description:"点击标签可聚焦对应输入框。比较可见标签与补充说明，保持 id 与 for 的关联。",component:"XLabel",controls:{size:{label:"尺寸",options:["sm","md","lg"],unset:!0},label:{label:"标签文案",api:"default slot"},required:{label:"必填提示"},disabled:{label:"禁用输入"},value:{label:"输入值",api:"XInput.modelValue"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XLabel",source:"XLabel",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack"}],children:[{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-label-email"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{interpolation:{key:"label",model:void 0}},{tag:"span",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.required"',expression:{key:"required",model:void 0}},{name:"aria-hidden",value:"true"}],children:[{text:" *"}]}]},{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-label-email"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{name:"type",value:"email"},{directive:"bind",arg:"required",raw:':required="state.required"',expression:{key:"required",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"placeholder",value:"name@example.com"},{name:"aria-describedby",value:"demo-label-help"}],children:[]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"id",value:"demo-label-help"},{name:"class",value:"note"}],children:[{text:"用于接收项目协作邀请。"}]}]}]}],styles:`
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
`},defaults:{size:void 0,label:"工作邮箱",required:!0,disabled:!1,value:""},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XLabel, XInput } from '@libingchen/x-ui'

interface State {
  size: 'sm' | 'md' | 'lg' | undefined
  label: string
  required: boolean
  disabled: boolean
  value: string
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="stack">
      <XLabel for="demo-label-email" :size="state.size"
        >{{ state.label }}<span v-if="state.required" aria-hidden="true"> *</span></XLabel
      ><XInput
        id="demo-label-email"
        v-model="state.value"
        type="email"
        :required="state.required"
        :disabled="state.disabled"
        placeholder="name@example.com"
        aria-describedby="demo-label-help"
      />
      <p id="demo-label-help" class="note">用于接收项目协作邀请。</p>
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
</style>`,start:305,end:394};export{e as default};
