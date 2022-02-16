const On = ({ toggle, children }) => {
  return toggle ? <p>{children}</p> : null;
};

export default On;
