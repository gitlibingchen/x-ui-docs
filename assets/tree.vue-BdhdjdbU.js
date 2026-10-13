const e={title:"浏览项目资料目录",description:"展开文件夹并选择资料，切换选择模式、复选框和展开触发方式。父子联动作用于当前已加载节点。",component:"XTree",controls:{selectionMode:{label:"选择模式",options:["none","single","multiple"]},checkboxSelection:{label:"复选框选择"},descendants:{label:"联动子节点",api:"selectionPropagation.descendants",group:"advanced"},parents:{label:"联动父节点",api:"selectionPropagation.parents",group:"advanced"},expansionTrigger:{label:"展开触发",options:["indicator","item"]},disabled:{label:"禁用"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1},{name:"watch",source:"watch",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTree",source:"XTree",typeOnly:!1},{name:"XTreeNode",source:"type XTreeNode",typeOnly:!1}],sideEffect:!1}],statements:[{names:["nodes"],chunks:[`const nodes: XTreeNode[] = [
  {
    value: 'design',
    label: '设计资料',
    children: [
      { value: 'guide', label: '设计规范' },
      { value: 'prototype', label: '交互原型' },
    ],
  },
  {
    value: 'engineering',
    label: '研发资料',
    children: [
      { value: 'api', label: '接口约定' },
      { value: 'legacy', label: '历史资料', disabled: true },
    ],
  },
]`]},{names:["selection"],chunks:["const selection = ref<XTreeNode | XTreeNode[]>()"]},{names:[],chunks:[`watch(
  () => `,{key:"selectionMode",model:void 0},`,
  () => {
    selection.value = undefined
  },
)`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XTree",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"key",raw:':key="state.selectionMode"',expression:{key:"selectionMode",model:void 0}},{directive:"model",arg:void 0,raw:'v-model="selection"',expression:{raw:["selection"]}},{directive:"bind",arg:"items",raw:':items="nodes"',expression:{raw:["nodes"]}},{directive:"bind",arg:"default-expanded",raw:`:default-expanded="['design']"`,expression:{array:[{literal:"design"}]}},{directive:"bind",arg:"selection-mode",raw:':selection-mode="state.selectionMode"',expression:{key:"selectionMode",model:void 0}},{directive:"bind",arg:"checkbox-selection",raw:':checkbox-selection="state.checkboxSelection"',expression:{key:"checkboxSelection",model:void 0}},{directive:"bind",arg:"selection-propagation",raw:':selection-propagation="{ descendants: state.descendants, parents: state.parents }"',expression:{object:[{name:"descendants",value:{key:"descendants",model:void 0}},{name:"parents",value:{key:"parents",model:void 0}}]}},{directive:"bind",arg:"expansion-trigger",raw:':expansion-trigger="state.expansionTrigger"',expression:{key:"expansionTrigger",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"aria-label",value:"项目资料目录"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{selectionMode:"single",checkboxSelection:!1,descendants:!1,parents:!1,expansionTrigger:"indicator",disabled:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref, watch } from 'vue'
import { XTree, type XTreeNode } from '@libingchen/x-ui'

interface State {
  selectionMode: 'none' | 'single' | 'multiple'
  checkboxSelection: boolean
  descendants: boolean
  parents: boolean
  expansionTrigger: 'indicator' | 'item'
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const nodes: XTreeNode[] = [
  {
    value: 'design',
    label: '设计资料',
    children: [
      { value: 'guide', label: '设计规范' },
      { value: 'prototype', label: '交互原型' },
    ],
  },
  {
    value: 'engineering',
    label: '研发资料',
    children: [
      { value: 'api', label: '接口约定' },
      { value: 'legacy', label: '历史资料', disabled: true },
    ],
  },
]
const selection = ref<XTreeNode | XTreeNode[]>()
watch(
  () => state.selectionMode,
  () => {
    selection.value = undefined
  },
)
<\/script>

<template>
  <div class="demo">
    <XTree
      :key="state.selectionMode"
      v-model="selection"
      :items="nodes"
      :default-expanded="['design']"
      :selection-mode="state.selectionMode"
      :checkbox-selection="state.checkboxSelection"
      :selection-propagation="{ descendants: state.descendants, parents: state.parents }"
      :expansion-trigger="state.expansionTrigger"
      :disabled="state.disabled"
      :size="state.size"
      aria-label="项目资料目录"
    />
    <p role="status" class="note">
      已选择：{{
        Array.isArray(selection)
          ? selection.map((item) => item.label).join('、')
          : selection?.label || '未选择'
      }}
    </p>
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
</style>`,start:432,end:601};export{e as default};
