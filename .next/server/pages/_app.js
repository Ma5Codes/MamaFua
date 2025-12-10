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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/axios.ts":
/*!**************************!*\
  !*** ./src/lib/axios.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setApiContext: () => (/* binding */ setApiContext)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/cookies */ \"./src/lib/cookies.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__, _lib_cookies__WEBPACK_IMPORTED_MODULE_2__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__, _lib_cookies__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst baseUrl = \"http://localhost:5000\" || 0; // Default fallback\nconsole.log(\"Base API URL:\", baseUrl); // Debugging\nconst isServer = ()=>\"undefined\" === \"undefined\";\nlet context = {};\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: baseUrl,\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Methods\": \"OPTIONS,GET,DELETE,PATCH,POST,PUT\",\n        \"Access-Control-Allow-Credentials\": \"true\",\n        \"Access-Control-Allow-Headers\": \"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version\"\n    },\n    withCredentials: false\n});\napi.defaults.withCredentials = false;\napi.interceptors.request.use((config)=>{\n    if (config.headers) {\n        let token;\n        if (isServer()) {\n            if (!context) throw new Error(\"Api Context not found. You must call `setApiContext(context)` before calling api on server-side\");\n            const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context.req?.headers.cookie);\n            token = cookies.get(\"@example/token\");\n        } else {\n            token = (0,_lib_cookies__WEBPACK_IMPORTED_MODULE_2__.getToken)();\n            if (!token) {\n                token =  false ? 0 : \"\";\n            }\n        }\n        config.headers.Authorization = token ? `Bearer ${token}` : \"\";\n    }\n    return config;\n});\napi.interceptors.response.use((response)=>response, (error)=>{\n    if (error.response?.status !== 200) {\n        return Promise.reject({\n            ...error,\n            response: {\n                ...error.response,\n                data: {\n                    ...error.response?.data,\n                    error: typeof error.response?.data === \"string\" ? error.response?.data : Object.values(error.response?.data?.data ?? \"\")[0]\n                }\n            }\n        });\n    }\n    return Promise.reject(error);\n});\n/**\r\n * Must be set when calling api on server side\r\n */ const setApiContext = (_context)=>{\n    context = _context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2F4aW9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVIO0FBRUU7QUFJekMsTUFBTUcsVUFBVUMsdUJBQStCLElBQUksR0FBeUIsbUJBQW1CO0FBRS9GRyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCTCxVQUFVLFlBQVk7QUFFbkQsTUFBTU0sV0FBVyxJQUFNLGdCQUFrQjtBQUV6QyxJQUFJQyxVQUFxQyxDQUFDO0FBRW5DLE1BQU1DLE1BQU1YLG9EQUFZLENBQUM7SUFDOUJhLFNBQVNWO0lBQ1RXLFNBQVM7UUFDUCxnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsZ0NBQ0U7SUFDSjtJQUNBQyxpQkFBaUI7QUFDbkIsR0FBRztBQUVISixJQUFJSyxRQUFRLENBQUNELGVBQWUsR0FBRztBQUUvQkosSUFBSU0sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztJQUM1QixJQUFJQSxPQUFPTixPQUFPLEVBQUU7UUFDbEIsSUFBSU87UUFFSixJQUFJWixZQUFZO1lBQ2QsSUFBSSxDQUFDQyxTQUNILE1BQU0sSUFBSVksTUFDUjtZQUdKLE1BQU1DLFVBQVUsSUFBSXRCLHdEQUFPQSxDQUFDUyxRQUFRYyxHQUFHLEVBQUVWLFFBQVFXO1lBQ2pESixRQUFRRSxRQUFRRyxHQUFHLENBQUM7UUFDdEIsT0FBTztZQUNMTCxRQUFRbkIsc0RBQVFBO1lBQ2hCLElBQUksQ0FBQ21CLE9BQU87Z0JBQ1ZBLFFBQ0UsTUFBa0IsR0FBY00sQ0FBaUMsR0FBSztZQUMxRTtRQUNGO1FBRUFQLE9BQU9OLE9BQU8sQ0FBQ2UsYUFBYSxHQUFHUixRQUFRLENBQUMsT0FBTyxFQUFFQSxNQUFNLENBQUMsR0FBRztJQUM3RDtJQUVBLE9BQU9EO0FBQ1Q7QUFFQVQsSUFBSU0sWUFBWSxDQUFDYSxRQUFRLENBQUNYLEdBQUcsQ0FDM0IsQ0FBQ1csV0FBYUEsVUFDZCxDQUFDQztJQUNDLElBQUlBLE1BQU1ELFFBQVEsRUFBRUUsV0FBVyxLQUFLO1FBQ2xDLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQztZQUNwQixHQUFHSCxLQUFLO1lBQ1JELFVBQVU7Z0JBQ1IsR0FBR0MsTUFBTUQsUUFBUTtnQkFDakJLLE1BQU07b0JBQ0osR0FBR0osTUFBTUQsUUFBUSxFQUFFSyxJQUFJO29CQUN2QkosT0FDRSxPQUFPQSxNQUFNRCxRQUFRLEVBQUVLLFNBQVMsV0FDNUJKLE1BQU1ELFFBQVEsRUFBRUssT0FDaEJDLE9BQU9DLE1BQU0sQ0FBQ04sTUFBTUQsUUFBUSxFQUFFSyxNQUFNQSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRDtZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU9GLFFBQVFDLE1BQU0sQ0FBQ0g7QUFDeEI7QUFHRjs7Q0FFQyxHQUNNLE1BQU1PLGdCQUFnQixDQUFDQztJQUM1QjdCLFVBQVU2QjtBQUNaLEVBQUU7QUFFRixpRUFBZTVCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1uZXh0anMtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9saWIvYXhpb3MudHM/ZTg4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnQC9saWIvY29va2llcyc7XHJcblxyXG5pbXBvcnQgeyBBcGlSZXNwb25zZSwgVW5pbnRlcmNlcHRlZEFwaUVycm9yRGF0YSB9IGZyb20gJ0AvdHlwZXMvYXBpJztcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnOyAvLyBEZWZhdWx0IGZhbGxiYWNrXHJcblxyXG5jb25zb2xlLmxvZygnQmFzZSBBUEkgVVJMOicsIGJhc2VVcmwpOyAvLyBEZWJ1Z2dpbmdcclxuXHJcbmNvbnN0IGlzU2VydmVyID0gKCkgPT4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5sZXQgY29udGV4dCA9IDxHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0Pnt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogYmFzZVVybCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcclxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzJzogJ09QVElPTlMsR0VULERFTEVURSxQQVRDSCxQT1NULFBVVCcsXHJcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiAndHJ1ZScsXHJcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6XHJcbiAgICAgICdYLUNTUkYtVG9rZW4sIFgtUmVxdWVzdGVkLVdpdGgsIEFjY2VwdCwgQWNjZXB0LVZlcnNpb24sIENvbnRlbnQtTGVuZ3RoLCBDb250ZW50LU1ENSwgQ29udGVudC1UeXBlLCBEYXRlLCBYLUFwaS1WZXJzaW9uJyxcclxuICB9LFxyXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXHJcbn0pO1xyXG5cclxuYXBpLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xyXG5cclxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgaWYgKGNvbmZpZy5oZWFkZXJzKSB7XHJcbiAgICBsZXQgdG9rZW46IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAoaXNTZXJ2ZXIoKSkge1xyXG4gICAgICBpZiAoIWNvbnRleHQpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgJ0FwaSBDb250ZXh0IG5vdCBmb3VuZC4gWW91IG11c3QgY2FsbCBgc2V0QXBpQ29udGV4dChjb250ZXh0KWAgYmVmb3JlIGNhbGxpbmcgYXBpIG9uIHNlcnZlci1zaWRlJyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvbnRleHQucmVxPy5oZWFkZXJzLmNvb2tpZSk7XHJcbiAgICAgIHRva2VuID0gY29va2llcy5nZXQoJ0BleGFtcGxlL3Rva2VuJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2tlbiA9IGdldFRva2VuKCk7XHJcbiAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICB0b2tlbiA9XHJcbiAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8ICcnIDogJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25maWcuaGVhZGVycy5BdXRob3JpemF0aW9uID0gdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG5hcGkuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAocmVzcG9uc2UpID0+IHJlc3BvbnNlLFxyXG4gIChlcnJvcjogQXhpb3NFcnJvcjxBcGlSZXNwb25zZTxVbmludGVyY2VwdGVkQXBpRXJyb3JEYXRhPj4pID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZT8uc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcclxuICAgICAgICAuLi5lcnJvcixcclxuICAgICAgICByZXNwb25zZToge1xyXG4gICAgICAgICAgLi4uZXJyb3IucmVzcG9uc2UsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIC4uLmVycm9yLnJlc3BvbnNlPy5kYXRhLFxyXG4gICAgICAgICAgICBlcnJvcjpcclxuICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IucmVzcG9uc2U/LmRhdGEgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICA/IGVycm9yLnJlc3BvbnNlPy5kYXRhXHJcbiAgICAgICAgICAgICAgICA6IE9iamVjdC52YWx1ZXMoZXJyb3IucmVzcG9uc2U/LmRhdGE/LmRhdGEgPz8gJycpWzBdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgfSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBNdXN0IGJlIHNldCB3aGVuIGNhbGxpbmcgYXBpIG9uIHNlcnZlciBzaWRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2V0QXBpQ29udGV4dCA9IChfY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkgPT4ge1xyXG4gIGNvbnRleHQgPSBfY29udGV4dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImdldFRva2VuIiwiYmFzZVVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiY29uc29sZSIsImxvZyIsImlzU2VydmVyIiwiY29udGV4dCIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwid2l0aENyZWRlbnRpYWxzIiwiZGVmYXVsdHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJFcnJvciIsImNvb2tpZXMiLCJyZXEiLCJjb29raWUiLCJnZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0IiwiZGF0YSIsIk9iamVjdCIsInZhbHVlcyIsInNldEFwaUNvbnRleHQiLCJfY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/axios.ts\n");

