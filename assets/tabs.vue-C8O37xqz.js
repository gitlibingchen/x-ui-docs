const e={title:"基本切换与受控状态",description:"label 可省略，直接显示 value。v-model 为 null 时明确取消选择；change 会区分鼠标、键盘、程序赋值与动态回退。方向键移动焦点，Enter 或空格确认，loop 控制首尾循环。",component:"XTabs",controls:{value:{label:"当前页签",api:"modelValue"},variant:{label:"外观",options:["segment","line","card"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},loop:{label:"键盘首尾循环"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XTextarea",source:"XTextarea",typeOnly:!1},{name:"XTabsChangeEvent",source:"type XTabsChangeEvent",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string | number | null>(",{key:"value"},")"]},{names:["lastChange"],chunks:["const lastChange = ref('尚未切换')"]},{names:["changed"],chunks:["function changed(event: XTabsChangeEvent) {\n  lastChange.value = `${event.previousValue ?? '未选择'} → ${event.value ?? '未选择'}（${event.reason}）`\n}"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"loop",raw:':loop="state.loop"',expression:{key:"loop",model:void 0}},{name:"aria-label",value:"项目工作区"},{directive:"on",arg:"change",raw:'@change="changed"',expression:{raw:["changed"]}}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"概览"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"本周完成 12 项任务，下一次评审安排在周五。"}]}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"讨论"}],children:[{tag:"XTextarea",unwrap:!1,selfClosing:!0,props:[{name:"aria-label",value:"讨论草稿"},{name:"placeholder",value:"写下讨论内容，切换后草稿仍会保留"}],children:[]}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"设置"},{name:"disabled",value:void 0}],children:[{text:"需要管理员权限。"}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"empty",raw:"#empty",expression:void 0}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"当前未选择页签，可通过导航重新选择。"}]}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="state.value = null"',expression:{left:{key:"value",model:"modelValue"},operator:"=",right:{literal:null}}}],children:[{text:"清空选择"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:`@click="state.value = '讨论'"`,expression:{left:{key:"value",model:"modelValue"},operator:"=",right:{literal:"讨论"}}}],children:[{text:"打开讨论"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"},{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{raw:["lastChange"]}}]}]}],styles:""},defaults:{value:"概览",variant:"segment",size:void 0,loop:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XTabs, XTabItem, XButton, XTextarea, type XTabsChangeEvent } from '@libingchen/x-ui'
interface State {
  value: string | number | null
  variant: 'segment' | 'line' | 'card'
  size: 'sm' | 'md' | 'lg' | undefined
  loop: boolean
}
const state = reactive<State>(`,after:`)
const lastChange = ref('尚未切换')
function changed(event: XTabsChangeEvent) {
  lastChange.value = \`\${event.previousValue ?? '未选择'} → \${event.value ?? '未选择'}（\${event.reason}）\`
}
<\/script>

<template>
  <div class="demo grid w-full min-w-0 gap-4">
    <XTabs
      v-model="state.value"
      :variant="state.variant"
      :size="state.size"
      :loop="state.loop"
      aria-label="项目工作区"
      @change="changed"
    >
      <XTabItem value="概览"><p>本周完成 12 项任务，下一次评审安排在周五。</p></XTabItem>
      <XTabItem value="讨论"
        ><XTextarea aria-label="讨论草稿" placeholder="写下讨论内容，切换后草稿仍会保留"
      /></XTabItem>
      <XTabItem value="设置" disabled>需要管理员权限。</XTabItem>
      <template #empty><p>当前未选择页签，可通过导航重新选择。</p></template>
    </XTabs>
    <div class="flex flex-wrap gap-2">
      <XButton variant="outline" @click="state.value = null">清空选择</XButton>
      <XButton variant="outline" @click="state.value = '讨论'">打开讨论</XButton>
    </div>
    <p role="status" class="text-sm text-muted-foreground">{{ lastChange }}</p>
  </div>
</template>`,start:368,end:432};export{e as default};
