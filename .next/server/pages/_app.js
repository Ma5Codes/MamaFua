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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setApiContext: () => (/* binding */ setApiContext)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var _lib_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/cookies */ \"./src/lib/cookies.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__, _lib_cookies__WEBPACK_IMPORTED_MODULE_2__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, universal_cookie__WEBPACK_IMPORTED_MODULE_1__, _lib_cookies__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst baseUrl = \"http://localhost:5000/api\" || 0; // Default fallback\nconsole.log(\"Base API URL:\", baseUrl); // Debugging\nconst isServer = ()=>\"undefined\" === \"undefined\";\nlet context = {};\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: baseUrl,\n    headers: {\n        \"Content-Type\": \"application/json\",\n        \"Access-Control-Allow-Origin\": \"*\",\n        \"Access-Control-Allow-Methods\": \"OPTIONS,GET,DELETE,PATCH,POST,PUT\",\n        \"Access-Control-Allow-Credentials\": \"true\",\n        \"Access-Control-Allow-Headers\": \"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version\"\n    },\n    withCredentials: false\n});\napi.defaults.withCredentials = false;\napi.interceptors.request.use((config)=>{\n    if (config.headers) {\n        let token;\n        if (isServer()) {\n            if (!context) throw new Error(\"Api Context not found. You must call `setApiContext(context)` before calling api on server-side\");\n            const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context.req?.headers.cookie);\n            token = cookies.get(\"@example/token\");\n        } else {\n            token = (0,_lib_cookies__WEBPACK_IMPORTED_MODULE_2__.getToken)();\n            if (!token) {\n                token =  false ? 0 : \"\";\n            }\n        }\n        config.headers.Authorization = token ? `Bearer ${token}` : \"\";\n    }\n    return config;\n});\napi.interceptors.response.use((response)=>response, (error)=>{\n    if (error.response?.status !== 200) {\n        return Promise.reject({\n            ...error,\n            response: {\n                ...error.response,\n                data: {\n                    ...error.response?.data,\n                    error: typeof error.response?.data === \"string\" ? error.response?.data : Object.values(error.response?.data?.data ?? \"\")[0]\n                }\n            }\n        });\n    }\n    return Promise.reject(error);\n});\n/**\n * Must be set when calling api on server side\n */ const setApiContext = (_context)=>{\n    context = _context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2F4aW9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQztBQUVIO0FBRUU7QUFJekMsTUFBTUcsVUFBVUMsMkJBQStCLElBQUksR0FBNkIsbUJBQW1CO0FBRW5HRyxRQUFRQyxHQUFHLENBQUMsaUJBQWlCTCxVQUFVLFlBQVk7QUFFbkQsTUFBTU0sV0FBVyxJQUFNLGdCQUFrQjtBQUV6QyxJQUFJQyxVQUFxQyxDQUFDO0FBRW5DLE1BQU1DLE1BQU1YLG9EQUFZLENBQUM7SUFDOUJhLFNBQVNWO0lBQ1RXLFNBQVM7UUFDUCxnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLGdDQUFnQztRQUNoQyxvQ0FBb0M7UUFDcEMsZ0NBQ0U7SUFDSjtJQUNBQyxpQkFBaUI7QUFDbkIsR0FBRztBQUVISixJQUFJSyxRQUFRLENBQUNELGVBQWUsR0FBRztBQUUvQkosSUFBSU0sWUFBWSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQztJQUM1QixJQUFJQSxPQUFPTixPQUFPLEVBQUU7UUFDbEIsSUFBSU87UUFFSixJQUFJWixZQUFZO1lBQ2QsSUFBSSxDQUFDQyxTQUNILE1BQU0sSUFBSVksTUFDUjtZQUdKLE1BQU1DLFVBQVUsSUFBSXRCLHdEQUFPQSxDQUFDUyxRQUFRYyxHQUFHLEVBQUVWLFFBQVFXO1lBQ2pESixRQUFRRSxRQUFRRyxHQUFHLENBQUM7UUFDdEIsT0FBTztZQUNMTCxRQUFRbkIsc0RBQVFBO1lBQ2hCLElBQUksQ0FBQ21CLE9BQU87Z0JBQ1ZBLFFBQ0UsTUFBa0IsR0FBY00sQ0FBaUMsR0FBSztZQUMxRTtRQUNGO1FBRUFQLE9BQU9OLE9BQU8sQ0FBQ2UsYUFBYSxHQUFHUixRQUFRLENBQUMsT0FBTyxFQUFFQSxNQUFNLENBQUMsR0FBRztJQUM3RDtJQUVBLE9BQU9EO0FBQ1Q7QUFFQVQsSUFBSU0sWUFBWSxDQUFDYSxRQUFRLENBQUNYLEdBQUcsQ0FDM0IsQ0FBQ1csV0FBYUEsVUFDZCxDQUFDQztJQUNDLElBQUlBLE1BQU1ELFFBQVEsRUFBRUUsV0FBVyxLQUFLO1FBQ2xDLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQztZQUNwQixHQUFHSCxLQUFLO1lBQ1JELFVBQVU7Z0JBQ1IsR0FBR0MsTUFBTUQsUUFBUTtnQkFDakJLLE1BQU07b0JBQ0osR0FBR0osTUFBTUQsUUFBUSxFQUFFSyxJQUFJO29CQUN2QkosT0FDRSxPQUFPQSxNQUFNRCxRQUFRLEVBQUVLLFNBQVMsV0FDNUJKLE1BQU1ELFFBQVEsRUFBRUssT0FDaEJDLE9BQU9DLE1BQU0sQ0FBQ04sTUFBTUQsUUFBUSxFQUFFSyxNQUFNQSxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUMxRDtZQUNGO1FBQ0Y7SUFDRjtJQUNBLE9BQU9GLFFBQVFDLE1BQU0sQ0FBQ0g7QUFDeEI7QUFHRjs7Q0FFQyxHQUNNLE1BQU1PLGdCQUFnQixDQUFDQztJQUM1QjdCLFVBQVU2QjtBQUNaLEVBQUU7QUFFRixpRUFBZTVCLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1uZXh0anMtdGFpbHdpbmQtc3RhcnRlci8uL3NyYy9saWIvYXhpb3MudHM/ZTg4NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHQgfSBmcm9tICduZXh0JztcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xuXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gJ0AvbGliL2Nvb2tpZXMnO1xuXG5pbXBvcnQgeyBBcGlSZXNwb25zZSwgVW5pbnRlcmNlcHRlZEFwaUVycm9yRGF0YSB9IGZyb20gJ0AvdHlwZXMvYXBpJztcblxuY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknOyAvLyBEZWZhdWx0IGZhbGxiYWNrXG5cbmNvbnNvbGUubG9nKCdCYXNlIEFQSSBVUkw6JywgYmFzZVVybCk7IC8vIERlYnVnZ2luZ1xuXG5jb25zdCBpc1NlcnZlciA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuXG5sZXQgY29udGV4dCA9IDxHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0Pnt9O1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogYmFzZVVybCxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdPUFRJT05TLEdFVCxERUxFVEUsUEFUQ0gsUE9TVCxQVVQnLFxuICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6ICd0cnVlJyxcbiAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycyc6XG4gICAgICAnWC1DU1JGLVRva2VuLCBYLVJlcXVlc3RlZC1XaXRoLCBBY2NlcHQsIEFjY2VwdC1WZXJzaW9uLCBDb250ZW50LUxlbmd0aCwgQ29udGVudC1NRDUsIENvbnRlbnQtVHlwZSwgRGF0ZSwgWC1BcGktVmVyc2lvbicsXG4gIH0sXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2UsXG59KTtcblxuYXBpLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuXG5hcGkuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcbiAgaWYgKGNvbmZpZy5oZWFkZXJzKSB7XG4gICAgbGV0IHRva2VuOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNTZXJ2ZXIoKSkge1xuICAgICAgaWYgKCFjb250ZXh0KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ0FwaSBDb250ZXh0IG5vdCBmb3VuZC4gWW91IG11c3QgY2FsbCBgc2V0QXBpQ29udGV4dChjb250ZXh0KWAgYmVmb3JlIGNhbGxpbmcgYXBpIG9uIHNlcnZlci1zaWRlJyxcbiAgICAgICAgKTtcblxuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKGNvbnRleHQucmVxPy5oZWFkZXJzLmNvb2tpZSk7XG4gICAgICB0b2tlbiA9IGNvb2tpZXMuZ2V0KCdAZXhhbXBsZS90b2tlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2tlbiA9IGdldFRva2VuKCk7XG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRva2VuID1cbiAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIHx8ICcnIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJztcbiAgfVxuXG4gIHJldHVybiBjb25maWc7XG59KTtcblxuYXBpLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gIChyZXNwb25zZSkgPT4gcmVzcG9uc2UsXG4gIChlcnJvcjogQXhpb3NFcnJvcjxBcGlSZXNwb25zZTxVbmludGVyY2VwdGVkQXBpRXJyb3JEYXRhPj4pID0+IHtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2U/LnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAuLi5lcnJvcixcbiAgICAgICAgcmVzcG9uc2U6IHtcbiAgICAgICAgICAuLi5lcnJvci5yZXNwb25zZSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5lcnJvci5yZXNwb25zZT8uZGF0YSxcbiAgICAgICAgICAgIGVycm9yOlxuICAgICAgICAgICAgICB0eXBlb2YgZXJyb3IucmVzcG9uc2U/LmRhdGEgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgPyBlcnJvci5yZXNwb25zZT8uZGF0YVxuICAgICAgICAgICAgICAgIDogT2JqZWN0LnZhbHVlcyhlcnJvci5yZXNwb25zZT8uZGF0YT8uZGF0YSA/PyAnJylbMF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9LFxuKTtcblxuLyoqXG4gKiBNdXN0IGJlIHNldCB3aGVuIGNhbGxpbmcgYXBpIG9uIHNlcnZlciBzaWRlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRBcGlDb250ZXh0ID0gKF9jb250ZXh0OiBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0KSA9PiB7XG4gIGNvbnRleHQgPSBfY29udGV4dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJnZXRUb2tlbiIsImJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImNvbnNvbGUiLCJsb2ciLCJpc1NlcnZlciIsImNvbnRleHQiLCJhcGkiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIndpdGhDcmVkZW50aWFscyIsImRlZmF1bHRzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwiRXJyb3IiLCJjb29raWVzIiwicmVxIiwiY29va2llIiwiZ2V0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJyZXNwb25zZSIsImVycm9yIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsImRhdGEiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzZXRBcGlDb250ZXh0IiwiX2NvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/axios.ts\n");

