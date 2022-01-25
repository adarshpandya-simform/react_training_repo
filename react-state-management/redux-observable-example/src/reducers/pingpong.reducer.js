let initialState = { isPinging: false };

// reducer for pingpong
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PING":
      return { isPinging: true };
    case "PONG":
      return { isPinging: false };
    default:
      return state;
  }
};
