import { IonButton } from "@ionic/react";
import LoreWrapper from "../LoreWrapper/LoreWrapper";
import "./button.scss";
import Colors from "../../shared/enums/Colors.enum";

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "large" | "default";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * determine if the button is disabled or not
   */
  disabled?: boolean;

  expand?: "block" | "full"
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  size = "default",
  color = Colors.Primary,
  label,
  disabled = false,
  expand,
  ...props
}: ButtonProps) => {
  return (
    <LoreWrapper>
      <IonButton expand={expand} disabled={disabled} size={size} onClick={props.onClick} color={color}>
        {label}
      </IonButton>
    </LoreWrapper>
  );
};

export default Button;
