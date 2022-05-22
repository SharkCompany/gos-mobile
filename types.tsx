/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FixMeLater } from "interfaces/migration";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  SocialLogin: undefined;
  EnterInfor: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Personal: undefined;
  Messages: undefined;
  Homepage: undefined;
  Rides: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type HomeScreenParamList = {
  Home: undefined;
  MapScreen: {
    type: "dinho" | "yensau";
  };
  MainSearchScreen: undefined;
  RideDetail: undefined;
  ConversationScreen: undefined;
};

export type HomeScreenProps<Screen extends keyof HomeScreenParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeScreenParamList, Screen>,
    BottomTabScreenProps<RootTabParamList>
  >;

export type MapSearchScreenParamList = {
  PlaceResult: undefined;
  MainSearchScreen: undefined;
  RideResult: undefined;
  RideDetail: undefined;
};

export type MapSearchScreenProps<
  Screen extends keyof MapSearchScreenParamList
> = NativeStackScreenProps<MapSearchScreenParamList, Screen>;

export type RideHistoryScreenParamsList = {
  RideHistory: undefined;
  CreateRide: FixMeLater;
  SearchPlaces: undefined;
  CreateRideSearchPlaces: FixMeLater;
};

export type RideHistoryScreenProps<
  Screen extends keyof RideHistoryScreenParamsList
> = CompositeScreenProps<
  BottomTabScreenProps<RideHistoryScreenParamsList, Screen>,
  BottomTabScreenProps<MapSearchScreenParamList>
>;

export type MessageScreenParamsList = {
  AllMessage: undefined;
  DetailMessage: FixMeLater;
};

export type MessageScreenProps<Screen extends keyof MessageScreenParamsList> =
  CompositeScreenProps<
    BottomTabScreenProps<MessageScreenParamsList, Screen>,
    BottomTabScreenProps<MapSearchScreenParamList>
  >;

// export type HomeScreenProps<Screen extends keyof HomeScreenParamList> =
// 	NativeStackScreenProps<HomeScreenParamList, Screen>;
