const e={title:"文章信息分区",description:"使用分隔线划分正文区块，或分隔同一行的导航操作；切换方向时同时调整场景布局。",component:"XSeparator",controls:{orientation:{label:"方向",options:["horizontal","vertical"]},decorative:{label:"装饰性分隔"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSeparator",source:"XSeparator",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"class",raw:`:class="state.orientation === 'vertical' ? 'row' : 'stack'"`,expression:{condition:{left:{key:"orientation",model:void 0},operator:"===",right:{literal:"vertical"}},yes:{literal:"row"},no:{literal:"stack"}}},{directive:"bind",arg:"style",raw:`:style="{ height: state.orientation === 'vertical' ? '48px' : undefined }"`,expression:{object:[{name:"height",value:{condition:{left:{key:"orientation",model:void 0},operator:"===",right:{literal:"vertical"}},yes:{literal:"48px"},no:{absent:!0}}}]}}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目概览"}]},{tag:"XSeparator",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"decorative",raw:':decorative="state.decorative"',expression:{key:"decorative",model:void 0}}],children:[]},{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"最近更新于今天 · 12 项变更"}]}]}]}],styles:`
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
`},defaults:{orientation:"horizontal",decorative:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSeparator } from '@libingchen/x-ui'

interface State {
  orientation: 'horizontal' | 'vertical'
  decorative: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div
      :class="state.orientation === 'vertical' ? 'row' : 'stack'"
      :style="{ height: state.orientation === 'vertical' ? '48px' : undefined }"
    >
      <strong>项目概览</strong
      ><XSeparator :orientation="state.orientation" :decorative="state.decorative" /><span
        >最近更新于今天 · 12 项变更</span
      >
    </div>
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
</style>`,start:253,end:300};export{e as default};
