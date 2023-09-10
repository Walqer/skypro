import "../Button/Button.scss";

interface IButton {
  children: string;
  black?: true;
  onClick?: () => void;
}
const Button: React.FC<IButton> = ({ children, black, onClick }) => {
  const classes = black ? " black" : "";
  return (
    <button onClick={onClick} className={"button" + classes}>
      {children}
    </button>
  );
};
export default Button;
