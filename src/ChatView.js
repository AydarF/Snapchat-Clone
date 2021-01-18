import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ChatView.css";
import { selectSelectedImage } from "./features/appSlice";
import { useSelector } from "react-redux";

function ChatView() {
  const selectedImage = useSelector(selectSelectedImage);
  const history = useHistory();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    history.replace("/chats");
  };

  return (
    <div className="chatView">
      <img src={selectedImage} alt="" onClick={exit} />
    </div>
  );
}

export default ChatView;
