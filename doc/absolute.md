# absolute 模块

属性名称规则：这里的形参顺序遵循css中的 “上、右、下、左”

当参数为 null 时，不会生成该位置的属性。

* absolute(1) 元素上下左右定位为1

```javascript 
{
  ...layout.absolute(1),
}

编译为：
{
  position: 'absolute',
  top: 1,
  right: 1,
  bottom: 1,
  left: 1,
}
```

* absolute(1, 2) 元素上下定位为1, 左右定位为2

```javascript 
{
  ...layout.absolute(1, 2),
}

编译为：
{
  position: 'absolute',
  top: 1,
  right: 2,
  bottom: 1,
  left: 2,
}
```

* absolute(1, 2, 3) 元素上定位为1, 左右定位为2, 下定位为3

```javascript 
{
  ...layout.absolute(1, 2, 3),
}

编译为：
{
  position: 'absolute',
  top: 1,
  right: 2,
  bottom: 3,
  left: 2,
}
```

* absolute(1, 2, 3, 4) 元素上定位为1, 右定位为2, 下定位为3, 左定位为4

```javascript 
{
  ...layout.absolute(1, 2, 3, 4),
}

编译为：
{
  position: 'absolute',
  top: 1,
  right: 2,
  bottom: 3,
  left: 4,
}
```

[返回](../README.md)