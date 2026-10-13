const e={title:"搜索并执行工作区命令",description:"输入关键词筛选命令，使用方向键移动和 Enter 执行，切换内嵌与对话框展示。",component:"XCommand",controls:{presentation:{label:"展示方式",options:["inline","dialog"]},open:{label:"打开对话框"},loop:{label:"循环键盘导航"},shouldFilter:{label:"内置过滤"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XCommand",source:"XCommand",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]},{names:["result"],chunks:["const result = ref('使用键盘或鼠标选择命令。')"]},{names:["groups"],chunks:[`const groups = [
  {
    heading: '项目',
    items: [
      { value: 'create', label: '创建项目', keywords: ['新建'], shortcut: '⌘ N' },
      { value: 'recent', label: '最近访问' },
    ],
  },
  {
    heading: '工作区',
    items: [
      { value: 'members', label: '邀请成员' },
      { value: 'billing', label: '账单设置', disabled: true },
    ],
  },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:`v-if="state.presentation === 'dialog'"`,expression:{left:{key:"presentation",model:void 0},operator:"===",right:{literal:"dialog"}}},{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="state.open = true"',expression:{left:{key:"open",model:"modelOpen"},operator:"=",right:{literal:!0}}}],children:[{text:"打开命令面板"}]}]},{tag:"XCommand",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"groups",raw:':groups="groups"',expression:{raw:["groups"]}},{directive:"bind",arg:"presentation",raw:':presentation="state.presentation"',expression:{key:"presentation",model:void 0}},{directive:"bind",arg:"loop",raw:':loop="state.loop"',expression:{key:"loop",model:void 0}},{directive:"bind",arg:"should-filter",raw:':should-filter="state.shouldFilter"',expression:{key:"shouldFilter",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"title",value:"工作区命令"},{name:"description",value:"搜索并执行项目操作"},{name:"placeholder",value:"搜索项目、成员或操作…"},{directive:"on",arg:"select",raw:'@select="result = `执行命令：${$event}`"',expression:{left:{raw:["result"]},operator:"=",right:{raw:["`执行命令：${$event}`"]}}}],children:[]},{text:""}]}],styles:`
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
`},defaults:{presentation:"inline",open:!1,loop:!0,shouldFilter:!0,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XCommand, XButton } from '@libingchen/x-ui'

interface State {
  presentation: 'inline' | 'dialog'
  open: boolean
  loop: boolean
  shouldFilter: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const result = ref('使用键盘或鼠标选择命令。')
const groups = [
  {
    heading: '项目',
    items: [
      { value: 'create', label: '创建项目', keywords: ['新建'], shortcut: '⌘ N' },
      { value: 'recent', label: '最近访问' },
    ],
  },
  {
    heading: '工作区',
    items: [
      { value: 'members', label: '邀请成员' },
      { value: 'billing', label: '账单设置', disabled: true },
    ],
  },
]
<\/script>

<template>
  <div class="demo">
    <div v-if="state.presentation === 'dialog'" class="row">
      <XButton variant="outline" @click="state.open = true">打开命令面板</XButton>
    </div>
    <XCommand
      v-model:open="state.open"
      :groups="groups"
      :presentation="state.presentation"
      :loop="state.loop"
      :should-filter="state.shouldFilter"
      :size="state.size"
      title="工作区命令"
      description="搜索并执行项目操作"
      placeholder="搜索项目、成员或操作…"
      @select="result = \`执行命令：\${$event}\`"
    />
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
</style>`,start:333,end:432};export{e as default};
