
import { Pressable, Text, View } from "react-native";
import { globalStyles } from "../../theme/theme.tsx";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import  PrimaryButton from "../../components/PrimaryButton.tsx";
import { type RootStackParams } from "../../route/StackNavigator.tsx";
// @ts-ignore
const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={(globalStyles.container)}>

    <PrimaryButton label="Productos" onPress={()=>navigation.navigate('Products')}/>

      <PrimaryButton label="Configuracion" onPress={()=>navigation.navigate('Settings')}/>

    </View>
  )
}

export default HomeScreen;
