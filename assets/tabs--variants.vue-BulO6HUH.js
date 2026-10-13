const e={title:"三种外观",description:"三种导航栏的 sm／md／lg 总高统一为 32／36／40px。line 的通栏底边和活动短条可分别开关，card 使用宽松文档页签、独立卡片与分隔线，segment 使用紧凑的一体底槽。方向键只移动焦点，Enter 或空格确认。",component:"XTabs",controls:{orientation:{label:"方向",options:["horizontal","vertical"]},stretch:{label:"均分剩余空间"},size:{label:"尺寸",options:["sm","md","lg"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"FileText",source:"FileText",typeOnly:!1},{name:"History",source:"History",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XBadge",source:"XBadge",typeOnly:!1},{name:"XSwitch",source:"XSwitch",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelIndicator"],chunks:["const modelIndicator = ref<boolean>(",{key:"indicator"},")"]},{names:["modelBordered"],chunks:["const modelBordered = ref<boolean>(",{key:"bordered"},")"]},{names:["modelSize"],chunks:["const modelSize = ref<'sm' | 'md' | 'lg'>(",{key:"size"},")"]},{names:["sizes"],chunks:["const sizes = ['sm', 'md', 'lg'] as const"]},{names:["heights"],chunks:["const heights = { sm: 32, md: 36, lg: 40 }"]},{names:["variants"],chunks:["const variants = ['line', 'card', 'segment'] as const"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"data-testid",value:"tabs-variants"},{name:"class",value:"demo grid w-full min-w-0 gap-6"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap items-center gap-2"},{name:"role",value:"group"},{name:"aria-label",value:"导航栏尺寸"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="size in sizes"',expression:{raw:["size in sizes"]}},{directive:"bind",arg:"key",raw:':key="size"',expression:{raw:["size"]}},{name:"size",value:"sm"},{directive:"bind",arg:"variant",raw:`:variant="state.size === size ? 'secondary' : 'ghost'"`,expression:{condition:{left:{key:"size",model:"modelSize"},operator:"===",right:{raw:["size"]}},yes:{literal:"secondary"},no:{literal:"ghost"}}},{directive:"bind",arg:"aria-pressed",raw:':aria-pressed="state.size === size"',expression:{left:{key:"size",model:"modelSize"},operator:"===",right:{raw:["size"]}}},{directive:"on",arg:"click",raw:'@click="state.size = size"',expression:{left:{key:"size",model:"modelSize"},operator:"=",right:{raw:["size"]}}}],children:[{interpolation:{raw:["size"]}},{text:" · "},{interpolation:{raw:["heights[size]"]}},{text:"px"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap items-center gap-4"}],children:[{tag:"label",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex items-center gap-2"}],children:[{tag:"XSwitch",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.bordered"',expression:{key:"bordered",model:"modelBordered"}},{name:"aria-label",value:"line 通栏底边"}],children:[]},{text:"通栏底边"}]},{tag:"label",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex items-center gap-2"}],children:[{tag:"XSwitch",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.indicator"',expression:{key:"indicator",model:"modelIndicator"}},{name:"aria-label",value:"line 活动短条"}],children:[]},{text:"活动短条"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="variant in variants"',expression:{raw:["variant in variants"]}},{directive:"bind",arg:"key",raw:':key="variant"',expression:{raw:["variant"]}},{name:"class",value:"min-w-0"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"mb-2 text-sm font-medium"}],children:[{interpolation:{raw:["variant"]}}]},{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:':variant="variant"',expression:{raw:["variant"]}},{directive:"bind",arg:"bordered",raw:':bordered="state.bordered"',expression:{key:"bordered",model:"modelBordered"}},{directive:"bind",arg:"indicator",raw:':indicator="state.indicator"',expression:{key:"indicator",model:"modelIndicator"}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"stretch",raw:':stretch="state.stretch"',expression:{key:"stretch",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:"modelSize"}},{directive:"bind",arg:"aria-label",raw:':aria-label="`${variant} 外观对照`"',expression:{raw:["`${variant} 外观对照`"]}}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"details"},{name:"label",value:"详情"},{directive:"bind",arg:"icon",raw:':icon="FileText"',expression:{raw:["FileText"]}}],children:[{text:"记录的基本信息与当前进度。"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"history"},{name:"label",value:"历史"},{directive:"bind",arg:"icon",raw:':icon="History"',expression:{raw:["History"]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"label",raw:"#label",expression:void 0}],children:[{text:"历史 "},{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"secondary"}],children:[{text:"12"}]}]},{text:"最近的记录变更。"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"disabled"},{name:"label",value:"归档"},{name:"disabled",value:void 0}],children:[{text:"归档内容。"}]}]}]}]}],styles:""},defaults:{orientation:"horizontal",stretch:!1,bordered:!0,indicator:!0,size:"md"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { FileText, History } from '@lucide/vue'
import { XTabs, XTabItem, XBadge, XSwitch, XButton } from '@libingchen/x-ui'
interface State {
  orientation: 'horizontal' | 'vertical'
  stretch: boolean
  bordered: boolean
  indicator: boolean
  size: 'sm' | 'md' | 'lg'
}
const state = reactive<State>(`,after:`)
const sizes = ['sm', 'md', 'lg'] as const
const heights = { sm: 32, md: 36, lg: 40 }
const variants = ['line', 'card', 'segment'] as const
<\/script>
<template>
  <div data-testid="tabs-variants" class="demo grid w-full min-w-0 gap-6">
    <div class="flex flex-wrap items-center gap-2" role="group" aria-label="导航栏尺寸">
      <XButton
        v-for="size in sizes"
        :key="size"
        size="sm"
        :variant="state.size === size ? 'secondary' : 'ghost'"
        :aria-pressed="state.size === size"
        @click="state.size = size"
        >{{ size }} · {{ heights[size] }}px</XButton
      >
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <label class="flex items-center gap-2"
        ><XSwitch v-model="state.bordered" aria-label="line 通栏底边" />通栏底边</label
      >
      <label class="flex items-center gap-2"
        ><XSwitch v-model="state.indicator" aria-label="line 活动短条" />活动短条</label
      >
    </div>
    <div v-for="variant in variants" :key="variant" class="min-w-0">
      <p class="mb-2 text-sm font-medium">{{ variant }}</p>
      <XTabs
        :variant="variant"
        :bordered="state.bordered"
        :indicator="state.indicator"
        :orientation="state.orientation"
        :stretch="state.stretch"
        :size="state.size"
        :aria-label="\`\${variant} 外观对照\`"
      >
        <XTabItem value="details" label="详情" :icon="FileText"
          >记录的基本信息与当前进度。</XTabItem
        >
        <XTabItem value="history" label="历史" :icon="History"
          ><template #label>历史 <XBadge variant="secondary">12</XBadge></template
          >最近的记录变更。</XTabItem
        >
        <XTabItem value="disabled" label="归档" disabled>归档内容。</XTabItem>
      </XTabs>
    </div>
  </div>
</template>`,start:396,end:497};export{e as default};
