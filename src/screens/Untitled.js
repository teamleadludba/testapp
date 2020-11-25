import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/images/image_btV6..png")}
          resizeMode="cover"
          style={styles.image}
        ></Image>
        <Image
          source={require("../assets/images/223736_2754.png")}
          resizeMode="cover"
          style={styles.image2}
        ></Image>
      </View>
      <Image
        source={require("../assets/images/image_czdv..png")}
        resizeMode="cover"
        style={styles.image3}
      ></Image>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
      <Image
        source={require("../assets/images/image_PwMW..png")}
        resizeMode="cover"
        style={styles.image4}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  image: {
    height: 225,
    width: 145,
    borderRadius: 13
  },
  image2: {
    height: 225,
    width: 145,
    borderRadius: 13,
    marginLeft: 28
  },
  imageRow: {
    height: 225,
    flexDirection: "row",
    marginTop: 257,
    marginLeft: 21,
    marginRight: 21
  },
  image3: {
    height: 131,
    width: 317,
    borderRadius: 13,
    marginTop: 24,
    marginLeft: 21
  },
  materialIconTextButtonsFooter: {
    backgroundColor: "rgba(230, 230, 230,0)",
    height: 51,
    marginTop: 37
  },
  image4: {
    height: 163,
    width: 317,
    borderRadius: 13,
    marginTop: -656,
    marginLeft: 21
  }
});

export default Untitled;
