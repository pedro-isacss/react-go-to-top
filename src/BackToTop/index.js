import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

function BackToTop({
  icon,
  backgroundColor,
  bottom,
  right,
  size,
  offsetToShow,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const onScroll = () => {
    const offset = offsetToShow ? offsetToShow : 100;
    if (window.pageYOffset > offset) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const onBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ height: "300vh" }}>
      {isVisible && (
        <button
          onClick={onBackToTop}
          className={styles.backtotop}
          style={{
            backgroundColor: backgroundColor ? backgroundColor : "#000",
            bottom: bottom ? bottom : 24,
            right: right ? right : 24,
            width: size ? size : 48,
            height: size ? size : 48,
          }}
        >
          {icon ? icon : <img src="top.svg" alt="Top" />}
        </button>
      )}
    </div>
  );
}

export default BackToTop;
