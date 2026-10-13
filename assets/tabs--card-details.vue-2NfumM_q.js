const e={title:"文档页签细节",description:"md 总高 36px，四周留白 3px、项间距 3px、圆角 8px，不带通栏底线。页签默认宽 200px，可用 tab-width 自定义。长标题右侧 16px 淡化，悬停滚动到末尾时取消淡化且不额外留白；关闭按钮隐藏时不占位。切换长短标题可比较溢出效果。",component:"XTabs",controls:{size:{label:"尺寸",options:["sm","md","lg"]},tabWidth:{label:"页签宽度（px）",min:100,max:400,step:10}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Globe",source:"Globe",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XSwitch",source:"XSwitch",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelTabWidth"],chunks:["const modelTabWidth = ref<number>(",{key:"tabWidth"},")"]},{names:["longTitle"],chunks:["const longTitle = ref(true)"]},{names:["closable"],chunks:["const closable = ref(true)"]},{names:["files"],chunks:["const files = ref(['first', 'second', 'third'])"]},{names:["title"],chunks:["const title = '大量数据直接删除浏览器会卡死，排查与优化记录'"]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-3"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap items-center gap-3"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:'@click="longTitle = !longTitle"',expression:{left:{raw:["longTitle"]},operator:"=",right:{not:{raw:["longTitle"]}}}}],children:[{text:"切换长短标题"}]},{tag:"label",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"flex flex-wrap items-center gap-2"}],children:[{tag:"XSwitch",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="closable"',expression:{raw:["closable"]}},{name:"aria-label",value:"允许关闭页签"}],children:[]},{text:"允许关闭"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"group"},{name:"aria-label",value:"页签宽度"},{name:"class",value:"flex flex-wrap items-center gap-2"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="width in [160, 200, 280]"',expression:{raw:["width in [160, 200, 280]"]}},{directive:"bind",arg:"key",raw:':key="width"',expression:{raw:["width"]}},{name:"variant",value:"outline"},{directive:"bind",arg:"aria-pressed",raw:':aria-pressed="state.tabWidth === width"',expression:{left:{key:"tabWidth",model:"modelTabWidth"},operator:"===",right:{raw:["width"]}}},{directive:"on",arg:"click",raw:'@click="state.tabWidth = width"',expression:{left:{key:"tabWidth",model:"modelTabWidth"},operator:"=",right:{raw:["width"]}}}],children:[{interpolation:{raw:["width"]}},{text:"px"}]}]},{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"card"},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"tab-width",raw:':tab-width="state.tabWidth"',expression:{key:"tabWidth",model:"modelTabWidth"}},{name:"aria-label",value:"浏览器式页签细节"},{directive:"on",arg:"close",raw:'@close="files = files.filter((value) => value !== $event)"',expression:{left:{raw:["files"]},operator:"=",right:{raw:["files.filter((value) => value !== $event)"]}}}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="file in files"',expression:{raw:["file in files"]}},{directive:"bind",arg:"key",raw:':key="file"',expression:{raw:["file"]}},{directive:"bind",arg:"value",raw:':value="file"',expression:{raw:["file"]}},{directive:"bind",arg:"label",raw:`:label="
          file === 'first'
            ? longTitle
              ? title
              : '短标题'
            : file === 'second'
              ? '新标签页'
              : '另一个标签页'
        "`,expression:{condition:{left:{raw:["file"]},operator:"===",right:{literal:"first"}},yes:{condition:{raw:["longTitle"]},yes:{raw:["title"]},no:{literal:"短标题"}},no:{condition:{left:{raw:["file"]},operator:"===",right:{literal:"second"}},yes:{literal:"新标签页"},no:{literal:"另一个标签页"}}}},{directive:"bind",arg:"icon",raw:':icon="Globe"',expression:{raw:["Globe"]}},{directive:"bind",arg:"closable",raw:':closable="closable"',expression:{raw:["closable"]}}],children:[{text:" 关闭按钮隐藏时不占位；悬停长标题可缓慢滚动查看末尾，移开后回到开头。 "}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"empty",raw:"#empty",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{directive:"on",arg:"click",raw:`@click="files = ['first', 'second', 'third']"`,expression:{left:{raw:["files"]},operator:"=",right:{array:[{literal:"first"},{literal:"second"},{literal:"third"}]}}}],children:[{text:"恢复示例页签"}]}]}]}]}],styles:""},defaults:{size:"md",tabWidth:200},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { Globe } from '@lucide/vue'
import { XTabs, XTabItem, XButton, XSwitch } from '@libingchen/x-ui'
interface State {
  size: 'sm' | 'md' | 'lg'
  tabWidth: number
}
const state = reactive<State>(`,after:`)
const longTitle = ref(true)
const closable = ref(true)
const files = ref(['first', 'second', 'third'])
const title = '大量数据直接删除浏览器会卡死，排查与优化记录'
<\/script>
<template>
  <div class="demo grid w-full min-w-0 gap-3">
    <div class="flex flex-wrap items-center gap-3">
      <XButton variant="outline" @click="longTitle = !longTitle">切换长短标题</XButton>
      <label class="flex flex-wrap items-center gap-2"
        ><XSwitch v-model="closable" aria-label="允许关闭页签" />允许关闭</label
      >
    </div>
    <div role="group" aria-label="页签宽度" class="flex flex-wrap items-center gap-2">
      <XButton
        v-for="width in [160, 200, 280]"
        :key="width"
        variant="outline"
        :aria-pressed="state.tabWidth === width"
        @click="state.tabWidth = width"
        >{{ width }}px</XButton
      >
    </div>
    <XTabs
      variant="card"
      :size="state.size"
      :tab-width="state.tabWidth"
      aria-label="浏览器式页签细节"
      @close="files = files.filter((value) => value !== $event)"
    >
      <XTabItem
        v-for="file in files"
        :key="file"
        :value="file"
        :label="
          file === 'first'
            ? longTitle
              ? title
              : '短标题'
            : file === 'second'
              ? '新标签页'
              : '另一个标签页'
        "
        :icon="Globe"
        :closable="closable"
      >
        关闭按钮隐藏时不占位；悬停长标题可缓慢滚动查看末尾，移开后回到开头。
      </XTabItem>
      <template #empty
        ><XButton variant="outline" @click="files = ['first', 'second', 'third']"
          >恢复示例页签</XButton
        ></template
      >
    </XTabs>
  </div>
</template>`,start:299,end:328};export{e as default};
