# @libingchen/x-ui

面向 Vue 3.5+ 的公共组件包，提供编译后的 JavaScript、类型与 CSS。消费项目无需安装 Tailwind。当前为 `1.0.0` 前的内部预览版本，不发布到公共 npm。

## 安装

同一 pnpm workspace：

```bash
pnpm add '@libingchen/x-ui@workspace:*'
```

或安装组件库仓库通过 `pnpm pack:release` 生成的内部 tarball：

```bash
pnpm add ./libingchen-x-ui-<version>.tgz
```

直接使用 Lucide 图标时另行安装 `@lucide/vue`。

### Resizable 运行时

X UI 安装包内置修复后的 Reka Splitter，修复前景 SVG 穿透命中及拖动中断清理问题。业务项目只需随内部发版更新 X UI，**无需**给宿主 Reka 打补丁、安装 `patch-package` 或增加安装钩子。

仅 Splitter 三个原语及其内部工具被编译进 X UI；其他 Reka 组件继续使用外部依赖。内置 Splitter 仍与宿主共享 Reka ConfigProvider 的注入上下文，包括 nonce、方向和 ID 配置。公共 API 与组件样式不变。第三方许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 使用

在应用入口引入一次样式，再从包根按需导入组件：

```ts
import '@libingchen/x-ui/styles.css'
```

```vue
<script setup lang="ts">
import { XButton, XInput } from '@libingchen/x-ui'
</script>

<template>
  <XInput placeholder="请输入内容" />
  <XButton>提交</XButton>
</template>
```

### DataTable 接入

挂载后调用 `table.init({ fields, load, onAction })`。内存、浏览器存储和 HTTP 共用同一套读取协议；数据来源负责完整查询、分组和统计。组件先校验并更新内部值，再结束交互并调用可选的 onAction；不等待外部业务完成。未提供 onAction 时仍可编辑，外部结果通过 apply 回填。

```vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  XDataTable,
  type XDataTableApi,
  type XDataTableLoadResult,
  type XDataTableApplyPatch,
} from '@libingchen/x-ui'
const table = ref<XDataTableApi>()
// 这些地址由应用实现；此例只有文本字段，使用 JSON 传输模型值。
async function request<T>(path: string, body: unknown, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`/api/tasks/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  if (!response.ok) throw new Error('请求失败')
  return response.json()
}
onMounted(() =>
  table.value?.init({
    fields: [{ key: 'title', label: '标题' }],
    load: (query, { signal, locale }) =>
      request<XDataTableLoadResult>('load', { request: query, locale }, signal),
    onAction: async (action) => {
      const patch = await request<XDataTableApplyPatch>('action', action)
      table.value?.apply(patch)
    },
  }),
)
</script>
<template><XDataTable ref="table" /></template>
```

`load` 按 kind 处理 records、groups、lookup 和 locate。records.total 是该范围的完整记录数，groups.total 是直接子组数；记录总数统一通过 summary 的 count 方法展示。字段转换与关联计算由外部完成，之后调用 `apply({ fields, view, records })`。apply 不再次调用 onAction；普通编辑不自动换组、排序或重新读取，reload 才重新接受来源结果。切换业务对象使用 init，并在外部隔离旧业务请求的回填。

`records.get/getLoaded` 返回当前已加载的只读动态快照，不承诺字段变更后仍符合初始实体类型；访问器句柄保留静态类型提示。readonly、disabled 和 permissions 是响应式组件属性；rowHeight 放在 view 中。没有 source、data、meta、save、autoSave、preview、resolve、timeZone、size 或保存恢复实例方法。

`apply.fields` 是完整快照：省略字段的 `display` 会移除旧自定义展示，恢复 cell 插槽或内置默认展示；保留自定义组件时须重新提供。只回填记录或视图而省略整个 fields 时，当前展示保持。`records.add(record, { groupPath })` 只对可直接写入的字段补分组值；只读、访问器和自定义分组使用候选记录的默认值或实际模型值检查路径，匹配即可新增，不把分组协议键强制写入模型。

`onAction` 的失败在排序或刷新后仍会反馈；重新 `init` 或卸载才隔离旧实例错误。同次 `apply` 更新字段与记录时，合并后的记录必须包含新字段所需模型值，否则整次拒绝。仅更新字段定义时，组件按需重新读取失效记录。修改汇总配置保留当前记录位置，不取消按 ID 补读中的编辑命令。 仅用于汇总的字段取值语义变化也刷新对应统计，保留记录位置；count 仍表示记录数量。

单条修改与粘贴／清除共用记录命令归属：后发命令接管重叠记录，涉及批量时取消整批未提交操作；不重叠的命令互不取消。外部 apply 回填仍按依赖重新校验，不作为新命令接管。生成最终 ID 后补验身份依赖和未限定依赖的整记录 validator；新增在最终校验后再次检查当前已知 ID，冲突不会覆盖已有记录。非法字段 key 按 `invalid-config` 拒绝 Promise。历史重试会重新读取失败的页或完整值，完整值失败不重置分页。

`init.limits` 配置读取、缓存、查询内修改及选择预算；省略项采用默认值，非法配置会拒绝。范围、统计与 lookup 共同核算缓存预算，响应超限不会部分写入。完整接口、取消边界、字段模型值和自定义类型的序列化职责见 [DataTable 规则](../../docs/组件规则/DataTable.md)。可运行接入见 [Docs 统一读取示例](../../apps/docs/src/components/data-table-async-fixture.vue)与[无 Tailwind Consumer](../../apps/consumer/src/data-table-async-fixture.vue)。

### 日期与时间选择器迁移

TimePicker 默认使用完整文本输入与单列时刻候选；旧 step/XTimeStep 改为 interval（分钟），不再提供分段、segment 插槽、分段 parts 或占位对象。interval 默认 30，只控制候选；09:17 等非候选时间仍可输入。placeholder 改为普通字符串。format 是唯一格式入口，默认 HH:mm；原 granularity/hourCycle 改为 HH、HH:mm:ss 或 hh:mm A 等格式。移除单独的 locale/dir，文案由 ConfigProvider 管理。

DatePicker 默认可编辑，format 可选，默认 YYYY/MM/DD；传入完整 YYYY-MM-DD HH:mm 自动显示独立时间输入。删除 time/XDatePickerTimeOptions，将 defaultTime、minTime、maxTime、interval 直接放到根属性；不使用额外的时间启用开关。范围模式仅支持纯日期。DatePicker 移除 formatValue，所有显示和解析均使用 format；captionLayout 等日历外观与导航配置统一移至 parts.calendar，根属性保留模型、校验和状态。parts.input/trigger 仅定制 HTML 属性，readonly/disabled/variant 等放在根层。两者均提供 commit/getInputElement/focus；模型分别保持 Date 和 { hour, minute, second? }。

```vue
<XTimePicker v-model="time" format="HH:mm:ss" :interval="30" />
<XDatePicker v-model="appointment" format="YYYY-MM-DD HH:mm" :interval="30" />
<XDatePicker v-model="birthday" :parts="{ calendar: { captionLayout: 'dropdown' } }" />
```

DataTable 日期字段默认 format 为 `YYYY/MM/DD HH:mm`，记录统一使用无时区的 `YYYY-MM-DDTHH:mm:ss` 或 null。纯日期格式同样采用完整模型值，例如字段 `{ key: 'due', label: '日期', type: 'date', format: 'YYYY/MM/DD' }` 对应 `'2026-09-18T00:00:00'`。format 决定展示和编辑精度，minValue/maxValue 使用日历日期并包含当天所有时刻。格式或字段类型变化所需的业务数据转换由外部执行，再通过 apply 同步定义与值。

### 模板自动导入

业务项目可以使用 `unplugin-vue-components` 按需自动导入 X UI 组件：

```bash
pnpm add -D unplugin-vue-components
```

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue'
import { xUiResolver } from '@libingchen/x-ui/resolver'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: 'src/components.d.ts',
      resolvers: [xUiResolver()],
    }),
  ],
})
```

在应用的类型入口显式启用完整组件目录，使尚未出现在 `components.d.ts` 中的组件也能获得名称、属性、事件和插槽提示：

```ts
// src/env.d.ts
import '@libingchen/x-ui/global'
```

`global` 只提供类型，实际模板导入仍由 `xUiResolver()` 完成。包根导出保持 ESM tree-shaking；全局样式仍按上文在应用入口显式导入一次。

Vue Official 默认优先提示 `XButton` 形式的 PascalCase 标签。项目需要输入 `<x-` 时直接获得 kebab-case 提示，可在 `.vscode/settings.json` 中配置：

```json
{
  "vue.suggest.componentNameCasing": "preferKebabCase"
}
```

在根布局挂载一个 `XConfigProvider`。它内部提供函数式弹层与单例 Toaster，不需要 `app.use()` 或额外容器。

```vue
<script setup lang="ts">
import { XConfigProvider, xLocaleZhCN, type XConfigProviderConfig } from '@libingchen/x-ui'

const xConfig = {
  size: 'md',
  color: 'black',
  locale: xLocaleZhCN,
  toast: { position: 'top-center' },
} satisfies XConfigProviderConfig
</script>

<template>
  <XConfigProvider :config="xConfig">
    <RouterView />
  </XConfigProvider>
</template>
```

