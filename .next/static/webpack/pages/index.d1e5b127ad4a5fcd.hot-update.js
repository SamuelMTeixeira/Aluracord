"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// IMPORTA COMPONENTES PERSONALIZADOS\n\n// IMPORTA CORES E FIGS PERSONALIZADAS\n\n// IMPORTA A BIBLIOTECA REACT\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Titulo(props) {\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"4776540a93a11104\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4776540a93a11104\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"], \";\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c = Titulo;\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"30a5a40f32de958f\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c1 = GlobalStyle;\nfunction Main() {\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_4___default().useState(\"SamuelMTeixeira\"), 2), username = ref[0], setuserName = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    backgroundImage: \"url(https://images2.alphacoders.com/816/81652.jpg)\",\n                    backgroundSize: \"cover\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundBlendMode: \"multiply\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"space-between\",\n                        flexDirection: {\n                            xs: \"column\",\n                            sm: \"row\"\n                        },\n                        width: \"100%\",\n                        maxWidth: \"700px\",\n                        borderRadius: \"5px\",\n                        padding: \"32px\",\n                        margin: \"16px\",\n                        boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            as: \"form\",\n                            onSubmit: function entrar(Event) {\n                                Event.preventDefault();\n                                console.log(\"pq vc clicou em entrar?\");\n                                window.location.href = \"/chat.js\";\n                            },\n                            styleSheet: {\n                                display: \"flex\",\n                                flexDirection: \"column\",\n                                alignItems: \"center\",\n                                justifyContent: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h1\",\n                                    children: \"Bem vindo de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: \"35px\",\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                    },\n                                    children: \"Aluracord - by Samuel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    fullWidth: true,\n                                    placeholder: \"Seu username GitHub...\",\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800]\n                                        }\n                                    },\n                                    variant: \"basicBordered\",\n                                    onChange: function onChange(Event) {\n                                        // TROCA A FOTO E O USUARIO, DE ACORDO COM O USERNAME DIGITADO \n                                        setuserName(Event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 131,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            styleSheet: {\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[999],\n                                minHeight: \"240px\",\n                                maxWidth: \"200px\",\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                flexDirection: \"column\",\n                                borderRadius: \"10px\",\n                                padding: \"16px\",\n                                marginLeft: \"16px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    styleSheet: {\n                                        borderRadius: \"50%\",\n                                        marginBottom: \"16px\"\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\"),\n                                    alt: \"Foto de perfil do GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 158,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[900],\n                                        padding: \"3px 10px\",\n                                        borderRadius: \"300px\"\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                            lineNumber: 145,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\samue\\\\OneDrive\\\\Documentos\\\\GitHub\\\\Concord\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Main, \"nTVppOiVHK642EktYHtYkSuD88w=\");\n_c2 = Main;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Titulo\");\n$RefreshReg$(_c1, \"GlobalStyle\");\n$RefreshReg$(_c2, \"Main\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUNoQmEsWUFBWSxFQUFFLENBQUs7d0NBQ25CZ0IsWUFBWSxFQUFFLENBQU07b0NBQ3hCLENBQUM7b0NBQ0dzQixHQUFHLEVBQUcsQ0FBbUIscUJBQVcsTUFBSSxDQUFickQsUUFBUSxFQUFDLENBQUk7b0NBQ3hDc0QsR0FBRyxFQUFDLENBQTBCOzs7Ozs7NEdBRWpDdEUsc0RBQUk7b0NBQUM4QyxPQUFPLEVBQUMsQ0FBTztvQ0FDakI1QixVQUFVLEVBQUUsQ0FBQzt3Q0FDVDhCLEtBQUssRUFBRTdDLG9FQUFvQzt3Q0FDM0NnQyxlQUFlLEVBQUVoQyxvRUFBb0M7d0NBQ3JENkIsT0FBTyxFQUFFLENBQVU7d0NBQ25CRCxZQUFZLEVBQUUsQ0FBTztvQ0FDekIsQ0FBQzs4Q0FDSGYsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQyxDQUFDO0dBM0h1QkYsSUFBSTtNQUFKQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSU1QT1JUQSBDT01QT05FTlRFUyBQRVJTT05BTElaQURPU1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gXCJAc2t5bmV4dWkvY29tcG9uZW50c1wiO1xyXG5cclxuLy8gSU1QT1JUQSBDT1JFUyBFIEZJR1MgUEVSU09OQUxJWkFEQVNcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcclxuXHJcbi8vIElNUE9SVEEgQSBCSUJMSU9URUNBIFJFQUNUXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gICAgY29uc3QgVGFnID0gcHJvcHMudGFnIHx8ICdoMSc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxUYWc+e3Byb3BzLmNoaWxkcmVufTwvVGFnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ119O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldHVzZXJOYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiU2FtdWVsTVRlaXhlaXJhXCIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcblxyXG4gICAgICAgICAgICB7LyogQkFDS0dST1VORCAqL31cclxuICAgICAgICAgICAgPEJveCBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9pbWFnZXMyLmFscGhhY29kZXJzLmNvbS84MTYvODE2NTIuanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBcIm11bHRpcGx5XCIsXHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBGVU5ETyBDT05URcOaRE8gKi99XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4czogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNtOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsIG1heFdpZHRoOiBcIjcwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIiwgcGFkZGluZzogXCIzMnB4XCIsIG1hcmdpbjogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCI3MDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUSVRVTE8gRSBFTlRSQURBUyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiBlbnRyYXIoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInBxIHZjIGNsaWNvdSBlbSBlbnRyYXI/XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9jaGF0LmpzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgxXCI+QmVtIHZpbmRvIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIzNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIzMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+QWx1cmFjb3JkIC0gYnkgU2FtdWVsPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNldSB1c2VybmFtZSBHaXRIdWIuLi5cIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJiYXNpY0JvcmRlcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUUk9DQSBBIEZPVE8gRSBPIFVTVUFSSU8sIERFIEFDT1JETyBDT00gTyBVU0VSTkFNRSBESUdJVEFETyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR1c2VyTmFtZShFdmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVudHJhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbXCI1MDBcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVtcIjQwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVtcIjYwMFwiXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEFSRUEgREEgRk9UTyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjgwMFwiXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiOTk5XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIyMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGb3RvIGRlIHBlcmZpbCBkbyBHaXRIdWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB2YXJpYW50PVwiYm9keTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzkwMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIzcHggMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIzMDBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3VzZXJuYW1lfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJhcHBDb25maWciLCJSZWFjdCIsIlRpdHVsbyIsInByb3BzIiwiVGFnIiwidGFnIiwidGhlbWUiLCJjb2xvcnMiLCJuZXV0cmFscyIsImNoaWxkcmVuIiwiR2xvYmFsU3R5bGUiLCJNYWluIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldHVzZXJOYW1lIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsImFzIiwib25TdWJtaXQiLCJlbnRyYXIiLCJFdmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInZhcmlhbnQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZ1bGxXaWR0aCIsInBsYWNlaG9sZGVyIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInByaW1hcnkiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyQ29sb3IiLCJtaW5IZWlnaHQiLCJtYXJnaW5MZWZ0Iiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});