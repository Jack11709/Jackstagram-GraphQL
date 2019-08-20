webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var apollo_link_lib_linkUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link/lib/linkUtils */ "./node_modules/apollo-link/lib/linkUtils.js");
/* harmony import */ var apollo_link_lib_linkUtils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link_lib_linkUtils__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/jackmay/learning-dev/graphql-app/jackstagram/client/components/Post.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  max-width: 100%;\n  background-color: white;\n  border: 1px solid ", ";\n  margin-bottom: 6rem;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  div.post-top {\n    display: flex; \n    justify-content: space-between; \n    padding: .5rem 1.5rem;\n    p {\n      font-size: 1.2rem;\n      text-transform: lowercase;\n    }\n  }\n  img {\n    max-width:100%;\n    height:auto;\n  }\n  div.post-bottom {\n    display: flex;\n    flex-direction: column;\n    div.bottom-icons {\n      display: flex;\n      div {\n        margin-left: 1rem;\n        font-size: 2rem;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var PostStyles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.darkGrey;
});

var Post = function Post(props) {
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "post-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\uD83D\uDC71 ", props.owner.username)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u25AA\u25AA\u25AA"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.image,
    alt: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "post-bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bottom-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "\u2764"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\uD83D\uDCAC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, props.likes.length, " likes")));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./node_modules/apollo-link/lib/linkUtils.js":
/*!***************************************************!*\
  !*** ./node_modules/apollo-link/lib/linkUtils.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var zen_observable_ts_1 = tslib_1.__importDefault(__webpack_require__(/*! zen-observable-ts */ "./node_modules/zen-observable-ts/lib/bundle.esm.js"));
var apollo_utilities_1 = __webpack_require__(/*! apollo-utilities */ "./node_modules/apollo-utilities/lib/bundle.esm.js");
exports.getOperationName = apollo_utilities_1.getOperationName;
var ts_invariant_1 = __webpack_require__(/*! ts-invariant */ "./node_modules/ts-invariant/lib/invariant.esm.js");
function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw new ts_invariant_1.InvariantError("illegal argument: " + key);
        }
    }
    return operation;
}
exports.validateOperation = validateOperation;
var LinkError = (function (_super) {
    tslib_1.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
exports.LinkError = LinkError;
function isTerminating(link) {
    return link.request.length <= 1;
}
exports.isTerminating = isTerminating;
function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    ts_invariant_1.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}
exports.toPromise = toPromise;
exports.makePromise = toPromise;
function fromPromise(promise) {
    return new zen_observable_ts_1.default(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}
exports.fromPromise = fromPromise;
function fromError(errorValue) {
    return new zen_observable_ts_1.default(function (observer) {
        observer.error(errorValue);
    });
}
exports.fromError = fromError;
function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? apollo_utilities_1.getOperationName(transformedOperation.query)
                : '';
    }
    return transformedOperation;
}
exports.transformOperation = transformOperation;
function createOperation(starting, operation) {
    var context = tslib_1.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib_1.__assign({}, context, next(context));
        }
        else {
            context = tslib_1.__assign({}, context, next);
        }
    };
    var getContext = function () { return (tslib_1.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    Object.defineProperty(operation, 'toKey', {
        enumerable: false,
        value: function () { return getKey(operation); },
    });
    return operation;
}
exports.createOperation = createOperation;
function getKey(operation) {
    var query = operation.query, variables = operation.variables, operationName = operation.operationName;
    return JSON.stringify([operationName, query, variables]);
}
exports.getKey = getKey;
//# sourceMappingURL=linkUtils.js.map

/***/ })

})
//# sourceMappingURL=index.js.2db04b64e347e9a974cd.hot-update.js.map