### 国际化

X UI 内置 `xLocaleZhCN`、`xLocaleEnUS` 与挪威博克马尔语 `xLocaleNbNO`，负责组件生成的默认文案、无障碍名称和地区格式。业务页面文案仍由应用自己的国际化方案管理；两者共享同一个响应式语言状态即可：

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { xLocaleEnUS, xLocaleNbNO, xLocaleZhCN } from '@libingchen/x-ui'

const { locale } = useI18n()
const xLocales = {
  'zh-CN': xLocaleZhCN,
  'en-US': xLocaleEnUS,
  'nb-NO': xLocaleNbNO,
} as const
const xConfig = computed(() => ({
  locale: xLocales[locale.value as keyof typeof xLocales] ?? xLocaleZhCN,
}))
</script>
```

语言包 `name` 和组件 `locale` 统一使用规范 BCP 47 标签，例如 `zh-CN`、`en-US`、`nb-NO`。X UI 不自动转换大小写或别名不规范的输入，非规范标签会抛出 `RangeError`。类型可从包顶层导入为 `XLocaleTag`，自定义语言包使用 `satisfies XLocale`。

组件显式传入的 `placeholder`、`closeLabel`、`locale` 等属性优先于全局语言包。未挂载 `XConfigProvider` 时默认使用 `xLocaleZhCN`。

组件、路由守卫和请求模块直接从包顶层调用：

```ts
import { xConfirmDialog, xOpenDialog, xToast } from '@libingchen/x-ui'

if (await xConfirmDialog({ title: '确认继续？' })) {
  xOpenDialog({ title: '编辑资料', component: ProfileEditor })
  xToast.success('已保存')
}
```

## 样式

- 深色主题：在祖先元素添加 `.dark` 或 `data-x-theme="dark"`。
- 主题令牌：覆盖 `--x-*` CSS 变量。
- 组件样式：限定在 `data-slot="x-*"` 边界，不包含 Tailwind Preflight。

完整规则见[文档总览](../../docs/文档总览.md)，根接入见 [Config Provider](../../docs/组件规则/ConfigProvider.md)，公共导出见 [`src/index.ts`](src/index.ts)。

### 强调色

通过根 `XConfigProvider` 的顶层 `config.color` 设置 `black` 或 `blue`，默认 `black`。`size` 同样直接放在 config 顶层，不再使用 `appearance`。

```vue
<XConfigProvider :config="{ size: 'md', color: 'blue' }">
  <App />
</XConfigProvider>
```

响应式更新 `config.color` 会切换整个应用的强调色，无需重新挂载组件。Provider 将配置同步到 `html[data-x-color]`，声明式弹层、函数式弹层和 Toast 一起继承；卸载时恢复挂载前的根属性（若外部已修改则保留外部值）。同页只允许一个活动 Provider，后挂载的 Provider 不接管颜色。

明暗继续使用 `.dark` 或 `data-x-theme="light|dark"`，与强调色独立。SSR 应在首屏 HTML 输出与 `config.color` 一致的 `data-x-color`，避免挂载前的颜色闪变；Provider 在服务端不修改 DOM。不使用 Provider 时仍可直接设置该根属性。组件包不持久化偏好，也不支持局部强调色跨 Teleport 隔离。

主色、焦点与选择默认跟随方案，仍允许覆盖 `--x-primary*`、`--x-focus-*`、`--x-selection-color` 和 `--x-selection-background`。派生别名在主题边界解析，定制时在同一边界配置相关角色；不要将中性悬停令牌 `--x-accent` 当作品牌主色。完整语义见[强调色规则](../../docs/组件规则/强调色.md)。

### 焦点样式迁移

焦点默认跟随强调色，保持 2px 内侧实线、无微光和额外焦点阴影。普通表面默认使用 primary，实心主色按钮使用 primary-foreground 保持反差；白色滑块、黑色视频按实际表面取色。错误使用主题红色，系统高对比度使用 Highlight。

组件与公开交互 CVA 自动接入。自定义原生可聚焦内容可复用 `x:focus-ring`；不要复制焦点 CSS。删除旧固定蓝色、微光、外环及为外环避让添加的留白补丁，保留业务正文留白与滚动布局。

DataTable 选区改用独立 selection 令牌。此前通过 focus-color 定制表格选区的应用，应改为覆盖 selection-color；活动行可通过 selection-background 覆盖。焦点覆盖不再改变选区。完整契约见[焦点提示](../../docs/组件规则/焦点提示.md)。

## 许可

[MIT 许可证](LICENSE)
