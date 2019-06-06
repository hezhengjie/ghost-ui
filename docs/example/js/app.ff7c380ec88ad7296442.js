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

/***/ "Ba27":
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
    global.loading = mod.exports;
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

/***/ "HBJ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_base_loading_js__ = __webpack_require__("cKmQ");

window.customElements.define(__WEBPACK_IMPORTED_MODULE_0__components_base_loading_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__components_base_loading_js__["a" /* default */])
/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__components_base_loading_js__["a" /* default */]);


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

/***/ "JgmB":
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__("R09i")
}
var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("Ba27"),
  /* template */
  __webpack_require__("pKjJ"),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-221997dd",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


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

/***/ "R09i":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_loading__ = __webpack_require__("HBJ7");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__modules_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_loading__["a"]; });

// Basic





/***/ }),

/***/ "cKmQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__ = __webpack_require__("miRU");

class Loading extends __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__["a" /* PolymerElement */] {
  static get name() {
    return 'g-loading'
  }
  static get properties() {
    return {
      size: {
        type: String,
        value: 'small'
      }
    }
  }
  static get template() {
    return __WEBPACK_IMPORTED_MODULE_0__polymer_polymer_polymer_element_js__["b" /* html */]`
          <style>
          .g-loading{
            vertical-align: middle;
            width: 22px;
            height: 22px;
            display: inline-block;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAYFBMVEUAAAD/ewD/cRn/fQD/fAD/fgD/hAD/fAD/fQD/eQD/hAD/Xzf/egD/egD/gQD/hAD/fQD/hAD/hAD/fAD/fAD/fAD/ewD/hAD/eQD/eQD/eQD/eQD/eQD/eQD/eAD/hABLrjrTAAAAH3RSTlMAEwlPQxxiOSIsqg90J5/ia7jxxzKGfZRZ2dGLvrGascNqHAAABH9JREFUWMPVmNta3CAUhYdzIEAghJxH3/8tu4Fp01brHIIXXV74qeP/LddebOJcHhUidum6ZQ1e2U1zKhHGlxpq3N6/v7/3XbeGq42aUMnaClwsYvde1Pc9ON9V5JSdB7fDGJLjQ/163Rw16CyZkSksC8TcH+guqJE058k6btv2Zn1Yl5/4PkxOsKcy/YTcSNAg6Oyi9Uv/0/UbN49T8ZfNawRxmwo3253SFD3MxV+/AjWS8s13tzHauXnQLn4kdOqmvbjuFJf4rN1DLRN8CoXstcB3sPhhNAjRUeUx9vso2i+4WYn/qJAhW8jkMNL2Dhg/d9jpuHeFPOB6WFAruSpkPeCvgsDPb74b2WvzKbdtM/el424LeWaf2G1Bry5vRLLnzpIPZ/AUFzzP2fMyDR9GgBCATyw/7lPrAmd/n34An7rFpPb9EcbBzeBzl9e4poW0DX8EnMD45O1FbdenZqCqhkHMpT26RIF/N8zA8FkNKYzOO3Y0glUwDByiIItlEkcQNQyDZAxHyhnMahguz2HQ5bKMCreC4VLmULpcG4wg5TS+JuGAC0lc6mjYlj4dkjYZZhXBjfZd31nKLjiDSxKVxtdDL0Q6HE1FcEuhcf2uSTocTQNJ1JJ0sORC5DcwrgZGs+r6ddKpEw2rCMZpxy0qXoBbFQyFW/tObfXBcgxd56cb+FJPBprc7Rae001dcOMAHNQ3gLlabmBTFcxu4MbI6uD1u8Gy+Y/A9hvATq2LL2CDcNUeA3jKYMlqHmntlxV2BTNyqAoexn0JNsIBkcPQ1Fv0WGxhCWkfJ7CpNz1E3tZujw62mxRC1pueSSfa6/kGZrWyaAXMblGcwp0H4KFB1ZKIUApL5AUjM4h6vWDc7muIAoziZkiWca0WX0O4aokBDCGn8VV6XpnCutvyPxlkQelQJwvD7br6kWabmAFYVKkyouN1XRU3uHwpKa2TcsOtD2Gi6BaMEZTSCiljEX3YlZb5qzI+8Ny0FRIOwW8E/fYOHa0wP0SiCkE5eXDQQM+HgQet/O5/JXykLE4dbCz5BFzrzO/fhGIQQsWZZjAIYg+qdPggM0HJqZgRjcp7PxH093tcFDy/TkbCWe+PIA4xCON1MhLaqsQVx68fYbxOBr/T1fsS8AdyI0giC4Zf4SrgRsI+XXkmk8mzrcOMAvd6Be4/WoUMzeTnTgo2ZJyUAr+zAe6/yfOcgm4fxSJJRquUsnGWwP2CPAOZPPpA0BrqYuaOJPm9Q+bJdHMXjRETRE8WsNMdLliAbsycZ7RB+N5LXczczdE7XSoXVUbzjEYYf24WAZaPkwVNIxfokXFA7TjProEtG9TiDxFIQWc3RuDC1Bw1j80a/kaa0M5xXtgMHWKNTD/WcXoDs1Mc58PuQ6Zn7kA345SKorSqONdj3KYJuFHP9InzVK5BIABbgzK/yLkCBW1x1Pzpawe34JqSTB7zB2gExbhlbqIS8aGTDwYy0GLbZWgEKgg+j9rx+cRVBqXKkyJzCaXEkksujra8iGZmEDSxAf6rhOLO4QH9AD40UxJfX+cqAAAAAElFTkSuQmCC);
            background-repeat: no-repeat;
            background-size: cover;
            transform-origin: center center;
            animation-name: loading;
            animation-duration: 1.2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            -webkit-transform-origin: center center;
            -webkit-animation-name: loading;
            -webkit-animation-duration: 1.2s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite
        }
        .g-loading.small{
          width: 22px;
            height: 22px;
        }
        .g-loading.middle{
          width: 28px;
          height: 28px;
        }
        .g-loading.large{
          width: 40px;
            height: 40px;
        }
        @keyframes loading {
            0% {
                -webkit-transform: rotate(0)
            }
            50% {
                -webkit-transform: rotate(180deg)
            }
            to {
                -webkit-transform: rotate(1turn)
            }
        }
        
          </style>
          <div class$="g-loading [[size]]" >
          </div>
        `
  }
  }
