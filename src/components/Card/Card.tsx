import React from "react";
import "./card.scss";
import LoreWrapper from "../ComponentWrapper/LoreWrapper";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import Colors from "../../shared/enums/Colors.enum";

interface CardProps {
  /**
   * Media URL to be viewed (Media Cards)
   */
  mediaURL?: string;
  /**
   * Card Color
   */
  color?: Colors;
  title: string;
  subTitle: string;
  content: string;
}

/**
 * Primary UI component for user interaction
 */
const Card = ({
  color = Colors.Light,
  mediaURL,
  title,
  subTitle,
  content,
}: CardProps) => {
  return (
    <LoreWrapper>
      <IonCard color={color} style={{ maxWidth: "500px" }}>
        <IonCardHeader>
          {mediaURL && <img alt="Silhouette of mountains" src={mediaURL} />}
          <IonCardTitle>{title}</IonCardTitle>
          <IonCardSubtitle>{subTitle}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>{content}</IonCardContent>
      </IonCard>
    </LoreWrapper>
  );
};

export default Card;
