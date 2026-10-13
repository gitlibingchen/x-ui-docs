const n={title:"函数式创建确认任务",description:"完整展示函数式调用、结果等待与 Provider 接入。适合工具模块发起的确认流程。",component:"XDialog",controls:{title:{label:"标题"},description:{label:"说明"},confirmText:{label:"确认文案"},cancelText:{label:"取消文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"xConfirmDialog",source:"xConfirmDialog",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('尚未提交评审。')"]},{names:["confirm"],chunks:[`async function confirm() {
  const accepted = await xConfirmDialog({
    title: `,{key:"title",model:void 0},`,
    description: `,{key:"description",model:void 0},`,
    confirmText: `,{key:"confirmText",model:void 0},`,
    cancelText: `,{key:"cancelText",model:void 0},`,
  })
  result.value = accepted ? '已提交评审' : '已取消提交'
}`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="confirm"',expression:{raw:["confirm"]}}],children:[{text:"提交评审"}]}]}]},{text:""}]}],styles:`
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
`},defaults:{title:"提交项目评审？",description:"确认后将把当前版本标记为待评审。",confirmText:"提交评审",cancelText:"继续修改"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XConfigProvider, XButton, xConfirmDialog } from '@libingchen/x-ui'

interface State {
  title: string
  description: string
  confirmText: string
  cancelText: string
}
const state = reactive<State>(`,after:`)
const result = ref('尚未提交评审。')
async function confirm() {
  const accepted = await xConfirmDialog({
    title: state.title,
    description: state.description,
    confirmText: state.confirmText,
    cancelText: state.cancelText,
  })
  result.value = accepted ? '已提交评审' : '已取消提交'
}
<\/script>

<template>
  <div class="demo">
    <XConfigProvider
      ><div class="row">
        <XButton variant="outline" @click="confirm">提交评审</XButton>
      </div></XConfigProvider
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
</style>`,start:306,end:409};export{n as default};
