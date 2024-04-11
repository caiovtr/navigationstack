import { View, Text, TouchableOpacity} from "react-native"
import { styles } from "../Slide1/style"
import { MenuStackTypes } from "../../navigation/MenuStackNavigation"

export function Slide2({ navigation }: MenuStackTypes) {
    return (
    <View style={styles.container}>
        <Text style={styles.texto}>Você apertou o botao do Lima</Text>
        <TouchableOpacity style={styles.botao}
            onPress = {() => navigation.push("Slide1")}
        >
        <Text>Apertar de novo</Text>
    </TouchableOpacity>
    </View>
    )
}