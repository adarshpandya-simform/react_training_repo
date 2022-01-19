import styled from "@emotion/styled";

const EmotionApproach = ({ isActive, setActive }) => {
  const StyledButton = styled.button`
    color: white;
    background: green;
    border: none;
    border-radius: 4px;
    font-size: 15px;
    text-transform: uppercase;
    padding: 10px 30px;

    ${(props) =>
      props.active &&
      `
        background: red;
        color: black !important;
      `}
  `;
  return (
    <div>
      <StyledButton
        active={isActive}
        onClick={() => {
          setActive((prevState) => !prevState);
        }}
      >
        {isActive ? "deactivate" : "activate"}
      </StyledButton>
    </div>
  );
};

export default EmotionApproach;
