import React from "react";

const InputComponent: React.FC<{ lable: string; span: string }> = ({
  lable,
  span,
}) => {
  return (
    <div>
      <div className="block mb-[15px]">
        <label htmlFor="CheckIn" className="mb-[5px] text-[#333]">
          {lable}
          <span aria-required="true">{span}</span>
        </label>
        <input className="py-[6px] px-3 w-full h-[50px] text-darkBlue border border-solid border-dtext-darkBlue" />
      </div>
    </div>
  );
};

export default InputComponent;
