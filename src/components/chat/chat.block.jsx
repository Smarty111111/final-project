import styles from "./style.module.css";
import { useLocalStorage } from "../../hook/useLocalStorage";

const ChatBlock = (props) => {
  const [user] = useLocalStorage("USER");
  if (props.loading) return <p>MessagesList is loading...</p>;

  return (
    <div className={styles.chat}>
      {user && (
        <div>
          <div style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
            Chat
          </div>
          {props.chatData.map((el, i) => {
            return (
              <div key={i} className={styles.messages}>
                {el.user}: {el.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ChatBlock;
