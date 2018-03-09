# margin 模块

属性名称规则：这里的形参顺序遵循css中的 “上、右、下、左”

当参数为 null 时，不会生成该位置的属性。

* margin(1) 元素上下左右外边距为1

```javascript 
{
  ...layout.margin(1),
}

编译为：
{
  marginTop: 1,
  marginRight: 1,
  marginBottom: 1,
  marginLeft: 1,
}
```

* margin(1, 2) 元素上下外边距为1, 左右外边距为2

```javascript 
{
  ...layout.margin(1, 2),
}

编译为：
{
  marginVertical: 1,
  marginHorizontal: 2,
}
```

* margin(1, 2, 3) 元素上外边距为1, 左右外边距为2, 下外边距为3

```javascript 
{
  ...layout.margin(1, 2, 3),
}

编译为：
{
  marginTop: 1,
  marginHorizontal: 2,
  marginBottom: 3,
}
```

* margin(1, 2, 3, 4) 元素上外边距为1, 右外边距为2, 下外边距为3, 左外边距为4

```javascript 
{
  ...layout.margin(1, 2, 3, 4),
}

编译为：
{
  marginTop: 1,
  marginRight: 2,
  marginBottom: 3,
  marginLeft: 4,
}
```

[返回](../README.md)