/***/ }),

/***/ "./src/lib/cookies.ts":
/*!****************************!*\
  !*** ./src/lib/cookies.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   removeToken: () => (/* binding */ removeToken),\n/* harmony export */   setToken: () => (/* binding */ setToken)\n/* harmony export */ });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([universal_cookie__WEBPACK_IMPORTED_MODULE_0__]);\nuniversal_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    secure: false\n});\nconst getToken = ()=>{\n    return cookies.get(\"@example/token\");\n};\nconst setToken = (token)=>{\n    cookies.set(\"@example/token\", token, {\n        path: \"/\",\n        secure: false\n    });\n};\nconst removeToken = ()=>{\n    cookies.remove(\"@example/token\", {\n        path: \"/\",\n        secure: false\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Nvb2tpZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUV2QyxNQUFNQyxVQUFVLElBQUlELHdEQUFPQSxDQUFDO0lBQzFCRSxRQUFRO0FBQ1Y7QUFFTyxNQUFNQyxXQUFXO0lBQ3RCLE9BQU9GLFFBQVFHLEdBQUcsQ0FBQztBQUNyQixFQUFFO0FBRUssTUFBTUMsV0FBVyxDQUFDQztJQUN2QkwsUUFBUU0sR0FBRyxDQUFDLGtCQUFrQkQsT0FBTztRQUNuQ0UsTUFBTTtRQUNOTixRQUFRO0lBQ1Y7QUFDRixFQUFFO0FBRUssTUFBTU8sY0FBYztJQUN6QlIsUUFBUVMsTUFBTSxDQUFDLGtCQUFrQjtRQUMvQkYsTUFBTTtRQUNOTixRQUFRO0lBQ1Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvbGliL2Nvb2tpZXMudHM/Mjc1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcclxuXHJcbmNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyh7XHJcbiAgc2VjdXJlOiBmYWxzZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gY29va2llcy5nZXQoJ0BleGFtcGxlL3Rva2VuJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gIGNvb2tpZXMuc2V0KCdAZXhhbXBsZS90b2tlbicsIHRva2VuLCB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBzZWN1cmU6IGZhbHNlLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRva2VuID0gKCkgPT4ge1xyXG4gIGNvb2tpZXMucmVtb3ZlKCdAZXhhbXBsZS90b2tlbicsIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIHNlY3VyZTogZmFsc2UsXHJcbiAgfSk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDb29raWVzIiwiY29va2llcyIsInNlY3VyZSIsImdldFRva2VuIiwiZ2V0Iiwic2V0VG9rZW4iLCJ0b2tlbiIsInNldCIsInBhdGgiLCJyZW1vdmVUb2tlbiIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/cookies.ts\n");

/***/ }),

