const e={title:"任务结果反馈",description:"为用户解释导入结果，并提供下一步操作；切换错误状态时同步更新反馈内容。",component:"XAlert",controls:{variant:{label:"语义",options:["default","destructive"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},title:{label:"标题"},description:{label:"说明"},action:{label:"显示后续操作",api:"default slot"}},presets:[{label:"导入失败",state:{variant:"destructive",title:"部分记录导入失败",description:"3 条记录缺少必填字段，请检查后重试。"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAlert",source:"XAlert",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"CircleCheck",source:"CircleCheck",typeOnly:!1},{name:"CircleAlert",source:"CircleAlert",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XAlert",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"media",raw:"#media",expression:void 0}],children:[{tag:"CircleCheck",unwrap:!1,selfClosing:!0,props:[{directive:"if",arg:void 0,raw:`v-if="state.variant === 'default'"`,expression:{left:{key:"variant",model:void 0},operator:"===",right:{literal:"default"}}}],children:[]},{tag:"CircleAlert",unwrap:!1,selfClosing:!0,props:[{directive:"else",arg:void 0,raw:"v-else",expression:void 0}],children:[]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.action"',expression:{key:"action",model:void 0}},{directive:"slot",arg:"action",raw:"#action",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:`@click="result = '已打开导入明细'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已打开导入明细"}}}],children:[{text:"查看明细"}]}]}]},{text:""}]}],styles:`
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
`},defaults:{variant:"default",size:void 0,title:"数据导入完成",description:"已导入 24 条记录，可以继续查看详情。",action:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XAlert, XButton } from '@libingchen/x-ui'
import { CircleCheck, CircleAlert } from '@lucide/vue'

interface State {
  variant: 'default' | 'destructive'
  size: 'sm' | 'md' | 'lg' | undefined
  title: string
  description: string
  action: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XAlert
      :variant="state.variant"
      :size="state.size"
      :title="state.title"
      :description="state.description"
      ><template #media
        ><CircleCheck v-if="state.variant === 'default'" /><CircleAlert v-else /></template
      ><template v-if="state.action" #action
        ><XButton size="sm" variant="outline" @click="result = '已打开导入明细'"
          >查看明细</XButton
        ></template
      ></XAlert
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
</style>`,start:387,end:505};export{e as default};
