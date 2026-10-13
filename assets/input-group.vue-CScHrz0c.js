const e={title:"搜索项目资源",description:"将图标、输入与操作组合为一个控件，体验统一焦点边界、禁用状态和前后内容插槽。",component:"XInputGroup",controls:{value:{label:"搜索词",api:"XInput.modelValue"},variant:{label:"外观",options:["outlined","borderless"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用输入"},prefix:{label:"前置图标",api:"prefix slot"},suffix:{label:"后置操作",api:"suffix slot"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XInputGroup",source:"XInputGroup",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Search",source:"Search",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string>(",{key:"value"},")"]},{names:["result"],chunks:["const result = ref('输入关键词后执行搜索。')"]},{names:["search"],chunks:[`function search() {
  result.value = `,{key:"value",model:"modelValue.value"}," ? `正在查找“${",{key:"value",model:"modelValue.value"},"}”` : '请先输入关键词'\n}"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XInputGroup",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.prefix"',expression:{key:"prefix",model:void 0}},{directive:"slot",arg:"prefix",raw:"#prefix",expression:void 0}],children:[{tag:"Search",unwrap:!1,selfClosing:!0,props:[{name:"aria-hidden",value:"true"}],children:[]}]},{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"placeholder",value:"搜索文件和项目"},{name:"aria-label",value:"搜索资源"},{directive:"on",arg:"keydown",raw:'@keydown.enter="search"',expression:{raw:["search"]}}],children:[]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.suffix"',expression:{key:"suffix",model:void 0}},{directive:"slot",arg:"suffix",raw:"#suffix",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"size",value:"xs"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:'@click="search"',expression:{raw:["search"]}}],children:[{text:"搜索"}]}]}]},{text:""}]}],styles:`
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
`},defaults:{value:"",variant:"outlined",size:void 0,disabled:!1,prefix:!0,suffix:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XInputGroup, XInput, XButton } from '@libingchen/x-ui'
import { Search } from '@lucide/vue'

interface State {
  value: string
  variant: 'outlined' | 'borderless'
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
  prefix: boolean
  suffix: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('输入关键词后执行搜索。')
function search() {
  result.value = state.value ? \`正在查找“\${state.value}”\` : '请先输入关键词'
}
<\/script>

<template>
  <div class="demo">
    <XInputGroup :variant="state.variant" :size="state.size"
      ><template v-if="state.prefix" #prefix><Search aria-hidden="true" /></template
      ><XInput
        v-model="state.value"
        :disabled="state.disabled"
        placeholder="搜索文件和项目"
        aria-label="搜索资源"
        @keydown.enter="search"
      /><template v-if="state.suffix" #suffix
        ><XButton variant="ghost" size="xs" :disabled="state.disabled" @click="search"
          >搜索</XButton
        ></template
      ></XInputGroup
    >
    <p role="status" class="note">{{ result }}</p>
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
</style>`,start:398,end:507};export{e as default};
