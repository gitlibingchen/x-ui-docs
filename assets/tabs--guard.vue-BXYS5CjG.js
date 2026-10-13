const e={title:"异步切换与失败处理",description:"beforeChange 返回 false 会取消切换，抛出错误触发 error。模拟校验耗时 900ms，等待期间显示进度；连续点击其他标签会通过 signal 取消旧请求，旧结果不会覆盖新选择。",component:"XTabs",controls:{result:{label:"模拟校验结果",options:["allow","cancel","error"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"xToast",source:"xToast",typeOnly:!1},{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XTabsChangeContext",source:"type XTabsChangeContext",typeOnly:!1},{name:"XTabsValue",source:"type XTabsValue",typeOnly:!1}],sideEffect:!1}],statements:[{names:["status"],chunks:["const status = ref('')"]},{names:["noticeId"],chunks:["let noticeId: string | number | undefined"]},{names:["disposed"],chunks:["let disposed = false"]},{names:["notify"],chunks:[`function notify(message = '') {
  if (disposed) return
  if (noticeId !== undefined) xToast.dismiss(noticeId)
  noticeId = message ? xToast.error(message) : undefined
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  disposed = true
  if (noticeId !== undefined) xToast.dismiss(noticeId)
})`]},{names:["cleanups"],chunks:["const cleanups = new Set<() => void>()"]},{names:["beforeChange"],chunks:[`function beforeChange(_value: XTabsValue, { signal }: XTabsChangeContext) {
  notify('')
  status.value = '正在切换…'
  const result = `,{key:"result",model:void 0},`
  return new Promise<boolean>((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timer)
      signal.removeEventListener('abort', abort)
      cleanups.delete(abort)
    }
    const abort = () => {
      cleanup()
      resolve(false)
    }
    const timer = setTimeout(() => {
      cleanup()
      const outcomes = {
        allow: () => {
          status.value = '已切换'
          resolve(true)
        },
        cancel: () => {
          status.value = '已取消切换'
          resolve(false)
        },
        error: () => reject(new Error('模拟校验失败，请重试')),
      }
      outcomes[result]()
    }, 900)
    signal.addEventListener('abort', abort, { once: true })
    cleanups.add(abort)
  })
}`]},{names:["report"],chunks:[`function report() {
  status.value = ''
  notify('暂时无法切换，请重试')
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  for (const cleanup of cleanups) cleanup()
})`]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"before-change",raw:':before-change="beforeChange"',expression:{raw:["beforeChange"]}},{name:"aria-label",value:"切换前校验"},{directive:"on",arg:"error",raw:'@error="report"',expression:{raw:["report"]}}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"overview"},{name:"label",value:"概览"}],children:[{text:"项目概览。"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"reports"},{name:"label",value:"报告"}],children:[{text:"项目报告。"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"members"},{name:"label",value:"成员"}],children:[{text:"项目成员。"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="status"',expression:{raw:["status"]}},{name:"role",value:"status"},{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{raw:["status"]}}]}]}],styles:""},defaults:{result:"allow"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive, ref } from 'vue'
import { xToast, XTabs, XTabItem, type XTabsChangeContext, type XTabsValue } from '@libingchen/x-ui'
interface State {
  result: 'allow' | 'cancel' | 'error'
}
const state = reactive<State>(`,after:`)
const status = ref('')
let noticeId: string | number | undefined
let disposed = false
function notify(message = '') {
  if (disposed) return
  if (noticeId !== undefined) xToast.dismiss(noticeId)
  noticeId = message ? xToast.error(message) : undefined
}
onBeforeUnmount(() => {
  disposed = true
  if (noticeId !== undefined) xToast.dismiss(noticeId)
})
const cleanups = new Set<() => void>()
function beforeChange(_value: XTabsValue, { signal }: XTabsChangeContext) {
  notify('')
  status.value = '正在切换…'
  const result = state.result
  return new Promise<boolean>((resolve, reject) => {
    const cleanup = () => {
      clearTimeout(timer)
      signal.removeEventListener('abort', abort)
      cleanups.delete(abort)
    }
    const abort = () => {
      cleanup()
      resolve(false)
    }
    const timer = setTimeout(() => {
      cleanup()
      const outcomes = {
        allow: () => {
          status.value = '已切换'
          resolve(true)
        },
        cancel: () => {
          status.value = '已取消切换'
          resolve(false)
        },
        error: () => reject(new Error('模拟校验失败，请重试')),
      }
      outcomes[result]()
    }, 900)
    signal.addEventListener('abort', abort, { once: true })
    cleanups.add(abort)
  })
}
function report() {
  status.value = ''
  notify('暂时无法切换，请重试')
}
onBeforeUnmount(() => {
  for (const cleanup of cleanups) cleanup()
})
<\/script>

<template>
  <div class="demo grid w-full min-w-0 gap-4">
    <XTabs :before-change="beforeChange" aria-label="切换前校验" @error="report">
      <XTabItem value="overview" label="概览">项目概览。</XTabItem>
      <XTabItem value="reports" label="报告">项目报告。</XTabItem>
      <XTabItem value="members" label="成员">项目成员。</XTabItem>
    </XTabs>
    <p v-if="status" role="status" class="text-sm text-muted-foreground">{{ status }}</p>
  </div>
</template>`,start:305,end:324};export{e as default};
