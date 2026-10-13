const e={title:"选择资料归属目录",description:"在浮层中浏览和搜索层级目录，选择后返回节点对象，体验只读、禁用和清除。",component:"XTreeSelect",controls:{search:{label:"本地搜索"},clearable:{label:"允许清除"},readonly:{label:"只读"},disabled:{label:"禁用"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},placeholder:{label:"占位文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTreeSelect",source:"XTreeSelect",typeOnly:!1},{name:"XTreeNode",source:"type XTreeNode",typeOnly:!1}],sideEffect:!1}],statements:[{names:["nodes"],chunks:[`const nodes: XTreeNode[] = [
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
]`]},{names:["selection"],chunks:["const selection = ref<XTreeNode>()"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XTreeSelect",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="selection"',expression:{raw:["selection"]}},{directive:"bind",arg:"items",raw:':items="nodes"',expression:{raw:["nodes"]}},{directive:"bind",arg:"search",raw:':search="state.search ? true : undefined"',expression:{condition:{key:"search",model:void 0},yes:{literal:!0},no:{absent:!0}}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}},{name:"tree-label",value:"资料归属目录"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{search:!0,clearable:!0,readonly:!1,disabled:!1,size:void 0,placeholder:"选择归属目录"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XTreeSelect, type XTreeNode } from '@libingchen/x-ui'

interface State {
  search: boolean
  clearable: boolean
  readonly: boolean
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  placeholder: string
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
const selection = ref<XTreeNode>()
<\/script>

<template>
  <div class="demo">
    <XTreeSelect
      v-model="selection"
      :items="nodes"
      :search="state.search ? true : undefined"
      :clearable="state.clearable"
      :readonly="state.readonly"
      :disabled="state.disabled"
      :size="state.size"
      :placeholder="state.placeholder"
      tree-label="资料归属目录"
    />
    <p role="status" class="note">已选目录：{{ selection?.label || '未选择' }}</p>
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
</style>`,start:352,end:472};export{e as default};
