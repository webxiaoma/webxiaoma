const targetMap = new WeakMap();
let activeEffect = null; //   新增，是否需要添加effect的标志


//   新增
// 为了用统一的方式，把eff添加到对应的dep中，顺便还执行了一遍设置了初始值
// 这样以后，只有我们手动调用effect那次才会保存dep，用trigger触发的get就不会再保存一遍了
function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}
//

function track(target, key) {
  if (activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, (depsMap = new Map()));
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, (dep = new Set()));
    }
    dep.add(activeEffect); //   修改，有直接添加effect改为了添加activeEffect
  }
}


function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let dep = depsMap.get(key);
  if (dep) {
    dep.forEach((effect) => {
      effect();
    });
  }
}


// 新增  
/**
 * @description: 例用Proxy和Reflect实现自动响应式
 * @param {Object} target 要响应的对象
 * @return {Proxy} 返回要响应对象的代理
 */
function reactive(target) {
  const handlers = {
    get(target, key, receiver) {
      let result = Reflect.get(target, key, receiver);
      // 在访问这个target对象的key键之前，先把effect保存下
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      let oldValue = target[key];
      // 下面两步的顺序不能颠倒，很关键
      // 这一步其实就已经赋值成功了
      let result = Reflect.set(target, key, value, receiver);
      // 到这里再执行get时获取的是新设的值
      if (result && oldValue != value) {
        // 如果把这个target对象的key键的值改了，就得执行一遍对应的effect
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handlers);
}

function ref(raw) {
  const r = {
    get value() {
      // 在get之前，先保存到targetMap中
      track(r, 'value');
      return raw;
    },
    set value(newVal) {
      raw = newVal;
      // set了之后，触发effect更新
      trigger(r, 'value');
    },
  };
  return r;
}

let o = ref(1);
o.value = 2;
console.log(o)

// //  
// let product = reactive({ price: 5, quantity: 2 });
// let total = 0;

// effect(()=>{
//   total = product.price + product.quantity;
// })

// console.log(total)
// product.price = 10;

// console.log(total)

