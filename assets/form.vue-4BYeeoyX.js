const e={title:"创建协作项目",description:"完整表单包含字段绑定、校验、提交和重置。调整校验时机与表单布局，体验错误提示和提交结果。",component:"XForm",controls:{values:{label:"表单数据",kind:"json",api:"modelValue"},validateOn:{label:"校验时机",options:["submit","blur","change","input"]},orientation:{label:"字段方向",options:["vertical","horizontal","responsive"]},disabled:{label:"禁用"},readonly:{label:"只读"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XForm",source:"XForm",typeOnly:!1},{name:"XField",source:"XField",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1},{name:"XTextarea",source:"XTextarea",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XFormValues",source:"type XFormValues",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValues"],chunks:["const modelValues = ref<XFormValues>(",{key:"values"},")"]},{names:["result"],chunks:["const result = ref('填写项目名称后提交。')"]},{names:["validate"],chunks:[`function validate(values: XFormValues) {
  return String(values.name ?? '').trim().length < 2 ? { name: '项目名称至少需要 2 个字符。' } : {}
}`]},{names:["submit"],chunks:["function submit(values: XFormValues) {\n  result.value = `项目“${values.name}”已创建（本地演示）。`\n}"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XForm",unwrap:!1,selfClosing:void 0,props:[{directive:"model",arg:void 0,raw:'v-model="state.values"',expression:{key:"values",model:"modelValues"}},{directive:"bind",arg:"schema",raw:':schema="validate"',expression:{raw:["validate"]}},{directive:"bind",arg:"validate-on",raw:':validate-on="state.validateOn"',expression:{key:"validateOn",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"readonly",raw:':readonly="state.readonly"',expression:{key:"readonly",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"on",arg:"submit",raw:'@submit="submit"',expression:{raw:["submit"]}},{directive:"on",arg:"invalid",raw:`@invalid="result = '请先修正表单错误。'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"请先修正表单错误。"}}},{directive:"on",arg:"reset",raw:`@reset="result = '表单已重置'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"表单已重置"}}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"default",raw:'#default="{ reset }"',expression:{raw:["{ reset }"]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack"}],children:[{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"name",value:"name"},{name:"label",value:"项目名称"},{name:"required",value:void 0}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"placeholder",value:"至少 2 个字符"}],children:[]}]},{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"name",value:"description"},{name:"label",value:"项目说明"},{name:"description",value:"描述项目的目标与协作范围。"}],children:[{tag:"XTextarea",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"rows",raw:':rows="3"',expression:{literal:3}}],children:[]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"type",value:"submit"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled || state.readonly"',expression:{left:{key:"disabled",model:void 0},operator:"||",right:{key:"readonly",model:void 0}}}],children:[{text:"创建项目"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"type",value:"button"},{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="reset()"',expression:{raw:["reset()"]}}],children:[{text:"重置表单"}]}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{values:{name:"",description:""},validateOn:"submit",orientation:"vertical",disabled:!1,readonly:!1,size:void 0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XForm, XField, XInput, XTextarea, XButton, type XFormValues } from '@libingchen/x-ui'

interface State {
  values: XFormValues
  validateOn: 'submit' | 'blur' | 'change' | 'input'
  orientation: 'vertical' | 'horizontal' | 'responsive'
  disabled: boolean
  readonly: boolean
  size: 'sm' | 'md' | 'lg' | undefined
}
const state = reactive<State>(`,after:`)
const result = ref('填写项目名称后提交。')
function validate(values: XFormValues) {
  return String(values.name ?? '').trim().length < 2 ? { name: '项目名称至少需要 2 个字符。' } : {}
}
function submit(values: XFormValues) {
  result.value = \`项目“\${values.name}”已创建（本地演示）。\`
}
<\/script>

<template>
  <div class="demo">
    <XForm
      v-model="state.values"
      :schema="validate"
      :validate-on="state.validateOn"
      :orientation="state.orientation"
      :disabled="state.disabled"
      :readonly="state.readonly"
      :size="state.size"
      @submit="submit"
      @invalid="result = '请先修正表单错误。'"
      @reset="result = '表单已重置'"
      ><template #default="{ reset }"
        ><div class="stack">
          <XField name="name" label="项目名称" required
            ><XInput placeholder="至少 2 个字符" /></XField
          ><XField name="description" label="项目说明" description="描述项目的目标与协作范围。"
            ><XTextarea :rows="3"
          /></XField>
          <div class="row">
            <XButton type="submit" :disabled="state.disabled || state.readonly">创建项目</XButton
            ><XButton type="button" variant="outline" @click="reset()">重置表单</XButton>
          </div>
        </div></template
      ></XForm
    >
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
</style>`,start:454,end:606};export{e as default};
