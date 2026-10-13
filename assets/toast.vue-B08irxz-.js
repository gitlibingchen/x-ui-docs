const n={title:"通知类型与操作",description:"普通、成功、信息、警告和错误使用中性通知表面，仅状态图标区分颜色。主操作跟随强调色；可选取消操作与行内关闭按钮。应用根部只需一个 XConfigProvider，单次调用可覆盖时长等选项。",component:"xToast",controls:{kind:{label:"通知类型",options:["plain","success","info","warning","error"]},title:{label:"标题"},description:{label:"说明"},duration:{label:"停留时间（毫秒）",min:1e3,max:1e4,step:500},action:{label:"撤销按钮"},cancel:{label:"忽略按钮"},closeButton:{label:"关闭按钮",api:"XConfigProvider.config.toast.closeButton"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xToast",source:"xToast",typeOnly:!1},{name:"XToastOptions",source:"type XToastOptions",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('执行操作后查看通知。')"]},{names:["toastId"],chunks:["let toastId: string | number | undefined"]},{names:["notify"],chunks:[`function notify() {
  dismiss()
  const options: XToastOptions = {
    description: `,{key:"description",model:void 0},`,
    duration: `,{key:"duration",model:void 0},`,
    action: `,{key:"action",model:void 0},`
      ? {
          label: '撤销',
          onClick: () => {
            result.value = '已撤销归档'
          },
        }
      : undefined,
    cancel: `,{key:"cancel",model:void 0},`
      ? {
          label: '忽略',
          onClick: () => {
            result.value = '已忽略通知'
          },
        }
      : undefined,
  }
  const notifyByKind = {
    plain: xToast,
    success: xToast.success,
    info: xToast.info,
    warning: xToast.warning,
    error: xToast.error,
  }
  toastId = notifyByKind[`,{key:"kind",model:void 0},"](",{key:"title",model:void 0},`, options)
}`]},{names:["dismiss"],chunks:[`function dismiss() {
  if (toastId !== undefined) {
    xToast.dismiss(toastId)
    toastId = undefined
  }
}`]},{names:[],chunks:["onBeforeUnmount(dismiss)"]}],template:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"config",raw:':config="{ toast: { closeButton: state.closeButton } }"',expression:{object:[{name:"toast",value:{object:[{name:"closeButton",value:{key:"closeButton",model:void 0}}]}}]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="notify"',expression:{raw:["notify"]}}],children:[{text:"显示通知"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{directive:"on",arg:"click",raw:'@click="dismiss"',expression:{raw:["dismiss"]}}],children:[{text:"关闭通知"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"},{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{raw:["result"]}}]}]}]}],styles:""},defaults:{kind:"success",title:"项目已归档",description:"可以通过撤销恢复项目。",duration:4e3,action:!0,cancel:!1,closeButton:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref, onBeforeUnmount } from 'vue'
import { XConfigProvider, XButton, xToast, type XToastOptions } from '@libingchen/x-ui'
interface State {
  kind: 'plain' | 'success' | 'info' | 'warning' | 'error'
  title: string
  description: string
  duration: number
  action: boolean
  cancel: boolean
  closeButton: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('执行操作后查看通知。')
let toastId: string | number | undefined
function notify() {
  dismiss()
  const options: XToastOptions = {
    description: state.description,
    duration: state.duration,
    action: state.action
      ? {
          label: '撤销',
          onClick: () => {
            result.value = '已撤销归档'
          },
        }
      : undefined,
    cancel: state.cancel
      ? {
          label: '忽略',
          onClick: () => {
            result.value = '已忽略通知'
          },
        }
      : undefined,
  }
  const notifyByKind = {
    plain: xToast,
    success: xToast.success,
    info: xToast.info,
    warning: xToast.warning,
    error: xToast.error,
  }
  toastId = notifyByKind[state.kind](state.title, options)
}
function dismiss() {
  if (toastId !== undefined) {
    xToast.dismiss(toastId)
    toastId = undefined
  }
}
onBeforeUnmount(dismiss)
<\/script>

<template>
  <XConfigProvider :config="{ toast: { closeButton: state.closeButton } }">
    <div class="demo grid w-full min-w-0 gap-4">
      <div class="flex flex-wrap gap-2">
        <XButton variant="outline" @click="notify">显示通知</XButton>
        <XButton variant="ghost" @click="dismiss">关闭通知</XButton>
      </div>
      <p role="status" class="text-sm text-muted-foreground">{{ result }}</p>
    </div>
  </XConfigProvider>
</template>`,start:428,end:570};export{n as default};
