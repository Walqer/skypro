import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 833,
  });
  const isTablet = useMediaQuery({
    maxWidth: 1440,
    minWidth: 834,
  });

  const isDesktop = useMediaQuery({
    minWidth: 1440,
  });

  const changeReadyState = () => {
    setIsLoaded((prevState) =>
      prevState ? prevState : document.readyState === "complete"
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      setIsLoaded(document.readyState === "complete");
      if (!isLoaded) {
        document.addEventListener("readystatechange", changeReadyState);
      }
    }
    return () => {
      document.removeEventListener("readystatechange", changeReadyState);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
    isClient,
    isLoaded,
  };
};

export default useResponsive;
