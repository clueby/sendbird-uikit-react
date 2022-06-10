import React__default, { useRef, useState, useContext } from 'react';
import { a as LocalizationContext } from '../../LocalizationContext-d85ba22d.js';
import Modal from '../../ui/Modal.js';
import Input, { InputLabel } from '../../ui/Input.js';
import Avatar from '../../ui/Avatar.js';
import { T as Type } from '../../index-3ebecbd4.js';
import { L as Label, a as LabelTypography, b as LabelColors } from '../../index-dc6b96dc.js';
import TextButton from '../../ui/TextButton.js';
import ChannelAvatar from '../../ui/OpenChannelAvatar.js';
import { useOpenChannelSettings } from '../context.js';
import useSendbirdStateContext from '../../useSendbirdStateContext.js';
import '../../stringSet-e852fbe9.js';
import '../../index-f348c926.js';
import 'prop-types';
import 'react-dom';
import '../../index-aaafc7c3.js';
import '../../ui/IconButton.js';
import '../../_rollupPluginBabelHelpers-ad900775.js';
import '../../ui/Icon.js';
import '../../utils-152638cc.js';
import '../../tslib.es6-460f27dd.js';
import '../../ui/ImageRenderer.js';
import '../../uuid-1f0e148d.js';
import '../../color-b2f557e0.js';
import '../../utils-74b0a9e7.js';
import '../../UserProfileContext-7308f635.js';
import '../../withSendBird.js';

var EditDetails = function EditDetails(props) {
  var _a, _b;

  var onCancel = props.onCancel;
  var globalState = useSendbirdStateContext();
  var logger = (_a = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _a === void 0 ? void 0 : _a.logger;
  var theme = (_b = globalState === null || globalState === void 0 ? void 0 : globalState.config) === null || _b === void 0 ? void 0 : _b.theme;

  var _c = useOpenChannelSettings(),
      channel = _c.channel,
      onBeforeUpdateChannel = _c.onBeforeUpdateChannel,
      onChannelModified = _c.onChannelModified,
      setChannel = _c.setChannel;

  var inputRef = useRef(null);
  var formRef = useRef(null);
  var hiddenInputRef = useRef(null);

  var _d = useState(null),
      currentImg = _d[0],
      setCurrentImg = _d[1];

  var _e = useState(null),
      newFile = _e[0],
      setNewFile = _e[1];

  var stringSet = useContext(LocalizationContext).stringSet;
  var title = channel === null || channel === void 0 ? void 0 : channel.name;
  return /*#__PURE__*/React__default.createElement(Modal, {
    titleText: stringSet.MODAL__CHANNEL_INFORMATION__TITLE,
    submitText: stringSet.BUTTON__SAVE,
    onCancel: onCancel,
    onSubmit: function onSubmit() {
      if (title !== '' && !inputRef.current.value) {
        if (formRef.current.reportValidity) {
          // might not work in explorer
          formRef.current.reportValidity();
        }

        return;
      }

      var currentTitle = inputRef.current.value;
      var currentImg = newFile;
      logger.info('ChannelSettings: Channel information being updated');

      if (onBeforeUpdateChannel) {
        var params = onBeforeUpdateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data);
        logger.info('ChannelSettings: onBeforeUpdateChannel', params);
        channel === null || channel === void 0 ? void 0 : channel.updateChannel(params, function (openChannel) {
          onChannelModified(openChannel); // setChannel(openChannel) => alone not working

          setChannel(null);
          setChannel(openChannel);
        });
      } else {
        channel === null || channel === void 0 ? void 0 : channel.updateChannel(currentTitle, currentImg, channel === null || channel === void 0 ? void 0 : channel.data, function (openChannel) {
          logger.info('ChannelSettings: Channel information updated', openChannel);
          onChannelModified(openChannel); // setChannel(openChannel) => alone not working

          setChannel(null);
          setChannel(openChannel);
        });
      }

      onCancel();
    },
    type: Type.PRIMARY
  }, /*#__PURE__*/React__default.createElement("form", {
    className: "channel-profile-form",
    ref: formRef,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__img-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_IMAGE), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__avatar"
  }, currentImg ? /*#__PURE__*/React__default.createElement(Avatar, {
    height: "80px",
    width: "80px",
    src: currentImg
  }) : /*#__PURE__*/React__default.createElement(ChannelAvatar, {
    height: 80,
    width: 80,
    channel: channel,
    theme: theme
  })), /*#__PURE__*/React__default.createElement("input", {
    ref: hiddenInputRef,
    type: "file",
    accept: "image/gif, image/jpeg, image/png",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      setCurrentImg(URL.createObjectURL(e.target.files[0]));
      setNewFile(e.target.files[0]);
      hiddenInputRef.current.value = '';
    }
  }), /*#__PURE__*/React__default.createElement(TextButton, {
    className: "channel-profile-form__avatar-button",
    onClick: function onClick() {
      return hiddenInputRef.current.click();
    },
    notUnderline: true
  }, /*#__PURE__*/React__default.createElement(Label, {
    type: LabelTypography.BUTTON_1,
    color: LabelColors.PRIMARY
  }, stringSet.MODAL__CHANNEL_INFORMATION__UPLOAD))), /*#__PURE__*/React__default.createElement("div", {
    className: "channel-profile-form__name-section"
  }, /*#__PURE__*/React__default.createElement(InputLabel, null, stringSet.MODAL__CHANNEL_INFORMATION__CHANNEL_NAME), /*#__PURE__*/React__default.createElement(Input, {
    required: title !== '',
    name: "channel-profile-form__name",
    ref: inputRef,
    value: title,
    placeHolder: stringSet.MODAL__CHANNEL_INFORMATION__INPUT__PLACE_HOLDER
  }))));
};

export { EditDetails as default };
//# sourceMappingURL=EditDetailsModal.js.map
