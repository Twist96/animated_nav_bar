import React, { ReactElement } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";
import Animated, {
  Easing,
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { router } from "expo-router";

interface Props {
  title: string;
  hideBackBtn?: Boolean;
  trailing?: ReactElement;
  scrollOffset: SharedValue<number>;
  onSearch: (text: string) => void
}

const NavBar = ({ title, hideBackBtn, trailing, scrollOffset, onSearch }: Props) => {
  const MIN_HEIGHT = 98;
  const MAX_HEIGHT = 202;
  const MAX_SEARCH_BAR_HEIGHT = 36;

  const hideSearchBar = useAnimatedStyle(() => {
    const height = MAX_SEARCH_BAR_HEIGHT - scrollOffset.value;
    if (height >= MAX_SEARCH_BAR_HEIGHT) {
      return { height: MAX_SEARCH_BAR_HEIGHT };
    } else if (height < 0) {
      return { height: 0 };
    } else {
      return { height };
    }
  });

  const hideSearchBarContent = useAnimatedStyle(() => {
    const height = MAX_SEARCH_BAR_HEIGHT - scrollOffset.value;
    const opacity =
      height <= MAX_SEARCH_BAR_HEIGHT / 1.5
        ? withTiming(0, { duration: 50, easing: Easing.in(Easing.ease) })
        : withTiming(1, { duration: 50, easing: Easing.in(Easing.ease) });
    return { opacity };
  });

  const titleOffset = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [48, 80],
      [0, -48],
      Extrapolation.CLAMP
    );
    return { transform: [{ translateY }] };
  });

  const navHeight = useAnimatedStyle(() => {
    const height = MAX_HEIGHT - scrollOffset.value;
    return { height: height < MIN_HEIGHT ? MIN_HEIGHT : height };
  });

  const hide = useAnimatedStyle(() => {
    const height = MAX_HEIGHT - 18 - scrollOffset.value;
    const opacity =
      height > MIN_HEIGHT
        ? withTiming(0, { duration: 400, easing: Easing.out(Easing.ease) })
        : withTiming(1, { duration: 350, easing: Easing.in(Easing.ease) });
    return { opacity };
  });

  const show = useAnimatedStyle(() => {
    const height = MAX_HEIGHT - 20 - scrollOffset.value;
    const opacity = height < MIN_HEIGHT ? 0 : 1;
    return { opacity };
  });

  const headerBackground = useAnimatedStyle(() => {
    const height = MAX_HEIGHT - 18 - scrollOffset.value;
    const backgroundColor = height > MIN_HEIGHT ? "#FFFFFF" : "transparent";
    return { backgroundColor };
  });

  const backButton = (
    <Pressable
      onPress={() => {
        router.back();
      }}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );

  return (
    <Animated.View style={[styles.container, navHeight]}>
      <BlurView intensity={50} style={styles.absolute} />
      <Animated.View style={[styles.header, headerBackground]}>
        <View style={styles.controls}>
          {!hideBackBtn ? backButton : <View />}
          <Animated.Text style={[styles.miniTitle, hide]}>
            {title}
          </Animated.Text>
          {trailing !== undefined ? trailing : <View />}
        </View>
      </Animated.View>
      <View style={{ zIndex: 0 }}>
        <Animated.Text style={[styles.title, titleOffset, show]}>
          {title}
        </Animated.Text>
        <Animated.View style={[styles.searchBar, hideSearchBar]}>
          <Animated.View
            style={[
              { flexDirection: "row", alignItems: "center" },
              hideSearchBarContent,
            ]}
          >
            <AntDesign name="search1" size={14} color="black" />
            <TextInput placeholder="Search" style={styles.textInput} onChangeText={onSearch} />
            <FontAwesome name="microphone" size={14} color="black" />
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    zIndex: 2,
    paddingBottom: 15,
    justifyContent: "space-between",
    height: 202,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    height: 98,
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    zIndex: 1,
  },
  controls: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingStart: 8,
    paddingEnd: 11,
  },
  title: {
    paddingTop: 8,
    marginHorizontal: 16,
    height: 58,
    fontSize: 34,
    fontWeight: "700",
    justifyContent: "center",
    zIndex: 0,
  },
  miniTitle: {
    fontSize: 17,
    fontWeight: 600,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: "#7676801F",
    minHeight: 0,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    height: 22,
    fontSize: 12,
    paddingHorizontal: 4,
    color: 'black'
  },
});
