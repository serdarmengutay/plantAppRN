import React, {useState} from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = ({ navigation, route }) => {
    const [amount, setAmount] = useState(0)
  const item = route.params;

  const handleDecrease = () => {
    if(amount > 0){
        setAmount(amount - 1)
    }
  }
  const handleIncrease = () => {
    if(amount >= 0){
        setAmount(amount + 1)
    }
  }
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
        <Image style={{ flex: 1, resizeMode: "contain" }} source={item.img} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          <View style={styles.line} />
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.dark }}
          >
            Best choice
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{fontSize: 16, color:COLORS.dark, fontWeight: 'bold'}}>{item.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
                {amount <= 0 ? <Text>$0</Text> :  '$' + Math.round(item.price * amount)}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {item.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.borderBtn}>
                <Icon name="remove" size={28} color={COLORS.dark} onPress={() => handleDecrease()} style={styles.borderBtnText} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  color: COLORS.dark
                }}
              >
                {amount <= 0 ? 0 : amount}
              </Text>
              <View style={styles.borderBtn}>
                <Icon name="add" size={28} color={COLORS.dark} onPress={() => handleIncrease()} style={styles.borderBtnText} />
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text style={{ fontSize: 15, color: COLORS.white }}>Buy</Text>
            </View>
          </View>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    width: 60,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  borderBtnText: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
export default DetailsScreen;
