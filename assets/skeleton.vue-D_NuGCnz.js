const e={title:"内容加载占位",description:"使用与内容布局对应的骨架占位，切换到加载完成状态，比较头像、标题和摘要的布局。",component:"XSkeleton",controls:{loading:{label:"加载中"},lines:{label:"摘要行数",min:1,max:5},avatar:{label:"头像占位"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XSkeleton",source:"XSkeleton",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["modelLoading"],chunks:["const modelLoading = ref<boolean>(",{key:"loading"},")"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.loading"',expression:{key:"loading",model:"modelLoading"}},{name:"class",value:"stack"},{name:"aria-label",value:"正在加载文章"},{name:"aria-busy",value:"true"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XSkeleton",unwrap:!1,selfClosing:!0,props:[{directive:"if",arg:void 0,raw:'v-if="state.avatar"',expression:{key:"avatar",model:void 0}},{name:"class",value:"avatar-placeholder"}],children:[]},{tag:"XSkeleton",unwrap:!1,selfClosing:!0,props:[{name:"class",value:"title-placeholder"}],children:[]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="line in state.lines"',expression:{raw:["line in ",{key:"lines",model:void 0},""]}},{directive:"bind",arg:"key",raw:':key="line"',expression:{raw:["line"]}},{directive:"bind",arg:"style",raw:`:style="{ width: line === state.lines ? '70%' : '100%' }"`,expression:{object:[{name:"width",value:{condition:{left:{raw:["line"]},operator:"===",right:{key:"lines",model:void 0}},yes:{literal:"70%"},no:{literal:"100%"}}}]}}],children:[{tag:"XSkeleton",unwrap:!1,selfClosing:!0,props:[{name:"class",value:"line-placeholder"}],children:[]}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{directive:"else",arg:void 0,raw:"v-else",expression:void 0},{name:"class",value:"stack"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"为团队建立共享的设计语言"}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"从组件、交互和内容规范开始，让每个人都能交付一致的产品体验。"}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"row"}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"},{name:"size",value:"sm"},{directive:"on",arg:"click",raw:'@click="state.loading = !state.loading"',expression:{left:{key:"loading",model:"modelLoading"},operator:"=",right:{not:{key:"loading",model:"modelLoading"}}}}],children:[{interpolation:{condition:{key:"loading",model:"modelLoading"},yes:{literal:"加载完成"},no:{literal:"重新加载"}}}]}]}]}],styles:`
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

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.title-placeholder {
  width: 60%;
  height: 20px;
}
.line-placeholder {
  height: 14px;
  width: 100%;
}
`},defaults:{loading:!0,lines:3,avatar:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XSkeleton, XButton } from '@libingchen/x-ui'

interface State {
  loading: boolean
  lines: number
  avatar: boolean
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <div v-if="state.loading" class="stack" aria-label="正在加载文章" aria-busy="true">
      <div class="row">
        <XSkeleton v-if="state.avatar" class="avatar-placeholder" /><XSkeleton
          class="title-placeholder"
        />
      </div>
      <div
        v-for="line in state.lines"
        :key="line"
        :style="{ width: line === state.lines ? '70%' : '100%' }"
      >
        <XSkeleton class="line-placeholder" />
      </div>
    </div>
    <div v-else class="stack">
      <strong>为团队建立共享的设计语言</strong>
      <p class="note">从组件、交互和内容规范开始，让每个人都能交付一致的产品体验。</p>
    </div>
    <div class="row">
      <XButton variant="outline" size="sm" @click="state.loading = !state.loading">{{
        state.loading ? '加载完成' : '重新加载'
      }}</XButton>
    </div>
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

.avatar-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.title-placeholder {
  width: 60%;
  height: 20px;
}
.line-placeholder {
  height: 14px;
  width: 100%;
}
</style>`,start:251,end:292};export{e as default};