/***/ }),

/***/ "./src/lib/cookies.ts":
/*!****************************!*\
  !*** ./src/lib/cookies.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   removeToken: () => (/* binding */ removeToken),\n/* harmony export */   setToken: () => (/* binding */ setToken)\n/* harmony export */ });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([universal_cookie__WEBPACK_IMPORTED_MODULE_0__]);\nuniversal_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    secure: true\n});\nconst getToken = ()=>{\n    return cookies.get(\"@example/token\");\n};\nconst setToken = (token)=>{\n    cookies.set(\"@example/token\", token, {\n        path: \"/\",\n        secure: true\n    });\n};\nconst removeToken = ()=>{\n    cookies.remove(\"@example/token\", {\n        path: \"/\",\n        secure: true\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Nvb2tpZXMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUV2QyxNQUFNQyxVQUFVLElBQUlELHdEQUFPQSxDQUFDO0lBQzFCRSxRQUFRO0FBQ1Y7QUFFTyxNQUFNQyxXQUFXO0lBQ3RCLE9BQU9GLFFBQVFHLEdBQUcsQ0FBQztBQUNyQixFQUFFO0FBRUssTUFBTUMsV0FBVyxDQUFDQztJQUN2QkwsUUFBUU0sR0FBRyxDQUFDLGtCQUFrQkQsT0FBTztRQUNuQ0UsTUFBTTtRQUNOTixRQUFRO0lBQ1Y7QUFDRixFQUFFO0FBRUssTUFBTU8sY0FBYztJQUN6QlIsUUFBUVMsTUFBTSxDQUFDLGtCQUFrQjtRQUMvQkYsTUFBTTtRQUNOTixRQUFRO0lBQ1Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvbGliL2Nvb2tpZXMudHM/Mjc1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcblxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHtcbiAgc2VjdXJlOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gY29va2llcy5nZXQoJ0BleGFtcGxlL3Rva2VuJyk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4ge1xuICBjb29raWVzLnNldCgnQGV4YW1wbGUvdG9rZW4nLCB0b2tlbiwge1xuICAgIHBhdGg6ICcvJyxcbiAgICBzZWN1cmU6IHRydWUsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRva2VuID0gKCkgPT4ge1xuICBjb29raWVzLnJlbW92ZSgnQGV4YW1wbGUvdG9rZW4nLCB7XG4gICAgcGF0aDogJy8nLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbIkNvb2tpZXMiLCJjb29raWVzIiwic2VjdXJlIiwiZ2V0VG9rZW4iLCJnZXQiLCJzZXRUb2tlbiIsInRva2VuIiwic2V0IiwicGF0aCIsInJlbW92ZVRva2VuIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/cookies.ts\n");

/***/ }),

