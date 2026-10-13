const e={title:"编辑项目资料",description:"编辑后保存或取消；全屏使用视口宽高，关闭全屏后恢复设置的面板宽度。",component:"XDialog",controls:{open:{label:"打开状态"},title:{label:"标题"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},width:{label:"面板宽度",min:300,max:760,group:"advanced"},fullscreen:{label:"全屏"},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDialog",source:"XDialog",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XField",source:"XField",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]},{names:["name"],chunks:["const name = ref('设计系统升级')"]},{names:["result"],chunks:["const result = ref('尚未保存更改。')"]},{names:["save"],chunks:["function save() {\n  result.value = `已保存：${name.value}`\n  ",{key:"open",model:"modelOpen.value"},` = false
}`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XDialog",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{name:"description",value:"修改内容后保存，或取消本次操作。"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"width",raw:':width="state.width"',expression:{key:"width",model:void 0}},{directive:"bind",arg:"fullscreen",raw:':fullscreen="state.fullscreen"',expression:{key:"fullscreen",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{text:"编辑项目资料"}]}]},{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"label",value:"项目名称"},{name:"label-for",value:"demo-dialog-name"}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-dialog-name"},{directive:"model",arg:void 0,raw:'v-model="name"',expression:{raw:["name"]}}],children:[]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"footer",raw:'#footer="{ close }"',expression:{raw:["{ close }"]}}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="close()"',expression:{raw:["close()"]}}],children:[{text:"取消"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"on",arg:"click",raw:'@click="save"',expression:{raw:["save"]}}],children:[{text:"保存更改"}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",open:!1,title:"编辑项目资料",size:void 0,width:440,fullscreen:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XDialog, XButton, XField, XInput } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  open: boolean
  title: string
  size: 'sm' | 'md' | 'lg' | undefined
  width: number
  fullscreen: boolean
}
const state = reactive<State>(`,after:`)
const name = ref('设计系统升级')
const result = ref('尚未保存更改。')
function save() {
  result.value = \`已保存：\${name.value}\`
  state.open = false
}
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XDialog
        :loading="state.loading"
        :loading-blocking="state.loadingBlocking"
        :loading-delay="state.loadingDelay"
        :loading-text="state.loadingText"
        v-model:open="state.open"
        :title="state.title"
        description="修改内容后保存，或取消本次操作。"
        :size="state.size"
        :width="state.width"
        :fullscreen="state.fullscreen"
        ><template #trigger><XButton variant="outline">编辑项目资料</XButton></template
        ><XField label="项目名称" label-for="demo-dialog-name"
          ><XInput id="demo-dialog-name" v-model="name" /></XField
        ><template #footer="{ close }"
          ><XButton variant="outline" @click="close()">取消</XButton
          ><XButton @click="save">保存更改</XButton></template
        ></XDialog
      >
    </div>
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
</style>`,start:417,end:594};export{e as default};
