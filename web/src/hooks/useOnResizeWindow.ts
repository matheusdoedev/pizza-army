import { useEffect, useState } from "react";

/**
 * It is a hook to get the width and height of window when it is resizing.
 *
 * @returns It returns a object with window sizes
 */
export const useOnResizeWindow = () => {
  const [windowSizes, setWindowSizes] = useState({
    innerWidth: 0,
    innerHeight: 0,
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
