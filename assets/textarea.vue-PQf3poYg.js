const e={title:"项目说明编辑",description:"编辑多行项目说明，调节高度、字数限制和表单状态；长文本悬停显示滚动条。无边框模式不绘制背景、阴影或焦点环。",component:"XTextarea",controls:{value:{label:"当前值",api:"modelValue"},placeholder:{label:"占位文案"},variant:{label:"外观",options:["outlined","borderless"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用"},readonly:{label:"只读"},invalid:{label:"无效状态",api:"aria-invalid"},height:{label:"高度",min:32,max:320},maxlength:{label:"最大字数",min:20,max:500,group:"advanced"}},presets:[{label:"只读内容",state:{value:"已有项目内容",readonly:!0}},{label:"校验错误",state:{invalid:!0}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTextarea",source:"XTextarea",typeOnly:!1},{name:"XField",source:"XField",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"label",value:"项目说明"},{name:"label-for",value:"demo-textarea"},{directive:"bind",arg:"error",raw:`:error="state.invalid ? '请检查输入内容。' : undefined"`,expression:{condition:{key:"invalid",model:void 0},yes:{literal:"请检查输入内容。"},no:{absent:!0}}}],children:[{tag:"XTextarea",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-textarea"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"aria-invalid",raw:':aria-invalid="state.invalid"',expression:{key:"invalid",model:void 0}},{directive:"bind",arg:"height",raw:':height="state.height"',expression:{key:"height",model:void 0}},{name:"resize",value:"none"},{directive:"bind",arg:"maxlength",raw:':maxlength="state.maxlength"',expression:{key:"maxlength",model:void 0}}],children:[]}]},{text:""}]}],styles:`
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
`},defaults:{value:"",placeholder:"请输入项目说明",variant:"outlined",size:void 0,disabled:!1,readonly:!1,invalid:!1,height:120,maxlength:160},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XTextarea, XField } from '@libingchen/x-ui'

interface State {
  value: string
  placeholder: string
  variant: 'outlined' | 'borderless'
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
  readonly: boolean
  invalid: boolean
  height: number
  maxlength: number
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XField
      label="项目说明"
      label-for="demo-textarea"
      :error="state.invalid ? '请检查输入内容。' : undefined"
      ><XTextarea
        id="demo-textarea"
        v-model="state.value"
        :placeholder="state.placeholder"
        :variant="state.variant"
        :size="state.size"
        :disabled="state.disabled"
        :readonly="state.readonly"
        :aria-invalid="state.invalid"
        :height="state.height"
        resize="none"
        :maxlength="state.maxlength"
    /></XField>
    <p role="status" class="note">当前输入：{{ state.value || '尚未填写' }}</p>
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
</style>`,start:407,end:580};export{e as default};
