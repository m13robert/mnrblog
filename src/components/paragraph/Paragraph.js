import PropTypes from "prop-types";

export default function Paragraph({ text }) {
  if (!text) return null;
  return <p>{text}</p>;
}

Paragraph.propTypes = {
  text: PropTypes.string,
};
