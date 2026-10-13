const e={title:"正文布局、加载与插槽",description:"固定高度配合 scroll 让正文内部滚动；flow 按内容自然展开，fill 将剩余空间交给内容。header/content 插槽保持固定，parts 显式定制面板内距。加载状态属于单个 XTabItem，不阻止导航切换。",component:"XTabs",controls:{contentMode:{label:"正文布局",options:["scroll","flow","fill"]},orientation:{label:"方向",options:["horizontal","vertical"]},loading:{label:"加载中",api:"XTabItem.loading"},loadingBlocking:{label:"阻止正文操作",api:"XTabItem.loadingBlocking"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3,api:"XTabItem.loadingDelay"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"computed",source:"computed",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XBadge",source:"XBadge",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelLoading"],chunks:["const modelLoading = ref<boolean>(",{key:"loading"},")"]},{names:["rowCount"],chunks:["const rowCount = computed(() => ({ flow: 16, fill: 3, scroll: 16 })[",{key:"contentMode",model:void 0},"])"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-3"}],children:[{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"line"},{directive:"bind",arg:"height",raw:`:height="state.contentMode === 'flow' ? undefined : 280"`,expression:{condition:{left:{key:"contentMode",model:void 0},operator:"===",right:{literal:"flow"}},yes:{absent:!0},no:{literal:280}}},{directive:"bind",arg:"content-mode",raw:':content-mode="state.contentMode"',expression:{key:"contentMode",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"parts",raw:`:parts="{ panel: { class: 'p-3' } }"`,expression:{object:[{name:"panel",value:{object:[{name:"class",value:{literal:"p-3"}}]}}]}},{name:"aria-label",value:"项目动态"}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"header-start",raw:"#header-start",expression:void 0}],children:[{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"secondary"}],children:[{text:"项目"}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"header-end",raw:"#header-end",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{directive:"on",arg:"click",raw:'@click="state.loading = !state.loading"',expression:{left:{key:"loading",model:"modelLoading"},operator:"=",right:{not:{key:"loading",model:"modelLoading"}}}}],children:[{interpolation:{condition:{key:"loading",model:"modelLoading"},yes:{literal:"完成加载"},no:{literal:"重新加载"}}}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"content-start",raw:"#content-start",expression:void 0}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-xs text-muted-foreground"}],children:[{text:"固定说明：正文和标签条分别滚动。"}]}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"activity"},{name:"label",value:"动态"},{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:"modelLoading"}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{name:"loading-text",value:"正在同步项目动态"}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"default",raw:'#default="{ active, visited }"',expression:{raw:["{ active, visited }"]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"grid gap-3"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-sm text-muted-foreground"}],children:[{text:"活动："},{interpolation:{raw:["active"]}},{text:" · 已访问："},{interpolation:{raw:["visited"]}}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="n in rowCount"',expression:{raw:["n in rowCount"]}},{directive:"bind",arg:"key",raw:':key="n"',expression:{raw:["n"]}}],children:[{text:"动态 "},{interpolation:{raw:["n"]}},{text:"：团队更新了任务进度。"}]}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"loading",raw:"#loading",expression:void 0}],children:[{tag:"span",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"}],children:[{text:"正在同步项目动态…"}]}]}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"summary"},{name:"label",value:"摘要"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"本周 12 项任务已完成。"}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"content-end",raw:'#content-end="{ items }"',expression:{raw:["{ items }"]}}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"text-xs text-muted-foreground"}],children:[{text:"共 "},{interpolation:{raw:["items.length"]}},{text:" 个页签"}]}]}]}]}],styles:""},defaults:{contentMode:"scroll",orientation:"horizontal",loading:!1,loadingBlocking:!0,loadingDelay:150},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { computed, reactive } from 'vue'
import { XTabs, XTabItem, XButton, XBadge } from '@libingchen/x-ui'
interface State {
  contentMode: 'flow' | 'fill' | 'scroll'
  orientation: 'horizontal' | 'vertical'
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
}
const state = reactive<State>(`,after:`)
const rowCount = computed(() => ({ flow: 16, fill: 3, scroll: 16 })[state.contentMode])
<\/script>

<template>
  <div class="demo grid w-full min-w-0 gap-3">
    <XTabs
      variant="line"
      :height="state.contentMode === 'flow' ? undefined : 280"
      :content-mode="state.contentMode"
      :orientation="state.orientation"
      :parts="{ panel: { class: 'p-3' } }"
      aria-label="项目动态"
    >
      <template #header-start><XBadge variant="secondary">项目</XBadge></template>
      <template #header-end
        ><XButton variant="ghost" @click="state.loading = !state.loading">{{
          state.loading ? '完成加载' : '重新加载'
        }}</XButton></template
      >
      <template #content-start
        ><p class="text-xs text-muted-foreground">固定说明：正文和标签条分别滚动。</p></template
      >
      <XTabItem
        value="activity"
        label="动态"
        :loading="state.loading"
        :loading-blocking="state.loadingBlocking"
        :loading-delay="state.loadingDelay"
        loading-text="正在同步项目动态"
      >
        <template #default="{ active, visited }">
          <div class="grid gap-3">
            <p class="text-sm text-muted-foreground">活动：{{ active }} · 已访问：{{ visited }}</p>
            <p v-for="n in rowCount" :key="n">动态 {{ n }}：团队更新了任务进度。</p>
          </div>
        </template>
        <template #loading><span role="status">正在同步项目动态…</span></template>
      </XTabItem>
      <XTabItem value="summary" label="摘要"><p>本周 12 项任务已完成。</p></XTabItem>
      <template #content-end="{ items }"
        ><p class="text-xs text-muted-foreground">共 {{ items.length }} 个页签</p></template
      >
    </XTabs>
  </div>
</template>`,start:373,end:494};export{e as default};
