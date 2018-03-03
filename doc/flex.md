# flex 模块

属性名称规则：[排列方向][水平方向][竖直方向]

* horizontalMiddle 子元素横向排列， 水平垂直居中

```javascript 
{
  ...layout.flex.horizontalMiddle,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}
```

* horizontalMiddleSpaceBetween 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自靠边

```javascript 
{
  ...layout.flex.horizontalMiddleSpaceBetween,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}
```

* horizontalMiddleSpaceAround 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自留部分空白

```javascript 
{
  ...layout.flex.horizontalMiddleSpaceAround,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
}
```

* horizontalMiddleStart 子元素横向排列，垂直居中，向左分布

```javascript 
{
  ...layout.flex.horizontalMiddleStart,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
}
```

* horizontalMiddleEnd 子元素横向排列，垂直居中，向左分布

```javascript 
{
  ...layout.flex.horizontalMiddleEnd,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'center',
}
```

* horizontalTop 子元素横向排列，水平垂直向上

```javascript 
{
  ...layout.flex.horizontalTop,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
}
```

* horizontalTopSpaceBetween

```javascript 
{
  ...layout.flex.horizontalTopSpaceBetween,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
```


* horizontalTopSpaceAround

```javascript 
{
  ...layout.flex.horizontalTopSpaceAround,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
}
```


* horizontalTopStart

```javascript 
{
  ...layout.flex.horizontalTopStart,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'flex-start',
}
```

* horizontalTopEnd

```javascript 
{
  ...layout.flex.horizontalTopEnd,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'flex-start',
}
```

* horizontalBottom 子元素横向排列，水平垂直向下

```javascript 
{
  ...layout.flex.horizontalBottom,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
}
```

* horizontalBottomSpaceBetween

```javascript 
{
  ...layout.flex.horizontalBottomSpaceBetween,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}
```

* horizontalBottomSpaceAround

```javascript 
{
  ...layout.flex.horizontalBottomSpaceAround,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
}
```


* horizontalBottomStart

```javascript 
{
  ...layout.flex.horizontalBottomStart,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'flex-end',
}
```

* horizontalBottomEnd

```javascript 
{
  ...layout.flex.horizontalBottomEnd,
}

编译为：
{
  flexDirection: 'row',
  justifyContent: 'end',
  alignItems: 'flex-end',
}
```


* verticalMiddle

```javascript 
{
  ...layout.flex.verticalMiddle,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
```

* verticalMiddleSpaceBetween

```javascript 
{
  ...layout.flex.verticalMiddleSpaceBetween,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}
```

* verticalMiddleSpaceAround

```javascript 
{
  ...layout.flex.verticalMiddleSpaceAround,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
}
```

* verticalMiddleStart

```javascript 
{
  ...layout.flex.verticalMiddleStart,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'center',
}
```

* verticalMiddleEnd

```javascript 
{
  ...layout.flex.verticalMiddleEnd,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'center',
}
```

* verticalTop

```javascript 
{
  ...layout.flex.verticalTop,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
}
```

* verticalTopSpaceBetween

```javascript 
{
  ...layout.flex.verticalTopSpaceBetween,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
}
```

* verticalTopSpaceAround

```javascript 
{
  ...layout.flex.verticalTopSpaceAround,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
}
```

* verticalTopStart

```javascript 
{
  ...layout.flex.verticalTopStart,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
}
```

* verticalTopEnd

```javascript 
{
  ...layout.flex.verticalTopEnd,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'flex-start',
}
```

* verticalBottom

```javascript 
{
  ...layout.flex.verticalTopEnd,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
}
```

* verticalBottomSpaceBetween

```javascript 
{
  ...layout.flex.verticalBottomSpaceBetween,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}
```

* verticalBottomSpaceAround

```javascript 
{
  ...layout.flex.verticalBottomSpaceAround,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
}
```

* verticalBottomStart

```javascript 
{
  ...layout.flex.verticalBottomStart,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-end',
}
```

* verticalBottomEnd

```javascript 
{
  ...layout.flex.verticalBottomEnd,
}

编译为：
{
  flexDirection: 'column',
  justifyContent: 'end',
  alignItems: 'flex-end',
}
```