import { View, Text, TouchableOpacity} from "react-native"
import { styles } from "../Slide1/style"
import { MenuStackTypes } from "../../navigation/MenuStackNavigation"

export function Slide1({ navigation }: MenuStackTypes) {
    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Aperta o botão do Lima</Text>
        <TouchableOpacity style={styles.botao}
            onPress = {() => navigation.push("Slide2")}
        >
        <Text>Botão do Lima</Text>
    </TouchableOpacity>
    </View>
    )
}