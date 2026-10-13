const e={title:"小号视觉与三档对照",description:"比较控件、列表高亮、标签删除、Tabs、Command 与消息操作；关闭对照后可单独检查一个档位。",component:"XConfigProvider",controls:{compare:{label:"三档并排对照"},size:{label:"单独预览尺寸",options:["sm","md","lg"],api:"config.size"}},usage:{imports:[{module:"@libingchen/x-ui/styles.css",default:void 0,names:[],sideEffect:!0},{module:"vue",default:void 0,names:[{name:"computed",source:"computed",typeOnly:!1},{name:"reactive",source:"reactive",typeOnly:!1},{name:"ref",source:"ref",typeOnly:!1}],sideEffect:!1},{module:"@lucide/vue",default:void 0,names:[{name:"Folder",source:"Folder",typeOnly:!1},{name:"Plus",source:"Plus",typeOnly:!1}],sideEffect:!1},{module:"@libingchen/x-ui",default:void 0,names:[{name:"XAccordion",source:"XAccordion",typeOnly:!1},{name:"XAccordionItem",source:"XAccordionItem",typeOnly:!1},{name:"XAlert",source:"XAlert",typeOnly:!1},{name:"XBadge",source:"XBadge",typeOnly:!1},{name:"XButton",source:"XButton",typeOnly:!1},{name:"XButtonGroup",source:"XButtonGroup",typeOnly:!1},{name:"XCard",source:"XCard",typeOnly:!1},{name:"XConfigProvider",source:"XConfigProvider",typeOnly:!1},{name:"XCheckbox",source:"XCheckbox",typeOnly:!1},{name:"XCombobox",source:"XCombobox",typeOnly:!1},{name:"XCommand",source:"XCommand",typeOnly:!1},{name:"XInput",source:"XInput",typeOnly:!1},{name:"XInputGroup",source:"XInputGroup",typeOnly:!1},{name:"XKbd",source:"XKbd",typeOnly:!1},{name:"XPagination",source:"XPagination",typeOnly:!1},{name:"XSelect",source:"XSelect",typeOnly:!1},{name:"XScrollArea",source:"XScrollArea",typeOnly:!1},{name:"XTabs",source:"XTabs",typeOnly:!1},{name:"XTabItem",source:"XTabItem",typeOnly:!1},{name:"XTagsInput",source:"XTagsInput",typeOnly:!1},{name:"XTree",source:"XTree",typeOnly:!1},{name:"XSize",source:"type XSize",typeOnly:!1}],sideEffect:!1}],statements:[{names:["sizes"],chunks:["const sizes = computed<XSize[]>(() => (",{key:"compare",model:void 0}," ? ['sm', 'md', 'lg'] : [",{key:"size",model:void 0},"]))"]},{names:["text"],chunks:["const text = ref({ sm: '中英文内容 Vue 123', md: '中英文内容 Vue 123', lg: '中英文内容 Vue 123' })"]},{names:["urls"],chunks:["const urls = ref({ sm: 'example.test', md: 'example.test', lg: 'example.test' })"]},{names:["selection"],chunks:[`const selection = ref<{ sm: string | undefined; md: string | undefined; lg: string | undefined }>({
  sm: 'vue',
  md: 'vue',
  lg: 'vue',
})`]},{names:["checked"],chunks:["const checked = ref({ sm: true, md: true, lg: true })"]},{names:["currentPage"],chunks:["const currentPage = ref({ sm: 10, md: 10, lg: 10 })"]},{names:["wrapped"],chunks:[`const wrapped = ref({
  sm: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
  md: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
  lg: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
})`]},{names:["options"],chunks:[`const options = [
  { value: 'vue', label: 'Vue' },
  { value: 'reka', label: 'Reka UI' },
]`]},{names:["tags"],chunks:["const tags = ref({ sm: ['Vue', 'Reka UI'], md: ['Vue', 'Reka UI'], lg: ['Vue', 'Reka UI'] })"]},{names:["selected"],chunks:["const selected = ref({ sm: ['vue'], md: ['vue'], lg: ['vue'] })"]},{names:["tree"],chunks:[`const tree = [
  {
    value: 'root',
    label: '组件',
    icon: Folder,
    children: [
      {
        value: 'branch',
        label: '输入',
        icon: Folder,
        children: [{ value: 'leaf', label: '文本输入' }],
      },
      { value: 'disabled', label: '禁用节点', disabled: true },
    ],
  },
]`]}],template:[{tag:"XConfigProvider",unwrap:!1,selfClosing:void 0,props:[{directive:"bind",arg:"config",raw:':config="{ size: state.size }"',expression:{object:[{name:"size",value:{key:"size",model:void 0}}]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"demo size-columns"},{name:"data-compact-size-cases",value:void 0}],children:[{tag:"XCard",unwrap:!1,selfClosing:void 0,props:[{directive:"for",arg:void 0,raw:'v-for="size in sizes"',expression:{raw:["size in sizes"]}},{directive:"bind",arg:"key",raw:':key="size"',expression:{raw:["size"]}},{directive:"bind",arg:"size",raw:':size="size"',expression:{raw:["size"]}},{directive:"bind",arg:"title",raw:':title="size"',expression:{raw:["size"]}},{directive:"bind",arg:"data-compact-scale",raw:':data-compact-scale="size"',expression:{raw:["size"]}}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"size-stack"}],children:[{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="text[size]"',expression:{raw:["text[size]"]}},{name:"clearable",value:void 0},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑输入`"',expression:{raw:["`${size} 紧凑输入`"]}}],children:[]},{tag:"XInputGroup",unwrap:!1,selfClosing:void 0,props:[{name:"data-compact-input-group",value:void 0}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"prefix",raw:"#prefix",expression:void 0}],children:[{text:"https://"}]},{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"variant",value:"borderless"},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 附加文本输入`"',expression:{raw:["`${size} 附加文本输入`"]}},{directive:"model",arg:void 0,raw:'v-model="urls[size]"',expression:{raw:["urls[size]"]}}],children:[]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"suffix",raw:"#suffix",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"ghost"},{name:"size",value:"xs"},{name:"shape",value:"icon"},{name:"aria-label",value:"附加操作"}],children:[{tag:"Plus",unwrap:!1,selfClosing:!0,props:[],children:[]}]}]}]},{tag:"XInput",unwrap:!1,selfClosing:!0,props:[{name:"type",value:"file"},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 文件输入`"',expression:{raw:["`${size} 文件输入`"]}}],children:[]},{tag:"XButtonGroup",unwrap:!1,selfClosing:void 0,props:[{name:"data-compact-buttons",value:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"保存"}]},{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"shape",value:"icon"},{name:"aria-label",value:"追加"}],children:[{tag:"Plus",unwrap:!1,selfClosing:!0,props:[],children:[]}]}]},{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"size-inline"}],children:[{tag:"XBadge",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"状态"}]},{tag:"XKbd",unwrap:!1,selfClosing:void 0,props:[],children:[{text:"⌘ K"}]},{tag:"XCheckbox",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="checked[size]"',expression:{raw:["checked[size]"]}},{name:"aria-label",value:"已勾选"}],children:[]}]},{tag:"XSelect",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"options",raw:':options="options"',expression:{raw:["options"]}},{directive:"model",arg:void 0,raw:'v-model="selection[size]"',expression:{raw:["selection[size]"]}},{name:"clearable",value:void 0},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑选择`"',expression:{raw:["`${size} 紧凑选择`"]}}],children:[]},{tag:"XTagsInput",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="tags[size]"',expression:{raw:["tags[size]"]}},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑标签`"',expression:{raw:["`${size} 紧凑标签`"]}}],children:[]},{tag:"XTagsInput",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="wrapped[size]"',expression:{raw:["wrapped[size]"]}},{name:"wrap",value:void 0},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 换行标签`"',expression:{raw:["`${size} 换行标签`"]}},{name:"data-compact-wrap",value:void 0}],children:[]},{tag:"XCombobox",unwrap:!1,selfClosing:!0,props:[{directive:"model",arg:void 0,raw:'v-model="selected[size]"',expression:{raw:["selected[size]"]}},{directive:"bind",arg:"options",raw:':options="options"',expression:{raw:["options"]}},{name:"multiple",value:void 0},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑多选`"',expression:{raw:["`${size} 紧凑多选`"]}}],children:[]},{tag:"XTabs",unwrap:!1,selfClosing:void 0,props:[{name:"default-value",value:"first"},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑标签页`"',expression:{raw:["`${size} 紧凑标签页`"]}}],children:[{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"first"},{name:"label",value:"详情"}],children:[{text:"内容"}]},{tag:"XTabItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"second"},{name:"label",value:"记录"}],children:[{text:"记录"}]}]},{tag:"XTree",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"items",raw:':items="tree"',expression:{raw:["tree"]}},{directive:"bind",arg:"default-expanded",raw:`:default-expanded="['root', 'branch']"`,expression:{array:[{literal:"root"},{literal:"branch"}]}},{name:"selection-mode",value:"single"},{directive:"bind",arg:"default-value",raw:':default-value="tree[0]"',expression:{raw:["tree[0]"]}},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑树`"',expression:{raw:["`${size} 紧凑树`"]}}],children:[]},{tag:"XCommand",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"groups",raw:`:groups="[
              {
                heading: '操作',
                items: [{ value: 'new', label: '新建', icon: Plus, shortcut: '⌘ N' }],
              },
            ]"`,expression:{array:[{object:[{name:"heading",value:{literal:"操作"}},{name:"items",value:{array:[{object:[{name:"value",value:{literal:"new"}},{name:"label",value:{literal:"新建"}},{name:"icon",value:{raw:["Plus"]}},{name:"shortcut",value:{literal:"⌘ N"}}]}]}}]}]}}],children:[]},{tag:"XScrollArea",unwrap:!1,selfClosing:void 0,props:[{name:"orientation",value:"horizontal"},{name:"class",value:"size-scroll"}],children:[{tag:"div",unwrap:!1,selfClosing:void 0,props:[{name:"class",value:"size-pagination"}],children:[{tag:"XPagination",unwrap:!1,selfClosing:!0,props:[{directive:"bind",arg:"total-pages",raw:':total-pages="20"',expression:{literal:20}},{directive:"model",arg:void 0,raw:'v-model="currentPage[size]"',expression:{raw:["currentPage[size]"]}},{directive:"bind",arg:"aria-label",raw:':aria-label="`${size} 紧凑分页`"',expression:{raw:["`${size} 紧凑分页`"]}}],children:[]}]}]},{tag:"XAlert",unwrap:!1,selfClosing:!0,props:[{name:"title",value:"处理完成"},{name:"description",value:"正文与操作使用同一档位。"}],children:[]},{tag:"XAlert",unwrap:!1,selfClosing:void 0,props:[{name:"title",value:"需要补充信息"},{name:"description",value:"较长的说明可以换行，并与下方操作保持独立空间。"},{name:"data-compact-alert-action",value:void 0}],children:[{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"media",raw:"#media",expression:void 0}],children:[{tag:"Plus",unwrap:!1,selfClosing:!0,props:[],children:[]}]},{tag:"template",unwrap:!1,selfClosing:void 0,props:[{directive:"slot",arg:"action",raw:"#action",expression:void 0}],children:[{tag:"XButton",unwrap:!1,selfClosing:void 0,props:[{name:"variant",value:"outline"}],children:[{interpolation:{condition:{left:{raw:["size"]},operator:"===",right:{literal:"sm"}},yes:{literal:"查看详情并继续处理"},no:{literal:"重试"}}}]}]}]},{tag:"XAccordion",unwrap:!1,selfClosing:void 0,props:[{name:"default-value",value:"details"}],children:[{tag:"XAccordionItem",unwrap:!1,selfClosing:void 0,props:[{name:"value",value:"details"},{directive:"bind",arg:"title",raw:':title="`${size} 展开信息`"',expression:{raw:["`${size} 展开信息`"]}}],children:[{text:"正文内容"}]}]}]}]}]}]}],styles:`
