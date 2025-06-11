import { Text, TouchableOpacity,  View, Image, SafeAreaView, ScrollView, TextInput} from "react-native";
import Styles from "./style"
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Button from "../../components/Button";

function CadastroAutista() {
const [abrirEspectro, setAbrirEspectro] = useState(false);
const [abrirAlergia, setAbrirAlergia] = useState(false);
const [abrirIntolerancia, setAbrirIntolerancia] = useState(false);

const [valorEspectro, setValorEspectro] = useState(null);
const [valorAlergia, setValorAlergia] = useState(null);
const [valorIntolerancia, setValorIntolerancia] = useState(null);

const [itensEspectro, setItensEspectro] = useState([
  {label: "Nível 1", value: "nivel1"},
  {label: "Nível 2", value: "nivel2"},
  {label: "Nível 3", value: "nivel3"},
]);

const [itensAlergia, setItensAlergia] = useState([
  {label: "Sim", value: "sim"},
  {label: "Não", value: "nao"},
]);

const [itensIntolerancia, setItensIntolerancia] = useState([
  {label: "Sim", value: "sim"},
  {label: "Não", value: "nao"},
]);

  return (
    <SafeAreaView style={{flex: 1}}>
    
        <View>

          <View>
            <Image
              source={require("../../assets/autista.png")}
              style={{ width: 412, height: 310, resizeMode: "cover" }}
            />
          </View>

          <View> 
            <TextInput style={Styles.nomeAutista}>Nome do autista  </TextInput>
            
          </View>

          <View style={Styles.inputContainer}>
            <Text style={Styles.textInput}>Idade:</Text>
            <TextInput style={{width: 253,}}>21 anos</TextInput>
          </View>

          <View style={Styles.espectroContainer}>
            <DropDownPicker
            open={abrirEspectro}
            value={valorEspectro}
            items={itensEspectro}
            setOpen={setAbrirEspectro}
            setValue={setValorEspectro}
            setItems={setItensEspectro}
            placeholder="Espectro"
            scrollViewProps={{nestedScrollEnabled: true}}
            zIndex={3000}
            
            />  
          </View> 

          <View style={Styles.alergiaContainer}>
            <DropDownPicker
            open={abrirAlergia}
            value={valorAlergia}
            items={itensAlergia}
            setOpen={setAbrirAlergia}
            setValue={setValorAlergia}
            setItems={setItensAlergia}
            placeholder="Alergia Alimentar"
            listMode="SCROLLVIEW"
            scrollViewProps={{nestedScrollEnabled: true}}
            zIndex={2000}
            />  
          </View>  

          <View style={Styles.intoleranciaContainer}>
            <DropDownPicker
            open={abrirIntolerancia}
            value={valorIntolerancia}
            items={itensIntolerancia}
            setOpen={setAbrirIntolerancia}
            setValue={setValorIntolerancia}
            setItems={setItensIntolerancia}
            placeholder="Intolerancia Alimentar"
            listMode="SCROLLVIEW"
            scrollViewProps={{nestedScrollEnabled: true}}
            zIndex={1000}
            dropDownDirection="BOTTOM"
            />  
          </View>  

          <View style={Styles.buttonContainer}>
            <Button title={"Salvar"} goback={"home"}> </Button>
          </View>

        </View>
      
    </SafeAreaView>


  );
}
export default CadastroAutista;