/***/ "./src/lib/font.ts":
/*!*************************!*\
  !*** ./src/lib/font.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inter: () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   poppins: () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0___default.a)\n/* harmony export */ });\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\lib\\\\font.ts\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"variable\":\"--font-poppins\"}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\lib\\\\\\\\font.ts\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"],\\\"variable\\\":\\\"--font-poppins\\\"}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\lib\\\\font.ts\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\lib\\\\\\\\font.ts\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"],\\\"variable\\\":\\\"--font-inter\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZvbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWFBO0FBTUFDO0FBTkFEO0FBTUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvbGliL2ZvbnQudHM/NzY2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciwgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHBpbnMgPSBQb3BwaW5zKHtcclxuICBzdWJzZXRzOiBbJ2xhdGluJ10sXHJcbiAgd2VpZ2h0OiBbJzEwMCcsICcyMDAnLCAnMzAwJywgJzQwMCcsICc1MDAnLCAnNjAwJywgJzcwMCcsICc4MDAnLCAnOTAwJ10sXHJcbiAgdmFyaWFibGU6ICctLWZvbnQtcG9wcGlucycsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGVyID0gSW50ZXIoe1xyXG4gIHN1YnNldHM6IFsnbGF0aW4nXSxcclxuICB3ZWlnaHQ6IFsnMTAwJywgJzIwMCcsICczMDAnLCAnNDAwJywgJzUwMCcsICc2MDAnLCAnNzAwJywgJzgwMCcsICc5MDAnXSxcclxuICB2YXJpYWJsZTogJy0tZm9udC1pbnRlcicsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsicG9wcGlucyIsImludGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/font.ts\n");

