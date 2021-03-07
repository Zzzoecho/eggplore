# Button

### 基础用法

基础的按钮用法
:::demo

```html
<Row>
  <Button>hollow</Button>
  <Button semantic='success'>成功按钮</Button>
  <Button semantic='warning'>警告按钮</Button>
  <Button semantic='info'>信息按钮</Button>
  <Button semantic='danger'>危险按钮</Button>
</Row>

<Row>
  <Button type='primary'>primary</Button>
  <Button type='primary' semantic='success'>成功按钮</Button>
  <Button type='primary' semantic='warning'>警告按钮</Button>
  <Button type='primary' semantic='info'>信息按钮</Button>
  <Button type='primary' semantic='danger'>危险按钮</Button>
</Row>

<Row>
  <Button type='secondary'>secondary</Button>
  <Button type='secondary' semantic='success'>成功按钮</Button>
  <Button type='secondary' semantic='warning'>警告按钮</Button>
  <Button type='secondary' semantic='info'>信息按钮</Button>
  <Button type='secondary' semantic='danger'>危险按钮</Button>
</Row>

<Row>
  <Button type='text'>文字按钮</Button>
  <Button type='text' semantic='success'>成功按钮</Button>
  <Button type='text' semantic='warning'>警告按钮</Button>
  <Button type='text' semantic='info'>信息按钮</Button>
  <Button type='text' semantic='danger'>危险按钮</Button>
</Row>

```

:::

### 禁用状态

按钮不可用状态。
:::demo

```html

<Button disabled>默认样式</Button>
```

:::

### 不同尺寸

:::demo

```html

<Button>默认按钮</Button>
<Button size='medium'>中等按钮</Button>
<Button size='small'>小型按钮</Button>
<Button size='mini'>超小按钮</Button>
```

:::

