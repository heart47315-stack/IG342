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
<body>
  background-color: #555faa;
  background-image: linear-gradient(315deg, #555faa 0%, #f5f7fa 74%);
  background-repeat: no-repeat; 
  background-attachment: fixed;
  background-size: cover;
  scroll-behavior: smooth;
</body>

export default Button;