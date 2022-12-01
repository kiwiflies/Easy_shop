import React, { useEffect, useMemo, useState } from "react";
import classes from "./Styles.module.css";

export default function SwitchComponentsHOC({ list }) {
  const [mode, setMode] = useState(0);
  const [btnText, setBtnText] = useState("");
  const componentsLength = useMemo(() => list.length - 1, []);

  useEffect(() => {
    setBtnText(Object.keys(list[mode])[0]);
  }, [mode]);

  const handleChange = () => {
    setMode((mode) => (mode === componentsLength ? 0 : mode + 1));
  };

  return (
    <div style={{ position: "relative" }}>
      <button className={classes.button_grey} onClick={handleChange}>
        {btnText}
      </button>
      {list[mode][btnText]}
    </div>
  );
}
