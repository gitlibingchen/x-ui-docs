const n={title:"加载与原位更新",description:"适合流式进度或由多个事件推动的任务：使用相同 id 再次调用即可更新标题、说明和类型。loading 持续显示，完成或失败后恢复自动关闭；dismiss(id) 移除指定通知，不代表取消业务任务。",component:"xToast",controls:{count:{label:"导出记录数",min:2,max:100,step:2}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"useId",source:"useId",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xToast",source:"xToast",typeOnly:!1}],sideEffect:!1}],statements:[{names:["id"],chunks:["const id = useId()"]},{names:["running"],chunks:["const running = ref(false)"]},{names:["start"],chunks:["function start() {\n  running.value = true\n  xToast.loading('正在导出', { id, description: `共 ${",{key:"count",model:void 0},"} 条记录` })\n}"]},{names:["progress"],chunks:[`function progress() {
  xToast.loading('已完成一半', {
    id,
    description: \`已处理 \${Math.floor(`,{key:"count",model:void 0}," / 2)} / ${",{key:"count",model:void 0},`} 条记录\`,
  })
}`]},{names:["finish"],chunks:[`function finish(success: boolean) {
  running.value = false
  if (success)
    xToast.success('导出完成', {
      id,
      description: \`已处理 \${`,{key:"count",model:void 0},`} 条记录\`,
      duration: 4000,
      closeButton: true,
    })
  else
    xToast.error('导出失败', {
      id,
      description: '可重新开始导出。',
      duration: 4000,
      closeButton: true,
    })
}`]},{names:["dismiss"],chunks:[`function dismiss() {
  running.value = false
  xToast.dismiss(id)
}`]},{names:[],chunks:["onBeforeUnmount(dismiss)"]}],template:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo flex w-full flex-wrap gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="start"',expression:{raw:["start"]}}],children:[{text:"开始导出"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="!running"',expression:{not:{raw:["running"]}}},{directive:"on",arg:"click",raw:'@click="progress"',expression:{raw:["progress"]}}],children:[{text:"更新进度"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="!running"',expression:{not:{raw:["running"]}}},{directive:"on",arg:"click",raw:'@click="finish(true)"',expression:{raw:["finish(true)"]}}],children:[{text:"完成"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="!running"',expression:{not:{raw:["running"]}}},{directive:"on",arg:"click",raw:'@click="finish(false)"',expression:{raw:["finish(false)"]}}],children:[{text:"失败"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{directive:"on",arg:"click",raw:'@click="dismiss"',expression:{raw:["dismiss"]}}],children:[{text:"撤销通知"}]}]}]}],styles:""},defaults:{count:24},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive, ref, useId } from 'vue'
import { XConfigProvider, XButton, xToast } from '@libingchen/x-ui'
interface State {
  count: number
}
const state = reactive<State>(`,after:`)
const id = useId()
const running = ref(false)
function start() {
  running.value = true
  xToast.loading('正在导出', { id, description: \`共 \${state.count} 条记录\` })
}
function progress() {
  xToast.loading('已完成一半', {
    id,
    description: \`已处理 \${Math.floor(state.count / 2)} / \${state.count} 条记录\`,
  })
}
function finish(success: boolean) {
  running.value = false
  if (success)
    xToast.success('导出完成', {
      id,
      description: \`已处理 \${state.count} 条记录\`,
      duration: 4000,
      closeButton: true,
    })
  else
    xToast.error('导出失败', {
      id,
      description: '可重新开始导出。',
      duration: 4000,
      closeButton: true,
    })
}
function dismiss() {
  running.value = false
  xToast.dismiss(id)
}
onBeforeUnmount(dismiss)
<\/script>

<template>
  <XConfigProvider>
    <div class="demo flex w-full flex-wrap gap-2">
      <XButton variant="outline" @click="start">开始导出</XButton>
      <XButton variant="outline" :disabled="!running" @click="progress">更新进度</XButton>
      <XButton variant="outline" :disabled="!running" @click="finish(true)">完成</XButton>
      <XButton variant="outline" :disabled="!running" @click="finish(false)">失败</XButton>
      <XButton variant="ghost" @click="dismiss">撤销通知</XButton>
    </div>
  </XConfigProvider>
</template>`,start:256,end:269};export{n as default};
