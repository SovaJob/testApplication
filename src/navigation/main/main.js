// @flow

import React from "react";

import MainPage from "src/containers/main_page/main_page";
// import SignUp from "src/containers/sign_up/sign_up";
// import ForgotPassword from "src/containers/forgot_password/forgot_password";
// import ResetPassword from "src/containers/reset_password/reset_password";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
  <>
    <Stack.Navigator name="MainStack" initialRouteName="OnBoarding">
      <Stack.Screen
        options={{
          title: "",
          headerShown: false,
          // headerLeft: () => null,
          // headerStyle: { backgroundColor: "red" },
        }}
        name="MainPage"
        component={MainPage}
      />
    </Stack.Navigator>
  </>
);
