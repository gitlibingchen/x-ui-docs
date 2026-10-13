const e={title:"项目协作者",description:"展示协作者的头像回退与在线标记，修改可见人数以观察头像组的溢出计数。",component:"XAvatar",controls:{size:{label:"尺寸",options:["sm","md","lg"]},max:{label:"最多显示",min:1,max:4},total:{label:"协作者总数",min:4,max:20},badge:{label:"在线标记",api:"badge slot"},fallback:{label:"回退文字",api:"fallback"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAvatar",source:"XAvatar",typeOnly:!1},{name:"XAvatarGroup",source:"XAvatarGroup",typeOnly:!1}],sideEffect:!1}],statements:[],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"strong",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"项目协作者"}]},{tag:"XAvatarGroup",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"max",raw:':max="state.max"',expression:{key:"max",model:void 0}},{directive:"bind",arg:"total",raw:':total="state.total"',expression:{key:"total",model:void 0}}],children:[{tag:"XAvatar",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"fallback",raw:':fallback="state.fallback"',expression:{key:"fallback",model:void 0}},{name:"alt",value:"林澄"}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.badge"',expression:{key:"badge",model:void 0}},{directive:"slot",arg:"badge",raw:"#badge",expression:void 0}],children:[{tag:"span",unwrap:!1,selfClosing:!0,props:[{name:"aria-label",value:"在线"},{name:"style",value:`
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: var(--x-primary);
              display: block;
            `}],children:[]}]}]},{tag:"XAvatar",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"fallback",value:"周"},{name:"alt",value:"周可"}],children:[]},{tag:"XAvatar",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"fallback",value:"陈"},{name:"alt",value:"陈禾"}],children:[]},{tag:"XAvatar",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{name:"fallback",value:"赵"},{name:"alt",value:"赵安"}],children:[]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"note"}],children:[{text:"图片不可用时显示姓名缩写；总人数包含当前未展示的协作者。"}]}]}],styles:`
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
`},defaults:{size:"md",max:3,total:8,badge:!0,fallback:"林"},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive } from 'vue'
import { XAvatar, XAvatarGroup } from '@libingchen/x-ui'

interface State {
  size: 'sm' | 'md' | 'lg'
  max: number
  total: number
  badge: boolean
  fallback: string
}
const state = reactive<State>(`,after:`)
<\/script>

<template>
  <div class="demo">
    <strong>项目协作者</strong
    ><XAvatarGroup :max="state.max" :total="state.total"
      ><XAvatar :size="state.size" :fallback="state.fallback" alt="林澄"
        ><template v-if="state.badge" #badge
          ><span
            aria-label="在线"
            style="
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background: var(--x-primary);
              display: block;
            " /></template></XAvatar
      ><XAvatar :size="state.size" fallback="周" alt="周可" /><XAvatar
        :size="state.size"
        fallback="陈"
        alt="陈禾" /><XAvatar :size="state.size" fallback="赵" alt="赵安"
    /></XAvatarGroup>
    <p class="note">图片不可用时显示姓名缩写；总人数包含当前未展示的协作者。</p>
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
</style>`,start:294,end:354};export{e as default};