/***/ "./src/lib/font.ts":
/*!*************************!*\
  !*** ./src/lib/font.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inter: () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   poppins: () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0___default.a)\n/* harmony export */ });\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/lib/font.ts\",\"import\":\"Poppins\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"variable\":\"--font-poppins\"}],\"variableName\":\"poppins\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/lib/font.ts\\\",\\\"import\\\":\\\"Poppins\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"],\\\"variable\\\":\\\"--font-poppins\\\"}],\\\"variableName\\\":\\\"poppins\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_lib_font_ts_import_Poppins_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_poppins_variableName_poppins___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/lib/font.ts\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"200\",\"300\",\"400\",\"500\",\"600\",\"700\",\"800\",\"900\"],\"variable\":\"--font-inter\"}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/lib/font.ts\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"200\\\",\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"600\\\",\\\"700\\\",\\\"800\\\",\\\"900\\\"],\\\"variable\\\":\\\"--font-inter\\\"}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_lib_font_ts_import_Inter_arguments_subsets_latin_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter___WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2ZvbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWFBO0FBTUFDO0FBTkFEO0FBTUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvbGliL2ZvbnQudHM/NzY2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciwgUG9wcGlucyB9IGZyb20gJ25leHQvZm9udC9nb29nbGUnO1xuXG5leHBvcnQgY29uc3QgcG9wcGlucyA9IFBvcHBpbnMoe1xuICBzdWJzZXRzOiBbJ2xhdGluJ10sXG4gIHdlaWdodDogWycxMDAnLCAnMjAwJywgJzMwMCcsICc0MDAnLCAnNTAwJywgJzYwMCcsICc3MDAnLCAnODAwJywgJzkwMCddLFxuICB2YXJpYWJsZTogJy0tZm9udC1wb3BwaW5zJyxcbn0pO1xuXG5leHBvcnQgY29uc3QgaW50ZXIgPSBJbnRlcih7XG4gIHN1YnNldHM6IFsnbGF0aW4nXSxcbiAgd2VpZ2h0OiBbJzEwMCcsICcyMDAnLCAnMzAwJywgJzQwMCcsICc1MDAnLCAnNjAwJywgJzcwMCcsICc4MDAnLCAnOTAwJ10sXG4gIHZhcmlhYmxlOiAnLS1mb250LWludGVyJyxcbn0pO1xuIl0sIm5hbWVzIjpbInBvcHBpbnMiLCJpbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/font.ts\n");