.size-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: 24px;
  width: 100%;
  min-width: 0;
}
.size-stack {
  display: grid;
  min-width: 0;
  gap: 16px;
}
.size-inline {
  display: flex;
  align-items: center;
  gap: 12px;
}
.size-scroll {
  min-width: 0;
  width: 100%;
}
.size-pagination {
  min-width: 100%;
  width: max-content;
}
`},defaults:{size:"sm",compare:!0},before:`<script setup lang="ts">
import '@libingchen/x-ui/styles.css'
import { computed, reactive, ref } from 'vue'
import { Folder, Plus } from '@lucide/vue'
import {
  XAccordion,
  XAccordionItem,
  XAlert,
  XBadge,
  XButton,
  XButtonGroup,
  XCard,
  XConfigProvider,
  XCheckbox,
  XCombobox,
  XCommand,
  XInput,
  XInputGroup,
  XKbd,
  XPagination,
  XSelect,
  XScrollArea,
  XTabs,
  XTabItem,
  XTagsInput,
  XTree,
  type XSize,
} from '@libingchen/x-ui'

const state = reactive<{ size: XSize; compare: boolean }>(`,after:`)
const sizes = computed<XSize[]>(() => (state.compare ? ['sm', 'md', 'lg'] : [state.size]))
const text = ref({ sm: '中英文内容 Vue 123', md: '中英文内容 Vue 123', lg: '中英文内容 Vue 123' })
const urls = ref({ sm: 'example.test', md: 'example.test', lg: 'example.test' })
const selection = ref<{ sm: string | undefined; md: string | undefined; lg: string | undefined }>({
  sm: 'vue',
  md: 'vue',
  lg: 'vue',
})
const checked = ref({ sm: true, md: true, lg: true })
const currentPage = ref({ sm: 10, md: 10, lg: 10 })
const wrapped = ref({
  sm: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
  md: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
  lg: ['较长的第一个标签', '较长的第二个标签', '第三个标签'],
})
const options = [
  { value: 'vue', label: 'Vue' },
  { value: 'reka', label: 'Reka UI' },
]
const tags = ref({ sm: ['Vue', 'Reka UI'], md: ['Vue', 'Reka UI'], lg: ['Vue', 'Reka UI'] })
const selected = ref({ sm: ['vue'], md: ['vue'], lg: ['vue'] })
const tree = [
  {
    value: 'root',
    label: '组件',
    icon: Folder,
    children: [
      {
        value: 'branch',
        label: '输入',
        icon: Folder,
        children: [{ value: 'leaf', label: '文本输入' }],
      },
      { value: 'disabled', label: '禁用节点', disabled: true },
    ],
  },
]
<\/script>

