import { Text, View } from "react-native";
import { styles } from "..TextItalic/style";
import { style_h1 } from "..TextH1/style1";

function Profile(props) {
  return (
    <View>
      <Text style={style_h1.h1}>Name: {props.name}</Text>
      <Text>Age: {props.age}</Text>
      <Text style={styles.italic}>City: {props.city}</Text>
    </View>
  );
}
export default Profile;
