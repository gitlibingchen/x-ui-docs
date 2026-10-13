const e={title:"内容创建与销毁",description:"lazy 决定首次激活前是否创建；destroyOnHide 决定激活后切走是否销毁，两者独立。切换预设会重置整个示例，便于比较四种组合。",component:"XTabs",controls:{lazy:{label:"首次激活才创建",api:"XTabItem.lazy"},destroyOnHide:{label:"隐藏时销毁",api:"XTabItem.destroyOnHide"}},presets:[{label:"延迟创建并保留",state:{lazy:!0,destroyOnHide:!1}},{label:"提前创建并保留",state:{lazy:!1,destroyOnHide:!1}},{label:"延迟创建并销毁",state:{lazy:!0,destroyOnHide:!0}},{label:"提前创建并销毁",state:{lazy:!1,destroyOnHide:!0}}],usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"defineComponent",source:"defineComponent",typeOnly:!1},{name:"h",source:"h",typeOnly:!1},{name:"onMounted",source:"onMounted",typeOnly:!1},{name:"onBeforeUnmount",source:"onBeforeUnmount",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XTextarea",source:"XTextarea",typeOnly:!1}],sideEffect:!1}],statements:[{names:["events"],chunks:["const events = ref<string[]>([])"]},{names:["sequence"],chunks:["let sequence = 0"]},{names:["Draft"],chunks:[`const Draft = defineComponent({
  setup() {
    const id = ++sequence
    const text = ref('')
    onMounted(() => events.value.push(\`创建实例 \${id}\`))
    onBeforeUnmount(() => events.value.push(\`销毁实例 \${id}\`))
    return () =>
      h('div', { class: 'grid gap-3' }, [
        h('p', \`草稿实例 \${id}\`),
        h(XTextarea, {
          modelValue: text.value,
          'onUpdate:modelValue': (value: string | number) => {
            text.value = String(value)
          },
          'aria-label': '生命周期草稿',
          placeholder: '输入内容，再切换到概览并返回',
        }),
      ])
  },
})`]}],template:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo grid w-full min-w-0 gap-4"}],children:[{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{name:"default-value",value:"overview"},{name:"aria-label",value:"内容生命周期"}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"overview"},{name:"label",value:"概览"}],children:[{text:"切换到草稿，观察实例创建、销毁与输入保留。"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"draft"},{name:"label",value:"草稿"},{directive:"bind",arg:"lazy",raw:':lazy="state.lazy"',expression:{key:"lazy",model:void 0}},{directive:"bind",arg:"destroy-on-hide",raw:':destroy-on-hide="state.destroyOnHide"',expression:{key:"destroyOnHide",model:void 0}}],children:[{tag:"Draft",unwrap:!1,selfClosing:!0,props:[],children:[]}]}]},{tag:"p",unwrap:!1,selfClosing:void 0,props:[{name:"role",value:"status"},{name:"class",value:"text-sm text-muted-foreground"}],children:[{interpolation:{left:{raw:["events.join(' → ')"]},operator:"||",right:{literal:"草稿尚未创建"}}}]}]}],styles:""},defaults:{lazy:!0,destroyOnHide:!1},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { defineComponent, h, onMounted, onBeforeUnmount, reactive, ref } from 'vue'
import { XTabs, XTabItem, XTextarea } from '@libingchen/x-ui'
interface State {
  lazy: boolean
  destroyOnHide: boolean
}
const state = reactive<State>(`,after:`)
const events = ref<string[]>([])
let sequence = 0
// 草稿保存在子组件内部，销毁后会随实例一起清空。
const Draft = defineComponent({
  setup() {
    const id = ++sequence
    const text = ref('')
    onMounted(() => events.value.push(\`创建实例 \${id}\`))
    onBeforeUnmount(() => events.value.push(\`销毁实例 \${id}\`))
    return () =>
      h('div', { class: 'grid gap-3' }, [
        h('p', \`草稿实例 \${id}\`),
        h(XTextarea, {
          modelValue: text.value,
          'onUpdate:modelValue': (value: string | number) => {
            text.value = String(value)
          },
          'aria-label': '生命周期草稿',
          placeholder: '输入内容，再切换到概览并返回',
        }),
      ])
  },
})
<\/script>

<template>
  <div class="demo grid w-full min-w-0 gap-4">
    <XTabs default-value="overview" aria-label="内容生命周期">
      <XTabItem value="overview" label="概览">切换到草稿，观察实例创建、销毁与输入保留。</XTabItem>
      <XTabItem value="draft" label="草稿" :lazy="state.lazy" :destroy-on-hide="state.destroyOnHide"
        ><Draft
      /></XTabItem>
    </XTabs>
    <p role="status" class="text-sm text-muted-foreground">
      {{ events.join(' → ') || '草稿尚未创建' }}
    </p>
  </div>
</template>`,start:299,end:335};export{e as default};
