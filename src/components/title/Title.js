import PropTypes from "prop-types";

export default function Title({ text }) {
  if (!text) return null;
  return <h1>{text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string,
};
