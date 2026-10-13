const e={title:"异步确认与失败重试",description:"使用 beforeConfirm 等待提交。成功后关闭，失败恢复操作，等待期间禁止取消；函数式入口返回 Promise<boolean>。",component:"XAlertDialog",controls:{fail:{label:"模拟提交失败"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"xToast",source:"xToast",typeOnly:!1},{name:"XAlertDialog",source:"XAlertDialog",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xConfirmDialog",source:"xConfirmDialog",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('尚未提交')"]},{names:["noticeId"],chunks:["let noticeId: string | number | undefined"]},{names:["disposed"],chunks:["let disposed = false"]},{names:["notify"],chunks:[`function notify(message = '') {
  if (disposed) return
  if (noticeId !== undefined) xToast.dismiss(noticeId)
  noticeId = message ? xToast.error(message) : undefined
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  disposed = true
  if (noticeId !== undefined) xToast.dismiss(noticeId)
})`]},{names:["submit"],chunks:[`async function submit() {
  notify('')
  await new Promise((resolve) => setTimeout(resolve, 800))
  if (`,{key:"fail",model:void 0},`) throw new Error('提交失败，请重试')
}`]},{names:["showError"],chunks:[`function showError() {
  notify('保存未完成，请重试')
}`]},{names:["openFunctional"],chunks:[`async function openFunctional() {
  const confirmed = await xConfirmDialog({
    title: '确认提交变更？',
    description: '提交后将保存当前修改。',
    confirmText: '提交变更',
    beforeConfirm: submit,
    onConfirmError: showError,
    loadingDelay: `,{key:"loadingDelay",model:void 0},`,
  })
  result.value = confirmed ? '提交成功' : '已取消'
}`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XAlertDialog",unwrap:!1,selfClosing:void 0,props:[{name:"title",value:"保存当前变更？"},{name:"description",value:"提交成功后关闭，失败时可以重试。"},{name:"confirm-text",value:"保存变更"},{directive:"bind",arg:"before-confirm",raw:':before-confirm="submit"',expression:{raw:["submit"]}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"on",arg:"confirm",raw:`@confirm="result = '保存成功'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"保存成功"}}},{directive:"on",arg:"cancel",raw:`@cancel="result = '已取消'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已取消"}}},{directive:"on",arg:"confirm-error",raw:'@confirm-error="showError"',expression:{raw:["showError"]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="notify()"',expression:{raw:["notify()"]}}],children:[{text:"保存变更"}]}]}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="openFunctional"',expression:{raw:["openFunctional"]}}],children:[{text:"提交变更"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"}],children:[{interpolation:{raw:["result"]}}]}]}],styles:`
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
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}
`},defaults:{fail:!1,loadingDelay:150},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive, ref } from 'vue'
import { xToast, XAlertDialog, XButton, xConfirmDialog } from '@libingchen/x-ui'

interface State {
  fail: boolean
  loadingDelay: number
}
const state = reactive<State>(`,after:`)
const result = ref('尚未提交')
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
async function submit() {
  notify('')
  await new Promise((resolve) => setTimeout(resolve, 800))
  if (state.fail) throw new Error('提交失败，请重试')
}
function showError() {
  notify('保存未完成，请重试')
}
async function openFunctional() {
  const confirmed = await xConfirmDialog({
    title: '确认提交变更？',
    description: '提交后将保存当前修改。',
    confirmText: '提交变更',
    beforeConfirm: submit,
    onConfirmError: showError,
    loadingDelay: state.loadingDelay,
  })
  result.value = confirmed ? '提交成功' : '已取消'
}
<\/script>
<template>
  <div class="demo">
    <div class="row">
      <XAlertDialog
        title="保存当前变更？"
        description="提交成功后关闭，失败时可以重试。"
        confirm-text="保存变更"
        :before-confirm="submit"
        :loading-delay="state.loadingDelay"
        @confirm="result = '保存成功'"
        @cancel="result = '已取消'"
        @confirm-error="showError"
      >
        <template #trigger
          ><XButton variant="outline" @click="notify()">保存变更</XButton></template
        >
      </XAlertDialog>
      <XButton variant="outline" @click="openFunctional">提交变更</XButton>
    </div>
    <p role="status">{{ result }}</p>
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
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>`,start:286,end:320};export{e as default};
