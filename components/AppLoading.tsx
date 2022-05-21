import { selectLoading } from "app/redux/setting/settingSlice";
import { useAppSelector } from "app/redux/store";
import React from "react";
import { ActivityIndicator } from "react-native";
import { TextTW, View, ViewTW } from "./Themed";

type Props = {};

export default function AppLoading({}: Props) {
  const isLoading = useAppSelector(selectLoading);

  if (!isLoading) return null;
  return (
    <ViewTW className="relative h-full w-full flex justify-center items-center">
      <ViewTW className="bg-transparent">
        <ActivityIndicator size="large" color="#0000ff" />
      </ViewTW>
    </ViewTW>
  );
}
