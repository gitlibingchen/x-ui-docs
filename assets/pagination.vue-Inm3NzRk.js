const e={title:"分页浏览项目",description:"通过页码或上一页、下一页浏览数据，切换紧凑模式，观察页数边界和省略号。",component:"XPagination",controls:{value:{label:"当前页",api:"modelValue",min:1,max:12},totalPages:{label:"总页数",min:1,max:50},siblingCount:{label:"相邻页码数",min:0,max:2},mode:{label:"显示模式",options:["default","minimal"]},disabled:{label:"禁用"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XPagination",source:"XPagination",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<number>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:" 第 "},{interpolation:{key:"value",model:"modelValue"}},{text:" 页 · 显示项目 "},{interpolation:{left:{left:{left:{key:"value",model:"modelValue"},operator:"-",right:{literal:1}},operator:"*",right:{literal:10}},operator:"+",right:{literal:1}}},{text:"–"},{interpolation:{left:{key:"value",model:"modelValue"},operator:"*",right:{literal:10}}}]},{tag:"XPagination",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"total-pages",raw:':total-pages="state.totalPages"',expression:{key:"totalPages",model:void 0}},{directive:"bind",arg:"sibling-count",raw:':sibling-count="state.siblingCount"',expression:{key:"siblingCount",model:void 0}},{directive:"bind",arg:"mode",raw:':mode="state.mode"',expression:{key:"mode",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[]}]}],styles:`
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
`},defaults:{value:1,totalPages:12,siblingCount:1,mode:"default",disabled:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XPagination } from '@libingchen/x-ui'

interface State {
  value: number
  totalPages: number
  siblingCount: number
  mode: 'default' | 'minimal'
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <p class="note">
      第 {{ state.value }} 页 · 显示项目 {{ (state.value - 1) * 10 + 1 }}–{{ state.value * 10 }}
    </p>
    <XPagination
      v-model="state.value"
      :total-pages="state.totalPages"
      :sibling-count="state.siblingCount"
      :mode="state.mode"
      :disabled="state.disabled"
      :size="state.size"
    />
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
</style>`,start:340,end:449};export{e as default};
