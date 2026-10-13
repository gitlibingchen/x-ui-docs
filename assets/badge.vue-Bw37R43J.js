const e={title:"发布状态标签",description:"在项目摘要中调整状态标签的文案、外观与图标，也可以将标签组合为可访问的链接。",component:"XBadge",controls:{variant:{label:"外观",options:["default","secondary","destructive","outline","ghost","link"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},text:{label:"状态文案",api:"default slot"},icon:{label:"显示图标"},link:{label:"渲染为链接",api:"asChild"}},presets:[{label:"待审核",state:{text:"待审核",variant:"outline"}},{label:"发布失败",state:{text:"发布失败",variant:"destructive"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XBadge",source:"XBadge",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Check",source:"Check",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"设计系统更新"}]},{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"as-child",raw:':as-child="state.link"',expression:{key:"link",model:void 0}}],children:[{tag:"a",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.link"',expression:{key:"link",model:void 0}},{name:"href",value:"#badge/api"}],children:[{interpolation:{key:"text",model:void 0}}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"else",arg:void 0,raw:"v-else",expression:void 0}],children:[{tag:"Check",unwrap:!1,selfClosing:!0,props:[{directive:"if",arg:void 0,raw:'v-if="state.icon"',expression:{key:"icon",model:void 0}},{directive:"bind",arg:"size",raw:':size="12"',expression:{literal:12}},{name:"aria-hidden",value:"true"}],children:[]},{interpolation:{key:"text",model:void 0}}]}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"最近发布 · 核心组件更新"}]}]}],styles:`
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
`},defaults:{variant:"secondary",size:void 0,text:"已发布",icon:!0,link:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XBadge } from '@libingchen/x-ui'
import { Check } from '@lucide/vue'

interface State {
  variant: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  size: 'sm' | 'md' | 'lg' | undefined
  text: string
  icon: boolean
  link: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <strong>设计系统更新</strong
      ><XBadge :variant="state.variant" :size="state.size" :as-child="state.link"
        ><a v-if="state.link" href="#badge/api">{{ state.text }}</a
        ><template v-else
          ><Check v-if="state.icon" :size="12" aria-hidden="true" />{{ state.text }}</template
        ></XBadge
      >
    </div>
    <p class="note">最近发布 · 核心组件更新</p>
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
</style>`,start:390,end:480};export{e as default};
