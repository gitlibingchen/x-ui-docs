const e={title:"文字格式工具栏",description:"多个格式可以同时生效，观察数组模型与预览文字的变化。",component:"XToggleGroup",controls:{value:{label:"已启用格式",kind:"json",api:"modelValue"},spacing:{label:"按钮间距",min:0,max:4},disabled:{label:"禁用"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XToggleGroup",source:"XToggleGroup",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string[]>(",{key:"value"},")"]},{names:["items"],chunks:[`const items = [
  { value: 'bold', label: '加粗' },
  { value: 'italic', label: '斜体' },
  { value: 'underline', label: '下划线' },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XToggleGroup",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{name:"type",value:"multiple"},{directive:"bind",arg:"items",raw:':items="items"',expression:{raw:["items"]}},{name:"variant",value:"outline"},{directive:"bind",arg:"spacing",raw:':spacing="state.spacing"',expression:{key:"spacing",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"aria-label",value:"文字格式"}],children:[]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"style",raw:`:style="{
        fontWeight: state.value.includes('bold') ? '700' : '400',
        fontStyle: state.value.includes('italic') ? 'italic' : 'normal',
        textDecoration: state.value.includes('underline') ? 'underline' : 'none',
      }"`,expression:{object:[{name:"fontWeight",value:{condition:{raw:["",{key:"value",model:"modelValue"},".includes('bold')"]},yes:{literal:"700"},no:{literal:"400"}}},{name:"fontStyle",value:{condition:{raw:["",{key:"value",model:"modelValue"},".includes('italic')"]},yes:{literal:"italic"},no:{literal:"normal"}}},{name:"textDecoration",value:{condition:{raw:["",{key:"value",model:"modelValue"},".includes('underline')"]},yes:{literal:"underline"},no:{literal:"none"}}}]}}],children:[{text:" 为团队建立共享的设计语言。 "}]}]}],styles:`
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
`},defaults:{value:["bold"],spacing:1,disabled:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XToggleGroup } from '@libingchen/x-ui'

interface State {
  value: string[]
  spacing: number
  disabled: boolean
}
const state = reactive<State>(`,after:`)
const items = [
  { value: 'bold', label: '加粗' },
  { value: 'italic', label: '斜体' },
  { value: 'underline', label: '下划线' },
]
<\/script>

<template>
  <div class="demo">
    <XToggleGroup
      v-model="state.value"
      type="multiple"
      :items="items"
      variant="outline"
      :spacing="state.spacing"
      :disabled="state.disabled"
      aria-label="文字格式"
    />
    <p
      :style="{
        fontWeight: state.value.includes('bold') ? '700' : '400',
        fontStyle: state.value.includes('italic') ? 'italic' : 'normal',
        textDecoration: state.value.includes('underline') ? 'underline' : 'none',
      }"
    >
      为团队建立共享的设计语言。
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
</style>`,start:248,end:296};export{e as default};
