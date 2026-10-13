const e={title:"确认归档项目",description:"重要操作使用明确的确认和取消入口，展示风险说明、按钮文案以及最终选择。",component:"XAlertDialog",controls:{loading:{label:"加载中"},loadingText:{label:"加载文案"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingBlocking:{label:"阻止区域操作"},open:{label:"打开状态"},title:{label:"标题"},description:{label:"说明"},confirmText:{label:"确认文案"},cancelText:{label:"取消文案"},actionVariant:{label:"确认按钮外观",options:["default","destructive","outline"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAlertDialog",source:"XAlertDialog",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]},{names:["result"],chunks:["const result = ref('项目处于活动状态。')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XAlertDialog",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}},{directive:"bind",arg:"confirm-text",raw:':confirm-text="state.confirmText"',expression:{key:"confirmText",model:void 0}},{directive:"bind",arg:"cancel-text",raw:':cancel-text="state.cancelText"',expression:{key:"cancelText",model:void 0}},{directive:"bind",arg:"action-variant",raw:':action-variant="state.actionVariant"',expression:{key:"actionVariant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"on",arg:"confirm",raw:`@confirm="result = '项目已归档（本地演示）'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"项目已归档（本地演示）"}}},{directive:"on",arg:"cancel",raw:`@cancel="result = '已取消归档'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已取消归档"}}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{text:"归档项目"}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{loading:!1,loadingText:"加载中",loadingDelay:150,loadingBlocking:!0,open:!1,title:"归档这个项目？",description:"归档后项目将从工作列表移除，已有文档会被保留。",confirmText:"归档项目",cancelText:"继续编辑",actionVariant:"destructive",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XAlertDialog, XButton } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingText: string
  loadingDelay: number
  loadingBlocking: boolean
  open: boolean
  title: string
  description: string
  confirmText: string
  cancelText: string
  actionVariant: 'default' | 'destructive' | 'outline'
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const result = ref('项目处于活动状态。')
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XAlertDialog
        :loading="state.loading"
        :loading-text="state.loadingText"
        :loading-delay="state.loadingDelay"
        :loading-blocking="state.loadingBlocking"
        v-model:open="state.open"
        :title="state.title"
        :description="state.description"
        :confirm-text="state.confirmText"
        :cancel-text="state.cancelText"
        :action-variant="state.actionVariant"
        :size="state.size"
        @confirm="result = '项目已归档（本地演示）'"
        @cancel="result = '已取消归档'"
        ><template #trigger><XButton variant="outline">归档项目</XButton></template></XAlertDialog
      >
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
</style>`,start:488,end:750};export{e as default};
