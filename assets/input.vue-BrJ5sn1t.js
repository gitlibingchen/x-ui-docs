const e={title:"可配置输入框",description:"尺寸支持继承或指定 sm / md / lg（28 / 32 / 36px）。调整尺寸、外观、类型、前后缀与状态，预览和代码同步更新。无边框模式的焦点与错误边界由宿主负责。",component:"XInput",controls:{value:{label:"当前值",api:"modelValue"},placeholder:{label:"占位文案"},variant:{label:"外观",options:["outlined","borderless"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0,hint:"省略时继承容器或全局尺寸，默认 md。"},disabled:{label:"禁用"},readonly:{label:"只读"},invalid:{label:"无效状态",api:"aria-invalid"},type:{label:"类型",options:["text","email","password","search"]},clearable:{label:"允许清除"},prefix:{label:"前缀文本",api:"prefix",hint:"留空时移除前缀插槽。"},suffix:{label:"后缀文本",api:"suffix",hint:"清除按钮位于后缀之前；留空时移除后缀插槽。"},passwordToggle:{label:"密码显隐按钮",options:["enabled","disabled"],hint:"仅在 password 类型下生效。"}},presets:[{label:"表格内编辑",state:{value:"项目名称",variant:"borderless",size:"md",clearable:!1}},{label:"紧凑输入",state:{value:"项目名称",size:"sm",clearable:!0}},{label:"大号密码",state:{value:"secret-password",size:"lg",type:"password",clearable:!0}},{label:"前后缀组合",state:{value:"example",prefix:"https://",suffix:".com",clearable:!0}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XInput",source:"XInput",typeOnly:!1},{name:"XField",source:"XField",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<string>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"label",value:"输入内容"},{name:"label-for",value:"demo-input"},{directive:"bind",arg:"error",raw:`:error="state.invalid ? '请检查输入内容。' : undefined"`,expression:{condition:{key:"invalid",model:void 0},yes:{literal:"请检查输入内容。"},no:{absent:!0}}}],children:[{tag:"XInput",unwrap:!1,selfClosing:void 0,props:[{name:"id",value:"demo-input"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"aria-invalid",raw:':aria-invalid="state.invalid"',expression:{key:"invalid",model:void 0}},{directive:"bind",arg:"type",raw:':type="state.type"',expression:{key:"type",model:void 0}},{directive:"bind",arg:"clearable",raw:':clearable="state.clearable"',expression:{key:"clearable",model:void 0}},{directive:"bind",arg:"password-toggle",raw:':password-toggle="state.passwordToggle"',expression:{key:"passwordToggle",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.prefix"',expression:{key:"prefix",model:void 0}},{directive:"slot",arg:"prefix",raw:"#prefix",expression:void 0}],children:[{interpolation:{key:"prefix",model:void 0}}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.suffix"',expression:{key:"suffix",model:void 0}},{directive:"slot",arg:"suffix",raw:"#suffix",expression:void 0}],children:[{interpolation:{key:"suffix",model:void 0}}]}]}]},{text:""}]}],styles:`
.demo {
  display: grid;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  font-size: 14px;
  line-height: 1.6;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
`},defaults:{value:"",placeholder:"输入项目名称",variant:"outlined",size:void 0,disabled:!1,readonly:!1,invalid:!1,type:"text",clearable:!1,prefix:"",suffix:"",passwordToggle:"enabled"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XInput, XField } from '@libingchen/x-ui'

interface State {
  value: string
  placeholder: string
  variant: 'outlined' | 'borderless'
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
  readonly: boolean
  invalid: boolean
  type: 'text' | 'email' | 'password' | 'search'
  clearable: boolean
  prefix: string
  suffix: string
  passwordToggle: 'enabled' | 'disabled'
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XField
      label="输入内容"
      label-for="demo-input"
      :error="state.invalid ? '请检查输入内容。' : undefined"
    >
      <XInput
        id="demo-input"
        v-model="state.value"
        :placeholder="state.placeholder"
        :variant="state.variant"
        :size="state.size"
        :disabled="state.disabled"
        :readonly="state.readonly"
        :aria-invalid="state.invalid"
        :type="state.type"
        :clearable="state.clearable"
        :password-toggle="state.passwordToggle"
      >
        <template v-if="state.prefix" #prefix>{{ state.prefix }}</template>
        <template v-if="state.suffix" #suffix>{{ state.suffix }}</template>
      </XInput>
    </XField>
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
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
</style>`,start:512,end:744};export{e as default};
