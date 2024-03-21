import emojiData from "../assets/emojiList_mar8cs.json";

const Line = (props) => {
  const { title, symbol } = props;
  return (
    <div className="emojiLine">
      <p>{symbol}</p>
      <p>{title}</p>
    </div>
  );
};

export default Line;
