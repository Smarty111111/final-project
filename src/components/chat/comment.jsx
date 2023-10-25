import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hook/useLocalStorage";

const Comment = (props) => {
  const [user] = useLocalStorage("USER");

  const handleChange = (e) => {
    props.setInputValue(e.target.value);
    props.setNewMessage({
      id: new Date().getTime(),
      user: user,
      text: e.target.value,
    });
  };
  return (
    <div className={styles.wrapper}>
      {user && (
        <div>
          <label>Enter your comment: </label>
          <input
            title="Enter your message"
            value={props.inputValue}
            style={{ margin: 15, width: 300 }}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          <button
            disabled={props.inputValue.length > 0 ? false : true}
            title="Add message"
            onClick={props.changeChat}
          >
            Send
          </button>
          <button
            style={{ margin: 5 }}
            title="Delete chat"
            onClick={() => props.deleteChat()}
          >
            Delete
          </button>
        </div>
      )}

      {!user && (
        <div>
          Chat not allowed, go there <Link to="/">link</Link>
        </div>
      )}
    </div>
  );
};

export default Comment;
