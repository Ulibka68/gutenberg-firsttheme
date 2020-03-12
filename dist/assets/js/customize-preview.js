/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

var _stripTags = __webpack_require__(10);

var _stripTags2 = _interopRequireDefault(_stripTags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

wp.customize('blogname', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-header__blogname').html(to);
    });
});

wp.customize('_themename_display_author_info', function (value) {
    value.bind(function (to) {
        if (to) {
            (0, _jquery2.default)('.c-post-author').show();
        } else {
            (0, _jquery2.default)('.c-post-author').hide();
        }
    });
});

wp.customize('_themename_accent_colour', function (value) {
    value.bind(function (to) {
        var inline_css = '';
        var inline_css_obj = _themename['inline-css'];
        for (var selector in inline_css_obj) {
            inline_css += selector + ' {';
            for (var prop in inline_css_obj[selector]) {
                var val = inline_css_obj[selector][prop];
                inline_css += prop + ': ' + wp.customize(val).get();
            }
            inline_css += '}';
        }
        (0, _jquery2.default)('#_themename-stylesheet-inline-css').html(inline_css);
    });
});

wp.customize('_themename_site_info', function (value) {
    value.bind(function (to) {
        (0, _jquery2.default)('.c-site-info__text').html((0, _stripTags2.default)(to, '<a>'));
    });
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var strip_tags = function strip_tags(input, allowed) {
    allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
        return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
};

exports.default = strip_tags;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFjNWVlNDBjYjNkMjQwYTUxYzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jdXN0b21pemUtcHJldmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2hlbHBlcnMvc3RyaXAtdGFncy5qcyJdLCJuYW1lcyI6WyJ3cCIsImN1c3RvbWl6ZSIsInZhbHVlIiwiYmluZCIsInRvIiwiaHRtbCIsInNob3ciLCJoaWRlIiwiaW5saW5lX2NzcyIsImlubGluZV9jc3Nfb2JqIiwiX3RoZW1lbmFtZSIsInNlbGVjdG9yIiwicHJvcCIsInZhbCIsImdldCIsInN0cmlwX3RhZ3MiLCJpbnB1dCIsImFsbG93ZWQiLCJ0b0xvd2VyQ2FzZSIsIm1hdGNoIiwiam9pbiIsInRhZ3MiLCJjb21tZW50c0FuZFBocFRhZ3MiLCJyZXBsYWNlIiwiJDAiLCIkMSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTs7Ozs7OztBQzdEQSx3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7Ozs7QUFJQUEsR0FBR0MsU0FBSCxDQUFjLFVBQWQsRUFBMEIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pDQSxVQUFNQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCLDhCQUFFLHFCQUFGLEVBQXlCQyxJQUF6QixDQUE4QkQsRUFBOUI7QUFDSCxLQUZEO0FBR0gsQ0FKRDs7QUFNQUosR0FBR0MsU0FBSCxDQUFjLGdDQUFkLEVBQWdELFVBQUNDLEtBQUQsRUFBVztBQUN2REEsVUFBTUMsSUFBTixDQUFZLFVBQUNDLEVBQUQsRUFBUTtBQUNoQixZQUFHQSxFQUFILEVBQU87QUFDSCxrQ0FBRSxnQkFBRixFQUFvQkUsSUFBcEI7QUFDSCxTQUZELE1BRU87QUFDSCxrQ0FBRSxnQkFBRixFQUFvQkMsSUFBcEI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxDQVJEOztBQVVBUCxHQUFHQyxTQUFILENBQWMsMEJBQWQsRUFBMEMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pEQSxVQUFNQyxJQUFOLENBQVksVUFBQ0MsRUFBRCxFQUFRO0FBQ2hCLFlBQUlJLGVBQUo7QUFDQSxZQUFJQyxpQkFBaUJDLFdBQVcsWUFBWCxDQUFyQjtBQUNBLGFBQUksSUFBSUMsUUFBUixJQUFvQkYsY0FBcEIsRUFBb0M7QUFDaENELDBCQUFpQkcsUUFBakI7QUFDSSxpQkFBSSxJQUFJQyxJQUFSLElBQWdCSCxlQUFlRSxRQUFmLENBQWhCLEVBQTBDO0FBQ3RDLG9CQUFJRSxNQUFNSixlQUFlRSxRQUFmLEVBQXlCQyxJQUF6QixDQUFWO0FBQ0FKLDhCQUFpQkksSUFBakIsVUFBMEJaLEdBQUdDLFNBQUgsQ0FBYVksR0FBYixFQUFrQkMsR0FBbEIsRUFBMUI7QUFDSDtBQUNMTjtBQUNIO0FBQ0QsOEJBQUUsbUNBQUYsRUFBdUNILElBQXZDLENBQTRDRyxVQUE1QztBQUNILEtBWkQ7QUFhSCxDQWREOztBQWdCQVIsR0FBR0MsU0FBSCxDQUFjLHNCQUFkLEVBQXNDLFVBQUNDLEtBQUQsRUFBVztBQUM3Q0EsVUFBTUMsSUFBTixDQUFZLFVBQUNDLEVBQUQsRUFBUTtBQUNoQiw4QkFBRSxvQkFBRixFQUF3QkMsSUFBeEIsQ0FBNkIseUJBQVdELEVBQVgsRUFBZSxLQUFmLENBQTdCO0FBQ0gsS0FGRDtBQUdILENBSkQsRTs7Ozs7Ozs7Ozs7O0FDckNBLElBQU1XLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDbkNBLGNBQVUsQ0FBQyxDQUFDLENBQUNBLFdBQVcsRUFBWixJQUFrQixFQUFuQixFQUNWQyxXQURVLEdBRVZDLEtBRlUsQ0FFSixtQkFGSSxLQUVvQixFQUZyQixFQUdUQyxJQUhTLENBR0osRUFISSxDQUFWLENBRG1DLENBSXhCO0FBQ1gsUUFBSUMsT0FBTyxnQ0FBWDtBQUFBLFFBQ0FDLHFCQUFxQiwwQ0FEckI7QUFFQSxXQUFPTixNQUFNTyxPQUFOLENBQWNELGtCQUFkLEVBQWtDLEVBQWxDLEVBQ05DLE9BRE0sQ0FDRUYsSUFERixFQUNRLFVBQVNHLEVBQVQsRUFBYUMsRUFBYixFQUFpQjtBQUM5QixlQUFPUixRQUFRUyxPQUFSLENBQWdCLE1BQU1ELEdBQUdQLFdBQUgsRUFBTixHQUF5QixHQUF6QyxJQUFnRCxDQUFDLENBQWpELEdBQXFETSxFQUFyRCxHQUEwRCxFQUFqRTtBQUNELEtBSE0sQ0FBUDtBQUlILENBWEQ7O2tCQWFlVCxVIiwiZmlsZSI6ImN1c3RvbWl6ZS1wcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTFjNWVlNDBjYjNkMjQwYTUxYzUiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpRdWVyeVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IHN0cmlwX3RhZ3MgZnJvbSAnLi9oZWxwZXJzL3N0cmlwLXRhZ3MnO1xyXG5cclxuXHJcblxyXG53cC5jdXN0b21pemUoICdibG9nbmFtZScsICh2YWx1ZSkgPT4ge1xyXG4gICAgdmFsdWUuYmluZCggKHRvKSA9PiB7XHJcbiAgICAgICAgJCgnLmMtaGVhZGVyX19ibG9nbmFtZScpLmh0bWwodG8pO1xyXG4gICAgfSApXHJcbn0pXHJcblxyXG53cC5jdXN0b21pemUoICdfdGhlbWVuYW1lX2Rpc3BsYXlfYXV0aG9yX2luZm8nLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xyXG4gICAgICAgIGlmKHRvKSB7XHJcbiAgICAgICAgICAgICQoJy5jLXBvc3QtYXV0aG9yJykuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5jLXBvc3QtYXV0aG9yJykuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59KVxyXG5cclxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9hY2NlbnRfY29sb3VyJywgKHZhbHVlKSA9PiB7XHJcbiAgICB2YWx1ZS5iaW5kKCAodG8pID0+IHtcclxuICAgICAgICBsZXQgaW5saW5lX2NzcyA9IGBgO1xyXG4gICAgICAgIGxldCBpbmxpbmVfY3NzX29iaiA9IF90aGVtZW5hbWVbJ2lubGluZS1jc3MnXTtcclxuICAgICAgICBmb3IobGV0IHNlbGVjdG9yIGluIGlubGluZV9jc3Nfb2JqKSB7XHJcbiAgICAgICAgICAgIGlubGluZV9jc3MgKz0gYCR7c2VsZWN0b3J9IHtgO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBwcm9wIGluIGlubGluZV9jc3Nfb2JqW3NlbGVjdG9yXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWwgPSBpbmxpbmVfY3NzX29ialtzZWxlY3Rvcl1bcHJvcF07XHJcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lX2NzcyArPSBgJHtwcm9wfTogJHt3cC5jdXN0b21pemUodmFsKS5nZXQoKX1gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmxpbmVfY3NzICs9IGB9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnI190aGVtZW5hbWUtc3R5bGVzaGVldC1pbmxpbmUtY3NzJykuaHRtbChpbmxpbmVfY3NzKTtcclxuICAgIH0gKVxyXG59KVxyXG5cclxud3AuY3VzdG9taXplKCAnX3RoZW1lbmFtZV9zaXRlX2luZm8nLCAodmFsdWUpID0+IHtcclxuICAgIHZhbHVlLmJpbmQoICh0bykgPT4ge1xyXG4gICAgICAgICQoJy5jLXNpdGUtaW5mb19fdGV4dCcpLmh0bWwoc3RyaXBfdGFncyh0bywgJzxhPicpKTtcclxuICAgIH0gKVxyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY3VzdG9taXplLXByZXZpZXcuanMiLCJjb25zdCBzdHJpcF90YWdzID0gKGlucHV0LCBhbGxvd2VkKSA9PiB7XHJcbiAgICBhbGxvd2VkID0gKCgoYWxsb3dlZCB8fCAnJykgKyAnJylcclxuICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAubWF0Y2goLzxbYS16XVthLXowLTldKj4vZykgfHwgW10pXHJcbiAgICAuam9pbignJyk7IC8vIG1ha2luZyBzdXJlIHRoZSBhbGxvd2VkIGFyZyBpcyBhIHN0cmluZyBjb250YWluaW5nIG9ubHkgdGFncyBpbiBsb3dlcmNhc2UgKDxhPjxiPjxjPilcclxuICAgIHZhciB0YWdzID0gLzxcXC8/KFthLXpdW2EtejAtOV0qKVxcYltePl0qPi9naSxcclxuICAgIGNvbW1lbnRzQW5kUGhwVGFncyA9IC88IS0tW1xcc1xcU10qPy0tPnw8XFw/KD86cGhwKT9bXFxzXFxTXSo/XFw/Pi9naTtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKGNvbW1lbnRzQW5kUGhwVGFncywgJycpXHJcbiAgICAucmVwbGFjZSh0YWdzLCBmdW5jdGlvbigkMCwgJDEpIHtcclxuICAgICAgcmV0dXJuIGFsbG93ZWQuaW5kZXhPZignPCcgKyAkMS50b0xvd2VyQ2FzZSgpICsgJz4nKSA+IC0xID8gJDAgOiAnJztcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHJpcF90YWdzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvaGVscGVycy9zdHJpcC10YWdzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==