import { Text } from "react-native";
import { style_h1 } from "./style1";

function H1(props) {
  return <Text style={style_h1.h1}>title:{props.text}</Text>;
}
export default H1;
