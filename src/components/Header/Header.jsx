import React, { useCallback, useState } from "react";
import s from "./Header.module.css";
import SelectUser from "../SelectUser/SelectUser";
import Logo from "../Logo/Logo";



const Header = () => {
  return (
    <div className={s.header}>
      <Logo image='/logo1.svg' />
      <SelectUser />
    </div>
  );
};

export default Header;
