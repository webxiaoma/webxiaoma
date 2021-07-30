// 源码index.js
export default class VueRouter {
  ...
  constructor (options: RouterOptions = {}) {
    this.app = null
    this.apps = []
    this.options = options
    this.beforeHooks = []
    this.resolveHooks = []
    this.afterHooks = []
    this.matcher = createMatcher(options.routes || [], this)

    let mode = options.mode || 'hash'   // 不选择模式会默认使用hash模式
    this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false
    if (this.fallback) {
      mode = 'hash'
    }
    if (!inBrowser) {         // 非浏览器环境默认nodejs环境
      mode = 'abstract'
    }
    this.mode = mode

    switch (mode) { // 根据参数选择三种模式的一种
      case 'history':
        this.history = new HTML5History(this, options.base) // 根据HTML5版History的方法和属性实现的模式
        break
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback) // 利用url中的hash特性实现
        break
      case 'abstract':
        this.history = new AbstractHistory(this, options.base) // 这种模式原理暂不清楚
        break
      default:
        if (process.env.NODE_ENV !== 'production') {
          assert(false, `invalid mode: ${mode}`)
        }
    }
  }
  ...
  // 一些api方法，你应该很熟悉，$router.push(...)
  push (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    this.history.push(location, onComplete, onAbort)
  }

  replace (location: RawLocation, onComplete?: Function, onAbort?: Function) {
    this.history.replace(location, onComplete, onAbort)
  }

  go (n: number) {
    this.history.go(n)
  }

  back () {
    this.go(-1)
  }

  forward () {
    this.go(1)
  }
  ...
}