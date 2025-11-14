/**
 * Left Button Component
 * Re-exports NavigationButton configured for left direction
 */

import React, { MutableRefObject } from 'react';
import { Card, CardAnimationMap } from './photoCollageTypes';
import { NavigationButton } from './NavigationButton';

interface LeftButtonProps {
  hasCompletedEntrance: boolean;
  leftButtonAnimationComplete: boolean;
  onAnimationComplete: () => void;
  cards: Card[];
  buttonsDisabled: boolean;
  setCards: (cards: Card[]) => void;
  setAnimationStates: (states: CardAnimationMap) => void;
  setButtonsDisabled: (disabled: boolean) => void;
  isAnimatingRef: MutableRefObject<boolean>;
  swapPhotoBackShuffle: (cards: Card[]) => Card[];
}

export const LeftButton: React.FC<LeftButtonProps> = (props) => (
  <NavigationButton
    direction="left"
    hasCompletedEntrance={props.hasCompletedEntrance}
    animationComplete={props.leftButtonAnimationComplete}
    onAnimationComplete={props.onAnimationComplete}
    cards={props.cards}
    buttonsDisabled={props.buttonsDisabled}
    setCards={props.setCards}
    setAnimationStates={props.setAnimationStates}
    setButtonsDisabled={props.setButtonsDisabled}
    isAnimatingRef={props.isAnimatingRef}
    swapPhotoBackShuffle={props.swapPhotoBackShuffle}
  />
);

