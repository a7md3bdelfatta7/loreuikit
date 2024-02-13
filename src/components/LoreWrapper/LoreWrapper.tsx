import { setupIonicReact } from "@ionic/react";
import "@ionic/react/css/core.css";
setupIonicReact();

const LoreWrapper = ({ children }: { children: JSX.Element }) => {
  return <>{children}</>;
};

export default LoreWrapper;
