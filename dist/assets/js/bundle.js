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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)(document).ready(function () {
  (0, _jquery2.default)(".c-post__gallery, .c-post__gallery-gutenberg .wp-block-gallery").slick({
    arrows: false,
    adaptiveHeight: true
  });

  (0, _jquery2.default)(".most_recent_widget").slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind("partial-content-rendered", function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === "_themename_mst_recent_widget") {
        placement.container.find(".most_recent_widget").slick();
      }
    });
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log(987809);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(0);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquery2.default)('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
    if (!(0, _jquery2.default)(e.currentTarget).parents('.sub-menu').length) {
        (0, _jquery2.default)('.menu > .menu-item.open').find('> a > .menu-button').trigger('click');
    }
    (0, _jquery2.default)(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', function (e) {
    (0, _jquery2.default)(e.currentTarget).removeClass('open');
});

(0, _jquery2.default)('.c-navigation').on('click', '.menu .menu-button', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var menu_button = (0, _jquery2.default)(e.currentTarget);
    var menu_link = menu_button.parent();
    var menu_item = menu_link.parent();
    if (menu_item.hasClass('open')) {
        menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
        menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
    } else {
        menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
        menu_item.addClass('open');
        menu_link.attr('aria-expanded', 'true');
        menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
        menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
    }
});

