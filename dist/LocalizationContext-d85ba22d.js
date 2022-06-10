import React__default from 'react';
import { g as getStringSet } from './stringSet-e852fbe9.js';
import { d as defaultLocale } from './index-f348c926.js';

var LocalizationContext = /*#__PURE__*/React__default.createContext({
  stringSet: getStringSet('en'),
  dateLocale: defaultLocale
});

var LocalizationProvider = function LocalizationProvider(props) {
  var children = props.children;
  return /*#__PURE__*/React__default.createElement(LocalizationContext.Provider, {
    value: props
  }, children);
};

var useLocalization = function useLocalization() {
  return React__default.useContext(LocalizationContext);
};

export { LocalizationProvider as L, LocalizationContext as a, useLocalization as u };
//# sourceMappingURL=LocalizationContext-d85ba22d.js.map
