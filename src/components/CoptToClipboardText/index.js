import PropTypes from "prop-types";

export const CoptToClipboardText = ({ text }) => {
  return <div>{text}</div>;
};

CoptToClipboardText.propTypes = {
  text: PropTypes.string.isRequired,
};
