/**
 * 一个运行在react-native环境中的样式库
 * 注意：以下代码均基于ES6开发，在使用时确保你的环境满足条件
 */
import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');

/* ------------------------  以下方法和属性为私有方法，仅供内部使用  -------------------------------- */
/**
 * [私有方法] 为各个模块拓展新属性
 * @param source
 * @param key
 * @param value
 * @param force
 * @returns {any}
 */
function extendPlugin(source, key, value, force = false) {
  if (!source[key] || force) {
    return Object.defineProperty(source, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value,
    });
  }
}

/**
 * [私有方法] 布局模块中flex的工厂方法
 * @param direction
 * @param justify
 * @param align
 * @returns {{flexDirection: *, justifyContent: *, alignItems: *}}
 */
function flexLayout(direction, justify, align) {
  return {
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
  };
}

/* ------------------------  以下方法和属性为对外公开的，使用者可以使用的  -------------------------------- */
/**
 * 像素转DP
 * @param number
 * @returns {number}
 * 在安卓设备下，如果lineHeight是浮点数会红屏， 所以lineHeight 不用被 px 计算
 */
export const px = number => (number / PixelRatio.get());

// color 模块
export const color = {
  main: '#FF5000',
  font: '#637280',
  border: '#B2B8BE',
  normal: '#fff',
  line: '#E6EAEE',
  text: '#1A173B',
  background: '#f4f4f4',
  toastDark: '#323441',
  extend: (key, value) => {
    extendPlugin(color, key, value, true);
  }
};

// size 模块
export const size = {
  windowWidth: width,
  windowHeight: height,
  hairline: StyleSheet.hairlineWidth,
  extend: (key, value) => {
    extendPlugin(size, key, value);
  },
};

// layout 布局模块
export const layout = {
  flex: {
    // 子元素横向排列（flexDirection: "row"），水平垂直居中
    horizontalMiddle: flexLayout('row', 'center', 'center'),
    // 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自靠边
    horizontalMiddleSpaceBetween: flexLayout('row', 'space-between', 'center'),
    // 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自留部分空白
    horizontalMiddleSpaceAround: flexLayout('row', 'space-around', 'center'),
    // 子元素横向排列，垂直居中，向左分布
    horizontalMiddleStart: flexLayout('row', 'start', 'center'),
    // 子元素横向排列，垂直居中，向右分布
    horizontalMiddleEnd: flexLayout('row', 'end', 'center'),

    // 子元素横向排列（flexDirection: "row"），水平垂直向上
    horizontalTop: flexLayout('row', 'center', 'flex-start'),
    horizontalTopSpaceBetween: flexLayout('row', 'space-between', 'flex-start'),
    horizontalTopSpaceAround: flexLayout('row', 'space-around', 'flex-start'),
    horizontalTopStart: flexLayout('row', 'start', 'flex-start'),
    horizontalTopEnd: flexLayout('row', 'end', 'flex-start'),

    // 子元素横向排列（flexDirection: "row"），水平垂直向下
    horizontalBottom: flexLayout('row', 'center', 'flex-end'),
    horizontalBottomSpaceBetween: flexLayout('row', 'space-between', 'flex-end'),
    horizontalBottomSpaceAround: flexLayout('row', 'space-around', 'flex-end'),
    horizontalBottomStart: flexLayout('row', 'start', 'flex-end'),
    horizontalBottomEnd: flexLayout('row', 'end', 'flex-end'),

    // 子元素横向排列（flexDirection: "column"），水平垂直居中
    verticalMiddle: flexLayout('column', 'center', 'center'),
    // 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自靠边
    verticalMiddleSpaceBetween: flexLayout('column', 'space-between', 'center'),
    // 子元素横向排列，垂直居中，水平分布，中间用空格填满，最两边元素各自留部分空白
    verticalMiddleSpaceAround: flexLayout('column', 'space-around', 'center'),
    // 子元素横向排列，垂直居中，向左分布
    verticalMiddleStart: flexLayout('column', 'start', 'center'),
    // 子元素横向排列，垂直居中，向右分布
    verticalMiddleEnd: flexLayout('column', 'end', 'center'),

    // 子元素横向排列（flexDirection: "column"），水平垂直向上
    verticalTop: flexLayout('column', 'center', 'flex-start'),
    verticalTopSpaceBetween: flexLayout('column', 'space-between', 'flex-start'),
    verticalTopSpaceAround: flexLayout('column', 'space-around', 'flex-start'),
    verticalTopStart: flexLayout('column', 'start', 'flex-start'),
    verticalTopEnd: flexLayout('column', 'end', 'flex-start'),

    // 子元素横向排列（flexDirection: "column"），水平垂直向下
    verticalBottom: flexLayout('column', 'center', 'flex-end'),
    verticalBottomSpaceBetween: flexLayout('column', 'space-between', 'flex-end'),
    verticalBottomSpaceAround: flexLayout('column', 'space-around', 'flex-end'),
    verticalBottomStart: flexLayout('column', 'start', 'flex-end'),
    verticalBottomEnd: flexLayout('column', 'end', 'flex-end'),
  },
  extend: (key, value) => {
    extendPlugin(layout, key, value);
  },
};

export default {
  px,
  size,
  color,
  layout,
  extend: (source, key, value) => extendPlugin(source, key, value),
}