(0, _jquery2.default)(document).click(function (e) {
    if ((0, _jquery2.default)('.menu-item.open').length) {
        (0, _jquery2.default)('.menu > .menu-item.open > a > .menu-button').trigger('click');
    }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function (factory) {
    'use strict';

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var Slick = window.Slick || {};

    Slick = function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this,
                dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function customPaging(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

            _.registerBreakpoints();
            _.init(true);
        }

        return Slick;
    }();

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof index === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || index >= _.slideCount) {
            return false;
        }

        _.unload();

        if (typeof index === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }
        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -_.currentLeft;
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function step(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' + now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' + now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function complete() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });
            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }
            }
        }
    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;
    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && (typeof asNavFor === 'undefined' ? 'undefined' : _typeof(asNavFor)) === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }
    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }
    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }
    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }
                }
            }

            _.slideHandler(slideTo);
        }
    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                }
            } else {

                _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                });
            }
        }
    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i,
            dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');
        }
    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }
    };

    Slick.prototype.buildRows = function () {

        var _ = this,
            a,
            b,
            c,
            newSlides,
            numOfSlides,
            originalSlides,
            slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children().css({
                'width': 100 / _.options.slidesPerRow + '%',
                'display': 'inline-block'
            });
        }
    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint,
            targetBreakpoint,
            respondToWidth,
            triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint = targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }
    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset,
            slideOffset,
            unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }
    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables,
            prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this,
            originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }
    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }
    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }

        if (_.$slides) {

            _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                $(this).attr('style', $(this).data('originalStyling'));
            });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }
    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }
    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }
        }
    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);
        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });
        }
    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function () {

                if (_.options.pauseOnFocus) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }
            }, 0);
        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;
    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;
    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
                coef = -1;

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2;
                    }
                }
                verticalOffset = verticalHeight * _.options.slidesToShow * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
                        verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
                    } else {
                        _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
                        verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
                verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
        } else {
            targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;
    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];
    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;
    };

    Slick.prototype.getSlick = function () {

        return this;
    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed,
            swipedSlide,
            centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;
        } else {
            return _.options.slidesToScroll;
        }
    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);
    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();
        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();
        }
    };

    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
            return val >= 0 && val < _.slideCount;
        });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': i + 1 + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });
            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({ 'tabindex': '0' });
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();
    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow.off('click.slick').on('click.slick', {
                message: 'previous'
            }, _.changeSlide);
            _.$nextArrow.off('click.slick').on('click.slick', {
                message: 'next'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }
    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
        }
    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);
    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();
        }
    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }
    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange,
            cloneRange,
            rangeStart,
            rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image.animate({ opacity: 0 }, 100, function () {

                        if (imageSrcSet) {
                            image.attr('srcset', imageSrcSet);

                            if (imageSizes) {
                                image.attr('sizes', imageSizes);
                            }
                        }

                        image.attr('src', imageSource).animate({ opacity: 1 }, 200, function () {
                            image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
                        });
                        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                    });
                };

                imageToLoad.onerror = function () {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
                };

                imageToLoad.src = imageSource;
            });
        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }
    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }
    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });
    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();
    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;
    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;
    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }
        }
    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });
    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();
    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                if (imageSrcSet) {
                    image.attr('srcset', imageSrcSet);

                    if (imageSizes) {
                        image.attr('sizes', imageSizes);
                    }
                }

                image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();
            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);
                } else {

                    image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();
                }
            };

            imageToLoad.src = imageSource;
        } else {

            _.$slider.trigger('allImagesLoaded', [_]);
        }
    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this,
            currentSlide,
            lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);
        }
    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this,
            breakpoint,
            currentBreakpoint,
            l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
                }
            }

            _.breakpoints.sort(function (a, b) {
                return _.options.mobileFirst ? a - b : b - a;
            });
        }
    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);
    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof index === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();
    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x,
            y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }
    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: '0px ' + _.options.centerPadding
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: _.options.centerPadding + ' 0px'
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();

        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = _.slideWidth * index * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });
    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }
    };

    Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this,
            l,
            item,
            option,
            value,
            refresh = false,
            type;

        if ($.type(arguments[0]) === 'object') {

            option = arguments[0];
            refresh = arguments[1];
            type = 'multiple';
        } else if ($.type(arguments[0]) === 'string') {

            option = arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                type = 'responsive';
            } else if (typeof arguments[1] !== 'undefined') {

                type = 'single';
            }
        }

        if (type === 'single') {

            _.options[option] = value;
        } else if (type === 'multiple') {

            $.each(option, function (opt, val) {

                _.options[opt] = val;
            });
        } else if (type === 'responsive') {

            for (item in value) {

                if ($.type(_.options.responsive) !== 'array') {

                    _.options.responsive = [value[item]];
                } else {

                    l = _.options.responsive.length - 1;

                    // loop through the responsive object and splice out duplicates.
                    while (l >= 0) {

                        if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                            _.options.responsive.splice(l, 1);
                        }

                        l--;
                    }

                    _.options.responsive.push(value[item]);
                }
            }
        }

        if (refresh) {

            _.unload();
            _.reinit();
        }
    };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);
    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
    };

    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset,
            allSlides,
            indexOffset,
            remainder;

        allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

        _.$slides.eq(index).addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
                    _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
                }

                if (index === 0) {

                    allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
                } else if (index === _.slideCount - 1) {

                    allSlides.eq(_.options.slidesToShow).addClass('slick-center');
                }
            }

            _.$slides.eq(index).addClass('slick-center');
        } else {

            if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {

                _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides.addClass('slick-active').attr('aria-hidden', 'false');
            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {

                    allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
                } else {

                    allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
                }
            }
        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i,
            slideIndex,
            infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });
            }
        }
    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;
    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;
        }

        _.slideHandler(index);
    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide,
            animSlide,
            oldSlide,
            slideLeft,
            targetLeft = null,
            _ = this,
            navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }
        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });
            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }
    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();
        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();
        }

        _.$slider.addClass('slick-loading');
    };

    Slick.prototype.swipeDirection = function () {

        var xDist,
            yDist,
            r,
            swipeAngle,
            _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if (swipeAngle <= 45 && swipeAngle >= 0) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle <= 360 && swipeAngle >= 315) {
            return _.options.rtl === false ? 'left' : 'right';
        }
        if (swipeAngle >= 135 && swipeAngle <= 225) {
            return _.options.rtl === false ? 'right' : 'left';
        }
        if (_.options.verticalSwiping === true) {
            if (swipeAngle >= 35 && swipeAngle <= 135) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';
    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:

            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);
            }
        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};
            }
        }
    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }
    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft,
            swipeDirection,
            swipeLength,
            positionOffset,
            touches,
            verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }

        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);
    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;
    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();
        }
    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();
    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            }
        }
    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots.find('li').removeClass('slick-active').end();

            _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
        }
    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;
            } else {

                _.interrupted = false;
            }
        }
    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFjNWVlNDBjYjNkMjQwYTUxYzUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJyZWFkeSIsInNsaWNrIiwiYXJyb3dzIiwiYWRhcHRpdmVIZWlnaHQiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiLCJmaW5kIiwiY29uc29sZSIsImxvZyIsIm9uIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRzIiwibGVuZ3RoIiwidHJpZ2dlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwicGFyZW50IiwibWVudV9pdGVtIiwiaGFzQ2xhc3MiLCJhZGQiLCJhdHRyIiwic2libGluZ3MiLCJjbGljayIsImZhY3RvcnkiLCJkZWZpbmUiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImpRdWVyeSIsIiQiLCJTbGljayIsIndpbmRvdyIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiXyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImkiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVhc2luZyIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiaW5pdCIsInByb3RvdHlwZSIsImFjdGl2YXRlQURBIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiYXBwZW5kVG8iLCJpbnNlcnRCZWZvcmUiLCJlcSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiY2hpbGRyZW4iLCJkZXRhY2giLCJhcHBlbmQiLCJlYWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZSIsImhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImxlZnQiLCJ0b3AiLCJhbmltU3RhcnQiLCJkdXJhdGlvbiIsInN0ZXAiLCJub3ciLCJNYXRoIiwiY2VpbCIsImNzcyIsImNvbXBsZXRlIiwiY2FsbCIsImFwcGx5VHJhbnNpdGlvbiIsInNldFRpbWVvdXQiLCJkaXNhYmxlVHJhbnNpdGlvbiIsImdldE5hdlRhcmdldCIsIm5vdCIsInRhcmdldCIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwidGVzdCIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJhIiwiYiIsImMiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVFbGVtZW50Iiwicm93IiwiZ2V0IiwiYXBwZW5kQ2hpbGQiLCJlbXB0eSIsImNoZWNrUmVzcG9uc2l2ZSIsImluaXRpYWwiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWluIiwiaGFzT3duUHJvcGVydHkiLCJ1bnNsaWNrIiwicmVmcmVzaCIsImV2ZW50IiwiZG9udEFuaW1hdGUiLCIkdGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsImNsb3Nlc3QiLCJtZXNzYWdlIiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJuIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiZGVzdHJveSIsInJlbW92ZSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJvcHRpb24iLCJpbmRleGVzIiwibWF4IiwicHVzaCIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiYWJzIiwiZ29UbyIsInNsaWNrR29UbyIsInBhcnNlSW50IiwiY3JlYXRpb24iLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJpbmRleE9mIiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImFjdGlvbiIsImluaXRVSSIsInNob3ciLCJ0YWdOYW1lIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJzbGljZSIsInByZXZTbGlkZSIsIm5leHRTbGlkZSIsInByb2dyZXNzaXZlTGF6eUxvYWQiLCJuZXh0Iiwic2xpY2tOZXh0IiwicGF1c2UiLCJzbGlja1BhdXNlIiwicGxheSIsInNsaWNrUGxheSIsInBvc3RTbGlkZSIsIiRjdXJyZW50U2xpZGUiLCJmb2N1cyIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwibCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0IiwiY2xlYXJUaW1lb3V0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb24iLCJwb3NpdGlvblByb3BzIiwieCIsInkiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsIm9mZnNldCIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsInZhbHVlIiwiYXJndW1lbnRzIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsImhpZGUiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJyIiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJBcnJheSIsInJldCIsImFwcGx5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7Ozs7Ozs7QUM3REEsd0I7Ozs7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LENBQU47QUFDSixnQkFBSSxPQUFPRSxHQUFQLElBQWMsV0FBbEIsRUFBK0IsT0FBT0EsR0FBUDtBQUNsQztBQUNELGVBQU90YSxDQUFQO0FBQ0gsS0FmRDtBQWlCSCxDQWo3RkMsQ0FBRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUxYzVlZTQwY2IzZDI0MGE1MWM1IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IFwiLi9jb21wb25lbnRzL3NsaWRlclwiO1xyXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICQoXCIuYy1wb3N0X19nYWxsZXJ5LCAuYy1wb3N0X19nYWxsZXJ5LWd1dGVuYmVyZyAud3AtYmxvY2stZ2FsbGVyeVwiKS5zbGljayh7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcclxuICB9KTtcclxuXHJcbiAgJChcIi5tb3N0X3JlY2VudF93aWRnZXRcIikuc2xpY2soKTtcclxuXHJcbiAgaWYgKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xyXG4gICAgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2guYmluZChcclxuICAgICAgXCJwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWRcIixcclxuICAgICAgcGxhY2VtZW50ID0+IHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmXHJcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT1cclxuICAgICAgICAgICAgXCJfdGhlbWVuYW1lX21zdF9yZWNlbnRfd2lkZ2V0XCJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHBsYWNlbWVudC5jb250YWluZXIuZmluZChcIi5tb3N0X3JlY2VudF93aWRnZXRcIikuc2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9idW5kbGUuanMiLCJjb25zb2xlLmxvZyg5ODc4MDkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xyXG4gICAgaWYoISQoZS5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCcuc3ViLW1lbnUnKS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbicpLmZpbmQoJz4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKTtcclxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xyXG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbn0pXHJcblxyXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgbGV0IG1lbnVfbGluayA9IG1lbnVfYnV0dG9uLnBhcmVudCgpO1xyXG4gICAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKTtcclxuICAgIGlmKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XHJcbiAgICAgICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICBtZW51X2l0ZW0uYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XHJcbiAgICBpZigkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==