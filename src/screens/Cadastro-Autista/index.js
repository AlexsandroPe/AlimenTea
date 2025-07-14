import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import {ImageBackground, Pressable, View, Text} from "react-native"
import { Camera, CalendarDays} from "lucide-react-native";
import DateTimePicker from "@react-native-community/datetimepicker"
import * as ImagePicker from "expo-image-picker"
import Styles from "./style.js"
import InputBox from "../../components/InputBox/index.js"
import DropDownPicker from 'react-native-dropdown-picker';
import Button from "../../components/Button"



function CadastroAutista() {
  const [image, setImage] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isDropDowSpectrum, setIsDropDowSpectrum] = useState(false);
  const [selectedSpectrum, setSelectedSpectrum] = useState();
  const [spectrums, setSpectrums] = useState([
    {label: "Nível de suporte 1", value: "Nivel de suporte 1"},
    {label: "Nível de suporte 2", value: "Nível de suporte 2"},
    {label: "Nível de suporte 3", value: "Nível de suporte 3"}
  ])
  const handleDatePicker = (newDate) => {
    setIsDatePickerVisible(false);
    setSelectedDate(newDate)
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [9, 9]
    });
    if(!result.canceled) setImage(result.assets[0].uri.toString());
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.selectImage}>
        <ImageBackground resizeMode="cover" source={image ? {uri: image} : require("../../assets/nophoto.png")} style={Styles.userImageProfile}>
          <Pressable onPress={pickImage} style={{flex: 1}}>
              {image ? (<Camera 
                size={58} style={{position: "absolute", alignSelf: "center", top: "37%", zIndex: 1}} color={"#929292"}
              />) : null}
          </Pressable>
        </ImageBackground>
      </View>
      <View style={Styles.userForm}>
        <View style={Styles.inputs}>
          <InputBox placeholder="Nome completo:"/>
          <Pressable style={Styles.inputDataNascimento} onPress={()=> setIsDatePickerVisible(true)}>
            <CalendarDays size={28}/>
            <Text>Data de nascimento: <Text>{selectedDate.toLocaleDateString()}</Text></Text>
            {
              isDatePickerVisible ? (<DateTimePicker value={selectedDate} display='spinner' onChange={(event, newDate) => handleDatePicker(newDate)}/>): null
            }
          </Pressable>
          <DropDownPicker style={Styles.inputDataNascimento} open={isDropDowSpectrum} value={selectedSpectrum} items={spectrums} setOpen={setIsDropDowSpectrum} setValue={setSelectedSpectrum} setItems={setSpectrums} />
          <InputBox placeholder="Alimentos Alérgico: " onChangeText={() => {}}/> 
          <InputBox placeholder="Alimentos Intolerante: " onChangeText={() => {}}/> 
        </View>
        <Button title="Cadastrar criança" goback={true}/>
      </View>
    </SafeAreaView>
  )
}

export default CadastroAutista;