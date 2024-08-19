import PropTypes from "prop-types";

export default function Button(props) {
  const { buttonName, buttonStyle, buttonHref } = props;
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

Button.defaultProps = {
  buttonStyle: "default-button-style",
};
