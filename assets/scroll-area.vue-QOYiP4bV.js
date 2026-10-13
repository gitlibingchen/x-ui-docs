const e={title:"浏览活动记录",description:"在受限区域中滚动查看活动，调整滚动条的出现方式与方向；横向模式展示时间线。",component:"XScrollArea",controls:{orientation:{label:"滚动方向",options:["vertical","horizontal","both"]},type:{label:"滚动条显示",options:["hover","auto","always","scroll"]},height:{label:"容器高度",min:140,max:360},footer:{label:"固定底栏",api:"footer slot"},count:{label:"记录条数",min:3,max:30},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XScrollArea",source:"XScrollArea",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"style",raw:`:style="{ height: state.height + 'px' }"`,expression:{object:[{name:"height",value:{left:{key:"height",model:void 0},operator:"+",right:{literal:"px"}}}]}}],children:[{tag:"XScrollArea",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{name:"class",value:"scroll-view"},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"type",raw:':type="state.type"',expression:{key:"type",model:void 0}},{directive:"bind",arg:"parts",raw:`:parts="{
          viewport: { tabindex: 0, 'aria-label': '项目活动记录' },
          footer: { class: 'fixed-footer' },
        }"`,expression:{object:[{name:"viewport",value:{object:[{name:"tabindex",value:{literal:0}},{name:"'aria-label'",value:{literal:"项目活动记录"}}]}},{name:"footer",value:{object:[{name:"class",value:{literal:"fixed-footer"}}]}}]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"class",raw:`:class="state.orientation === 'horizontal' ? 'timeline' : 'stack'"`,expression:{condition:{left:{key:"orientation",model:void 0},operator:"===",right:{literal:"horizontal"}},yes:{literal:"timeline"},no:{literal:"stack"}}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="index in state.count"',expression:{raw:["index in ",{key:"count",model:void 0},""]}},{directive:"bind",arg:"key",raw:':key="index"',expression:{raw:["index"]}},{name:"class",value:"activity"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目活动 "},{interpolation:{raw:["index"]}}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"林澄更新了设计说明，邀请团队查看。"}]}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.footer"',expression:{key:"footer",model:void 0}},{directive:"slot",arg:"footer",raw:"#footer",expression:void 0}],children:[{interpolation:{key:"count",model:void 0}},{text:" 条活动"}]}]}]}]}],styles:`
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
.activity {
  padding: 12px;
  border-bottom: 1px solid var(--x-border);
}
.timeline {
  display: flex;
  width: max-content;
}
.timeline .activity {
  width: 220px;
}
.fixed-footer {
  height: 32px;
  border-top: 1px solid var(--x-border);
  padding-inline: 12px;
  font-size: 12px;
}
.scroll-view {
  height: 100%;
}
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",orientation:"vertical",type:"hover",height:240,count:12,footer:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XScrollArea } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  orientation: 'vertical' | 'horizontal' | 'both'
  type: 'hover' | 'auto' | 'always' | 'scroll'
  height: number
  count: number
  footer: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div :style="{ height: state.height + 'px' }">
      <XScrollArea
        :loading="state.loading"
        :loading-blocking="state.loadingBlocking"
        :loading-delay="state.loadingDelay"
        :loading-text="state.loadingText"
        class="scroll-view"
        :orientation="state.orientation"
        :type="state.type"
        :parts="{
          viewport: { tabindex: 0, 'aria-label': '项目活动记录' },
          footer: { class: 'fixed-footer' },
        }"
        ><div :class="state.orientation === 'horizontal' ? 'timeline' : 'stack'">
          <div v-for="index in state.count" :key="index" class="activity">
            <strong>项目活动 {{ index }}</strong>
            <p class="note">林澄更新了设计说明，邀请团队查看。</p>
          </div>
        </div>
        <template v-if="state.footer" #footer>{{ state.count }} 条活动</template>
      </XScrollArea>
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
.activity {
  padding: 12px;
  border-bottom: 1px solid var(--x-border);
}
.timeline {
  display: flex;
  width: max-content;
}
.timeline .activity {
  width: 220px;
}
.fixed-footer {
  height: 32px;
  border-top: 1px solid var(--x-border);
  padding-inline: 12px;
  font-size: 12px;
}
.scroll-view {
  height: 100%;
}
</style>`,start:430,end:608};export{e as default};
