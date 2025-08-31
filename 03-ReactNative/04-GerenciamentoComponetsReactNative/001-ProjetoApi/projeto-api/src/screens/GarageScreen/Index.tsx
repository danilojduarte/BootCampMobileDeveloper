import { View, Text } from "react-native";
import { styles } from "./Style";
import CardView from "../../components/CardView";


export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleConner}></View>
        <View style={[styles.triangleConner, styles.topRight]}></View>
        <View style={[styles.triangleConner, styles.bottomLeft]}></View>
        <View style={[styles.triangleConner, styles.bottomRight]}></View>
      </View>
      <CardView />
      <Text>Works</Text>
    </View>
  );
}