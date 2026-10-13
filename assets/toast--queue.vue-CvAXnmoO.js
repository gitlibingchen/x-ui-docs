const e={title:"位置、队列与全局配置",description:"Provider 统一配置六种位置、可见层数、展开状态与关闭按钮；单次调用可以覆盖位置。不同高度的通知由 Sonner 自动布局。示例只清理自己的通知，应用确需全部清除时可调用 xToast.dismiss()。",component:"xToast",controls:{position:{label:"默认位置",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],api:"XConfigProvider.config.toast.position"},expand:{label:"始终展开",api:"XConfigProvider.config.toast.expand"},visibleToasts:{label:"可见层数",min:1,max:5,api:"XConfigProvider.config.toast.visibleToasts"},overridePosition:{label:"本次调用覆盖为顶部居中"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xToast",source:"xToast",typeOnly:!1},{name:"XToastOptions",source:"type XToastOptions",typeOnly:!1}],sideEffect:!1}],statements:[{names:["ids"],chunks:["const ids = new Set<string | number>()"]},{names:["sequence"],chunks:["let sequence = 0"]},{names:["add"],chunks:[`function add() {
  const options: XToastOptions = {
    duration: Infinity,
    description:
      sequence % 2
        ? '这是一条较长的通知说明，用于观察不同高度的队列如何展开与排列。'
        : '鼠标移入或键盘聚焦时展开队列。',
    ...(`,{key:"overridePosition",model:void 0}," ? { position: 'top-center' as const } : {}),\n  }\n  ids.add(xToast(`通知 ${++sequence}`, options))\n}"]},{names:["batch"],chunks:[`function batch() {
  for (let i = 0; i < 4; i++) add()
}`]},{names:["clear"],chunks:[`function clear() {
  for (const id of ids) xToast.dismiss(id)
  ids.clear()
}`]},{names:[],chunks:["onBeforeUnmount(clear)"]}],template:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"config",raw:`:config="{
      toast: {
        position: state.position,
        expand: state.expand,
        visibleToasts: state.visibleToasts,
        closeButton: true,
      },
    }"`,expression:{object:[{name:"toast",value:{object:[{name:"position",value:{key:"position",model:void 0}},{name:"expand",value:{key:"expand",model:void 0}},{name:"visibleToasts",value:{key:"visibleToasts",model:void 0}},{name:"closeButton",value:{literal:!0}}]}}]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="add"',expression:{raw:["add"]}}],children:[{text:"添加一条"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="batch"',expression:{raw:["batch"]}}],children:[{text:"添加四条"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{directive:"on",arg:"click",raw:'@click="clear"',expression:{raw:["clear"]}}],children:[{text:"清空本例通知"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-sm text-muted-foreground"}],children:[{text:" 本例通知不会自动消失。先聚焦预览，再按 Alt+T 聚焦通知、Escape 折叠；关闭当前通知后焦点交给下一条。 "}]}]}]}],styles:""},defaults:{position:"bottom-right",expand:!1,visibleToasts:3,overridePosition:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive } from 'vue'
import { XConfigProvider, XButton, xToast, type XToastOptions } from '@libingchen/x-ui'
interface State {
  position:
    'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  expand: boolean
  visibleToasts: number
  overridePosition: boolean
}
const state = reactive<State>(`,after:`)
const ids = new Set<string | number>()
let sequence = 0
function add() {
  const options: XToastOptions = {
    duration: Infinity,
    description:
      sequence % 2
        ? '这是一条较长的通知说明，用于观察不同高度的队列如何展开与排列。'
        : '鼠标移入或键盘聚焦时展开队列。',
    ...(state.overridePosition ? { position: 'top-center' as const } : {}),
  }
  ids.add(xToast(\`通知 \${++sequence}\`, options))
}
function batch() {
  for (let i = 0; i < 4; i++) add()
}
function clear() {
  for (const id of ids) xToast.dismiss(id)
  ids.clear()
}
onBeforeUnmount(clear)
<\/script>

<template>
  <XConfigProvider
    :config="{
      toast: {
        position: state.position,
        expand: state.expand,
        visibleToasts: state.visibleToasts,
        closeButton: true,
      },
    }"
  >
    <div class="demo grid w-full min-w-0 gap-4">
      <div class="flex flex-wrap gap-2">
        <XButton variant="outline" @click="add">添加一条</XButton>
        <XButton variant="outline" @click="batch">添加四条</XButton>
        <XButton variant="ghost" @click="clear">清空本例通知</XButton>
      </div>
      <p class="text-sm text-muted-foreground">
        本例通知不会自动消失。先聚焦预览，再按 Alt+T 聚焦通知、Escape
        折叠；关闭当前通知后焦点交给下一条。
      </p>
    </div>
  </XConfigProvider>
</template>`,start:425,end:520};export{e as default};
