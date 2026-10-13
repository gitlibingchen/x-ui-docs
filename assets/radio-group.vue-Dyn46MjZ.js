const e={title:"选择协作方案",description:"同一组选项中选择一个方案，切换列表与卡片展示，观察描述、禁用选项与模型值。",component:"XRadioGroup",controls:{value:{label:"当前方案",options:["personal","team","enterprise"],api:"modelValue"},display:{label:"展示方式",options:["default","cards"]},orientation:{label:"方向",options:["horizontal","vertical"]},disabled:{label:"禁用整组"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XRadioGroup",source:"XRadioGroup",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<'personal' | 'team' | 'enterprise'>(",{key:"value"},")"]},{names:["options"],chunks:[`const options = [
  { value: 'personal', label: '个人', description: '适合个人项目与草稿' },
  { value: 'team', label: '团队', description: '共享资源与项目权限' },
  { value: 'enterprise', label: '企业', description: '联系管理员开通', disabled: true },
]`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XRadioGroup",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"options",raw:':options="options"',expression:{raw:["options"]}},{directive:"bind",arg:"display",raw:':display="state.display"',expression:{key:"display",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"aria-label",value:"协作方案"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{value:"team",display:"cards",orientation:"vertical",disabled:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XRadioGroup } from '@libingchen/x-ui'

interface State {
  value: 'personal' | 'team' | 'enterprise'
  display: 'default' | 'cards'
  orientation: 'horizontal' | 'vertical'
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const options = [
  { value: 'personal', label: '个人', description: '适合个人项目与草稿' },
  { value: 'team', label: '团队', description: '共享资源与项目权限' },
  { value: 'enterprise', label: '企业', description: '联系管理员开通', disabled: true },
]
<\/script>

<template>
  <div class="demo">
    <XRadioGroup
      v-model="state.value"
      :options="options"
      :display="state.display"
      :orientation="state.orientation"
      :disabled="state.disabled"
      :size="state.size"
      aria-label="协作方案"
    />
    <p role="status" class="note">
      已选择：{{ options.find((item) => item.value === state.value)?.label }}
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
</style>`,start:366,end:471};export{e as default};
