const e={title:"项目关键词",description:"输入关键词后按 Enter 添加，使用退格或删除按钮移除标签；可尝试批量粘贴和换行布局。",component:"XTagsInput",controls:{value:{label:"关键词列表",kind:"json",api:"modelValue"},placeholder:{label:"占位文案"},wrap:{label:"允许换行"},disabled:{label:"禁用"},readonly:{label:"只读"},clearable:{label:"全部清除"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},variant:{label:"外观",options:["outlined","borderless"]}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTagsInput",source:"XTagsInput",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string[]>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-tags"}],children:[{text:"项目关键词"}]},{tag:"XTagsInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-tags"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}},{directive:"bind",arg:"wrap",raw:':wrap="state.wrap"',expression:{key:"wrap",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}}],children:[]},{text:""}]}],styles:`
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
`},defaults:{value:["设计系统","协作"],placeholder:"输入关键词后回车",wrap:!0,disabled:!1,readonly:!1,clearable:!0,size:void 0,variant:"outlined"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XTagsInput, XLabel } from '@libingchen/x-ui'

interface State {
  value: string[]
  placeholder: string
  wrap: boolean
  disabled: boolean
  readonly: boolean
  clearable: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  variant: 'outlined' | 'borderless'
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XLabel for="demo-tags">项目关键词</XLabel
    ><XTagsInput
      id="demo-tags"
      v-model="state.value"
      :placeholder="state.placeholder"
      :wrap="state.wrap"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :clearable="state.clearable"
      :size="state.size"
      :variant="state.variant"
    />
    <p role="status" class="note">已添加 {{ state.value.length }} 个关键词</p>
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
</style>`,start:391,end:559};export{e as default};
