const e={title:"工具栏操作提示",description:"为图标按钮提供简短说明，支持悬停和键盘聚焦，调整方向、延迟和文案。",component:"XTooltip",controls:{content:{label:"提示文案"},side:{label:"提示方向",options:["top","right","bottom","left"],api:"parts.content.side"},delayDuration:{label:"提示延迟（毫秒）",min:0,max:1e3},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTooltip",source:"XTooltip",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Link",source:"Link",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XTooltip",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"content",raw:':content="state.content"',expression:{key:"content",model:void 0}},{directive:"bind",arg:"delay-duration",raw:':delay-duration="state.delayDuration"',expression:{key:"delayDuration",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"parts",raw:':parts="{ content: { side: state.side } }"',expression:{object:[{name:"content",value:{object:[{name:"side",value:{key:"side",model:void 0}}]}}]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{name:"shape",value:"icon"},{directive:"bind",arg:"aria-label",raw:':aria-label="state.content"',expression:{key:"content",model:void 0}},{directive:"on",arg:"click",raw:`@click="result = '已触发复制操作'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已触发复制操作"}}}],children:[{tag:"Link",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="16"',expression:{literal:16}},{name:"data-icon",value:"icon"},{name:"aria-hidden",value:"true"}],children:[]}]}]}]},{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目协作链接"}]}]},{text:""}]}],styles:`
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
`},defaults:{content:"复制项目链接",side:"top",delayDuration:300,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XTooltip, XButton } from '@libingchen/x-ui'
import { Link } from '@lucide/vue'

interface State {
  content: string
  side: 'top' | 'right' | 'bottom' | 'left'
  delayDuration: number
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XTooltip
        :content="state.content"
        :delay-duration="state.delayDuration"
        :size="state.size"
        :parts="{ content: { side: state.side } }"
        ><template #trigger
          ><XButton
            variant="outline"
            shape="icon"
            :aria-label="state.content"
            @click="result = '已触发复制操作'"
            ><Link :size="16" data-icon="icon" aria-hidden="true" /></XButton></template></XTooltip
      ><span>项目协作链接</span>
    </div>
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
</style>`,start:362,end:442};export{e as default};
