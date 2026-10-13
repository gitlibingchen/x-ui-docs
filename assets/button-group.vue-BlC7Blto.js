const e={title:"批量处理工具栏",description:"将相关操作放在同一按钮组中，体验横向、纵向组合与继承尺寸。",component:"XButtonGroup",controls:{orientation:{label:"方向",options:["horizontal","vertical"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用操作"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XButtonGroup",source:"XButtonGroup",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('已选择 3 个项目')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButtonGroup",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"aria-label",value:"批量操作"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:`@click="result = '已归档 3 个项目'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已归档 3 个项目"}}}],children:[{text:"归档"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:`@click="result = '已移动 3 个项目'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已移动 3 个项目"}}}],children:[{text:"移动"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:`@click="result = '已取消选择'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已取消选择"}}}],children:[{text:"取消选择"}]}]}]},{text:""}]}],styles:`
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
`},defaults:{orientation:"horizontal",size:void 0,disabled:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XButtonGroup, XButton } from '@libingchen/x-ui'

interface State {
  orientation: 'horizontal' | 'vertical'
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('已选择 3 个项目')
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XButtonGroup :orientation="state.orientation" :size="state.size" aria-label="批量操作"
        ><XButton variant="outline" :disabled="state.disabled" @click="result = '已归档 3 个项目'"
          >归档</XButton
        ><XButton variant="outline" :disabled="state.disabled" @click="result = '已移动 3 个项目'"
          >移动</XButton
        ><XButton variant="outline" :disabled="state.disabled" @click="result = '已取消选择'"
          >取消选择</XButton
        ></XButtonGroup
      >
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
</style>`,start:306,end:369};export{e as default};
