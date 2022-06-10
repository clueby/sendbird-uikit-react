import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-ad900775.js';
import React__default from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import '../stringSet-e852fbe9.js';

function Tooltip(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-tooltip']).join(' ')
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-tooltip__text",
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONCONTENT_1
  }, children));
}
Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.string), PropTypes.string])
};
Tooltip.defaultProps = {
  className: '',
  children: ''
};

export { Tooltip as default };
//# sourceMappingURL=Tooltip.js.map