/***/ }),

/***/ "./src/pages/_app.page.tsx":
/*!*********************************!*\
  !*** ./src/pages/_app.page.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/nprogress.css */ \"./src/styles/nprogress.css\");\n/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.ts\");\n/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/font */ \"./src/lib/font.ts\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns/locale */ \"date-fns/locale\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-datepicker */ \"react-datepicker\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _lib_axios__WEBPACK_IMPORTED_MODULE_7__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_4__, _lib_axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeStart\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().start));\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeError\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().done));\nnext_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(\"routeChangeComplete\", (nprogress__WEBPACK_IMPORTED_MODULE_3___default().done));\n\n\n(0,react_datepicker__WEBPACK_IMPORTED_MODULE_10__.registerLocale)(\"id\", date_fns_locale__WEBPACK_IMPORTED_MODULE_9__.id);\n(0,react_datepicker__WEBPACK_IMPORTED_MODULE_10__.setDefaultLocale)(\"id\");\nconst defaultQueryFn = async ({ queryKey })=>{\n    const { data } = await _lib_axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(`${queryKey?.[0]}`);\n    return data;\n};\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({\n    defaultOptions: {\n        queries: {\n            queryFn: defaultQueryFn\n        }\n    }\n});\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _lib_font__WEBPACK_IMPORTED_MODULE_8__.inter.className,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {}, void 0, false, {\n                    fileName: \"/home/ma5/Documents/Project/mamafua-full/mamaFua/src/pages/_app.page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/ma5/Documents/Project/mamafua-full/mamaFua/src/pages/_app.page.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/ma5/Documents/Project/mamafua-full/mamaFua/src/pages/_app.page.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ma5/Documents/Project/mamafua-full/mamaFua/src/pages/_app.page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkrQjtBQUVNO0FBQ0g7QUFDUTtBQUVaO0FBQ0U7QUFFRjtBQUNLO0FBRW5DRSwrQ0FBTUEsQ0FBQ0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CTCx3REFBZTtBQUNwREQsK0NBQU1BLENBQUNLLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLG9CQUFvQkwsdURBQWM7QUFDbkRELCtDQUFNQSxDQUFDSyxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJMLHVEQUFjO0FBRWpCO0FBQytCO0FBRXBFUyxpRUFBY0EsQ0FBQyxNQUFNRCwrQ0FBRUE7QUFFdkJFLG1FQUFnQkEsQ0FBQztBQUVqQixNQUFNQyxpQkFBaUIsT0FBTyxFQUFFQyxRQUFRLEVBQWdCO0lBQ3RELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVgsc0RBQU8sQ0FBQyxDQUFDLEVBQUVVLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxPQUFPQztBQUNUO0FBRUEsTUFBTUUsY0FBYyxJQUFJbEIsOERBQVdBLENBQUM7SUFDbENtQixnQkFBZ0I7UUFDZEMsU0FBUztZQUNQQyxTQUFTUDtRQUNYO0lBQ0Y7QUFDRjtBQUVlLFNBQVNRLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUN2QixzRUFBbUJBO1FBQUN3QixRQUFRUDtrQkFDM0IsNEVBQUNRO1lBQUlDLFdBQVdyQiw0Q0FBS0EsQ0FBQ3FCLFNBQVM7OzhCQUM3Qiw4REFBQ3ZCLG9EQUFPQTs7Ozs7OEJBQ1IsOERBQUNtQjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHRqcy10YWlsd2luZC1zdGFydGVyLy4vc3JjL3BhZ2VzL19hcHAucGFnZS50c3g/OTNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBRdWVyeUNsaWVudCxcbiAgUXVlcnlDbGllbnRQcm92aWRlcixcbiAgUXVlcnlPcHRpb25zLFxufSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnQC9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XG5cbmltcG9ydCBhcGkgZnJvbSAnQC9saWIvYXhpb3MnO1xuaW1wb3J0IHsgaW50ZXIgfSBmcm9tICdAL2xpYi9mb250JztcblxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIG5Qcm9ncmVzcy5zdGFydCk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgblByb2dyZXNzLmRvbmUpO1xuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG5Qcm9ncmVzcy5kb25lKTtcblxuaW1wb3J0IHsgaWQgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJMb2NhbGUsIHNldERlZmF1bHRMb2NhbGUgfSBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxucmVnaXN0ZXJMb2NhbGUoJ2lkJywgaWQpO1xuXG5zZXREZWZhdWx0TG9jYWxlKCdpZCcpO1xuXG5jb25zdCBkZWZhdWx0UXVlcnlGbiA9IGFzeW5jICh7IHF1ZXJ5S2V5IH06IFF1ZXJ5T3B0aW9ucykgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5nZXQoYCR7cXVlcnlLZXk/LlswXX1gKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBxdWVyeUNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgcXVlcmllczoge1xuICAgICAgcXVlcnlGbjogZGVmYXVsdFF1ZXJ5Rm4sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+XG4gICAgICAgIDxUb2FzdGVyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJUb2FzdGVyIiwiYXBpIiwiaW50ZXIiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsImlkIiwicmVnaXN0ZXJMb2NhbGUiLCJzZXREZWZhdWx0TG9jYWxlIiwiZGVmYXVsdFF1ZXJ5Rm4iLCJxdWVyeUtleSIsImRhdGEiLCJnZXQiLCJxdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInF1ZXJ5Rm4iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n");

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