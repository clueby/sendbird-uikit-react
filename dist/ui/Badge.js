import { b as _toConsumableArray } from '../_rollupPluginBabelHelpers-ad900775.js';
import React__default, { useContext } from 'react';
import PropTypes from 'prop-types';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import { a as LocalizationContext } from '../LocalizationContext-d85ba22d.js';
import '../stringSet-e852fbe9.js';
import '../index-f348c926.js';

function Badge(_ref) {
  var count = _ref.count,
      maxLevel = _ref.maxLevel,
      className = _ref.className;

  var _useContext = useContext(LocalizationContext),
      stringSet = _useContext.stringSet;

  var maximumNumber = parseInt('9'.repeat(maxLevel > 6 ? 6 : maxLevel), 10);
  return /*#__PURE__*/React__default.createElement("div", {
    className: [].concat(_toConsumableArray(Array.isArray(className) ? className : [className]), ['sendbird-badge']).join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-badge__text"
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.CAPTION_2,
    color: LabelColors.ONCONTENT_1
  }, count > maximumNumber ? "".concat(maximumNumber).concat(stringSet.BADGE__OVER) : count)));
}
Badge.propTypes = {
  count: PropTypes.number.isRequired,
  maxLevel: PropTypes.number,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
};
Badge.defaultProps = {
  maxLevel: 2,
  className: []
};

export { Badge as default };
//# sourceMappingURL=Badge.js.map
