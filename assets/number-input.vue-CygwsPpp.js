const e={title:"小数与范围",description:"默认允许负数和小数，不限制范围；开启范围限制后可设置上下限。步长默认 1，只控制增减幅度。",component:"XNumberInput",controls:{value:{label:"数值",api:"modelValue",step:1e-4},placeholder:{label:"占位提示"},limitRange:{label:"启用范围限制"},min:{label:"下限",hint:"启用范围限制后生效，可设置负数。"},max:{label:"上限",hint:"启用范围限制后生效。"},step:{label:"步长",min:1e-4,step:.1},format:{label:"显示格式",options:["none","thousands","percent"]},decimalPlaces:{label:"输入小数位数",min:0,max:100,step:1,unset:!0,hint:"限制输入位数，超出位数不能键入，粘贴时截断；省略时不限。"},displayDecimalPlaces:{label:"显示小数位数",min:0,max:100,step:1,unset:!0,hint:"format.decimalPlaces 仅控制显示四舍五入，不改变实际值。"},theme:{label:"按钮布局",options:["none","column"]},align:{label:"文字对齐",options:["left","center","right"]},disabled:{label:"禁用"},readonly:{label:"只读"},variant:{label:"外观",options:["outlined","borderless"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},presets:[{label:"限定范围与步进",state:{limitRange:!0,min:0,step:12,value:24,max:120}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XNumberInput",source:"XNumberInput",typeOnly:!1},{name:"XLabel",source:"XLabel",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<number | undefined>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XLabel",unwrap:!1,selfClosing:void 0,props:[{name:"for",value:"demo-quantity"}],children:[{text:"数值"}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"XNumberInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-quantity"},{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"placeholder",raw:':placeholder="state.placeholder"',expression:{key:"placeholder",model:void 0}},{directive:"bind",arg:"min",raw:':min="state.limitRange ? state.min : undefined"',expression:{condition:{key:"limitRange",model:void 0},yes:{key:"min",model:void 0},no:{absent:!0}}},{directive:"bind",arg:"max",raw:':max="state.limitRange ? state.max : undefined"',expression:{condition:{key:"limitRange",model:void 0},yes:{key:"max",model:void 0},no:{absent:!0}}},{directive:"bind",arg:"step",raw:':step="state.step"',expression:{key:"step",model:void 0}},{directive:"bind",arg:"format",raw:':format="{ type: state.format, decimalPlaces: state.displayDecimalPlaces }"',expression:{object:[{name:"type",value:{key:"format",model:void 0}},{name:"decimalPlaces",value:{key:"displayDecimalPlaces",model:void 0}}]}},{directive:"bind",arg:"decimal-places",raw:':decimal-places="state.decimalPlaces"',expression:{key:"decimalPlaces",model:void 0}},{directive:"bind",arg:"theme",raw:':theme="state.theme"',expression:{key:"theme",model:void 0}},{directive:"bind",arg:"align",raw:':align="state.align"',expression:{key:"align",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[]}]},{text:""}]}],styles:`
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
`},defaults:{value:12.3456,placeholder:"输入数值",format:"none",decimalPlaces:void 0,displayDecimalPlaces:void 0,limitRange:!1,min:0,max:100,step:1,theme:"none",align:"left",disabled:!1,readonly:!1,variant:"outlined",size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XNumberInput, XLabel } from '@libingchen/x-ui'

interface State {
  value: number | undefined
  placeholder: string
  format: 'none' | 'thousands' | 'percent'
  decimalPlaces: number | undefined
  displayDecimalPlaces: number | undefined
  limitRange: boolean
  min: number
  max: number
  step: number
  theme: 'none' | 'column'
  align: 'left' | 'center' | 'right'
  disabled: boolean
  readonly: boolean
  variant: 'outlined' | 'borderless'
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XLabel for="demo-quantity">数值</XLabel>
    <div>
      <XNumberInput
        id="demo-quantity"
        v-model="state.value"
        :placeholder="state.placeholder"
        :min="state.limitRange ? state.min : undefined"
        :max="state.limitRange ? state.max : undefined"
        :step="state.step"
        :format="{ type: state.format, decimalPlaces: state.displayDecimalPlaces }"
        :decimal-places="state.decimalPlaces"
        :theme="state.theme"
        :align="state.align"
        :disabled="state.disabled"
        :readonly="state.readonly"
        :variant="state.variant"
        :size="state.size"
      />
    </div>
    <p role="status" class="note">当前数值：{{ state.value ?? '空' }}</p>
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
</style>`,start:617,end:910};export{e as default};
