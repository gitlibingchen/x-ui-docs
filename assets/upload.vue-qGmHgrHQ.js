const e={title:"上传项目资料",description:"选择或拖入文件，体验数量限制、类型限制、上传进度和失败重试。此示例使用本地模拟请求，文件不会发送到服务器。",component:"XUpload",controls:{multiple:{label:"多文件"},drag:{label:"拖拽上传"},autoUpload:{label:"自动上传"},disabled:{label:"禁用"},maxCount:{label:"最多文件数",min:1,max:10},accept:{label:"允许的文件类型"},fail:{label:"模拟上传失败",api:"customRequest"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XUpload",source:"XUpload",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XUploadFile",source:"type XUploadFile",typeOnly:!1},{name:"XUploadRequest",source:"type XUploadRequest",typeOnly:!1},{name:"XUploadExposed",source:"type XUploadExposed",typeOnly:!1}],sideEffect:!1}],statements:[{names:["files"],chunks:["const files = ref<XUploadFile[]>([])"]},{names:["upload"],chunks:["const upload = ref<XUploadExposed>()"]},{names:["result"],chunks:["const result = ref('等待选择文件。')"]},{names:["timers"],chunks:["const timers = new Set<ReturnType<typeof setInterval>>()"]},{names:["request"],chunks:[`const request: XUploadRequest = ({ signal, onProgress, onSuccess, onError }) => {
  let progress = 0
  const timer = setInterval(() => {
    progress += 25
    onProgress(progress)
    if (progress >= 100) {
      clearInterval(timer)
      timers.delete(timer)
      `,{key:"fail",model:void 0},` ? onError(new Error('模拟请求失败')) : onSuccess({ uploaded: true })
    }
  }, 200)
  timers.add(timer)
  signal.addEventListener(
    'abort',
    () => {
      clearInterval(timer)
      timers.delete(timer)
    },
    { once: true },
  )
}`]},{names:[],chunks:[`onBeforeUnmount(() => {
  for (const timer of timers) clearInterval(timer)
})`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XUpload",unwrap:!1,selfClosing:!0,props:[{name:"ref",value:"upload"},{directive:"model",arg:void 0,raw:'v-model="files"',expression:{raw:["files"]}},{directive:"bind",arg:"multiple",raw:':multiple="state.multiple"',expression:{key:"multiple",model:void 0}},{directive:"bind",arg:"drag",raw:':drag="state.drag"',expression:{key:"drag",model:void 0}},{directive:"bind",arg:"auto-upload",raw:':auto-upload="state.autoUpload"',expression:{key:"autoUpload",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"max-count",raw:':max-count="state.maxCount"',expression:{key:"maxCount",model:void 0}},{directive:"bind",arg:"accept",raw:':accept="state.accept"',expression:{key:"accept",model:void 0}},{directive:"bind",arg:"custom-request",raw:':custom-request="request"',expression:{raw:["request"]}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"title",value:"添加项目资料"},{name:"description",value:"PDF、文本或图片 · 本地模拟上传"},{directive:"on",arg:"reject",raw:'@reject="result = `有 ${$event.length} 个文件未通过限制`"',expression:{left:{raw:["result"]},operator:"=",right:{raw:["`有 ${$event.length} 个文件未通过限制`"]}}},{directive:"on",arg:"success",raw:'@success="result = `${$event.name} 上传完成`"',expression:{left:{raw:["result"]},operator:"=",right:{raw:["`${$event.name} 上传完成`"]}}},{directive:"on",arg:"error",raw:"@error=\"result = 'name' in $event ? `${$event.name} 上传失败，可以重试` : '上传失败'\"",expression:{left:{raw:["result"]},operator:"=",right:{condition:{left:{literal:"name"},operator:"in",right:{raw:["$event"]}},yes:{raw:["`${$event.name} 上传失败，可以重试`"]},no:{literal:"上传失败"}}}}],children:[]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="!state.autoUpload"',expression:{not:{key:"autoUpload",model:void 0}}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:'@click="upload?.upload()"',expression:{raw:["upload?.upload()"]}}],children:[{text:"开始上传"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="upload?.clear()"',expression:{raw:["upload?.clear()"]}}],children:[{text:"清空文件"}]}]},{text:""}]}],styles:`
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
`},defaults:{multiple:!0,drag:!0,autoUpload:!0,disabled:!1,maxCount:3,accept:".pdf,.txt,.png,.jpg",fail:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref, onBeforeUnmount } from 'vue'
import {
  XUpload,
  XButton,
  type XUploadFile,
  type XUploadRequest,
  type XUploadExposed,
} from '@libingchen/x-ui'

interface State {
  multiple: boolean
  drag: boolean
  autoUpload: boolean
  disabled: boolean
  maxCount: number
  accept: string
  fail: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const files = ref<XUploadFile[]>([])
const upload = ref<XUploadExposed>()
const result = ref('等待选择文件。')
const timers = new Set<ReturnType<typeof setInterval>>()
const request: XUploadRequest = ({ signal, onProgress, onSuccess, onError }) => {
  let progress = 0
  const timer = setInterval(() => {
    progress += 25
    onProgress(progress)
    if (progress >= 100) {
      clearInterval(timer)
      timers.delete(timer)
      state.fail ? onError(new Error('模拟请求失败')) : onSuccess({ uploaded: true })
    }
  }, 200)
  timers.add(timer)
  signal.addEventListener(
    'abort',
    () => {
      clearInterval(timer)
      timers.delete(timer)
    },
    { once: true },
  )
}
onBeforeUnmount(() => {
  for (const timer of timers) clearInterval(timer)
})
<\/script>

<template>
  <div class="demo">
    <XUpload
      ref="upload"
      v-model="files"
      :multiple="state.multiple"
      :drag="state.drag"
      :auto-upload="state.autoUpload"
      :disabled="state.disabled"
      :max-count="state.maxCount"
      :accept="state.accept"
      :custom-request="request"
      :size="state.size"
      title="添加项目资料"
      description="PDF、文本或图片 · 本地模拟上传"
      @reject="result = \`有 \${$event.length} 个文件未通过限制\`"
      @success="result = \`\${$event.name} 上传完成\`"
      @error="result = 'name' in $event ? \`\${$event.name} 上传失败，可以重试\` : '上传失败'"
    />
    <div class="row">
      <XButton v-if="!state.autoUpload" :disabled="state.disabled" @click="upload?.upload()"
        >开始上传</XButton
      ><XButton variant="outline" @click="upload?.clear()">清空文件</XButton>
    </div>
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
</style>`,start:458,end:614};export{e as default};
