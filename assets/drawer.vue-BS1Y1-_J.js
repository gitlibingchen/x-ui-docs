const e={title:"安排本周工作量",description:"从触发入口打开完整编辑面板，修改内容后保存或取消，观察打开状态和关闭后的结果。可以拖动手柄关闭面板。",component:"XDrawer",controls:{open:{label:"打开状态"},title:{label:"标题"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},width:{label:"左右面板宽度",hint:"仅作用于左、右方向；上下方向保持视口宽度，窄屏自动收缩。",min:300,max:760,group:"advanced"},swipeDirection:{label:"滑动方向",options:["up","right","down","left"]},showSwipeHandle:{label:"拖拽手柄"},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XDrawer",source:"XDrawer",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XField",source:"XField",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelOpen"],chunks:["const modelOpen = ref<boolean>(",{key:"open"},")"]},{names:["name"],chunks:["const name = ref('设计系统升级')"]},{names:["result"],chunks:["const result = ref('尚未保存更改。')"]},{names:["save"],chunks:["function save() {\n  result.value = `已保存：${name.value}`\n  ",{key:"open",model:"modelOpen.value"},` = false
}`]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XDrawer",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{directive:"model",arg:"open",raw:'v-model:open="state.open"',expression:{key:"open",model:"modelOpen"}},{directive:"bind",arg:"title",raw:':title="state.title"',expression:{key:"title",model:void 0}},{name:"description",value:"修改内容后保存，或取消本次操作。"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"width",raw:`:width="
          ['left', 'right'].includes(state.swipeDirection)
            ? \`min(\${state.width}px, calc(100dvw - 1rem))\`
            : undefined
        "`,expression:{condition:{raw:["['left', 'right'].includes(",{key:"swipeDirection",model:void 0},")"]},yes:{raw:["`min(${",{key:"width",model:void 0},"}px, calc(100dvw - 1rem))`"]},no:{absent:!0}}},{directive:"bind",arg:"swipe-direction",raw:':swipe-direction="state.swipeDirection"',expression:{key:"swipeDirection",model:void 0}},{directive:"bind",arg:"show-swipe-handle",raw:':show-swipe-handle="state.showSwipeHandle"',expression:{key:"showSwipeHandle",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{text:"安排本周工作量"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack form-content"}],children:[{tag:"XField",unwrap:!1,selfClosing:void 0,props:[{name:"label",value:"项目名称"},{name:"label-for",value:"demo-drawer-name"}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"id",value:"demo-drawer-name"},{directive:"model",arg:void 0,raw:'v-model="name"',expression:{raw:["name"]}}],children:[]}]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"footer",raw:'#footer="{ close }"',expression:{raw:["{ close }"]}}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="close()"',expression:{raw:["close()"]}}],children:[{text:"取消"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"on",arg:"click",raw:'@click="save"',expression:{raw:["save"]}}],children:[{text:"保存更改"}]}]}]}]},{text:""}]}],styles:`
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
  padding: var(--x-container-padding);
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",open:!1,title:"安排本周工作量",size:void 0,width:440,swipeDirection:"down",showSwipeHandle:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XDrawer, XButton, XField, XInput } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  open: boolean
  title: string
  size: 'sm' | 'md' | 'lg' | undefined
  width: number
  swipeDirection: 'up' | 'right' | 'down' | 'left'
  showSwipeHandle: boolean
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
      <XDrawer
        :loading="state.loading"
        :loading-blocking="state.loadingBlocking"
        :loading-delay="state.loadingDelay"
        :loading-text="state.loadingText"
        v-model:open="state.open"
        :title="state.title"
        description="修改内容后保存，或取消本次操作。"
        :size="state.size"
        :width="
          ['left', 'right'].includes(state.swipeDirection)
            ? \`min(\${state.width}px, calc(100dvw - 1rem))\`
            : undefined
        "
        :swipe-direction="state.swipeDirection"
        :show-swipe-handle="state.showSwipeHandle"
        ><template #trigger><XButton variant="outline">安排本周工作量</XButton></template>
        <div class="stack form-content">
          <XField label="项目名称" label-for="demo-drawer-name"
            ><XInput id="demo-drawer-name" v-model="name"
          /></XField>
        </div>
        <template #footer="{ close }"
          ><XButton variant="outline" @click="close()">取消</XButton
          ><XButton @click="save">保存更改</XButton></template
        ></XDrawer
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
.form-content {
  padding: var(--x-container-padding);
}
.note {
  margin: 0;
  color: var(--x-muted-foreground);
  font-size: 12px;
}
</style>`,start:473,end:681};export{e as default};
