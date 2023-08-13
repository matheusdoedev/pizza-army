import { useEffect, useState } from "react";

/**
 * It is a hook to get the width and height of window when it is resizing.
 *
 * @returns It returns a object with window sizes
 */
export const useOnResizeWindow = () => {
  const [windowSizes, setWindowSizes] = useState({
    innerWidth: document.documentElement.clientWidth,
    innerHeight: document.documentElement.clientHeight,
  });

  const handleOnResize = () => {
    const { innerWidth, innerHeight } = window;

    setWindowSizes({ innerWidth, innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handleOnResize);

    return () => {
      window.removeEventListener("resize", handleOnResize);
    };
  }, []);

  return { ...windowSizes };
};
