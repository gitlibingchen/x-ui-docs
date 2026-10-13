const e={title:"内容视图切换",description:"用互斥的切换按钮选择内容布局，调整按钮间距与外观。多选格式工具栏作为独立场景展示。",component:"XToggleGroup",controls:{value:{label:"当前视图",options:["grid","list","board"],api:"modelValue"},variant:{label:"外观",options:["default","outline"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},spacing:{label:"按钮间距",min:0,max:4},disabled:{label:"禁用"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XToggleGroup",source:"XToggleGroup",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string | undefined>(",{key:"value"},")"]},{names:["items"],chunks:[`const items = [
  { value: 'grid', label: '网格' },
  { value: 'list', label: '列表' },
  { value: 'board', label: '看板' },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XToggleGroup",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{name:"type",value:"single"},{directive:"bind",arg:"items",raw:':items="items"',expression:{raw:["items"]}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"spacing",raw:':spacing="state.spacing"',expression:{key:"spacing",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"aria-label",value:"内容视图"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{value:"grid",variant:"outline",size:void 0,spacing:0,disabled:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XToggleGroup } from '@libingchen/x-ui'

interface State {
  value: string | undefined
  variant: 'default' | 'outline'
  size: 'sm' | 'md' | 'lg' | undefined
  spacing: number
  disabled: boolean
}
const state = reactive<State>(`,after:`)
const items = [
  { value: 'grid', label: '网格' },
  { value: 'list', label: '列表' },
  { value: 'board', label: '看板' },
]
<\/script>

<template>
  <div class="demo">
    <XToggleGroup
      v-model="state.value"
      type="single"
      :items="items"
      :variant="state.variant"
      :size="state.size"
      :spacing="state.spacing"
      :disabled="state.disabled"
      aria-label="内容视图"
    />
    <p role="status" class="note">
      当前布局：{{ items.find((item) => item.value === state.value)?.label || '未选择' }}
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
</style>`,start:330,end:424};export{e as default};
