const e={title:"调整列表显示选项",description:"在触发按钮附近展示轻量设置，切换浮层位置并在内容中操作开关。",component:"XPopover",controls:{open:{label:"打开状态"},side:{label:"浮层方向",options:["top","right","bottom","left"],api:"parts.content.side"},align:{label:"对齐",options:["start","center","end"],api:"parts.content.align"},sideOffset:{label:"偏移距离",min:0,max:32,api:"parts.content.sideOffset",group:"advanced"},title:{label:"标题"},compact:{label:"紧凑列表",api:"default slot"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XPopover",source:"XPopover",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XSwitch",source:"XSwitch",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelCompact"],chunks:["const modelCompact = ref<boolean>(",{key:"compact"},")"]},{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XPopover",unwrap:!1,selfClosing:void 0,props:[{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{name:"description",value:"选择适合当前工作方式的列表布局。"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"parts",raw:':parts="{ content: { side: state.side, align: state.align, sideOffset: state.sideOffset } }"',expression:{object:[{name:"content",value:{object:[{name:"side",value:{key:"side",model:void 0}},{name:"align",value:{key:"align",model:void 0}},{name:"sideOffset",value:{key:"sideOffset",model:void 0}}]}}]}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{text:"显示选项"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XSwitch",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-compact-list"},{directive:"model",arg:void 0,raw:'v-model="state.compact"',expression:{key:"compact",model:"modelCompact"}}],children:[]},{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-compact-list"}],children:[{text:"使用紧凑列表"}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{open:!1,side:"bottom",align:"center",sideOffset:8,title:"显示选项",compact:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XPopover, XButton, XSwitch, XLabel } from '@libingchen/x-ui'

interface State {
  open: boolean
  side: 'top' | 'right' | 'bottom' | 'left'
  align: 'start' | 'center' | 'end'
  sideOffset: number
  title: string
  compact: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XPopover
        v-model:open="state.open"
        :title="state.title"
        description="选择适合当前工作方式的列表布局。"
        :size="state.size"
        :parts="{ content: { side: state.side, align: state.align, sideOffset: state.sideOffset } }"
        ><template #trigger><XButton variant="outline">显示选项</XButton></template>
        <div class="row">
          <XSwitch id="demo-compact-list" v-model="state.compact" /><XLabel for="demo-compact-list"
            >使用紧凑列表</XLabel
          >
        </div></XPopover
      >
    </div>
    <p role="status" class="note">当前布局：{{ state.compact ? '紧凑' : '标准' }}</p>
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
</style>`,start:405,end:531};export{e as default};
