"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireDefault;\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rlcy1hcHAvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/ZTQ4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst UserSchema = new _mongoose.default.Schema({\n    name: String,\n    email: String\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFFQTs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLFVBQVUsR0FBRyxJQUFJQyxTQUFRLFNBQUNDLE1BQU0sQ0FBQztJQUNyQ0MsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLEtBQUssRUFBRUQsTUFBTTtDQUNkLENBQUM7QUFFRkUsTUFBTSxDQUFDQyxPQUFPLEdBQUdOLFNBQVEsU0FBQ08sTUFBTSxDQUFDQyxJQUFJLElBQUlSLFNBQVEsU0FBQ1MsS0FBSyxDQUFDLE1BQU0sRUFBRVYsVUFBVSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXMtYXBwLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb2RlbHMvVXNlci5qc1xyXG5cclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIG5hbWU6IFN0cmluZyxcclxuICBlbWFpbDogU3RyaW5nXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgVXNlclNjaGVtYSkiXSwibmFtZXMiOlsiVXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwibmFtZSIsIlN0cmluZyIsImVtYWlsIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/test.js":
/*!***************************!*\
  !*** ./pages/api/test.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    res.json({\n        test: \"test \"\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQUU5Q0EsNERBQVMsRUFBRSxDQUFDO0FBRVosaUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDL0JBLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLElBQUksRUFBRSxPQUFPO0tBQUMsQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXMtYXBwLy4vcGFnZXMvYXBpL3Rlc3QuanM/NmU3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uLy4uL3V0aWxzL2RiQ29ubmVjdCc7XHJcblxyXG5kYkNvbm5lY3QoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgcmVzLmpzb24oeyB0ZXN0OiAndGVzdCAnfSk7XHJcbn0iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwicmVxIiwicmVzIiwianNvbiIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const { method  } = req;\n    await (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    switch(method){\n        case \"GET\":\n            try {\n                const users = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().find({});\n                res.status(200).json({\n                    success: true,\n                    data: users\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: user\n                });\n            } catch (error1) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNUO0FBRWxCLGVBQWVFLE9BQU8sQ0FBRUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDL0MsTUFBTSxFQUFFQyxNQUFNLEdBQUUsR0FBR0YsR0FBRztJQUV0QixNQUFNSCw0REFBUyxFQUFFO0lBRWpCLE9BQVFLLE1BQU07UUFDWixLQUFLLEtBQUs7WUFDUixJQUFJO2dCQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNTCx3REFBUyxDQUFDLEVBQUUsQ0FBQztnQkFDakNHLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVMLEtBQUs7aUJBQUUsQ0FBQzthQUNyRCxDQUFDLE9BQU9NLEtBQUssRUFBRTtnQkFDZFIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLEtBQUs7aUJBQUUsQ0FBQzthQUN6QztZQUNELE1BQUs7UUFDUCxLQUFLLE1BQU07WUFDVCxJQUFJO2dCQUNGLE1BQU1HLElBQUksR0FBRyxNQUFNWiwwREFBVyxDQUFDRSxHQUFHLENBQUNZLElBQUksQ0FBQztnQkFDeENYLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVFLElBQUk7aUJBQUUsQ0FBQzthQUNwRCxDQUFDLE9BQU9ELE1BQUssRUFBRTtnQkFDZFIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLEtBQUs7aUJBQUUsQ0FBQzthQUN6QztZQUNELE1BQUs7UUFDUDtZQUNFTixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSzthQUFFLENBQUM7WUFDeEMsTUFBSztLQUNSO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rlcy1hcHAvLi91dGlscy9kYkNvbm5lY3QuanM/YzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJy4uL3V0aWxzL2RiQ29ubmVjdCdcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcykge1xyXG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXFcclxuXHJcbiAgYXdhaXQgZGJDb25uZWN0KClcclxuXHJcbiAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgIGNhc2UgJ0dFVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoe30pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiB1c2VycyB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuY3JlYXRlKHJlcS5ib2R5KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlciB9KVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgICBicmVha1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSB9KVxyXG4gICAgICBicmVha1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwidXNlciIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test.js"));
module.exports = __webpack_exports__;

})();