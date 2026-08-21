function Button({ text }) {
  const handleClick = () => {
    alert(`Hello ${text}`);
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;