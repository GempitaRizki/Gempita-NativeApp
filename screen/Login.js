import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

const Login = () => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/nasigoreng.jpg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "800",
              fontSize: SPACING * 4.5,
              textTransform: "capitalize",
            }}
          >
            Gempita
          </Text>
          <Text
            style={{
              color: colors.white,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            Test Native
          </Text>
          <TouchableOpacity
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Button
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});