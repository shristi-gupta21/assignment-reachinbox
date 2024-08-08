import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[12px]",
};

const variants = {
  outline: {
    gray_600_01: "border-[#707071] border border-solid ",
    gray_300: "border-[#d3e3e8] border border-solid",
  },
  gradient: {
    red_A200_red_900:
      "bg-gradient-to-b from-[#fa5252] to-[#a81018] text-[#ffffff]",
    indigo_400_blue_900_fc:
      "bg-gradient-to-r from-[#4a62dd] to-[#0423bfc] text-[#ffffff]",
  },
  fill: {
    gray_200_01: "bg-[#ebebeb] text-[#5c7cfa]",
    white_A700: "bg-[#ffffff]",
    blue_gray_50_01: "bg-[#eef1f4]",
    gray_900_06: "bg-[#1e1e1e]",
    gray_900_04: "bg-[#171819] text-[#ffffff]",
    gray_900_02: "bg-[#25262b] text-[#ffffff]",
    gray_200: "bg-[#f0f0f0] text-[#637381]",
    gray_900_05: "bg-[#23272c] text-[#ffffff]",
    gray_900_01: "bg-[#212426] text-[#ffffff]",
  },
};

const sizes = {
  "2xl": "h-[3.00rem]  text-base",
  xl: "h-[2.50rem]  text-sm",
  lg: "h-[2.00rem]  text-[0.88rem]",
  md: "h-[1.50rem] text-[0.63rem]",
  sm: "h-[1.50rem]  text-[0.63rem]",
  xs: "h-[1.25rem] text-[0.63rem]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={clsx(
        className,
        "flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
        sizes[size],
        shapes[shape],
        variants[variant][color]
      )}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["2xl", "xl", "sm", "md", "xs", "lg"]),
  variant: PropTypes.oneOf(["outline", "gradient", "fill"]),
  color: PropTypes.oneOf([
    "gray_600_01",
    "gray_300",
    "red_A200_red_900",
    "indigo_400_blue_900_fc",
    "gray_200_01",
    "white_A700",
    "blue_gray_50_01",
    "gray_900_06",
    "gray_900_02",
    "gray_900_04",
    "gray_200",
    "gray_900_05",
    "gray_900_01",
  ]),
};

export { Button };
