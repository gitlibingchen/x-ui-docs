const e={title:"项目标识颜色",description:"选择项目标识颜色并预览应用效果，体验透明度、内嵌色板与只读状态。",component:"XColorPicker",controls:{value:{label:"颜色值",api:"modelValue"},presentation:{label:"展示方式",options:["popover","inline"]},allowAlpha:{label:"允许透明度"},disabled:{label:"禁用"},readonly:{label:"只读"},clearable:{label:"允许清除"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XColorPicker",source:"XColorPicker",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string | undefined>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"span",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"style",raw:`:style="{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: state.value || 'var(--x-muted)',
        }"`,expression:{object:[{name:"width",value:{literal:"32px"}},{name:"height",value:{literal:"32px"}},{name:"borderRadius",value:{literal:"8px"}},{name:"background",value:{left:{key:"value",model:"modelValue"},operator:"||",right:{literal:"var(--x-muted)"}}}]}},{name:"aria-hidden",value:"true"}],children:[]},{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"设计系统项目"}]}]},{tag:"XColorPicker",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"presentation",raw:':presentation="state.presentation"',expression:{key:"presentation",model:void 0}},{directive:"bind",arg:"allow-alpha",raw:':allow-alpha="state.allowAlpha"',expression:{key:"allowAlpha",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"aria-label",value:"项目标识颜色"}],children:[]},{text:""}]}],styles:`
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
`},defaults:{value:"#2563eb",presentation:"popover",allowAlpha:!1,disabled:!1,readonly:!1,clearable:!0,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XColorPicker } from '@libingchen/x-ui'

interface State {
  value: string | undefined
  presentation: 'popover' | 'inline'
  allowAlpha: boolean
  disabled: boolean
  readonly: boolean
  clearable: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <span
        :style="{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: state.value || 'var(--x-muted)',
        }"
        aria-hidden="true"
      /><strong>设计系统项目</strong>
    </div>
    <XColorPicker
      v-model="state.value"
      :presentation="state.presentation"
      :allow-alpha="state.allowAlpha"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :clearable="state.clearable"
      :size="state.size"
      aria-label="项目标识颜色"
    />
    <p role="status" class="note">当前颜色：{{ state.value || '未设置' }}</p>
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
</style>`,start:379,end:526};export{e as default};
