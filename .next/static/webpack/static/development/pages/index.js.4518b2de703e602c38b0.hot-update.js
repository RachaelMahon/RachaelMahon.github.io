webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MapChart.js":
/*!********************************!*\
  !*** ./components/MapChart.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-simple-maps */ "./node_modules/react-simple-maps/dist/index.umd.js");
/* harmony import */ var react_simple_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_mapData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/mapData.json */ "./data/mapData.json");
var _data_mapData_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/mapData.json */ "./data/mapData.json", 1);
var _jsxFileName = "/Users/rachaelmahon/IdeaProjects/faberge/faberge/components/MapChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

var rounded = function rounded(num) {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

var MapChart = function MapChart(_ref) {
  var setTooltipContent = _ref.setTooltipContent;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__["ComposableMap"], {
    "data-tip": "",
    projectionConfig: {
      scale: 200
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__["ZoomableGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__["Geographies"], {
    geography: _data_mapData_json__WEBPACK_IMPORTED_MODULE_2__,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, function (_ref2) {
    var geographies = _ref2.geographies;
    return geographies.map(function (geo) {
      return __jsx(react_simple_maps__WEBPACK_IMPORTED_MODULE_1__["Geography"], {
        key: geo.rsmKey,
        geography: geo,
        onMouseEnter: function onMouseEnter() {
          var KEITH_FACT_TEXT;
          var FABERGE_EGGS_COUNT;
          var _geo$properties = geo.properties,
              NAME = _geo$properties.NAME,
              POP_EST = _geo$properties.POP_EST,
              FABERGE_EGGS = _geo$properties.FABERGE_EGGS,
              KEITH_FACT = _geo$properties.KEITH_FACT;

          if (!FABERGE_EGGS) {
            FABERGE_EGGS_COUNT = "zero";
          } else {
            FABERGE_EGGS_COUNT = FABERGE_EGGS;
          }

          if (!KEITH_FACT) {
            KEITH_FACT_TEXT = "Keith hasn't made a holy show of himself in this country yet. Check back later.";
          } else {
            KEITH_FACT_TEXT = KEITH_FACT;
          }

          setTooltipContent("".concat(NAME, " - Faberge Eggs: ").concat(FABERGE_EGGS_COUNT, " - Keith fact: ").concat(KEITH_FACT_TEXT));
        },
        onMouseLeave: function onMouseLeave() {
          setTooltipContent("");
        },
        style: {
          "default": {
            fill: "#f7dbea",
            outline: "none"
          },
          hover: {
            fill: "#e587b9",
            outline: "none"
          },
          pressed: {
            fill: "#d74894",
            outline: "none"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      });
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(MapChart));

/***/ })

})
//# sourceMappingURL=index.js.4518b2de703e602c38b0.hot-update.js.map