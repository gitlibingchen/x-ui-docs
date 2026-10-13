const e={title:"收藏当前文档",description:"使用切换按钮表达一个可撤销的状态，观察按下状态、禁用与外观变化。",component:"XToggle",controls:{value:{label:"已收藏",api:"modelValue"},variant:{label:"外观",options:["default","outline"]},size:{label:"尺寸",options:["sm","md","lg"],unset:!0},disabled:{label:"禁用"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XToggle",source:"XToggle",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Star",source:"Star",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelValue"],chunks:["const modelValue = ref<boolean>(",{key:"value"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XToggle",unwrap:!1,selfClosing:void 0,props:[{directive:"model",arg:void 0,raw:'v-model="state.value"',expression:{key:"value",model:"modelValue"}},{directive:"bind",arg:"variant",raw:':variant="state.variant"',expression:{key:"variant",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"disabled",raw:':disabled="state.disabled"',expression:{key:"disabled",model:void 0}},{name:"aria-label",value:"收藏文档"}],children:[{tag:"Star",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="16"',expression:{literal:16}},{directive:"bind",arg:"fill",raw:`:fill="state.value ? 'currentColor' : 'none'"`,expression:{condition:{key:"value",model:"modelValue"},yes:{literal:"currentColor"},no:{literal:"none"}}},{name:"aria-hidden",value:"true"}],children:[]},{text:"收藏"}]}]},{text:""}]}],styles:`
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
`},defaults:{value:!1,variant:"outline",size:void 0,disabled:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XToggle } from '@libingchen/x-ui'
import { Star } from '@lucide/vue'

interface State {
  value: boolean
  variant: 'default' | 'outline'
  size: 'sm' | 'md' | 'lg' | undefined
  disabled: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div class="row">
      <XToggle
        v-model="state.value"
        :variant="state.variant"
        :size="state.size"
        :disabled="state.disabled"
        aria-label="收藏文档"
        ><Star
          :size="16"
          :fill="state.value ? 'currentColor' : 'none'"
          aria-hidden="true"
        />收藏</XToggle
      >
    </div>
    <p role="status" class="note">{{ state.value ? '已加入收藏夹' : '尚未收藏' }}</p>
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
</style>`,start:331,end:410};export{e as default};
