webpackJsonp([1],{

/***/ "2XZb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "3tlR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__ = __webpack_require__("miRU");

class Button extends __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__["a" /* PolymerElement */] {
  static get name() {
    return 'g-button'
  }
  static get properties() {
    return {
      text: {
        type: String,
        value: '按钮'
      },
      type: {
        type: String,
        value: 'default'
      },
      bg: {
        type: String,
        vaule: ''
      },
      border: {
        type: String,
        vaule: ''
      },
      color: {
        type: String,
        vaule: ''
      }
    }
  }
  static get template() {
    return __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__["b" /* html */]`
          <style>
            .btn {
              width: 100%;
            }
            .g-button {
                width: 100%;
                display: inline-block;
                outline: 0 none;
                -webkit-appearance: none;
                -webkit-box-sizing: border-box;
                padding: 0;
                text-align: center;
                font-size: 18px;
                height: 42px;
                line-height: 41px;
                border-radius:4px;
                -webkit-background-clip: padding-box;
                border: 1px solid #ccc;
                background: none;
                color: #333;
                border-radius: 20px;
            }
            :host([type="primary"]) .g-button {
                color: #fff;
                border: 1px solid #f63;
                background-color: #f63;
            }
            :host([disabled]) .g-button{
              color: #fff;
              background-color: #CCCCCC;
              border: 1px solid #ccc;
            }
          </style>
          <button class="btn g-button" style$="background-color:[[bg]];color:[[color]];border:[[border]]">
            <span>[[text]]</span>
          </button>
        `
  }
  }
/* harmony default export */ __webpack_exports__["a"] = (Button);


/***/ }),

/***/ "JHHX":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.button = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: function data() {
      return {
        bg: '#000',
        color: '#f63',
        border: 'none'
      };
    },

    methods: {
      handleClick: function handleClick() {
        alert('oh ha');
      }
    }
  };
  module.exports = exports['default'];
});

/***/ }),

/***/ "K/GD":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.App = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    data: function data() {
      return {};
    },

    components: {}
  };
  module.exports = exports["default"];
});

/***/ }),

/***/ "LIRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
/* unused harmony export kebab */
const camelizeRE = /-(\w)/g
function camelize (str) {
  str = String(str)
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

function kebab (str) {
  str = String(str)
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}


/***/ }),

