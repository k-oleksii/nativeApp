import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getIcon } from 'app/helpers/getIcon.tsx';
import { EnumColors, EnumIcons } from 'app/types';
export const Card = () => {
  return (
    <View>
      <View>
        <Image />
        <Text>Like</Text>
      </View>
      <View>
        <Text>Title</Text>
        <Text>SubTitle</Text>
        <View>
          <Text>price</Text>
          <Text>old price</Text>
        </View>
        <Pressable>
          <Text style={styles.buttonText}>Icon</Text>
          {getIcon(EnumIcons.bag, EnumColors.black)}
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: EnumColors.black,
  },
});
