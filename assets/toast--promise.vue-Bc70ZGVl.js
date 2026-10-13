const e={title:"Promise 异步反馈",description:"模拟请求的加载、成功和失败在同一条通知中更新，不新增重复通知。success 可以读取返回值，error 处理失败，finally 收尾；卸载时取消本例计时器并清理通知。",component:"xToast",controls:{outcome:{label:"请求结果",options:["success","error"]},delay:{label:"模拟耗时（毫秒）",min:500,max:5e3,step:500}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"useId",source:"useId",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xToast",source:"xToast",typeOnly:!1}],sideEffect:!1}],statements:[{names:["id"],chunks:["const id = useId()"]},{names:["busy"],chunks:["const busy = ref(false)"]},{names:["result"],chunks:["const result = ref('等待提交')"]},{names:["cancel"],chunks:["let cancel: (() => void) | undefined"]},{names:["submit"],chunks:[`function submit() {
  if (busy.value) return
  busy.value = true
  result.value = '模拟请求处理中'
  const outcome = `,{key:"outcome",model:void 0},`
  const request = new Promise<number>((resolve, reject) => {
    const timer = setTimeout(() => {
      cancel = undefined
      const outcomes = {
        success: () => resolve(12),
        error: () => reject(new Error('保存失败，请稍后重试')),
      }
      outcomes[outcome]()
    }, `,{key:"delay",model:void 0},`)
    cancel = () => {
      clearTimeout(timer)
      reject(new Error('请求已取消'))
    }
  })
  xToast.promise(request, {
    id,
    loading: '正在保存…',
    success: (count: number) => {
      result.value = \`已保存 \${count} 条记录\`
      return result.value
    },
    error: (error: Error) => {
      result.value = error.message
      return error.message
    },
    finally: () => {
      busy.value = false
    },
  })
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  cancel?.()
  xToast.dismiss(id)
})`]}],template:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"w-fit"},{directive:"bind",arg:"disabled",raw:':disabled="busy"',expression:{raw:["busy"]}},{directive:"on",arg:"click",raw:'@click="submit"',expression:{raw:["submit"]}}],children:[{interpolation:{condition:{raw:["busy"]},yes:{literal:"正在提交…"},no:{literal:"提交记录"}}}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"},{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{raw:["result"]}}]}]}]}],styles:""},defaults:{outcome:"success",delay:1500},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive, ref, useId } from 'vue'
import { XConfigProvider, XButton, xToast } from '@libingchen/x-ui'
interface State {
  outcome: 'success' | 'error'
  delay: number
}
const state = reactive<State>(`,after:`)
const id = useId()
const busy = ref(false)
const result = ref('等待提交')
let cancel: (() => void) | undefined
function submit() {
  if (busy.value) return
  busy.value = true
  result.value = '模拟请求处理中'
  const outcome = state.outcome
  const request = new Promise<number>((resolve, reject) => {
    const timer = setTimeout(() => {
      cancel = undefined
      const outcomes = {
        success: () => resolve(12),
        error: () => reject(new Error('保存失败，请稍后重试')),
      }
      outcomes[outcome]()
    }, state.delay)
    cancel = () => {
      clearTimeout(timer)
      reject(new Error('请求已取消'))
    }
  })
  xToast.promise(request, {
    id,
    loading: '正在保存…',
    success: (count: number) => {
      result.value = \`已保存 \${count} 条记录\`
      return result.value
    },
    error: (error: Error) => {
      result.value = error.message
      return error.message
    },
    finally: () => {
      busy.value = false
    },
  })
}
onBeforeUnmount(() => {
  cancel?.()
  xToast.dismiss(id)
})
<\/script>

<template>
  <XConfigProvider>
    <div class="demo grid w-full min-w-0 gap-4">
      <XButton class="w-fit" :disabled="busy" @click="submit">{{
        busy ? '正在提交…' : '提交记录'
      }}</XButton>
      <p role="status" class="text-sm text-muted-foreground">{{ result }}</p>
    </div>
  </XConfigProvider>
</template>`,start:287,end:322};export{e as default};
