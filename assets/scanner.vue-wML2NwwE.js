const e={title:"扫描项目资产编码",description:"点击扫描器中的入口启动摄像头，或选择图片识别。页面不会自动打开摄像头；识别结果与错误信息显示在下方。",component:"XScanner",controls:{continuous:{label:"连续识别"},disabled:{label:"禁用"},showImagePicker:{label:"图片识别入口"},facingMode:{label:"摄像头方向",options:["environment","user"]},duplicateDelay:{label:"重复识别间隔（毫秒）",min:500,max:5e3,step:500,group:"advanced"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XScanner",source:"XScanner",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('等待启动扫描或选择图片。')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XScanner",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"auto-start",raw:':auto-start="false"',expression:{literal:!1}},{directive:"bind",arg:"continuous",raw:':continuous="state.continuous"',expression:{key:"continuous",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"show-image-picker",raw:':show-image-picker="state.showImagePicker"',expression:{key:"showImagePicker",model:void 0}},{directive:"bind",arg:"facing-mode",raw:':facing-mode="state.facingMode"',expression:{key:"facingMode",model:void 0}},{directive:"bind",arg:"duplicate-delay",raw:':duplicate-delay="state.duplicateDelay"',expression:{key:"duplicateDelay",model:void 0}},{name:"title",value:"扫描资产编码"},{name:"description",value:"将二维码或条码放入取景区域"},{directive:"on",arg:"detect",raw:'@detect="result = `识别结果：${$event.value}`"',expression:{left:{raw:["result"]},operator:"=",right:{raw:["`识别结果：${$event.value}`"]}}},{directive:"on",arg:"error",raw:`@error="result = 'message' in $event ? $event.message : '识别失败'"`,expression:{left:{raw:["result"]},operator:"=",right:{condition:{left:{literal:"message"},operator:"in",right:{raw:["$event"]}},yes:{raw:["$event.message"]},no:{literal:"识别失败"}}}}],children:[]},{text:""}]}],styles:`
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
`},defaults:{continuous:!1,disabled:!1,showImagePicker:!0,facingMode:"environment",duplicateDelay:1500},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XScanner } from '@libingchen/x-ui'

interface State {
  continuous: boolean
  disabled: boolean
  showImagePicker: boolean
  facingMode: 'environment' | 'user'
  duplicateDelay: number
}
const state = reactive<State>(`,after:`)
const result = ref('等待启动扫描或选择图片。')
<\/script>

<template>
  <div class="demo">
    <XScanner
      :auto-start="false"
      :continuous="state.continuous"
      :disabled="state.disabled"
      :show-image-picker="state.showImagePicker"
      :facing-mode="state.facingMode"
      :duplicate-delay="state.duplicateDelay"
      title="扫描资产编码"
      description="将二维码或条码放入取景区域"
      @detect="result = \`识别结果：\${$event.value}\`"
      @error="result = 'message' in $event ? $event.message : '识别失败'"
    />
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
</style>`,start:324,end:445};export{e as default};
