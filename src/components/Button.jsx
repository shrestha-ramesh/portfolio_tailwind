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
