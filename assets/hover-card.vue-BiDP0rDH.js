const e={title:"协作者资料预览",description:"悬停或聚焦协作者入口查看补充资料，调整展开延迟与浮层位置。",component:"XHoverCard",controls:{openDelay:{label:"打开延迟（毫秒）",min:0,max:1e3},closeDelay:{label:"关闭延迟（毫秒）",min:0,max:1e3},side:{label:"浮层方向",options:["top","right","bottom","left"],api:"parts.content.side"},align:{label:"对齐",options:["start","center","end"],api:"parts.content.align"},name:{label:"协作者姓名",api:"default slot"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XHoverCard",source:"XHoverCard",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XAvatar",source:"XAvatar",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目负责人"}]},{tag:"XHoverCard",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"open-delay",raw:':open-delay="state.openDelay"',expression:{key:"openDelay",model:void 0}},{directive:"bind",arg:"close-delay",raw:':close-delay="state.closeDelay"',expression:{key:"closeDelay",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"parts",raw:':parts="{ content: { side: state.side, align: state.align } }"',expression:{object:[{name:"content",value:{object:[{name:"side",value:{key:"side",model:void 0}},{name:"align",value:{key:"align",model:void 0}}]}}]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"link"}],children:[{interpolation:{key:"name",model:void 0}}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XAvatar",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"fallback",raw:':fallback="state.name.slice(0, 1)"',expression:{raw:["",{key:"name",model:void 0},".slice(0, 1)"]}},{directive:"bind",arg:"alt",raw:':alt="state.name"',expression:{key:"name",model:void 0}}],children:[]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{interpolation:{key:"name",model:void 0}}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"产品设计师 · 负责设计系统"}]}]}]}]}]}]}],styles:`
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
`},defaults:{openDelay:300,closeDelay:200,side:"bottom",align:"start",name:"林澄",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XHoverCard, XButton, XAvatar } from '@libingchen/x-ui'

interface State {
  openDelay: number
  closeDelay: number
  side: 'top' | 'right' | 'bottom' | 'left'
  align: 'start' | 'center' | 'end'
  name: string
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <span>项目负责人</span
      ><XHoverCard
        :open-delay="state.openDelay"
        :close-delay="state.closeDelay"
        :size="state.size"
        :parts="{ content: { side: state.side, align: state.align } }"
        ><template #trigger
          ><XButton variant="link">{{ state.name }}</XButton></template
        >
        <div class="row">
          <XAvatar :fallback="state.name.slice(0, 1)" :alt="state.name" />
          <div>
            <strong>{{ state.name }}</strong>
            <p class="note">产品设计师 · 负责设计系统</p>
          </div>
        </div></XHoverCard
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
</style>`,start:383,end:492};export{e as default};
