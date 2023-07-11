import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import COLORS from "../../constants/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import plants from "../../constants/plants";

const width = Dimensions.get("window").width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryItemIndex, setSelectedCategoryItemIndex] = useState(0);
  const categories = ["POPULAR", "ORGANIC", "INDOORS", "SYNTHETIC"];

  const ListCategories = () => {
    return (
      <View style={styles.listCategoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.categoryList,
              selectedCategoryItemIndex == index && styles.activeCategoryList,
            ]}
            onPress={() => setSelectedCategoryItemIndex(index)}
            activeOpacity={0.8}
            key={index}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategoryItemIndex == index && styles.activeCategoryText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plant }) => {
    return (
      <TouchableOpacity
        style={{ }}
        onPress={() => navigation.navigate("DetailsScreen", plant)}
        activeOpacity={1}
      >
        <View style={styles.card}>
          <View style={{ alignItems: "flex-end" }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: plant.like
                  ? "rgba(245, 42, 42,0.2)"
                  : "rgba(0,0,0,0.2) ",
              }}
            >
              <Icon
                name="favorite"
                size={18}
                color={plant?.like ? COLORS.red : COLORS.dark}
              />
            </View>
          </View>
          <View style={{ height: 100, alignItems: "center" }}>
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={plant.img}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 15 }}
            >
              {plant.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <Text
                style={{ color: COLORS.dark, fontWeight: "bold", fontSize: 16 }}
              >
                ${plant.price}
              </Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: COLORS.green,
                  alignItems: "center",
                  borderRadius: 5,
                  justifyContent: "center",
                }}
              >
                <Icon name="add" size={16} color={COLORS.white} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextCon}>
          <Text style={styles.headerTitle}>Welcome to</Text>
          <Text
            style={{ fontSize: 30, color: COLORS.green, fontWeight: "bold" }}
          >
            Plant Shop
          </Text>
        </View>
        <Icon name="shopping-cart" size={30} color={COLORS.dark}  />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
        }}
      >
        <View style={styles.searchInputContainer}>
          <Icon name="search" size={25} color={COLORS.dark} style={{marginLeft: 20}}/>
          <TextInput
            placeholder="Search"
            style={{
              color: COLORS.light,
              fontSize: 16,
              fontWeight: "bold",
            }}
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="sort" size={25} color={COLORS.white} />
        </View>
      </View>
      <ListCategories />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50, alignSelf: 'center'  }}
        data={plants}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Card plant={item} />}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTextCon: {
    paddingTop: 30,
    justifyContent: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    color: COLORS.dark,
    fontSize: 22,
  },
  searchInputContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  listCategoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 20,
  },
  activeCategoryList: {
    borderBottomColor: COLORS.green,
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
  categoryList: {},
  activeCategoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.green,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    height: 225,
    width,
    backgroundColor: COLORS.light,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
  },
});
export default HomeScreen;
