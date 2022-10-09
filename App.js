import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Form from './src/components/Form';
import Result from './src/components/Result';
import { useState } from 'react';

export default function App() {

  const [ data, setData ] = useState({
    tamanio: '',
    tipoCafe: '',
    tipoPago: '',
    tamanioText: '',
    tipoCafeText: '',
    cantidad: 0,
    total: 0,
    descuento: 0,
  });

  const [ errors, setErrors ] = useState('');

  const validateString = (value) => {
    if(value == '')
    {
      setErrors('Seleccionar valores validos');
      return false;
    }
    return true;
  }

  const validateCant = (value) => {
    if(value == 0)
    {
      setErrors('Ingrese una cantidad valida');
      return false;
    }
    return true;
  }
  
  const calcularTotal = () => {
    if( validateString(data.tamanio) && validateString(data.tipoCafe) && validateString(data.tipoPago) && validateCant(data.cantidad)) {
      let subtotal = (Number(data.tamanio) + Number(data.tipoCafe)) * Number(data.cantidad);
      let descuento = data.tipoPago == 'Efectivo' ? 0.15 : 0.05;
      let total = subtotal - ( subtotal*descuento );

      setData({ ...data, total: total, descuento: (descuento*100) });
      setErrors('');
    }
  }
  
  return (
    <>
      <StatusBar hidden={true} />
      <SafeAreaView style={{ height: '100%' }}>
        <View style={ styles.container }>
          <Text
            style = { styles.title }
          >StarBosco APP</Text>
          <Form data={ data } setData={ setData }/>
        </View>
        <Result data={data} />
        {
          errors.length != 0 ? <Text style = { styles.error }>{ errors }</Text> : null
        }
        <View style={{ alignItems: 'center', position: 'absolute', bottom: 20, width: '100%' }}>
          <TouchableOpacity
            onPress={ calcularTotal }
            style = { styles.button }
          >
            <Text style={ styles.buttonText }>Calcular</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#74a9da',
    height: 300,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginTop: 15,
  },
  button: {
    width: '80%',
    backgroundColor: '#74a9da',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  error: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  }
});
