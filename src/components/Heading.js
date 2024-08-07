import React from "react";

const sizes = {
  text3xl: "text-[1.13rem] font-medium",
  headingxs: "text-[0.50rem] font-bold",
  headinglg: "text-[0.63rem] font-semibold",
  headingmd: "text-[0.75rem] font-semibold",
  headingxl: "text-[0.81rem] font-semibold",
  heading2xl: "text-[0.88rem] font-semibold",
  heading1xl: "text-[0.94rem] font-semibold",
  heading3xl: "text-[1.00rem] font-bold",
  heading4xl: "text-[1.25rem] font-semibold",
  heading5xl: "text-[1.50rem] font-bold md:text-[1.38rem]",
};

const Heading = ({
  children,
  className = "",
  size = "headingxl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-[#ffffff] font-['Inter'] ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