<template>
  <XConfigProvider :config="{ size: state.size }">
    <div class="demo size-columns" data-compact-size-cases>
      <XCard
        v-for="size in sizes"
        :key="size"
        :size="size"
        :title="size"
        :data-compact-scale="size"
      >
        <div class="size-stack">
          <XInput v-model="text[size]" clearable :aria-label="\`\${size} 紧凑输入\`" />
          <XInputGroup data-compact-input-group>
            <template #prefix>https://</template>
            <XInput
              variant="borderless"
              :aria-label="\`\${size} 附加文本输入\`"
              v-model="urls[size]"
            />
            <template #suffix
              ><XButton variant="ghost" size="xs" shape="icon" aria-label="附加操作"
                ><Plus /></XButton
            ></template>
          </XInputGroup>
          <XInput type="file" :aria-label="\`\${size} 文件输入\`" />
          <XButtonGroup data-compact-buttons
            ><XButton>保存</XButton><XButton shape="icon" aria-label="追加"><Plus /></XButton
          ></XButtonGroup>
          <div class="size-inline">
            <XBadge>状态</XBadge><XKbd>⌘ K</XKbd
            ><XCheckbox v-model="checked[size]" aria-label="已勾选" />
          </div>
          <XSelect
            :options="options"
            v-model="selection[size]"
            clearable
            :aria-label="\`\${size} 紧凑选择\`"
          />
          <XTagsInput v-model="tags[size]" :aria-label="\`\${size} 紧凑标签\`" />
          <XTagsInput
            v-model="wrapped[size]"
            wrap
            :aria-label="\`\${size} 换行标签\`"
            data-compact-wrap
          />
          <XCombobox
            v-model="selected[size]"
            :options="options"
            multiple
            :aria-label="\`\${size} 紧凑多选\`"
          />
          <XTabs default-value="first" :aria-label="\`\${size} 紧凑标签页\`"
            ><XTabItem value="first" label="详情">内容</XTabItem
            ><XTabItem value="second" label="记录">记录</XTabItem></XTabs
          >
          <XTree
            :items="tree"
            :default-expanded="['root', 'branch']"
            selection-mode="single"
            :default-value="tree[0]"
            :aria-label="\`\${size} 紧凑树\`"
          />
          <XCommand
            :groups="[
              {
                heading: '操作',
                items: [{ value: 'new', label: '新建', icon: Plus, shortcut: '⌘ N' }],
              },
            ]"
          />
          <XScrollArea orientation="horizontal" class="size-scroll">
            <div class="size-pagination">
              <XPagination
                :total-pages="20"
                v-model="currentPage[size]"
                :aria-label="\`\${size} 紧凑分页\`"
              />
            </div>
          </XScrollArea>
          <XAlert title="处理完成" description="正文与操作使用同一档位。" />
          <XAlert
            title="需要补充信息"
            description="较长的说明可以换行，并与下方操作保持独立空间。"
            data-compact-alert-action
          >
            <template #media><Plus /></template>
            <template #action
              ><XButton variant="outline">{{
                size === 'sm' ? '查看详情并继续处理' : '重试'
              }}</XButton></template
            >
          </XAlert>
          <XAccordion default-value="details"
            ><XAccordionItem value="details" :title="\`\${size} 展开信息\`"
              >正文内容</XAccordionItem
            ></XAccordion
          >
        </div>
      </XCard>
    </div>
  </XConfigProvider>
</template>

<style scoped>
.size-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 22rem), 1fr));
  gap: 24px;
  width: 100%;
  min-width: 0;
}
.size-stack {
  display: grid;
  min-width: 0;
  gap: 16px;
}
.size-inline {
  display: flex;
  align-items: center;
  gap: 12px;
}
.size-scroll {
  min-width: 0;
  width: 100%;
}
.size-pagination {
  min-width: 100%;
  width: max-content;
}
</style>`,start:522,end:551};export{e as default};
