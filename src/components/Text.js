import React from "react";

const sizes = {
  extra_small: "font-['Open_Sans'] text-[0.75rem] font-normal not-italic",
  textxs: "text-[0.63rem] font-normal not-italic",
  textsm: "text-[0.75rem] font-normal not-italic",
  textmd: "text-[0.81rem] font-normal not-italic",
  textlg: "text-[0.88rem] font-normal not-italic",
  textxl: "text-[0.94rem] font-normal not-italic",
  text2xl: "text-[1.00rem] font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-[#ffffff] font-['Inter'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
