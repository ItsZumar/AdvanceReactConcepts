interface BtnI {
  btnColor: string;
  onBtnClick: () => void;
}

function Button({ btnColor, onBtnClick }: BtnI) {
  return (
    <button
      className={`w-[40px] h-[40px] rounded-full`}
      style={{ backgroundColor: btnColor }}
      onClick={onBtnClick}
    ></button>
  );
}

export default Button;
