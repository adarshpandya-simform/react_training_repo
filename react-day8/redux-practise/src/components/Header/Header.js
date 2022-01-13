import { useCounter } from "../../store/counter.helper";

const Header = () => {
  const { count } = useCounter();
  return (
    <div>
      <p>the current value of count is : {count}</p>
    </div>
  );
};

export default Header;
