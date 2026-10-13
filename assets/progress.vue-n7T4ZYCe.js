const e={title:"文件处理进度",description:"展示批量任务的完成比例，支持调整上限和当前进度；操作按钮模拟任务推进。",component:"XProgress",controls:{value:{label:"当前进度",api:"modelValue",min:0,max:100},max:{label:"总进度",min:100,max:1e3},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XProgress",source:"XProgress",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<number>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"正在处理设计资源"}]},{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{interpolation:{raw:["Math.round((",{key:"value",model:"modelValue"}," / ",{key:"max",model:void 0},") * 100)"]}},{text:"%"}]}]},{tag:"XProgress",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"model-value",raw:':model-value="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"max",raw:':max="state.max"',expression:{key:"max",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"aria-label",value:"资源处理进度"}],children:[]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{name:"size",value:"sm"},{directive:"on",arg:"click",raw:'@click="state.value = Math.min(state.max, state.value + 10)"',expression:{left:{key:"value",model:"modelValue"},operator:"=",right:{raw:["Math.min(",{key:"max",model:void 0},", ",{key:"value",model:"modelValue"}," + 10)"]}}}],children:[{text:"推进 10"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"size",value:"sm"},{directive:"on",arg:"click",raw:'@click="state.value = 0"',expression:{left:{key:"value",model:"modelValue"},operator:"=",right:{literal:0}}}],children:[{text:"重新处理"}]}]}]}],styles:`
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
`},defaults:{value:35,max:100,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XProgress, XButton } from '@libingchen/x-ui'

interface State {
  value: number
  max: number
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <strong>正在处理设计资源</strong
      ><span>{{ Math.round((state.value / state.max) * 100) }}%</span>
    </div>
    <XProgress
      :model-value="state.value"
      :max="state.max"
      :size="state.size"
      aria-label="资源处理进度"
    />
    <div class="row">
      <XButton
        variant="outline"
        size="sm"
        @click="state.value = Math.min(state.max, state.value + 10)"
        >推进 10</XButton
      ><XButton variant="ghost" size="sm" @click="state.value = 0">重新处理</XButton>
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
</style>`,start:267,end:307};export{e as default};
