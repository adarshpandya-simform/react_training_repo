import Picker from "emoji-picker-react";
import "./EmojiPicker.css";

const EmojiPicker = () => {
  const handleClick = (e, emojiObject) => {
    alert(emojiObject.emoji);
  };
  return (
    <div className="picker">
      <Picker onEmojiClick={handleClick} />
    </div>
  );
};

export default EmojiPicker;
