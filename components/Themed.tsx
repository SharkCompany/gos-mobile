/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import {
  Text as DefaultText,
  View as DefaultView,
  SafeAreaView as DefaultSafeAreaView,
} from "react-native";

import tw from "twrnc";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

type TailwindProps = {
  className?: string;
};

export type TextProps = ThemeProps & DefaultText["props"] & TailwindProps;
export type ViewProps = ThemeProps & DefaultView["props"] & TailwindProps;
export type SafeAreaViewProps = ThemeProps &
  DefaultSafeAreaView["props"] &
  TailwindProps;

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: lightColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function TextTW(props: TextProps) {
  const { className, style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: lightColor }, "text");

  return (
    <DefaultText style={[{ color }, tw.style(className)]} {...otherProps} />
  );
}

export function View(props: ViewProps) {
  const { style, lightColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: lightColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ViewTW(props: ViewProps) {
  const { className, style, lightColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: lightColor },
    "background"
  );

  return (
    <DefaultView
      style={[{ backgroundColor }, tw.style(className)]}
      {...otherProps}
    />
  );
}
export function SafeAreaViewTW(props: ViewProps) {
  const { className, style, lightColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: lightColor },
    "background"
  );

  return (
    <DefaultSafeAreaView
      style={[{ backgroundColor }, tw.style(className)]}
      {...otherProps}
    />
  );
}
