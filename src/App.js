import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [videoCallStyle, setVideoCallStyle] = useState({});
  const [gameStyle, setGameStyle] = useState({});
  const [mainContentStyle, setMainContentStyle] = useState({});

  const onClick1 = () => {
    setVideoCallStyle((old) => {
      return { ...old };
    });
    setMainContentStyle((old) => {
      return {
        ...old,
        justifyContent: "flex-start",
      };
    });
    setGameStyle((old) => {
      return {
        ...old,
        display: "unset",
      };
    });
  };
  return (
    <div>
      <div className="mainContent" style={mainContentStyle}>
        <div className="videoCall" style={videoCallStyle}>
          {JSON.stringify(videoCallStyle)}
        </div>
        <div className="game" style={gameStyle}>
          {JSON.stringify(gameStyle)}
        </div>
      </div>
      <div className="instructions">Instructions</div>
      <div>
        <button onClick={onClick1}>1</button>
        {JSON.stringify(mainContentStyle)}
      </div>
    </div>
  );
}

export default App;