/* harmony default export */ __webpack_exports__["a"] = (Loading);


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




const components = [
  // basic
  __WEBPACK_IMPORTED_MODULE_3__module__["a" /* Button */],
  __WEBPACK_IMPORTED_MODULE_3__module__["b" /* Loading */]
]

const Ghost = {
  /* eslint-disable no-undef */
  version: "0.0.1-beta.2"
}

components.forEach((Component) => {
  Ghost[name] = Component.name
})

/* unused harmony default export */ var _unused_webpack_default_export = (Ghost);


/***/ }),

/***/ "nb3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_button_vue__ = __webpack_require__("tx1y");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_loading_vue__ = __webpack_require__("JgmB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__pages_loading_vue__);


const routes = [
  {
    path: '/button',
    component: __WEBPACK_IMPORTED_MODULE_0__pages_button_vue___default.a
  },
  {
    path: '/loading',
    component: __WEBPACK_IMPORTED_MODULE_1__pages_loading_vue___default.a
  }
]

/* harmony default export */ __webpack_exports__["a"] = (routes);


/***/ }),

/***/ "pKjJ":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loading-group"
  }, [_c('g-loading'), _vm._v(" "), _c('g-loading', {
    attrs: {
      "size": "middle"
    }
  }), _vm._v(" "), _c('g-loading', {
    attrs: {
      "size": "large"
    }
  })], 1)
},staticRenderFns: []}

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