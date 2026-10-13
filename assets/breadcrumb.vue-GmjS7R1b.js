const e={title:"文档位置导航",description:"用数据描述当前位置，切换目录深度与分隔符；当前页保持不可点击的语义。",component:"XBreadcrumb",controls:{current:{label:"当前页标题",api:"items"},deep:{label:"完整目录层级",api:"items"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},separator:{label:"分隔符",options:["default","slash"],api:"separator slot"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"computed",source:"computed",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XBreadcrumb",source:"XBreadcrumb",typeOnly:!1}],sideEffect:!1}],statements:[{names:["items"],chunks:[`const items = computed(() => [
  ...(`,{key:"deep",model:void 0},`
    ? [
        { label: '项目', href: '#breadcrumb' },
        { label: '设计系统', href: '#breadcrumb' },
      ]
    : []),
  { label: '文档', href: '#breadcrumb' },
  { label: `,{key:"current",model:void 0},` },
])`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XBreadcrumb",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"items",raw:':items="items"',expression:{raw:["items"]}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:`v-if="state.separator === 'slash'"`,expression:{left:{key:"separator",model:void 0},operator:"===",right:{literal:"slash"}}},{directive:"slot",arg:"separator",raw:"#separator",expression:void 0}],children:[{text:"/"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"通过上级目录返回文档位置，末项表示当前页面。"}]}]}],styles:`
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
`},defaults:{current:"交互规范",deep:!0,size:void 0,separator:"default"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, computed } from 'vue'
import { XBreadcrumb } from '@libingchen/x-ui'

interface State {
  current: string
  deep: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  separator: 'default' | 'slash'
}
const state = reactive<State>(`,after:`)
const items = computed(() => [
  ...(state.deep
    ? [
        { label: '项目', href: '#breadcrumb' },
        { label: '设计系统', href: '#breadcrumb' },
      ]
    : []),
  { label: '文档', href: '#breadcrumb' },
  { label: state.current },
])
<\/script>

<template>
  <div class="demo">
    <XBreadcrumb :items="items" :size="state.size"
      ><template v-if="state.separator === 'slash'" #separator>/</template></XBreadcrumb
    >
    <p class="note">通过上级目录返回文档位置，末项表示当前页面。</p>
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
</style>`,start:307,end:386};export{e as default};
