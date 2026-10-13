const e={title:"项目概览卡片",description:"将项目摘要、负责人和操作组织为一个完整卡片，调节尺寸与正文高度，体验固定区域和内容滚动。",component:"XCard",controls:{title:{label:"标题"},description:{label:"说明"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},height:{label:"卡片高度",min:220,max:500},contentMode:{label:"正文模式",options:["scroll","flow","fill"]},longContent:{label:"较长正文"},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XCard",source:"XCard",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XBadge",source:"XBadge",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XCard",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{directive:"bind",arg:"description",raw:':description="state.description"',expression:{key:"description",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"height",raw:':height="state.height"',expression:{key:"height",model:void 0}},{directive:"bind",arg:"content-mode",raw:':content-mode="state.contentMode"',expression:{key:"contentMode",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"action",raw:"#action",expression:void 0}],children:[{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"secondary"}],children:[{text:"进行中"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"本周重点：完成核心表单与导航组件的交互验证。"}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="item in state.longContent ? 8 : 1"',expression:{raw:["item in ",{key:"longContent",model:void 0}," ? 8 : 1"]}},{directive:"bind",arg:"key",raw:':key="item"',expression:{raw:["item"]}},{name:"class",value:"note"}],children:[{text:" 里程碑 "},{interpolation:{raw:["item"]}},{text:" · 设计、研发与内容团队共同参与评审。 "}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"footer",raw:"#footer",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"on",arg:"click",raw:`@click="result = '已进入项目详情'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已进入项目详情"}}}],children:[{text:"查看项目"}]}]}]},{text:""}]}],styles:`
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
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",title:"设计系统升级",description:"统一产品界面与交互体验",size:void 0,height:280,contentMode:"scroll",longContent:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XCard, XButton, XBadge } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  title: string
  description: string
  size: 'sm' | 'md' | 'lg' | undefined
  height: number
  contentMode: 'scroll' | 'flow' | 'fill'
  longContent: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XCard
      :loading="state.loading"
      :loading-blocking="state.loadingBlocking"
      :loading-delay="state.loadingDelay"
      :loading-text="state.loadingText"
      :title="state.title"
      :description="state.description"
      :size="state.size"
      :height="state.height"
      :content-mode="state.contentMode"
      ><template #action><XBadge variant="secondary">进行中</XBadge></template>
      <div class="stack">
        <p>本周重点：完成核心表单与导航组件的交互验证。</p>
        <p v-for="item in state.longContent ? 8 : 1" :key="item" class="note">
          里程碑 {{ item }} · 设计、研发与内容团队共同参与评审。
        </p>
      </div>
      <template #footer
        ><XButton @click="result = '已进入项目详情'">查看项目</XButton></template
      ></XCard
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
</style>`,start:457,end:676};export{e as default};
