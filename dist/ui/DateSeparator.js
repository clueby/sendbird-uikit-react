import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-ad900775.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import { C as Colors, c as changeColorToClassName } from '../color-b2f557e0.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import '../stringSet-e852fbe9.js';

function DateSeparator(_ref) {
  var className = _ref.className,
      children = _ref.children,
      separatorColor = _ref.separatorColor;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-separator']).join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-separator__left', "".concat(changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-separator__text"
  }, children), /*#__PURE__*/React__default.createElement("div", {
    className: ['sendbird-separator__right', "".concat(changeColorToClassName(separatorColor), "--background-color")].join(' ')
  }));
}
DateSeparator.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string), PropTypes.element]),
  separatorColor: PropTypes.string
};
DateSeparator.defaultProps = {
  className: '',
  children: /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONBACKGROUND_2
  }, "Date Separator"),
  separatorColor: Colors.ONBACKGROUND_4
};

export { DateSeparator as default };
//# sourceMappingURL=DateSeparator.js.map
