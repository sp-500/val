import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please?",
  "Dont do this to me",
  "Im gonna cry...",
  "You're breaking my heart :(",
];
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const YesSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }
  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              alt="kissing bears"
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            />
            <div className="text">Yay!! Confirmation Email Sent </div>
          </>
        ) : (
          <>
            <img
              alt="Bear With Hearts"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <div>Will You be my Valentine?</div>
            <div>
              <button
                className="yesButton"
                style={{ fontSize: YesSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
