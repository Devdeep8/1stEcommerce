import React from "react";

const sizeClasses = {
  txtRubikRomanRegular20: "font-normal font-rubik",
  txtRalewaySemiBold20: "font-raleway font-semibold",
  txtJosefinSansRomanBold24: "font-bold font-josefinsans",
  txtRalewayBold40: "font-bold font-raleway",
  txtRubikSemiBold18Bluegray900: "font-rubik font-semibold",
  txtRubikSemiBold18: "font-rubik font-semibold",
  txtRubikRegular14WhiteA700: "font-normal font-rubik",
  txtRubikRegular18WhiteA700: "font-normal font-rubik",
  txtRalewayBold24: "font-bold font-raleway",
  txtRalewaySemiBold40: "font-raleway font-semibold",
  txtRubikRegular24: "font-normal font-rubik",
  txtJosefinSansRomanBold24Bluegray900: "font-bold font-josefinsans",
  txtRubikRegular14Black900: "font-normal font-rubik",
  txtRubikRegular20: "font-normal font-rubik",
  txtRalewayBold36Black900: "font-bold font-raleway",
  txtRalewayRomanBold40: "font-bold font-raleway",
  txtRubikRegular14Gray50a3: "font-normal font-rubik",
  txtRalewayRomanBold20: "font-bold font-raleway",
  txtRalewayRomanRegular20Black900: "font-normal font-raleway",
  txtPoppinsSemiBold20DeeporangeA400: "font-poppins font-semibold",
  txtPollerOneRegular40: "font-normal font-pollerone",
  txtRubikRegular18Gray53: "font-normal font-rubik",
  txtRubikSemiBold18DeeporangeA400: "font-rubik font-semibold",
  txtRalewayRomanRegular20: "font-normal font-raleway",
  txtPoppinsBold20: "font-bold font-poppins",
  txtRalewayRomanSemiBold20: "font-raleway font-semibold",
  txtRubikBold36: "font-bold font-rubik",
  txtRubikRegular16: "font-normal font-rubik",
  txtRubikRegular16Gray50a3: "font-normal font-rubik",
  txtRalewayRomanBold40Gray53: "font-bold font-raleway",
  txtRubikRegular18: "font-normal font-rubik",
  txtRalewayBold36: "font-bold font-raleway",
  txtRubikRegular12: "font-normal font-rubik",
  txtRubikRegular14: "font-normal font-rubik",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtRubikRegular18Gray500: "font-normal font-rubik",
  txtRalewayRomanBold32: "font-bold font-raleway",
  txtRubikRomanRegular18: "font-normal font-rubik",
  txtRalewayRomanBold32Black900: "font-bold font-raleway",
  txtRalewayRomanBold32Gray53: "font-bold font-raleway",
  txtRubikRomanRegular16: "font-normal font-rubik",
  txtRubikRegular18Bluegray900: "font-normal font-rubik",
  txtRalewayRomanSemiBold18: "font-raleway font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
