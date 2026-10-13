const e={title:"保存项目设置",description:"调整按钮外观、图标与加载状态，执行保存并观察完成反馈。禁用与加载状态会阻止重复操作。",component:"XButton",controls:{variant:{label:"外观",options:["default","secondary","outline","ghost","destructive","link"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},shape:{label:"形状",options:["default","icon"]},disabled:{label:"禁用"},loading:{label:"加载中"},block:{label:"占满容器"},label:{label:"按钮文案",api:"default slot"},icon:{label:"显示图标",api:"default slot"}},presets:[{label:"危险操作",state:{variant:"destructive",label:"删除草稿"}},{label:"图标按钮",state:{shape:"icon",variant:"outline",label:"保存设置"}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Save",source:"Save",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"shape",raw:':shape="state.shape"',expression:{key:"shape",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"block",raw:':block="state.block"',expression:{key:"block",model:void 0}},{directive:"bind",arg:"aria-label",raw:':aria-label="state.label"',expression:{key:"label",model:void 0}}],children:[{tag:"Save",unwrap:!1,selfClosing:!0,props:[{directive:"if",arg:void 0,raw:`v-if="state.icon || state.shape === 'icon'"`,expression:{left:{key:"icon",model:void 0},operator:"||",right:{left:{key:"shape",model:void 0},operator:"===",right:{literal:"icon"}}}},{directive:"bind",arg:"data-icon",raw:`:data-icon="state.shape === 'icon' ? 'icon' : 'inline-start'"`,expression:{condition:{left:{key:"shape",model:void 0},operator:"===",right:{literal:"icon"}},yes:{literal:"icon"},no:{literal:"inline-start"}}},{name:"aria-hidden",value:"true"}],children:[]},{tag:"span",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:`v-if="state.shape !== 'icon'"`,expression:{left:{key:"shape",model:void 0},operator:"!==",right:{literal:"icon"}}}],children:[{interpolation:{key:"label",model:void 0}}]}]}],styles:""},defaults:{variant:"default",size:void 0,shape:"default",disabled:!1,loading:!1,block:!1,label:"保存设置",icon:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref, onBeforeUnmount } from 'vue'
import { XButton } from '@libingchen/x-ui'
import { Save } from '@lucide/vue'

interface State {
  variant: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'
  size: 'sm' | 'md' | 'lg' | undefined
  shape: 'default' | 'icon'
  disabled: boolean
  loading: boolean
  block: boolean
  label: string
  icon: boolean
}
const state = reactive<State>(`,after:`)
const saving = ref(false)
const result = ref('修改参数后，点击按钮保存。')
let timer: ReturnType<typeof setTimeout> | undefined
function save() {
  saving.value = true
  result.value = '正在保存…'
  timer = setTimeout(() => {
    saving.value = false
    result.value = '设置已保存。'
  }, 800)
}
onBeforeUnmount(() => clearTimeout(timer))
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XButton
        :variant="state.variant"
        :size="state.size"
        :shape="state.shape"
        :disabled="state.disabled"
        :loading="state.loading || saving"
        :block="state.block"
        loading-text="正在保存"
        :aria-label="state.label"
        @click="save"
        ><Save
          v-if="state.icon || state.shape === 'icon'"
          :data-icon="state.shape === 'icon' ? 'icon' : 'inline-start'"
          aria-hidden="true"
        /><span v-if="state.shape !== 'icon'">{{ state.label }}</span></XButton
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
</style>`,start:481,end:629};export{e as default};
