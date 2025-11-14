/**
 * Right Button Component
 * Re-exports NavigationButton configured for right direction
 */

import React, { MutableRefObject } from 'react';
import { Card, CardId, CardAnimationMap } from './photoCollageTypes';
import { NavigationButton } from './NavigationButton';

interface RightButtonProps {
  hasCompletedEntrance: boolean;
  rightButtonAnimationComplete: boolean;
  onAnimationComplete: () => void;
  cards: Card[];
  buttonsDisabled: boolean;
  setCards: (cards: Card[]) => void;
  setAnimationStates: (states: CardAnimationMap) => void;
  setButtonsDisabled: (disabled: boolean) => void;
  isAnimatingRef: MutableRefObject<boolean>;
  swapPhotoOnCardID: (cardId: CardId, cards: Card[]) => Card[];
}

export const RightButton: React.FC<RightButtonProps> = (props) => (
  <NavigationButton
    direction="right"
    hasCompletedEntrance={props.hasCompletedEntrance}
    animationComplete={props.rightButtonAnimationComplete}
    onAnimationComplete={props.onAnimationComplete}
    cards={props.cards}
    buttonsDisabled={props.buttonsDisabled}
    setCards={props.setCards}
    setAnimationStates={props.setAnimationStates}
    setButtonsDisabled={props.setButtonsDisabled}
    isAnimatingRef={props.isAnimatingRef}
    swapPhotoOnCardID={props.swapPhotoOnCardID}
  />
);

