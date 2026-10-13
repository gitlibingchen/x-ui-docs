const e={title:"项目工作台导航",description:"在独立预览中体验侧栏展开、图标折叠、分组与当前页面。侧栏的固定定位保留真实行为。",component:"XSidebar",controls:{open:{label:"展开侧栏"},activeItem:{label:"当前页面",options:["overview","tasks","files"]},variant:{label:"外观",options:["sidebar","floating","inset"]},collapsible:{label:"折叠方式",options:["icon","offcanvas","none"]},side:{label:"侧栏位置",options:["left","right"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSidebar",source:"XSidebar",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"LayoutDashboard",source:"LayoutDashboard",typeOnly:!1},{name:"CheckSquare",source:"CheckSquare",typeOnly:!1},{name:"FolderOpen",source:"FolderOpen",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelActiveItem"],chunks:["const modelActiveItem = ref<'overview' | 'tasks' | 'files'>(",{key:"activeItem"},")"]},{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]},{names:["groups"],chunks:[`const groups = [
  {
    label: '工作区',
    items: [
      { value: 'overview', label: '项目概览', icon: LayoutDashboard },
      { value: 'tasks', label: '我的任务', icon: CheckSquare, badge: 8 },
      { value: 'files', label: '项目资料', icon: FolderOpen },
    ],
  },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XSidebar",unwrap:!1,selfClosing:void 0,props:[{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"active-item",raw:':active-item="state.activeItem"',expression:{key:"activeItem",model:"modelActiveItem"}},{directive:"bind",arg:"groups",raw:':groups="groups"',expression:{raw:["groups"]}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"collapsible",raw:':collapsible="state.collapsible"',expression:{key:"collapsible",model:void 0}},{directive:"bind",arg:"side",raw:':side="state.side"',expression:{key:"side",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"persist-cookie",raw:':persist-cookie="false"',expression:{literal:!1}},{directive:"bind",arg:"keyboard-shortcut",raw:':keyboard-shortcut="false"',expression:{literal:!1}},{directive:"bind",arg:"mobile-breakpoint",raw:':mobile-breakpoint="0"',expression:{literal:0}},{name:"width",value:"180px"},{directive:"on",arg:"select",raw:`@select="state.activeItem = $event.value as State['activeItem']"`,expression:{left:{key:"activeItem",model:"modelActiveItem"},operator:"=",right:{raw:["$event.value as 'overview' | 'tasks' | 'files'"]}}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"header",raw:"#header",expression:void 0}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目工作台"}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"footer",raw:"#footer",expression:void 0}],children:[{tag:"span",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"团队协作空间"}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"inset",raw:'#inset="{ toggle }"',expression:{raw:["{ toggle }"]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack"},{name:"style",value:"padding: 20px"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{name:"size",value:"sm"},{directive:"on",arg:"click",raw:'@click="toggle"',expression:{raw:["toggle"]}}],children:[{text:"切换侧栏"}]}]},{tag:"h3",unwrap:!1,selfClosing:void 0,props:[],children:[{interpolation:{raw:["groups[0]?.items.find((item) => item.value === ",{key:"activeItem",model:"modelActiveItem"},")?.label"]}}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"通过侧栏切换页面，观察当前项和折叠状态。"}]}]}]}]}]}],styles:`
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
`},defaults:{open:!0,activeItem:"overview",variant:"sidebar",collapsible:"icon",side:"left",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSidebar, XButton } from '@libingchen/x-ui'
import { LayoutDashboard, CheckSquare, FolderOpen } from '@lucide/vue'

interface State {
  open: boolean
  activeItem: 'overview' | 'tasks' | 'files'
  variant: 'sidebar' | 'floating' | 'inset'
  collapsible: 'icon' | 'offcanvas' | 'none'
  side: 'left' | 'right'
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const groups = [
  {
    label: '工作区',
    items: [
      { value: 'overview', label: '项目概览', icon: LayoutDashboard },
      { value: 'tasks', label: '我的任务', icon: CheckSquare, badge: 8 },
      { value: 'files', label: '项目资料', icon: FolderOpen },
    ],
  },
]
<\/script>

<template>
  <div class="demo">
    <XSidebar
      v-model:open="state.open"
      :active-item="state.activeItem"
      :groups="groups"
      :variant="state.variant"
      :collapsible="state.collapsible"
      :side="state.side"
      :size="state.size"
      :persist-cookie="false"
      :keyboard-shortcut="false"
      :mobile-breakpoint="0"
      width="180px"
      @select="state.activeItem = $event.value as State['activeItem']"
      ><template #header><strong>项目工作台</strong></template
      ><template #footer><span class="note">团队协作空间</span></template
      ><template #inset="{ toggle }"
        ><div class="stack" style="padding: 20px">
          <div class="row">
            <XButton variant="outline" size="sm" @click="toggle">切换侧栏</XButton>
          </div>
          <h3>{{ groups[0]?.items.find((item) => item.value === state.activeItem)?.label }}</h3>
          <p class="note">通过侧栏切换页面，观察当前项和折叠状态。</p>
        </div></template
      ></XSidebar
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
</style>`,start:482,end:605};export{e as default};
