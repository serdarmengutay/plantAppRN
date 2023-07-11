import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={30}
          color={COLORS.dark}
          onPress={() => navigation.goBack()}
        />
        <Icon name="shopping-cart" size={30} color={COLORS.dark} />
      </View>
      <View style={styles.imageContainer}>
        <Image 
        style={{flex: 1, resizeMode: 'contain'}}
        source={item.img}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default DetailsScreen;
