import { useState } from "react";
import { Chat } from "./Chat";
import { getDefaultState } from "./data";
import { mapStateToProps } from "./logic";
import { TAppState } from "./types";
import { useSideEffectLogic } from "./utils";

export const App: React.FC = () => {
  const [state, setState] = useState<TAppState>(getDefaultState());

  useSideEffectLogic(setState);

  return <Chat {...mapStateToProps(state, setState)} />;
};
