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
        <input className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10" />
      </div>
    </div>
  );
};

export default InputComponent;
