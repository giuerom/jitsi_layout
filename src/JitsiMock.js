import React from "react";
import ReactDOM from "react-dom";

const api = {
  listenersMap: {},
  addEventListener(eventName, listener) {
    this.listenersMap[eventName] = listener;
  },
  getNumberOfParticipants() {},
  getParticipantsInfo() {},
  executeCommand(commandName, payload) {},
};

function JitsiMock({ api }) {
  const emptyHandler = (event) => {
    return () => {
      if (!(event in api.listenersMap)) {
        throw Error(event + " is not defined as listener.");
      }

      api.listenersMap[event]({});
    };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Jitsi Mock</div>
      <button onClick={emptyHandler("participantJoined")}>
        participantJoined
      </button>
      <button onClick={emptyHandler("participantLeft")}>participantLeft</button>
      <button onClick={emptyHandler("videoConferenceLeft")}>
        videoConferenceLeft
      </button>
      <button onClick={emptyHandler("videoConferenceJoined")}>
        videoConferenceJoined
      </button>
    </div>
  );
}

export function mockJitsiIFrame(id) {
  ReactDOM.render(<JitsiMock api={api} />, document.getElementById(id));
  return api;
}
