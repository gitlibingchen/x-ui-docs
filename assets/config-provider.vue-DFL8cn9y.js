const e={title:"应用配置与组件继承",description:"在独立应用预览中切换强调色、语言和默认尺寸，观察输入、日期与选择组件的继承；单个按钮可以覆盖全局尺寸。",component:"XConfigProvider",controls:{size:{label:"全局尺寸",options:["sm","md","lg"],api:"config.size"},color:{label:"强调色",options:["black","blue"],api:"config.color"},locale:{label:"组件语言",options:["zh-CN","en-US","nb-NO"],api:"config.locale"},override:{label:"按钮使用小尺寸",api:"XButton.size"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XSelect",source:"XSelect",typeOnly:!1},{name:"XDatePicker",source:"XDatePicker",typeOnly:!1},{name:"xLocaleZhCN",source:"xLocaleZhCN",typeOnly:!1},{name:"xLocaleEnUS",source:"xLocaleEnUS",typeOnly:!1},{name:"xLocaleNbNO",source:"xLocaleNbNO",typeOnly:!1}],sideEffect:!1}],statements:[{names:["locales"],chunks:["const locales = { 'zh-CN': xLocaleZhCN, 'en-US': xLocaleEnUS, 'nb-NO': xLocaleNbNO }"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"config",raw:':config="{ size: state.size, color: state.color, locale: locales[state.locale] }"',expression:{object:[{name:"size",value:{key:"size",model:void 0}},{name:"color",value:{key:"color",model:void 0}},{name:"locale",value:{raw:["locales[",{key:"locale",model:void 0},"]"]}}]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"stack"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目默认设置"}]},{tag:"XSelect",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"options",raw:':options="[]"',expression:{array:[]}},{name:"aria-label",value:"无数据选择器"}],children:[]},{tag:"XDatePicker",unwrap:!1,selfClosing:!0,props:[{name:"aria-label",value:"日期选择器"}],children:[]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:`:size="state.override ? 'sm' : undefined"`,expression:{condition:{key:"override",model:void 0},yes:{literal:"sm"},no:{absent:!0}}}],children:[{text:"继承或覆盖尺寸"}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"组件默认文案跟随语言配置；业务标题由应用自行翻译。"}]}]}]}]}],styles:`
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
`},defaults:{size:"md",color:"black",locale:"zh-CN",override:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import {
  XConfigProvider,
  XButton,
  XSelect,
  XDatePicker,
  xLocaleZhCN,
  xLocaleEnUS,
  xLocaleNbNO,
} from '@libingchen/x-ui'

interface State {
  size: 'sm' | 'md' | 'lg'
  color: 'black' | 'blue'
  locale: 'zh-CN' | 'en-US' | 'nb-NO'
  override: boolean
}
const state = reactive<State>(`,after:`)
const locales = { 'zh-CN': xLocaleZhCN, 'en-US': xLocaleEnUS, 'nb-NO': xLocaleNbNO }
<\/script>

<template>
  <div class="demo">
    <XConfigProvider
      :config="{ size: state.size, color: state.color, locale: locales[state.locale] }"
      ><div class="stack">
        <strong>项目默认设置</strong><XSelect :options="[]" aria-label="无数据选择器" /><XDatePicker
          aria-label="日期选择器"
        />
        <div class="row">
          <XButton :size="state.override ? 'sm' : undefined">继承或覆盖尺寸</XButton>
        </div>
        <p class="note">组件默认文案跟随语言配置；业务标题由应用自行翻译。</p>
      </div></XConfigProvider
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
</style>`,start:391,end:455};export{e as default};
