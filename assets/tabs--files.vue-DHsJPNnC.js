const e={title:"可关闭文件与草稿确认",description:"关闭后台文件不会激活或加载它。业务负责确认和删除，Tabs 负责切换、内容保留与焦点恢复。",component:"XTabs",controls:{variant:{label:"外观",options:["card","line","segment"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"FileText",source:"FileText",typeOnly:!1},{name:"Plus",source:"Plus",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"xToast",source:"xToast",typeOnly:!1},{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XTextarea",source:"XTextarea",typeOnly:!1},{name:"XDialog",source:"XDialog",typeOnly:!1},{name:"XTabsValue",source:"type XTabsValue",typeOnly:!1},{name:"XTabsChangeContext",source:"type XTabsChangeContext",typeOnly:!1}],sideEffect:!1}],statements:[{names:["active"],chunks:["const active = ref<XTabsValue | null>('1')"]},{names:["files"],chunks:[`const files = ref([
  { id: '1', name: '项目说明.md', text: '', dirty: false, closing: false },
  { id: '2', name: '会议记录.md', text: '', dirty: false, closing: false },
])`]},{names:["sequence"],chunks:["let sequence = 2"]},{names:["confirming"],chunks:["const confirming = ref(false)"]},{names:["finish"],chunks:["let finish: ((allowed: boolean) => void) | undefined"]},{names:["settle"],chunks:[`function settle(allowed: boolean) {
  const resolve = finish
  finish = undefined
  confirming.value = false
  resolve?.(allowed)
}`]},{names:["confirm"],chunks:[`function confirm(signal?: AbortSignal) {
  settle(false)
  if (signal?.aborted) return Promise.resolve(false)
  confirming.value = true
  return new Promise<boolean>((resolve) => {
    const abort = () => settle(false)
    signal?.addEventListener('abort', abort, { once: true })
    finish = (allowed) => {
      signal?.removeEventListener('abort', abort)
      resolve(allowed)
    }
  })
}`]},{names:["beforeChange"],chunks:[`async function beforeChange(_value: XTabsValue, context: XTabsChangeContext) {
  const current = files.value.find((file) => file.id === context.from)
  return !current?.dirty || (await confirm(context.signal))
}`]},{names:["requestClose"],chunks:[`async function requestClose(value: XTabsValue) {
  const file = files.value.find((item) => item.id === value)
  if (!file || file.closing) return
  file.closing = true
  try {
    if (!file.dirty || (await confirm())) files.value = files.value.filter((item) => item !== file)
  } finally {
    file.closing = false
  }
}`]},{names:["createFile"],chunks:[`function createFile() {
  const id = String(++sequence)
  files.value.push({ id, name: \`文档 \${id}.md\`, text: '', dirty: false, closing: false })
  active.value = id
}`]},{names:["noticeId"],chunks:["let noticeId: string | number | undefined"]},{names:["disposed"],chunks:["let disposed = false"]},{names:["notify"],chunks:[`function notify(message = '') {
  if (disposed) return
  if (noticeId !== undefined) xToast.dismiss(noticeId)
  noticeId = message ? xToast.error(message) : undefined
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  disposed = true
  if (noticeId !== undefined) xToast.dismiss(noticeId)
})`]},{names:["report"],chunks:[`function report() {
  notify('切换未完成，请重试')
}`]},{names:[],chunks:["onBeforeUnmount(() => settle(false))"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-3"}],children:[{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{name:"data-testid",value:"file-tabs"},{directive:"model",arg:void 0,raw:'v-model="active"',expression:{raw:["active"]}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"before-change",raw:':before-change="beforeChange"',expression:{raw:["beforeChange"]}},{name:"aria-label",value:"文件工作区"},{directive:"on",arg:"close",raw:'@close="requestClose"',expression:{raw:["requestClose"]}},{directive:"on",arg:"error",raw:'@error="report"',expression:{raw:["report"]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"header-end",raw:"#header-end",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"shape",value:"icon"},{name:"aria-label",value:"新建文件"},{directive:"on",arg:"click",raw:'@click="createFile"',expression:{raw:["createFile"]}}],children:[{tag:"Plus",unwrap:!1,selfClosing:!0,props:[{name:"data-icon",value:void 0}],children:[]}]}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="file in files"',expression:{raw:["file in files"]}},{directive:"bind",arg:"key",raw:':key="file.id"',expression:{raw:["file.id"]}},{directive:"bind",arg:"value",raw:':value="file.id"',expression:{raw:["file.id"]}},{directive:"bind",arg:"label",raw:':label="file.name"',expression:{raw:["file.name"]}},{directive:"bind",arg:"icon",raw:':icon="FileText"',expression:{raw:["FileText"]}},{directive:"bind",arg:"closing",raw:':closing="file.closing"',expression:{raw:["file.closing"]}},{name:"closable",value:void 0}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"label",raw:"#label",expression:void 0}],children:[{interpolation:{raw:["file.name"]}},{interpolation:{condition:{raw:["file.dirty"]},yes:{literal:" ·"},no:{literal:""}}}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"grid gap-3"}],children:[{tag:"XTextarea",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="file.text"',expression:{raw:["file.text"]}},{directive:"bind",arg:"aria-label",raw:':aria-label="file.name"',expression:{raw:["file.name"]}},{name:"placeholder",value:"写下内容，切换或关闭时确认；切换外观不会丢失草稿。"},{directive:"on",arg:"update:model-value",raw:'@update:model-value="file.dirty = true"',expression:{left:{raw:["file.dirty"]},operator:"=",right:{literal:!0}}}],children:[]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"w-fit"},{directive:"bind",arg:"disabled",raw:':disabled="!file.dirty"',expression:{not:{raw:["file.dirty"]}}},{directive:"on",arg:"click",raw:'@click="file.dirty = false"',expression:{left:{raw:["file.dirty"]},operator:"=",right:{literal:!1}}}],children:[{text:"保存草稿"}]}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"empty",raw:"#empty",expression:void 0}],children:[{text:"打开或新建一个文件。"}]}]},{tag:"XDialog",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"open",raw:':open="confirming"',expression:{raw:["confirming"]}},{name:"title",value:"草稿尚未保存"},{name:"description",value:"切换会保留草稿，关闭会移除文档。是否继续？"},{directive:"on",arg:"update:open",raw:'@update:open="!$event && settle(false)"',expression:{left:{not:{raw:["$event"]}},operator:"&&",right:{raw:["settle(false)"]}}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"footer",raw:"#footer",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="settle(false)"',expression:{raw:["settle(false)"]}}],children:[{text:"取消"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"on",arg:"click",raw:'@click="settle(true)"',expression:{raw:["settle(true)"]}}],children:[{text:"继续"}]}]}]}]}],styles:""},defaults:{variant:"card"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { onBeforeUnmount, reactive, ref } from 'vue'
import { FileText, Plus } from '@lucide/vue'
import {
  xToast,
  XTabs,
  XTabItem,
  XButton,
  XTextarea,
  XDialog,
  type XTabsValue,
  type XTabsChangeContext,
} from '@libingchen/x-ui'
interface State {
  variant: 'line' | 'card' | 'segment'
}
const state = reactive<State>(`,after:`)
const active = ref<XTabsValue | null>('1')
const files = ref([
  { id: '1', name: '项目说明.md', text: '', dirty: false, closing: false },
  { id: '2', name: '会议记录.md', text: '', dirty: false, closing: false },
])
let sequence = 2
const confirming = ref(false)
let finish: ((allowed: boolean) => void) | undefined
function settle(allowed: boolean) {
  const resolve = finish
  finish = undefined
  confirming.value = false
  resolve?.(allowed)
}
function confirm(signal?: AbortSignal) {
  settle(false)
  if (signal?.aborted) return Promise.resolve(false)
  confirming.value = true
  return new Promise<boolean>((resolve) => {
    const abort = () => settle(false)
    signal?.addEventListener('abort', abort, { once: true })
    finish = (allowed) => {
      signal?.removeEventListener('abort', abort)
      resolve(allowed)
    }
  })
}
async function beforeChange(_value: XTabsValue, context: XTabsChangeContext) {
  const current = files.value.find((file) => file.id === context.from)
  return !current?.dirty || (await confirm(context.signal))
}
async function requestClose(value: XTabsValue) {
  const file = files.value.find((item) => item.id === value)
  if (!file || file.closing) return
  file.closing = true
  try {
    if (!file.dirty || (await confirm())) files.value = files.value.filter((item) => item !== file)
  } finally {
    file.closing = false
  }
}
function createFile() {
  const id = String(++sequence)
  files.value.push({ id, name: \`文档 \${id}.md\`, text: '', dirty: false, closing: false })
  active.value = id
}
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
function report() {
  notify('切换未完成，请重试')
}
onBeforeUnmount(() => settle(false))
<\/script>
<template>
  <div class="demo grid w-full min-w-0 gap-3">
    <XTabs
      data-testid="file-tabs"
      v-model="active"
      :variant="state.variant"
      :before-change="beforeChange"
      aria-label="文件工作区"
      @close="requestClose"
      @error="report"
    >
      <template #header-end
        ><XButton variant="ghost" shape="icon" aria-label="新建文件" @click="createFile"
          ><Plus data-icon /></XButton
      ></template>
      <XTabItem
        v-for="file in files"
        :key="file.id"
        :value="file.id"
        :label="file.name"
        :icon="FileText"
        :closing="file.closing"
        closable
      >
        <template #label>{{ file.name }}{{ file.dirty ? ' ·' : '' }}</template>
        <div class="grid gap-3">
          <XTextarea
            v-model="file.text"
            :aria-label="file.name"
            placeholder="写下内容，切换或关闭时确认；切换外观不会丢失草稿。"
            @update:model-value="file.dirty = true"
          /><XButton class="w-fit" :disabled="!file.dirty" @click="file.dirty = false"
            >保存草稿</XButton
          >
        </div>
      </XTabItem>
      <template #empty>打开或新建一个文件。</template>
    </XTabs>
    <XDialog
      :open="confirming"
      title="草稿尚未保存"
      description="切换会保留草稿，关闭会移除文档。是否继续？"
      @update:open="!$event && settle(false)"
      ><template #footer
        ><XButton variant="outline" @click="settle(false)">取消</XButton
        ><XButton @click="settle(true)">继续</XButton></template
      ></XDialog
    >
  </div>
</template>`,start:396,end:415};export{e as default};
