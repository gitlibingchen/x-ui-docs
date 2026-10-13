const e={title:"异步查询反馈",description:"有默认插槽时覆盖业务区域，无默认插槽时只显示加载反馈。内容在加载前后保持挂载。",component:"XSpinner",controls:{wrapped:{label:"包裹业务内容"},text:{label:"加载文案"},delay:{label:"反馈延迟（毫秒）",min:0,max:1e3},blocking:{label:"阻止区域操作"},loading:{label:"查询中"},size:{label:"图标大小",min:12,max:64},label:{label:"无障碍文案"},strokeWidth:{label:"描边宽度",min:1,max:4,step:.5,group:"advanced"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSpinner",source:"XSpinner",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelLoading"],chunks:["const modelLoading = ref<boolean>(",{key:"loading"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XSpinner",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.wrapped"',expression:{key:"wrapped",model:void 0}},{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:"modelLoading"}},{directive:"bind",arg:"text",raw:':text="state.text"',expression:{key:"text",model:void 0}},{directive:"bind",arg:"delay",raw:':delay="state.delay"',expression:{key:"delay",model:void 0}},{directive:"bind",arg:"blocking",raw:':blocking="state.blocking"',expression:{key:"blocking",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"label",raw:':label="state.label"',expression:{key:"label",model:void 0}},{directive:"bind",arg:"stroke-width",raw:':stroke-width="state.strokeWidth"',expression:{key:"strokeWidth",model:void 0}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack form-content"}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"aria-label",value:"项目名称"},{name:"model-value",value:"设计系统"}],children:[]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"加载期间保留当前项目内容。"}]}]}]},{tag:"XSpinner",unwrap:!1,selfClosing:!0,props:[{directive:"else",arg:void 0,raw:"v-else",expression:void 0},{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:"modelLoading"}},{directive:"bind",arg:"text",raw:':text="state.text"',expression:{key:"text",model:void 0}},{directive:"bind",arg:"delay",raw:':delay="state.delay"',expression:{key:"delay",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"label",raw:':label="state.label"',expression:{key:"label",model:void 0}},{directive:"bind",arg:"stroke-width",raw:':stroke-width="state.strokeWidth"',expression:{key:"strokeWidth",model:void 0}}],children:[]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="state.loading = !state.loading"',expression:{left:{key:"loading",model:"modelLoading"},operator:"=",right:{not:{key:"loading",model:"modelLoading"}}}}],children:[{interpolation:{condition:{key:"loading",model:"modelLoading"},yes:{literal:"完成查询"},no:{literal:"重新查询"}}}]}]}]}],styles:`
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
.form-content {
  padding: 1rem;
  min-height: 8rem;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
`},defaults:{wrapped:!0,text:"正在查询项目",delay:150,blocking:!0,loading:!0,size:24,label:"正在查询项目",strokeWidth:2},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSpinner, XButton, XInput } from '@libingchen/x-ui'

interface State {
  wrapped: boolean
  text: string
  delay: number
  blocking: boolean
  loading: boolean
  size: number
  label: string
  strokeWidth: number
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XSpinner
      v-if="state.wrapped"
      :loading="state.loading"
      :text="state.text"
      :delay="state.delay"
      :blocking="state.blocking"
      :size="state.size"
      :label="state.label"
      :stroke-width="state.strokeWidth"
    >
      <div class="stack form-content">
        <XInput aria-label="项目名称" model-value="设计系统" />
        <p class="note">加载期间保留当前项目内容。</p>
      </div>
    </XSpinner>
    <XSpinner
      v-else
      :loading="state.loading"
      :text="state.text"
      :delay="state.delay"
      :size="state.size"
      :label="state.label"
      :stroke-width="state.strokeWidth"
    />
    <div class="row">
      <XButton variant="outline" @click="state.loading = !state.loading">{{
        state.loading ? '完成查询' : '重新查询'
      }}</XButton>
    </div>
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
.form-content {
  padding: 1rem;
  min-height: 8rem;
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
</style>`,start:347,end:483};export{e as default};
