const e={title:"没有匹配的项目",description:"空状态解释原因并给出下一步操作。切换首次使用与搜索无结果场景，观察文案与操作的变化。",component:"XEmpty",controls:{title:{label:"标题"},description:{label:"说明"},action:{label:"操作文案",api:"default slot"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},mediaVariant:{label:"图标容器",options:["default","icon"]}},presets:[{label:"搜索无结果",state:{title:"没有找到匹配的项目",description:"尝试更短的关键词，或清除当前筛选条件。",action:"清除筛选"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XEmpty",source:"XEmpty",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"FolderOpen",source:"FolderOpen",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XEmpty",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"media-variant",raw:':media-variant="state.mediaVariant"',expression:{key:"mediaVariant",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"media",raw:"#media",expression:void 0}],children:[{tag:"FolderOpen",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="24"',expression:{literal:24}}],children:[]}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"on",arg:"click",raw:`@click="result = '下一步：填写项目名称与负责人'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"下一步：填写项目名称与负责人"}}}],children:[{interpolation:{key:"action",model:void 0}}]}]},{text:""}]}],styles:`
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
`},defaults:{title:"还没有项目",description:"创建第一个项目，开始整理团队的工作。",action:"创建项目",size:void 0,mediaVariant:"icon"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XEmpty, XButton } from '@libingchen/x-ui'
import { FolderOpen } from '@lucide/vue'

interface State {
  title: string
  description: string
  action: string
  size: 'sm' | 'md' | 'lg' | undefined
  mediaVariant: 'default' | 'icon'
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XEmpty
      :title="state.title"
      :description="state.description"
      :size="state.size"
      :media-variant="state.mediaVariant"
      ><template #media><FolderOpen :size="24" /></template
      ><XButton @click="result = '下一步：填写项目名称与负责人'">{{
        state.action
      }}</XButton></XEmpty
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
</style>`,start:370,end:489};export{e as default};
