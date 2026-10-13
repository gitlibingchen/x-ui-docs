const e={title:"资源列表与操作",description:"用列表项表达文件信息、当前选择和操作。控制项状态与分隔线，观察组合列表。",component:"XItem",controls:{variant:{label:"外观",options:["default","outline","muted"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},active:{label:"选中"},disabled:{label:"禁用"},separator:{label:"列表分隔线",api:"XItemGroup.separator"},title:{label:"资源名称"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XItem",source:"XItem",typeOnly:!1},{name:"XItemGroup",source:"XItemGroup",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"FileText",source:"FileText",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelActive"],chunks:["const modelActive = ref<boolean>(",{key:"active"},")"]},{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XItemGroup",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"separator",raw:':separator="state.separator"',expression:{key:"separator",model:void 0}}],children:[{tag:"XItem",unwrap:!1,selfClosing:void 0,props:[{name:"media-variant",value:"icon"},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{name:"description",value:"PDF 文档 · 2.4 MB"},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"active",raw:':active="state.active"',expression:{key:"active",model:"modelActive"}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"as",value:"button"},{directive:"on",arg:"click",raw:'@click="state.active = !state.active"',expression:{left:{key:"active",model:"modelActive"},operator:"=",right:{not:{key:"active",model:"modelActive"}}}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"media",raw:"#media",expression:void 0}],children:[{tag:"FileText",unwrap:!1,selfClosing:!0,props:[],children:[]}]}]},{tag:"XItem",unwrap:!1,selfClosing:void 0,props:[{name:"title",value:"交互检查清单"},{name:"description",value:"更新于今天"},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"actions",raw:"#actions",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"size",value:"sm"},{directive:"on",arg:"click",raw:`@click="result = '已打开检查清单'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已打开检查清单"}}}],children:[{text:"查看"}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{variant:"outline",size:void 0,active:!1,disabled:!1,separator:!1,title:"设计规范.pdf"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XItem, XItemGroup, XButton } from '@libingchen/x-ui'
import { FileText } from '@lucide/vue'

interface State {
  variant: 'default' | 'outline' | 'muted'
  size: 'sm' | 'md' | 'lg' | undefined
  active: boolean
  disabled: boolean
  separator: boolean
  title: string
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XItemGroup :size="state.size" :separator="state.separator"
      ><XItem
        media-variant="icon"
        :title="state.title"
        description="PDF 文档 · 2.4 MB"
        :variant="state.variant"
        :size="state.size"
        :active="state.active"
        :disabled="state.disabled"
        as="button"
        @click="state.active = !state.active"
        ><template #media><FileText /></template></XItem
      ><XItem
        title="交互检查清单"
        description="更新于今天"
        :variant="state.variant"
        :size="state.size"
        ><template #actions
          ><XButton variant="ghost" size="sm" @click="result = '已打开检查清单'"
            >查看</XButton
          ></template
        ></XItem
      ></XItemGroup
    >
    <p role="status" class="note">
      {{ result || (state.active ? '已选择设计规范' : '点击第一项选择资源') }}
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
</style>`,start:407,end:528};export{e as default};
