import { useState, useEffect } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import ChatBlock from "./chat.block";
import Comment from "./comment";
import axios from "axios";

const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [user] = useLocalStorage("USER");
  const [loading, setLoading] = useState(true);

  const [newMessage, setNewMessage] = useState({
    id: new Date().getTime(),
    user: user,
    text: "",
  });

  useEffect(() => {
    fetchMessages();
  }, []);

  // Fetch all messages
  const fetchMessages = async () => {
    // Send GET request to 'messages/all' endpoint
    axios
      .get("http://localhost:5000/messages/all")
      .then((response) => {
        // Update the messages state
        setChatData(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving messages list: ${error}`)
      );
  };

  // Create new message
  const addMessage = () => {
    // Send POST request to 'messages/create' endpoint
    axios
      .post("http://localhost:5000/messages/create", newMessage)
      .then((res) => {
        console.log(res.data);

        // Fetch all messages to refresh
        // the messages list
        fetchMessages();
      })
      .catch((error) =>
        console.error(
          `There was an error creating the ${inputValue} message: ${error}`
        )
      );
  };

  // Reset messages list (remove all messages)
  const deleteChat = () => {
    // Send PUT request to 'messages/reset' endpoint
    axios
      .put("http://localhost:5000/messages/reset")
      .then(() => {
        // Fetch all messages to refresh
        // the messages list
        fetchMessages();
      })
      .catch((error) =>
        console.error(`There was an error resetting messages list: ${error}`)
      );
  };

  const changeChat = () => {
    if (user) {
      setChatData([...chatData, newMessage]);
      setInputValue("");
      addMessage();
    } else {
      setInputValue("");
    }
  };
  return (
    <div>
      <ChatBlock chatData={chatData} loading={loading} />
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        changeChat={changeChat}
        setChatData={setChatData}
        setNewMessage={setNewMessage}
        deleteChat={deleteChat}
      />
    </div>
  );
};

export default Chat;
