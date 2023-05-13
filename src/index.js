import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

function BackToTop({
  icon,
  backgroundColor,
  bottom,
  right,
  size,
  offsetToShow,
  zIndex,
  borderRadius,
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
    <div>
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
            zIndex: zIndex ? zIndex : 100,
            borderRadius: borderRadius ? borderRadius : 24,
          }}
        >
          {icon ? (
            icon
          ) : (
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

export default BackToTop;
