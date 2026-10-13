const e={title:"命令入口与快捷键",description:"在命令按钮中表达键盘操作。修改按键组合，查看按键组与普通文字的排版。",component:"XKbd",controls:{size:{label:"尺寸",options:["sm","md","lg"],unset:!0},modifier:{label:"修饰键",options:["⌘","Ctrl","Alt","Shift"]},key:{label:"按键"},disabled:{label:"禁用命令入口"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XKbd",source:"XKbd",typeOnly:!1},{name:"XKbdGroup",source:"XKbdGroup",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["message"],chunks:["const message = ref('此示例展示快捷键提示；点击按钮体验命令入口。')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"variant",value:"outline"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"click",raw:`@click="message = '命令入口已触发'"`,expression:{left:{raw:["message"]},operator:"=",right:{literal:"命令入口已触发"}}}],children:[{tag:"span",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"查找文件"}]},{tag:"XKbdGroup",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{tag:"XKbd",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{interpolation:{key:"modifier",model:void 0}}]},{tag:"XKbd",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}}],children:[{interpolation:{key:"key",model:void 0}}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{size:void 0,modifier:"⌘",key:"K",disabled:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XKbd, XKbdGroup, XButton } from '@libingchen/x-ui'

interface State {
  size: 'sm' | 'md' | 'lg' | undefined
  modifier: '⌘' | 'Ctrl' | 'Alt' | 'Shift'
  key: string
  disabled: boolean
}
const state = reactive<State>(`,after:`)
const message = ref('此示例展示快捷键提示；点击按钮体验命令入口。')
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XButton
        :size="state.size"
        variant="outline"
        :disabled="state.disabled"
        @click="message = '命令入口已触发'"
        ><span>查找文件</span
        ><XKbdGroup :size="state.size"
          ><XKbd :size="state.size">{{ state.modifier }}</XKbd
          ><XKbd :size="state.size">{{ state.key }}</XKbd></XKbdGroup
        ></XButton
      >
    </div>
    <p role="status" class="note">{{ message }}</p>
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
</style>`,start:325,end:386};export{e as default};
