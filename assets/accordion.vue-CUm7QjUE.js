const e={title:"项目接入常见问题",description:"通过折叠面板组织问答，体验单项与多项展开、再次收起和禁用条目。",component:"XAccordion",controls:{type:{label:"展开模式",options:["single","multiple"]},collapsible:{label:"允许全部收起"},disabled:{label:"禁用全部"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAccordion",source:"XAccordion",typeOnly:!1},{name:"XAccordionItem",source:"XAccordionItem",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XAccordion",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"key",raw:':key="state.type"',expression:{key:"type",model:void 0}},{directive:"bind",arg:"type",raw:':type="state.type"',expression:{key:"type",model:void 0}},{directive:"bind",arg:"collapsible",raw:':collapsible="state.collapsible"',expression:{key:"collapsible",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"XAccordionItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"access"},{name:"title",value:"如何申请项目权限？"}],children:[{text:"联系项目负责人，提供工作邮箱和需要访问的资源范围。"}]},{tag:"XAccordionItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"review"},{name:"title",value:"如何提交设计评审？"}],children:[{text:"准备交互说明与关键状态，在项目日历中预约评审时间。"}]},{tag:"XAccordionItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"archive"},{name:"title",value:"归档项目如何恢复？"},{name:"disabled",value:void 0}],children:[{text:"请由项目管理员恢复。"}]}]}]}],styles:`
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
`},defaults:{type:"single",collapsible:!0,disabled:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XAccordion, XAccordionItem } from '@libingchen/x-ui'

interface State {
  type: 'single' | 'multiple'
  collapsible: boolean
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XAccordion
      :key="state.type"
      :type="state.type"
      :collapsible="state.collapsible"
      :disabled="state.disabled"
      :size="state.size"
      ><XAccordionItem value="access" title="如何申请项目权限？"
        >联系项目负责人，提供工作邮箱和需要访问的资源范围。</XAccordionItem
      ><XAccordionItem value="review" title="如何提交设计评审？"
        >准备交互说明与关键状态，在项目日历中预约评审时间。</XAccordionItem
      ><XAccordionItem value="archive" title="归档项目如何恢复？" disabled
        >请由项目管理员恢复。</XAccordionItem
      ></XAccordion
    >
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
</style>`,start:318,end:398};export{e as default};
