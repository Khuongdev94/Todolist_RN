import { Text } from "react-native";
import { styles } from "./style";

function TextItalic(props) {
  return <Text style={styles.italic}>title:{props.text}</Text>;
}
export default TextItalic;
