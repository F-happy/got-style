// const assert = require('assert');

function filterNullProperty(source = []) {
  let props = {};
  for (let i = 0; i < source.length; i++) {
    let values = null;
    for (let key in source[i]) {
      if (Object.prototype.hasOwnProperty.call(source[i], key)) {
        values = source[i][key];
      }
    }
    if (values !== null) {
      Object.assign(props, source[i]);
    }
  }
  return props;
}

const layout = {
  // 这里的形参顺序遵循css中的 “上、右、下、左”
  absolute(...arg) {
    let source = [];
    switch (arg.length) {
      case 1:
        source = [{ top: arg[0] }, { right: arg[0] }, { bottom: arg[0] }, { left: arg[0] }];
        break;
      case 2:
        source = [{ top: arg[0] }, { right: arg[1] }, { bottom: arg[0] }, { left: arg[1] }];
        break;
      case 3:
        source = [{ top: arg[0] }, { right: arg[1] }, { bottom: arg[2] }, { left: arg[1] }];
        break;
      case 4:
        source = [{ top: arg[0] }, { right: arg[1] }, { bottom: arg[2] }, { left: arg[3] }];
        break;
      default:
        break;
    }
    source.push({ position: 'absolute' });
    return filterNullProperty(source);
  },
};

// assert.equal(layout.margin(1));

const test = layout.absolute(null, null, null, null);

console.log(test);