/***/ "P7ce":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn-group"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('g-button', {
    attrs: {
      "text": "default按钮"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('g-button', {
    attrs: {
      "text": "primary按钮",
      "type": "primary"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('g-button', {
    attrs: {
      "disabled": "",
      "text": "disable按钮"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('g-button', {
    attrs: {
      "text": "自定义样式",
      "type": "primary",
      "bg": _vm.bg,
      "color": _vm.color,
      "border": _vm.border
    }
  })], 1), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "form-item"
  }, [_c('label', [_vm._v("背景色")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.bg),
      expression: "bg"
    }],
    attrs: {
      "type": "text",
      "placeholder": "背景色"
    },
    domProps: {
      "value": (_vm.bg)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.bg = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', [_vm._v("文字颜色")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.color),
      expression: "color"
    }],
    attrs: {
      "type": "text",
      "placeholder": "文字颜色"
    },
    domProps: {
      "value": (_vm.color)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.color = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('label', [_vm._v("边框")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.border),
      expression: "border"
    }],
    attrs: {
      "type": "text",
      "placeholder": "边框"
    },
    domProps: {
      "value": (_vm.border)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.border = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('g-button', {
    on: {
      "click": _vm.handleClick
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ "SrUm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("/5sW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_index__ = __webpack_require__("lVK7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue__ = __webpack_require__("pwV8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__("z16Y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick__ = __webpack_require__("v5o6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fastclick__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.








__WEBPACK_IMPORTED_MODULE_5_fastclick___default.a.attach(document.body) //  hack the active pseudo-classes failure caused by -webkit-overflow-scrolling touch

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */])
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
  render(createElement) {
    return createElement(__WEBPACK_IMPORTED_MODULE_3__App_vue___default.a)
  }
}).$mount('#app')


/***/ }),

/***/ "UFDc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findIndex */
/* unused harmony export deepAssign */
/* unused harmony export createAddAPI */
/* unused harmony export resetTypeValue */
/* unused harmony export parallel */
/* unused harmony export cb2PromiseWithResolve */
/* unused harmony export debounce */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return processComponentName; });
/* unused harmony export parsePath */
/* unused harmony export isUndef */
/* unused harmony export isFunc */
/* unused harmony export isArray */
/* unused harmony export isString */
/* unused harmony export isObject */
/* unused harmony export isNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang_string__ = __webpack_require__("LIRj");


function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

function deepAssign(to, from) {
  for (let key in from) {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  }
}

function createAddAPI(baseObj) {
  return function add(...args) {
    if (typeof args[0] === 'string') {
      args[0] = {
        [args[0]]: args[1]
      }
    }
    deepAssign(baseObj, args[0])
  }
}

function judgeTypeFnCreator (type) {
  const toString = Object.prototype.toString
  return function isType (o) {
    return toString.call(o) === `[object ${type}]`
  }
}

const typesReset = {
  _set(obj, key, value) {
    obj[key] = value
  },
  string(obj, key) {
    typesReset._set(obj, key, '')
  },
  number(obj, key) {
    typesReset._set(obj, key, 0)
  },
  boolean(obj, key) {
    typesReset._set(obj, key, false)
  },
  object(obj, key, value) {
    if (Array.isArray(value)) {
      typesReset._set(obj, key, [])
    } else {
      typesReset._set(obj, key, {})
    }
  }
}
function resetTypeValue(obj, key, defVal) {
  if (defVal !== undefined) {
    return typesReset._set(obj, key, defVal)
  }
  if (key) {
    const value = obj[key]
    const resetHandler = typesReset[typeof value]
    resetHandler && resetHandler(obj, key, value)
  } else {
    Object.keys(obj).forEach((key) => {
      resetTypeValue(obj, key)
    })
  }
}

function parallel(tasks, cb) {
  let doneCount = 0
  let results = []
  const tasksLen = tasks.length
  if (!tasksLen) {
    return cb(results)
  }
  tasks.forEach((task, i) => {
    task((ret) => {
      doneCount += 1
      results[i] = ret
      if (doneCount === tasksLen) {
        // all tasks done
        cb(results)
      }
    })
  })
}

function cb2PromiseWithResolve(cb) {
  let promise
  if (typeof window.Promise !== 'undefined') {
    const _cb = cb
    promise = new window.Promise((resolve) => {
      cb = (data) => {
        _cb && _cb(data)
        resolve(data)
      }
    })
    promise.resolve = cb
  }
  return promise
}

function debounce(func, wait, immediate, initValue) {
  let timeout
  let result = initValue

  const later = function (context, args) {
    timeout = null
    if (args) {
      result = func.apply(context, args)
    }
  }

  const debounced = function (...args) {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(this, args)
      }
    } else {
      timeout = setTimeout(() => {
        later(this, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

function processComponentName(Component, { prefix = '', firstUpperCase = false } = {}) {
  const name = Component.name
  const pureName = name.replace(/^cube-/i, '')
  let camelizeName = `${Object(__WEBPACK_IMPORTED_MODULE_0__lang_string__["a" /* camelize */])(`${prefix}${pureName}`)}`
   /* istanbul ignore if */
  if (firstUpperCase) {
    camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
  }
  return camelizeName
}

function parsePath (obj, path = '') {
  const segments = path.split('.')
  let result = obj
  for (let i = 0; i < segments.length; i++) {
    const key = segments[i]
     /* istanbul ignore if */
    if (isUndef(result[key])) {
      result = ''
      break
    } else {
      result = result[key]
    }
  }
  return result
}

const isFunc = judgeTypeFnCreator('Function')
const isUndef = judgeTypeFnCreator('Undefined')
const isArray = judgeTypeFnCreator('Array')
const isString = judgeTypeFnCreator('String')
const isObject = judgeTypeFnCreator('Object')
const isNumber = judgeTypeFnCreator('Number')




/***/ }),

/***/ "XZYS":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_vm._m(0), _vm._v(" "), _c('section', {
    staticClass: "ghost-content"
  }, [_c('router-view')], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "ghost-bar"
  }, [_c('h1', [_vm._v("Ghost-UI")])])
}]}

/***/ }),

/***/ "XgOO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b1gV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_button__ = __webpack_require__("dK69");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_button__["a"]; });

// Basic





/***/ }),

/***/ "dK69":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_button_button_js__ = __webpack_require__("3tlR");

window.customElements.define(__WEBPACK_IMPORTED_MODULE_0__components_button_button_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_button_button_js__["a" /* default */])
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__components_button_button_js__["a" /* default */]);


/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webcomponents_shadydom__ = __webpack_require__("VhKN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__webcomponents_shadydom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__webcomponents_shadydom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webcomponents_custom_elements__ = __webpack_require__("4QZE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webcomponents_custom_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__webcomponents_custom_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webcomponents_custom_elements_src_native_shim__ = __webpack_require__("Cwpc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__webcomponents_custom_elements_src_native_shim___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__webcomponents_custom_elements_src_native_shim__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module__ = __webpack_require__("b1gV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_helpers_util__ = __webpack_require__("UFDc");







const components = [
  // basic
  __WEBPACK_IMPORTED_MODULE_3__module__["a" /* Button */]
]

const Ghost = {
  /* eslint-disable no-undef */
  version: "0.0.1"
}

components.forEach((Component) => {
  const name = Object(__WEBPACK_IMPORTED_MODULE_4__common_helpers_util__["a" /* processComponentName */])(Component, {
    firstUpperCase: true
  })
  Ghost[name] = Component
})

/* unused harmony default export */ var _unused_webpack_default_export = (Ghost);


/***/ }),

/***/ "nb3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_button_vue__ = __webpack_require__("tx1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_button_vue__);


const routes = [
  {
    path: '/button',
    component: __WEBPACK_IMPORTED_MODULE_0__pages_button_vue___default.a
  }
]

/* harmony default export */ __webpack_exports__["a"] = (routes);


/***/ }),

/***/ "pwV8":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("XgOO")
}
var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("K/GD"),
  /* template */
  __webpack_require__("XZYS"),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "tx1y":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("2XZb")
}
var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("JHHX"),
  /* template */
  __webpack_require__("P7ce"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-03d7ecbe",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "z16Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("nb3f");



const router = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
  routes: __WEBPACK_IMPORTED_MODULE_1__routes__["a" /* default */]
})

/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ })

},["SrUm"]);