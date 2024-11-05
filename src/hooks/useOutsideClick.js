import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref?.current && !ref?.current.contains(event.target)) {
        handler();
      }
    };
    window.addEventListener("mousedown", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousedown", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
