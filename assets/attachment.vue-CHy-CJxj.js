const e={title:"项目附件状态",description:"展示附件名称、大小与操作，切换待上传、处理中和错误状态；操作反馈保留在附件旁。",component:"XAttachment",controls:{title:{label:"文件名"},description:{label:"文件说明"},state:{label:"附件状态",options:["idle","uploading","processing","done","error"]},orientation:{label:"排列方向",options:["horizontal","vertical"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAttachment",source:"XAttachment",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"FileText",source:"FileText",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XAttachment",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}},{directive:"bind",arg:"state",raw:':state="state.state"',expression:{key:"state",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"media",raw:"#media",expression:void 0}],children:[{tag:"FileText",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="24"',expression:{literal:24}}],children:[]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"actions",raw:"#actions",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"size",value:"sm"},{directive:"bind",arg:"disabled",raw:`:disabled="state.state === 'uploading'"`,expression:{left:{key:"state",model:void 0},operator:"===",right:{literal:"uploading"}}},{directive:"on",arg:"click",raw:`@click="result = state.state === 'error' ? '已请求重新上传' : '已打开附件详情'"`,expression:{left:{raw:["result"]},operator:"=",right:{condition:{left:{key:"state",model:void 0},operator:"===",right:{literal:"error"}},yes:{literal:"已请求重新上传"},no:{literal:"已打开附件详情"}}}}],children:[{interpolation:{condition:{left:{key:"state",model:void 0},operator:"===",right:{literal:"error"}},yes:{literal:"重试"},no:{literal:"详情"}}}]}]}]},{text:""}]}],styles:`
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
`},defaults:{title:"项目说明.pdf",description:"PDF · 2.4 MB",state:"done",orientation:"horizontal",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XAttachment, XButton } from '@libingchen/x-ui'
import { FileText } from '@lucide/vue'

interface State {
  title: string
  description: string
  state: 'idle' | 'uploading' | 'processing' | 'done' | 'error'
  orientation: 'horizontal' | 'vertical'
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XAttachment
      :title="state.title"
      :description="state.description"
      :state="state.state"
      :orientation="state.orientation"
      :size="state.size"
      ><template #media><FileText :size="24" /></template
      ><template #actions
        ><XButton
          variant="ghost"
          size="sm"
          :disabled="state.state === 'uploading'"
          @click="result = state.state === 'error' ? '已请求重新上传' : '已打开附件详情'"
          >{{ state.state === 'error' ? '重试' : '详情' }}</XButton
        ></template
      ></XAttachment
    >
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
</style>`,start:426,end:546};export{e as default};
