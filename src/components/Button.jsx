import PropTypes from "prop-types";

export default function Button({ buttonName, buttonStyle, buttonHref }) {
  return (
    <>
      <button className={buttonStyle}>
        <a href={buttonHref} target="_blank">
          {buttonName}
        </a>
      </button>
    </>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  buttonHref: PropTypes.string.isRequired,
};
