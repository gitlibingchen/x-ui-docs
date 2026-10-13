const e={title:"文件与内容分栏",description:"拖动分隔条调整两个区域的尺寸，也可以聚焦分隔条后使用方向键。切换方向体验纵向布局。",component:"XResizable",controls:{orientation:{label:"分栏方向",options:["horizontal","vertical"]},withHandle:{label:"显示拖动手柄"},height:{label:"区域高度",min:200,max:450},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XResizable",source:"XResizable",typeOnly:!1},{name:"XResizableItem",source:"XResizableItem",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XResizable",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"key",raw:':key="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"orientation",raw:':orientation="state.orientation"',expression:{key:"orientation",model:void 0}},{directive:"bind",arg:"with-handle",raw:':with-handle="state.withHandle"',expression:{key:"withHandle",model:void 0}},{directive:"bind",arg:"height",raw:':height="state.height"',expression:{key:"height",model:void 0}},{name:"class",value:"panels"}],children:[{tag:"XResizableItem",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{name:"default-size",value:"35%"},{name:"min-size",value:"20%"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"style",value:"padding: 16px"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"文件目录"}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"设计说明"}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"交互规范"}]}]}]},{tag:"XResizableItem",unwrap:!1,selfClosing:void 0,props:[{name:"default-size",value:"65%"},{name:"min-size",value:"25%"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"style",value:"padding: 16px"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"设计说明"}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"拖动中间的分隔条，为内容分配合适的空间。"}]}]}]}]}]}],styles:`
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

.panels {
  border: 1px solid var(--x-border);
  border-radius: 8px;
}
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",orientation:"horizontal",withHandle:!0,height:280},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XResizable, XResizableItem } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  orientation: 'horizontal' | 'vertical'
  withHandle: boolean
  height: number
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <XResizable
      :key="state.orientation"
      :orientation="state.orientation"
      :with-handle="state.withHandle"
      :height="state.height"
      class="panels"
      ><XResizableItem
        :loading="state.loading"
        :loading-blocking="state.loadingBlocking"
        :loading-delay="state.loadingDelay"
        :loading-text="state.loadingText"
        default-size="35%"
        min-size="20%"
        ><div style="padding: 16px">
          <strong>文件目录</strong>
          <p class="note">设计说明</p>
          <p class="note">交互规范</p>
        </div></XResizableItem
      ><XResizableItem default-size="65%" min-size="25%"
        ><div style="padding: 16px">
          <strong>设计说明</strong>
          <p class="note">拖动中间的分隔条，为内容分配合适的空间。</p>
        </div></XResizableItem
      ></XResizable
    >
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

.panels {
  border: 1px solid var(--x-border);
  border-radius: 8px;
}
</style>`,start:377,end:530};export{e as default};
