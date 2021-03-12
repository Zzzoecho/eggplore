# Button 按钮

常用的操作按钮

## 基础用法

不同量级的按钮

<Button>hi</Button>
<Button type="primary">primary</Button>
<Button type="secondary">secondary</Button>
<Button type="text">text</Button>

::: details 点击查看代码
```vue
<Button>hi</Button>
<Button type="primary">primary</Button>
<Button type="secondary">secondary</Button>
<Button type="text">text</Button>
```
:::

不同状态的按钮

<Button semantic="success">hi</Button>
<Button semantic="warning">primary</Button>
<Button semantic="info">secondary</Button>
<Button semantic="danger">text</Button>

::: details 点击查看代码
```vue
<Button>hi</Button>
<Button semantic="primary">primary</Button>
<Button semantic="secondary">secondary</Button>
<Button semantic="text">text</Button>
```
:::

## Attributes

| 参数     | 说明 | 类型   | 可选值                              | 默认值 |
| :------- | :--: | :----- | :---------------------------------- | :----- |
| size     | 尺寸 | string | primary / secondary / hollow / text | -      |
| type     | 类型 | string | medium / small / mini               | -      |
| semantic | 状态 | string | success / warning / info / danger   | -      |
