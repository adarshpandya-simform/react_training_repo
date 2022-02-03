const Off = ({ toggle, children }) => {
  return !toggle ? <p>{children}</p> : null;
};

export default Off;
