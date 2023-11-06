"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_games"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var vue_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-axios */ \"./node_modules/vue-axios/dist/vue-axios.esm.min.js\");\n/* harmony import */ var _components_MathGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/MathGame */ \"./src/components/MathGame.vue\");\n/* harmony import */ var _components_AnagramGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AnagramGame */ \"./src/components/AnagramGame.vue\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\n\n\n\n\n\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_5__.createWebHistory)(),\n  routes: [{\n    path: '/MathGame',\n    component: _components_MathGame__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }, {\n    path: '/AnagramGame',\n    component: _components_AnagramGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }]\n});\naxios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.xsrfCookieName = 'csrftoken';\naxios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].defaults.xsrfHeaderName = \"X-CSRFTOKEN\";\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\napp.use(router);\napp.use(vue_axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"], axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtZ2FtZXMvLi9zcmMvbWFpbi5qcz9mYmVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7Y3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5fSBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBWdWVBeGlvcyBmcm9tICd2dWUtYXhpb3MnO1xuXG5pbXBvcnQgTWF0aEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL01hdGhHYW1lJ1xuaW1wb3J0IEFuYWdyYW1HYW1lIGZyb20gJy4vY29tcG9uZW50cy9BbmFncmFtR2FtZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuXG5jb25zdCByb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoKSxcbiAgICByb3V0ZXM6W1xuICAgICAgICB7IHBhdGg6ICcvTWF0aEdhbWUnLCBjb21wb25lbnQ6IE1hdGhHYW1lfSxcbiAgICAgICAgeyBwYXRoOiAnL0FuYWdyYW1HYW1lJywgY29tcG9uZW50OiBBbmFncmFtR2FtZX0sXG4gICAgXVxufSk7XG5heGlvcy5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuYXhpb3MuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG5jb25zdCBhcHA9IGNyZWF0ZUFwcChBcHApXG5hcHAudXNlKHJvdXRlcilcbmFwcC51c2UoVnVlQXhpb3MsIGF4aW9zKTtcbmFwcC5tb3VudCgnI2FwcCcpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d918605e21c2bc1f"; }
/******/ }();
/******/ 
/******/ }
);