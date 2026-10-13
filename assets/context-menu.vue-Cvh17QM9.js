const e={title:"项目快捷操作",description:"通过右键或键盘菜单键打开上下文菜单，体验普通操作、复选项、子菜单和禁用项。",component:"XContextMenu",controls:{checked:{label:"关注项目",api:"XContextMenuItem.modelValue"},disabled:{label:"禁用归档操作",api:"XContextMenuItem.disabled"},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},modal:{label:"模态菜单",group:"advanced"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XContextMenu",source:"XContextMenu",typeOnly:!1},{name:"XContextMenuItem",source:"XContextMenuItem",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelChecked"],chunks:["const modelChecked = ref<boolean>(",{key:"checked"},")"]},{names:["result"],chunks:["const result = ref('选择一项操作查看反馈')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XContextMenu",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"modal",raw:':modal="state.modal"',expression:{key:"modal",model:void 0}}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"trigger",raw:"#trigger",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{text:"右键查看项目操作"}]}]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"type",value:"label"},{name:"label",value:"设计系统升级"}],children:[]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"label",value:"打开项目"},{directive:"on",arg:"select",raw:`@select="result = '已打开项目'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已打开项目"}}}],children:[]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"type",value:"checkbox"},{directive:"model",arg:void 0,raw:'v-model="state.checked"',expression:{key:"checked",model:"modelChecked"}},{name:"label",value:"关注项目"}],children:[]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:void 0,props:[{name:"type",value:"submenu"},{name:"label",value:"移动到"}],children:[{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"label",value:"我的工作区"},{directive:"on",arg:"select",raw:`@select="result = '已移动到我的工作区'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已移动到我的工作区"}}}],children:[]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"label",value:"团队工作区"},{directive:"on",arg:"select",raw:`@select="result = '已移动到团队工作区'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已移动到团队工作区"}}}],children:[]}]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"type",value:"separator"}],children:[]},{tag:"XContextMenuItem",unwrap:!1,selfClosing:!0,props:[{name:"label",value:"归档项目"},{name:"variant",value:"destructive"},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"on",arg:"select",raw:`@select="result = '已请求归档项目'"`,expression:{left:{raw:["result"]},operator:"=",right:{literal:"已请求归档项目"}}}],children:[]}]}]},{text:""}]}],styles:`
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
`},defaults:{checked:!0,disabled:!1,size:void 0,modal:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XContextMenu, XContextMenuItem, XButton } from '@libingchen/x-ui'

interface State {
  checked: boolean
  disabled: boolean
  size: 'sm' | 'md' | 'lg' | undefined
  modal: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('选择一项操作查看反馈')
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XContextMenu :size="state.size" :modal="state.modal"
        ><template #trigger><XButton variant="outline">右键查看项目操作</XButton></template
        ><XContextMenuItem type="label" label="设计系统升级" /><XContextMenuItem
          label="打开项目"
          @select="result = '已打开项目'" /><XContextMenuItem
          type="checkbox"
          v-model="state.checked"
          label="关注项目" /><XContextMenuItem type="submenu" label="移动到"
          ><XContextMenuItem
            label="我的工作区"
            @select="result = '已移动到我的工作区'" /><XContextMenuItem
            label="团队工作区"
            @select="result = '已移动到团队工作区'" /></XContextMenuItem
        ><XContextMenuItem type="separator" /><XContextMenuItem
          label="归档项目"
          variant="destructive"
          :disabled="state.disabled"
          @select="result = '已请求归档项目'"
      /></XContextMenu>
    </div>
    <p role="status" class="note">{{ result }} · {{ state.checked ? '已关注' : '未关注' }}</p>
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
</style>`,start:319,end:383};export{e as default};
