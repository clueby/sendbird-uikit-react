import { a as __spreadArray } from '../tslib.es6-460f27dd.js';
import React__default from 'react';
import { f as format } from '../index-dd65c23d.js';
import { i as isToday, a as isYesterday, f as formatRelative } from '../index-194a02ea.js';
import Avatar from './Avatar.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../index-dc6b96dc.js';
import { u as useLocalization } from '../LocalizationContext-d85ba22d.js';
import '../index-f348c926.js';
import '../index-64b01d1d.js';
import './ImageRenderer.js';
import '../_rollupPluginBabelHelpers-ad900775.js';
import 'prop-types';
import './Icon.js';
import '../uuid-1f0e148d.js';
import '../stringSet-e852fbe9.js';

function getCreatedAt (createdAt, locale) {
  var optionalParam = locale ? {
    locale: locale
  } : null;

  if (!createdAt) {
    return '';
  }

  if (isToday(createdAt)) {
    return format(createdAt, 'p', optionalParam);
  }

  if (isYesterday(createdAt)) {
    return formatRelative(createdAt, new Date(), optionalParam);
  }

  return format(createdAt, 'MMM dd', optionalParam);
}

function MessageSearchItem(_a) {
  var className = _a.className,
      message = _a.message,
      selected = _a.selected,
      _onClick = _a.onClick;
  var createdAt = message.createdAt;
  var messageText = message.message;
  var sender = message.sender || message._sender;
  var profileUrl = sender.profileUrl,
      nickname = sender.nickname;

  var _b = useLocalization(),
      stringSet = _b.stringSet,
      dateLocale = _b.dateLocale;

  return /*#__PURE__*/React__default.createElement("div", {
    className: __spreadArray(__spreadArray([], Array.isArray(className) ? className : [className], true), ['sendbird-message-search-item', selected ? 'sendbird-message-search-item--selected' : ''], false).join(' '),
    onClick: function onClick(e) {
      e.stopPropagation();

      _onClick(message);
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-item__left"
  }, /*#__PURE__*/React__default.createElement(Avatar, {
    className: "sendbird-message-search-item__left__sender-avatar",
    src: profileUrl,
    alt: "profile image",
    width: "56px",
    height: "56px"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-item__right"
  }, /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-item__right__sender-name",
    type: LabelTypography.SUBTITLE_2,
    color: LabelColors.ONBACKGROUND_1
  }, nickname || stringSet.NO_NAME), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-item__right__message-text",
    type: LabelTypography.BODY_2,
    color: LabelColors.ONBACKGROUND_3
  }, messageText), /*#__PURE__*/React__default.createElement(Label, {
    className: "sendbird-message-search-item__right__message-created-at",
    type: LabelTypography.CAPTION_3,
    color: LabelColors.ONBACKGROUND_2
  }, getCreatedAt(createdAt, dateLocale))), /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-message-search-item__right-footer"
  }));
}

export { MessageSearchItem as default };
//# sourceMappingURL=MessageSearchItem.js.map
