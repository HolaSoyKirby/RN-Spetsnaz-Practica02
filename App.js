import React, { useState } from "react";
import {StyleSheet,View,Text,SafeAreaView,StatusBar,Button} from "react-native";

import Form from "./src/components/Form";
import colors from "./src/utils/colors";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [suma, setSuma] = useState(0);
  const [resta, setResta] = useState(0);
  const [multiplicacion, setMultiplicacion] = useState(0);
  const [division, setDivision] = useState(0);

  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>Practica 2 Spetsnaz</Text>
        <Form setNum1={setNum1} setNum2={setNum2}></Form>
        </SafeAreaView>
        <View>
        <Button
        title="Enviar"
        style={styles.button}
        onPress={() => {
          setSuma(Number(num1) + Number(num2));
          setResta(Number(num1) - Number(num2));
          setMultiplicacion(Number(num1) * Number(num2));
          setDivision(Number(num1) / Number(num2));
        }}
      ></Button>
    </View>
      
      <SafeAreaView style={styles.safeResultArea}>
        <Text style={styles.text}>
          {suma == null ? "Suma:" : `Suma ${suma}`}
        </Text>
        <Text style={styles.text}>
          {`Resta: ${resta}`}
        </Text>
        <Text style={styles.text}>
          {`Multipliacion: ${multiplicacion}`}
        </Text>
        <Text style={styles.text}>
          {`Division: ${division}`}
        </Text>
        
      </SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    marginBottom: 120,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  button: {
    backgroundColor: colors.RESULTADOS_COLOR,
    width: 200,
    marginLeft: 150,
    marginRight:150,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    backgroundColor: "",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  safeResultArea: {
    backgroundColor: colors.RESULTADOS_COLOR,
    alignItems: "center",
    paddingTop: 10,
    marginTop:100
  },
  marginBottom: {
    marginBottom: 20,
  },
});