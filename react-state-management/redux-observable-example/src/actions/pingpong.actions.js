// actions for dispatcher
export const PING = "PING";
export const PONG = "PONG";

// action helpers
export const pingAction = () => ({ type: PING });

export const pongAction = () => ({ type: PONG });
