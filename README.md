# got-style
[![Build Status](https://travis-ci.org/F-happy/got-style.svg?branch=master)](https://travis-ci.org/F-happy/got-style)
[![npm](https://img.shields.io/npm/v/got-style.svg?style=flat-square)](https://www.npmjs.com/package/got-style)
[![npm](https://img.shields.io/npm/l/got-style.svg?style=flat-square)](https://www.npmjs.com/package/got-style)

> 一个运行在react-native环境中的样式库

## 特点：

* 更加便捷的书写你的样式、提供方便的API来快速创建样式
* 更加统一的样式规则、提供结构更加合理清晰的模板代码

如果你不理解为什么要有这个库，那么你可以看看这篇文章:

[来聊聊怎么写react-native上的样式吧](https://segmentfault.com/a/1190000013332489)

## 安装：

```
$ npm install got-style
```

接下来你就可以在项目中正常使用。

## 使用：

```javascript
import { StyleSheet } from 'react-native';
import { color } from 'got-style';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.background,
  },
});
```

## API:

### color 模块
这个模块提供了用于存放整个项目的全部颜色，它提供了一些默认颜色和属性：

```javascript
{
  main: '#FF5000',
  font: '#637280',
  border: '#B2B8BE',
  normal: '#fff',
  line: '#E6EAEE',
  text: '#1A173B',
  background: '#f4f4f4',
  toastDark: '#323441',
}

demo：
import { StyleSheet } from 'react-native';
import { px, color } from 'got-style';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: color.background,
  },
});
```

这其中肯定不能满足你的需求，所以如果你需要拓展颜色的话可以使用```extend``` 方法来为color模块拓展属性，你可以这样做：

```javascript
import { color } from 'got-style';

color.extend('youColor', '#fff');

export default { color };
```

需要注意的是，由于react-native的样式会提前编译，所以extend方法只会在当前文件内生效，为了避免到处继承，推荐在你工程从创建一个统一的style根文件，然后每个页面的样式都引入这个根文件。

在color模块中如果你认为默认提供的属性颜色不符合你的需求，那么你也可以使用extend方法去覆盖这个颜色，但是需要注意的是，只有color模块才可以通过extend方法去覆盖默认属性，虽然每个模块中都提供extend方法，但是只有color模块可以覆盖默认属性，其它模块如果覆盖默认属性都会失效。

### size 模块
提供通用大小，比如说行高、间距、字体大小等公共的数值参数。它提供了一些默认颜色和属性：

```javascript
{
  windowWidth: width,                 // 窗口宽度
  windowHeight: height,               // 窗口高度
  hairline: StyleSheet.hairlineWidth, // 当前应用所能提供的最细的宽度，这通常会比 1px 要细。
}

demo：
import { StyleSheet } from 'react-native';
import { px, size, color } from 'got-style';

export default StyleSheet.create({
  container: {
    width: size.windowWidth,
    borderColor: color.border,
    borderStyle: 'solid',
    borderLeftWidth: size.hairline,
  },
});
```

### layout 模块
提供公共布局，例如控制布局的flex属性、通用的padding、margin、position定位。

* [flex 模块](./doc/flex.md)
* [margin 模块](./doc/margin.md)
* [padding 模块](./doc/padding.md)
* [absolute 模块](./doc/absolute.md)

```javascript
demo：
import { StyleSheet } from 'react-native';
import { px, layout } from 'got-style';

export default StyleSheet.create({
  container: {
    ...layout.flex.horizontalMiddle,
  },
});
```

### 功能函数模块

* px() 像素转DP
> 在安卓设备下，如果lineHeight是浮点数会红屏， 所以lineHeight 不用被 px 计算

* extend() 为各个模块拓展新属性
```javascript
extend(color, 'youColor', '#f96f14');

color.youColor => '#f96f14'
```

需要主要的是，为了保护默认模块不会被使用者修改或者覆盖，除了color模块之外的其他模块，使用者不能通过extend方法去覆盖默认的属性，如果强行覆盖，则代码不会生效。
