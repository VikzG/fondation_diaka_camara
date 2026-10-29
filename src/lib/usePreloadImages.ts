import { useEffect } from "react";

// Précharge les images d'un carrousel pour que les slides suivantes s'affichent sans délai
export const usePreloadImages = (urls: string[]): void => {
  const key = urls.join("|");

  useEffect(() => {
    urls.forEach((url) => {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
};
