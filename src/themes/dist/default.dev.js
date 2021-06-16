"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var primary = "#536DFE";
var secondary = "#FF5C93";
var warning = "#FFC260";
var success = "#3CD4A0";
var info = "#9013FE";
var lightenRate = 7.5;
var darkenRate = 15;
var defaultTheme = {
  direction: 'rtl',
  palette: {
    primary: {
      main: primary,
      light: (0, _tinycolor["default"])(primary).lighten(lightenRate).toHexString(),
      dark: (0, _tinycolor["default"])(primary).darken(darkenRate).toHexString()
    },
    secondary: {
      main: secondary,
      light: (0, _tinycolor["default"])(secondary).lighten(lightenRate).toHexString(),
      dark: (0, _tinycolor["default"])(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF"
    },
    warning: {
      main: warning,
      light: (0, _tinycolor["default"])(warning).lighten(lightenRate).toHexString(),
      dark: (0, _tinycolor["default"])(warning).darken(darkenRate).toHexString()
    },
    success: {
      main: success,
      light: (0, _tinycolor["default"])(success).lighten(lightenRate).toHexString(),
      dark: (0, _tinycolor["default"])(success).darken(darkenRate).toHexString()
    },
    info: {
      main: info,
      light: (0, _tinycolor["default"])(info).lighten(lightenRate).toHexString(),
      dark: (0, _tinycolor["default"])(info).darken(darkenRate).toHexString()
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      hint: "#B9B9B9"
    },
    background: {
      "default": "#F6F7FF",
      light: "#F3F5FF"
    }
  },
  customShadows: {
    widget: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark: "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide: "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "#4A4A4A1A"
      }
    },
    MuiMenu: {
      paper: {
        boxShadow: "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"
      }
    },
    MuiSelect: {
      icon: {
        color: "#B9B9B9"
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#F3F5FF !important",
          "&:focus": {
            backgroundColor: "#F3F5FF"
          }
        }
      },
      button: {
        "&:hover, &:focus": {
          backgroundColor: "#F3F5FF"
        }
      }
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: "white"
      }
    },
    MuiTableRow: {
      root: {
        height: 56
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid rgba(224, 224, 224, .5)",
        paddingLeft: 20
      },
      head: {
        fontSize: "0.95rem",
        textAlign: 'right' // fontFamily: 'IRANSans !important'

      },
      body: {
        fontSize: "0.95rem",
        direction: 'rtl',
        textAlign: 'right' // fontFamily: 'IRANSans !important'

      },
      sizeSmall: {
        size: "small"
      },
      paddingNone: {
        paddingNone: 'none'
      }
    },
    PrivateSwitchBase: {
      root: {
        marginLeft: 10
      }
    },
    MuiTypography: {
      root: {
        fontFamily: 'IRANSans !important',
        paddingRight: '12px',
        paddingLeft: '12px',
        direction: 'rtl'
      }
    },
    MuiListItemText: {
      root: {
        textAlign: 'right'
      }
    },
    MuiList: {
      root: {
        direction: 'rtl',
        textAlign: 'right',
        paddingLeft: '0'
      }
    },
    MUIDataTable: {
      responsiveBase: {
        position: 'unset !important'
      }
    },
    MuiButton: {
      root: {
        marginLeft: '30px'
      }
    },
    MuiInput: {
      input: {
        "&::placeholder": {
          textAlign: 'right'
        }
      }
    },
    MuiTablePagination: {
      actions: {
        marginRight: '20px',
        direction: 'rtl'
      }
    }
  }
};
var _default = defaultTheme;
exports["default"] = _default;