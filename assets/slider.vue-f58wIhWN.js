const e={title:"预算区间筛选",description:"拖动滑块或使用方向键调整预算上下限，预览筛选区间。两个滑块分别具有可访问名称。",component:"XSlider",controls:{value:{label:"预算区间",kind:"json",api:"modelValue"},step:{label:"调整步长",min:1,max:10},disabled:{label:"禁用"},orientation:{label:"方向",options:["horizontal","vertical"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSlider",source:"XSlider",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<number[]>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"预算范围："},{interpolation:{raw:["",{key:"value",model:"modelValue"},"[0]"]}},{text:"–"},{interpolation:{raw:["",{key:"value",model:"modelValue"},"[1]"]}},{text:" 万元"}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"style",raw:`:style="{
        height: state.orientation === 'vertical' ? '180px' : '40px',
        display: 'flex',
        alignItems: 'center',
      }"`,expression:{object:[{name:"height",value:{condition:{left:{key:"orientation",model:void 0},operator:"===",right:{literal:"vertical"}},yes:{literal:"180px"},no:{literal:"40px"}}},{name:"display",value:{literal:"flex"}},{name:"alignItems",value:{literal:"center"}}]}}],children:[{tag:"XSlider",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"min",raw:':min="0"',expression:{literal:0}},{directive:"bind",arg:"max",raw:':max="100"',expression:{literal:100}},{directive:"bind",arg:"step",raw:':step="state.step"',expression:{key:"step",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"thumb-labels",raw:`:thumb-labels="['最低预算', '最高预算']"`,expression:{array:[{literal:"最低预算"},{literal:"最高预算"}]}}],children:[]}]}]}],styles:`
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
`},defaults:{value:[20,80],step:5,disabled:!1,orientation:"horizontal",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSlider } from '@libingchen/x-ui'

interface State {
  value: number[]
  step: number
  disabled: boolean
  orientation: 'horizontal' | 'vertical'
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <strong>预算范围：{{ state.value[0] }}–{{ state.value[1] }} 万元</strong>
    <div
      :style="{
        height: state.orientation === 'vertical' ? '180px' : '40px',
        display: 'flex',
        alignItems: 'center',
      }"
    >
      <XSlider
        v-model="state.value"
        :min="0"
        :max="100"
        :step="state.step"
        :disabled="state.disabled"
        :orientation="state.orientation"
        :size="state.size"
        :thumb-labels="['最低预算', '最高预算']"
      />
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
</style>`,start:320,end:420};export{e as default};
