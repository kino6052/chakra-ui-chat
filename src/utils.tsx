import { useEffect } from "react";
import { TAppState } from "./types";

export const useSideEffectLogic = (
  setState: (cb: (prevState: TAppState) => TAppState) => void
) => {
  useEffect(() => {
    // Add side effect logic here that isn't tied to a particular element
  }, [setState]);
};