/***/ }),

/***/ "./src/pages/_app.page.tsx":
/*!*********************************!*\
  !*** ./src/pages/_app.page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/font */ \"./src/lib/font.ts\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale */ \"date-fns/locale\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _lib_axios__WEBPACK_IMPORTED_MODULE_7__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _lib_axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().done));\n\n\n(0,react_datepicker__WEBPACK_IMPORTED_MODULE_10__.registerLocale)(\"id\", date_fns_locale__WEBPACK_IMPORTED_MODULE_9__.id);\n(0,react_datepicker__WEBPACK_IMPORTED_MODULE_10__.setDefaultLocale)(\"id\");\nconst defaultQueryFn = async ({ queryKey })=>{\n    const { data } = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(`${queryKey?.[0]}`);\n    return data;\n};\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({\n    defaultOptions: {\n        queries: {\n            queryFn: defaultQueryFn\n        }\n    }\n});\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _lib_font__WEBPACK_IMPORTED_MODULE_8__.inter.className,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\optim\\\\OneDrive\\\\Documents\\\\project1\\\\MamaFua\\\\src\\\\pages\\\\_app.page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\optim\\\\OneDrive\\\\Documents\\\\project1\\\\MamaFua\\\\src\\\\pages\\\\_app.page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\optim\\\\OneDrive\\\\Documents\\\\project1\\\\MamaFua\\\\src\\\\pages\\\\_app.page.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\optim\\\\OneDrive\\\\Documents\\\\project1\\\\MamaFua\\\\src\\\\pages\\\\_app.page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkrQjtBQUVNO0FBQ0g7QUFDUTtBQUVaO0FBQ0U7QUFFRjtBQUNLO0FBRW5DRSwrQ0FBTUEsQ0FBQ0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CTCx3REFBZTtBQUNwREQsK0NBQU1BLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkwsdURBQWM7QUFDbkRELCtDQUFNQSxDQUFDSyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJMLHVEQUFjO0FBRWpCO0FBQytCO0FBRXBFUyxpRUFBY0EsQ0FBQyxNQUFNRCwrQ0FBRUE7QUFFdkJFLG1FQUFnQkEsQ0FBQztBQUVqQixNQUFNQyxpQkFBaUIsT0FBTyxFQUFFQyxRQUFRLEVBQWdCO0lBQ3RELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVgsc0RBQU8sQ0FBQyxDQUFDLEVBQUVVLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxPQUFPQztBQUNUO0FBRUEsTUFBTUUsY0FBYyxJQUFJbEIsOERBQVdBLENBQUM7SUFDbENtQixnQkFBZ0I7UUFDZEMsU0FBUztZQUNQQyxTQUFTUDtRQUNYO0lBQ0Y7QUFDRjtBQUVlLFNBQVNRLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUN2QixzRUFBbUJBO1FBQUN3QixRQUFRUDtrQkFDM0IsNEVBQUNRO1lBQUlDLFdBQVdyQiw0Q0FBS0EsQ0FBQ3FCLFNBQVM7OzhCQUM3Qiw4REFBQ3ZCLG9EQUFPQTs7Ozs7OEJBQ1IsOERBQUNtQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHRqcy10YWlsd2luZC1zdGFydGVyLy4vc3JjL3BhZ2VzL19hcHAucGFnZS50c3g/OTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFF1ZXJ5Q2xpZW50LFxyXG4gIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsXHJcbiAgUXVlcnlPcHRpb25zLFxyXG59IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSAncmVhY3QtaG90LXRvYXN0JztcclxuXHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgJ0Avc3R5bGVzL25wcm9ncmVzcy5jc3MnO1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICdAL2xpYi9heGlvcyc7XHJcbmltcG9ydCB7IGludGVyIH0gZnJvbSAnQC9saWIvZm9udCc7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgblByb2dyZXNzLnN0YXJ0KTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIG5Qcm9ncmVzcy5kb25lKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG5Qcm9ncmVzcy5kb25lKTtcclxuXHJcbmltcG9ydCB7IGlkIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGUsIHNldERlZmF1bHRMb2NhbGUgfSBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcclxuXHJcbnJlZ2lzdGVyTG9jYWxlKCdpZCcsIGlkKTtcclxuXHJcbnNldERlZmF1bHRMb2NhbGUoJ2lkJyk7XHJcblxyXG5jb25zdCBkZWZhdWx0UXVlcnlGbiA9IGFzeW5jICh7IHF1ZXJ5S2V5IH06IFF1ZXJ5T3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXBpLmdldChgJHtxdWVyeUtleT8uWzBdfWApO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xyXG4gIGRlZmF1bHRPcHRpb25zOiB7XHJcbiAgICBxdWVyaWVzOiB7XHJcbiAgICAgIHF1ZXJ5Rm46IGRlZmF1bHRRdWVyeUZuLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cclxuICAgICAgICA8VG9hc3RlciAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUm91dGVyIiwiblByb2dyZXNzIiwiVG9hc3RlciIsImFwaSIsImludGVyIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJpZCIsInJlZ2lzdGVyTG9jYWxlIiwic2V0RGVmYXVsdExvY2FsZSIsImRlZmF1bHRRdWVyeUZuIiwicXVlcnlLZXkiLCJkYXRhIiwiZ2V0IiwicXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJxdWVyeUZuIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/nprogress.css":
/*!**********************************!*\
  !*** ./src/styles/nprogress.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns/locale");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-datepicker");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("universal-cookie");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.page.tsx")));
module.exports = __webpack_exports__;

})();