# padding 模块

属性名称规则：这里的形参顺序遵循css中的 “上、右、下、左”

当参数为 null 时，不会生成该位置的属性。

* padding(1) 元素上下左右内边距为1

```javascript 
{
  ...layout.padding(1),
}

编译为：
{
  paddingTop: 1,
  paddingRight: 1,
  paddingBottom: 1,
  paddingLeft: 1,
}
```

* padding(1, 2) 元素上下内边距为1, 左右内边距为2

```javascript 
{
  ...layout.padding(1, 2),
}

编译为：
{
  paddingVertical: 1,
  paddingHorizontal: 2,
}
```

* padding(1, 2, 3) 元素上内边距为1, 左右内边距为2, 下内边距为3

```javascript 
{
  ...layout.padding(1, 2, 3),
}

编译为：
{
  paddingTop: 1,
  paddingHorizontal: 2,
  paddingBottom: 3,
}
```

* padding(1, 2, 3, 4) 元素上内边距为1, 右内边距为2, 下内边距为3, 左内边距为4

```javascript 
{
  ...layout.padding(1, 2, 3, 4),
}

编译为：
{
  paddingTop: 1,
  paddingRight: 2,
  paddingBottom: 3,
  paddingLeft: 4,
}
```

[返回](../README.md)