const e={title:"项目任务清单",description:"使用语义化表格组织任务数据，切换密度和固定高度，并通过行操作查看详情。表格数据与业务操作由使用方编排。",component:"XTable",controls:{size:{label:"尺寸",options:["sm","md","lg"],unset:!0},height:{label:"表格高度",min:180,max:450},count:{label:"数据条数",min:1,max:20,api:"default slot"},showOwner:{label:"显示负责人列",api:"default slot"},loading:{label:"加载中"},loadingBlocking:{label:"阻止区域操作"},loadingDelay:{label:"反馈延迟（毫秒）",min:0,max:1e3},loadingText:{label:"加载文案"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTable",source:"XTable",typeOnly:!1},{name:"XBadge",source:"XBadge",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1}],sideEffect:!1}],statements:[{names:["result"],chunks:["const result = ref('')"]}],template:[{tag:"div",unwrap:!0,selfClosing:void 0,props:[{name:"class",value:"demo"}],children:[{tag:"XTable",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"loading",raw:':loading="state.loading"',expression:{key:"loading",model:void 0}},{directive:"bind",arg:"loading-blocking",raw:':loading-blocking="state.loadingBlocking"',expression:{key:"loadingBlocking",model:void 0}},{directive:"bind",arg:"loading-delay",raw:':loading-delay="state.loadingDelay"',expression:{key:"loadingDelay",model:void 0}},{directive:"bind",arg:"loading-text",raw:':loading-text="state.loadingText"',expression:{key:"loadingText",model:void 0}},{directive:"bind",arg:"size",raw:':size="state.size"',expression:{key:"size",model:void 0}},{directive:"bind",arg:"height",raw:':height="state.height"',expression:{key:"height",model:void 0}}],children:[{tag:"caption",unwrap:!1,selfClosing:void 0,props:[],children:[{text:" 项目任务清单 "}]},{tag:"thead",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"tr",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"th",unwrap:!1,selfClosing:void 0,props:[{name:"scope",value:"col"}],children:[{text:"任务"}]},{tag:"th",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.showOwner"',expression:{key:"showOwner",model:void 0}},{name:"scope",value:"col"}],children:[{text:"负责人"}]},{tag:"th",unwrap:!1,selfClosing:void 0,props:[{name:"scope",value:"col"}],children:[{text:"状态"}]},{tag:"th",unwrap:!1,selfClosing:void 0,props:[{name:"scope",value:"col"}],children:[{text:"操作"}]}]}]},{tag:"tbody",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"tr",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="index in state.count"',expression:{raw:["index in ",{key:"count",model:void 0},""]}},{directive:"bind",arg:"key",raw:':key="index"',expression:{raw:["index"]}}],children:[{tag:"td",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"组件评审 "},{interpolation:{raw:["index"]}}]},{tag:"td",unwrap:!1,selfClosing:void 0,props:[{directive:"if",arg:void 0,raw:'v-if="state.showOwner"',expression:{key:"showOwner",model:void 0}}],children:[{interpolation:{condition:{left:{raw:["index"]},operator:"%",right:{literal:2}},yes:{literal:"林澄"},no:{literal:"周可"}}}]},{tag:"td",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"variant",raw:`:variant="index % 3 ? 'secondary' : 'outline'"`,expression:{condition:{left:{raw:["index"]},operator:"%",right:{literal:3}},yes:{literal:"secondary"},no:{literal:"outline"}}}],children:[{interpolation:{condition:{left:{raw:["index"]},operator:"%",right:{literal:3}},yes:{literal:"进行中"},no:{literal:"已完成"}}}]}]},{tag:"td",unwrap:!1,selfClosing:void 0,props:[],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"size",value:"sm"},{name:"variant",value:"ghost"},{directive:"on",arg:"click",raw:'@click="result = `已打开任务 ${index}`"',expression:{left:{raw:["result"]},operator:"=",right:{raw:["`已打开任务 ${index}`"]}}}],children:[{text:"查看"}]}]}]}]}]},{text:""}]}],styles:`
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
`},defaults:{loading:!1,loadingBlocking:!0,loadingDelay:150,loadingText:"加载中",size:void 0,height:260,count:6,showOwner:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { reactive, ref } from 'vue'
import { XTable, XBadge, XButton } from '@libingchen/x-ui'

interface State {
  loading: boolean
  loadingBlocking: boolean
  loadingDelay: number
  loadingText: string
  size: 'sm' | 'md' | 'lg' | undefined
  height: number
  count: number
  showOwner: boolean
}
const state = reactive<State>(`,after:`)
const result = ref('')
<\/script>

<template>
  <div class="demo">
    <XTable
      :loading="state.loading"
      :loading-blocking="state.loadingBlocking"
      :loading-delay="state.loadingDelay"
      :loading-text="state.loadingText"
      :size="state.size"
      :height="state.height"
      ><caption>
        项目任务清单
      </caption>
      <thead>
        <tr>
          <th scope="col">任务</th>
          <th v-if="state.showOwner" scope="col">负责人</th>
          <th scope="col">状态</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="index in state.count" :key="index">
          <td>组件评审 {{ index }}</td>
          <td v-if="state.showOwner">{{ index % 2 ? '林澄' : '周可' }}</td>
          <td>
            <XBadge :variant="index % 3 ? 'secondary' : 'outline'">{{
              index % 3 ? '进行中' : '已完成'
            }}</XBadge>
          </td>
          <td>
            <XButton size="sm" variant="ghost" @click="result = \`已打开任务 \${index}\`"
              >查看</XButton
            >
          </td>
        </tr>
      </tbody></XTable
    >
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
</style>`,start:392,end:546};export{e as default};
