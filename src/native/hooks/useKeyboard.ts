import {
  Keyboard,
  LayoutAnimation,
  Platform,
  EmitterSubscription,
  KeyboardEvent,
  LayoutAnimationConfig,
  Dimensions,
} from "react-native";
import { useState, useMount, useUnmount } from "../../shared";

interface UseKeyboardProps {
  topSpacing?: number;
}

export type TKeyboard = {
  keyboardSpace: number;
  isKeyboardOpen: boolean;
};

export type TUseKeyboard = TKeyboard;

let listeners: EmitterSubscription[] | null = null;

const defaultAnimation: LayoutAnimationConfig = {
  duration: 500,
  create: {
    duration: 300,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 200,
  },
};

const useKeyboard = (props?: UseKeyboardProps): TUseKeyboard => {
  const [keyboard, setKeyboard] = useState<TKeyboard>({
    keyboardSpace: 0,
    isKeyboardOpen: false,
  });

  const updateKeyboardSpace = (event: KeyboardEvent) => {
    if (!event.endCoordinates) {
      return;
    }

    let animationConfig = defaultAnimation;
    if (Platform.OS === "ios") {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity
      );
    }
    LayoutAnimation.configureNext(animationConfig);

    const screenHeight = Dimensions.get("window").height;
    const keyboardSpace =
      screenHeight - event.endCoordinates.screenY + (props?.topSpacing || 0);

    setKeyboard({
      keyboardSpace,
      isKeyboardOpen: true,
    });
  };

  const resetKeyboardSpace = (event: KeyboardEvent) => {
    let animationConfig = defaultAnimation;
    if (Platform.OS === "ios") {
      animationConfig = LayoutAnimation.create(
        event.duration,
        LayoutAnimation.Types[event.easing],
        LayoutAnimation.Properties.opacity
      );
    }

    LayoutAnimation.configureNext(animationConfig);

    setKeyboard({
      keyboardSpace: 0,
      isKeyboardOpen: false,
    });
  };

  useMount(() => {
    const updateListener =
      Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const resetListener =
      Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";
    listeners = [
      Keyboard.addListener(updateListener, updateKeyboardSpace),
      Keyboard.addListener(resetListener, resetKeyboardSpace),
    ];
  });

  useUnmount(() => {
    if (listeners) {
      listeners.forEach((listener) => listener.remove());
    }
  });

  return keyboard;
};

export default useKeyboard;
