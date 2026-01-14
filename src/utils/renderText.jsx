const renderText = (array) => {
  return array.map((item, i) =>
    typeof item === "string"
      ? item
      : <strong key={i}>{item.strong}</strong>
  );
};

export default renderText;