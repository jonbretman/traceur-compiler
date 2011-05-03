
goog.provide('goog.events.EventType'); 
goog.require('goog.userAgent'); 
goog.events.EventType = { 
  CLICK: 'click', 
  DBLCLICK: 'dblclick', 
  MOUSEDOWN: 'mousedown', 
  MOUSEUP: 'mouseup', 
  MOUSEOVER: 'mouseover', 
  MOUSEOUT: 'mouseout', 
  MOUSEMOVE: 'mousemove', 
  SELECTSTART: 'selectstart', 
  KEYPRESS: 'keypress', 
  KEYDOWN: 'keydown', 
  KEYUP: 'keyup', 
  BLUR: 'blur', 
  FOCUS: 'focus', 
  DEACTIVATE: 'deactivate', 
  FOCUSIN: goog.userAgent.IE ? 'focusin': 'DOMFocusIn', 
  FOCUSOUT: goog.userAgent.IE ? 'focusout': 'DOMFocusOut', 
  CHANGE: 'change', 
  SELECT: 'select', 
  SUBMIT: 'submit', 
  INPUT: 'input', 
  PROPERTYCHANGE: 'propertychange', 
  DRAGSTART: 'dragstart', 
  DRAGENTER: 'dragenter', 
  DRAGOVER: 'dragover', 
  DRAGLEAVE: 'dragleave', 
  DROP: 'drop', 
  TOUCHSTART: 'touchstart', 
  TOUCHMOVE: 'touchmove', 
  TOUCHEND: 'touchend', 
  TOUCHCANCEL: 'touchcancel', 
  CONTEXTMENU: 'contextmenu', 
  ERROR: 'error', 
  HELP: 'help', 
  LOAD: 'load', 
  LOSECAPTURE: 'losecapture', 
  READYSTATECHANGE: 'readystatechange', 
  RESIZE: 'resize', 
  SCROLL: 'scroll', 
  UNLOAD: 'unload', 
  HASHCHANGE: 'hashchange', 
  PAGEHIDE: 'pagehide', 
  PAGESHOW: 'pageshow', 
  POPSTATE: 'popstate', 
  COPY: 'copy', 
  PASTE: 'paste', 
  CUT: 'cut', 
  MESSAGE: 'message', 
  CONNECT: 'connect' 
}; 