import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react';
import SelectList from 'react-native-dropdown-select-list'

const tamaniosData = [
{
    value: 'Short 8 onz.',
    key: "1"
},
{
    value: 'Tall 12 onz.',
    key: "1.5"
},
{
    value: 'Grande 16 onz.',
    key: "2"
}
]

const tiposCafeData = [
    {
        value: 'Mocha',
        key: '2'
    },
    {
        value: 'Te chai',
        key: '2.5'
    },
    {
        value: 'Americano',
        key: '1.5'
    },
    {
        value: 'Frapper',
        key: '3'
    }
]

const tiposPagoData = [
    {
        value: 'Tarjeta de crédito',
        key: 'Tarjeta de credito'
    },
    {
        value: 'Efectivo',
        key: 'Efectivo'
    }
]

const Form = ({ data, setData }) => {

    const [ tamanio, setTamanio ] = useState('');
    const [ tipoCafe, setTipoCafe ] = useState('');
    const [ tipoPago, setTipoPago ] = useState('');

    const setValues = (key, value) => {
        setData({ ...data, [key]: value });
    }

    const setSelectTipoCafe = (value) => {
        const label = tiposCafeData.filter( (tipoCafe ) => tipoCafe.key == value );
        setData({ ...data, tipoCafe: value, tipoCafeText: label[0].value});
    }

    const setSelectTamanio = (value) => {
        const label = tamaniosData.filter( (tamanio) => tamanio.key == value );
        setData({ ...data, tamanio: value, tamanioText: label[0].value });
    }

    return (
        
        <View style={ styles.container }>
            <SelectList
                placeholder='Seleccione el tamaño'
                boxStyles = {{ backgroundColor: 'white',  marginTop: 10, elevation: -2  }}
                dropdownStyles = {{ backgroundColor: 'white', width: '100%', elevation: 2 }}
                data = { tamaniosData }
                setSelected = {setTamanio}
                search = { false }
                onSelect = { () => setSelectTamanio(tamanio)}
            />

            <SelectList
                placeholder='Seleccione el tipo de café'
                boxStyles = {{ backgroundColor: 'white', marginTop: 10, elevation: -1 }}
                dropdownStyles = {{ backgroundColor: 'white', width: '100%', elevation: 2 }}
                data = { tiposCafeData }
                setSelected = {setTipoCafe}
                search = { false }
                onSelect = { () => setSelectTipoCafe(tipoCafe)}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                <SelectList
                    placeholder='Tipo de pago'
                    inputStyles = {{ width: '60%' }}
                    boxStyles = {{ backgroundColor: 'white', elevation: -1  }}
                    dropdownStyles = {{ backgroundColor: 'white', width: '100%', elevation: 2 }}
                    data = { tiposPagoData }
                    setSelected = {setTipoPago}
                    search = { false }
                    onSelect = { () => setValues('tipoPago', tipoPago)}
                />

                <TextInput
                    style={ styles.input }
                    placeholder='0'
                    keyboardType='numeric'
                    onChangeText={(value) => { setValues('cantidad', Number(value) ) }}
                    value={ data.cantidad }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: '7%',
        marginTop: 20,
    },
    picker: {
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    picketPay: {
        width: '70%',
        backgroundColor: '#fff',
    },
    input: {
        width: '20%',
        backgroundColor: '#fff',
        borderColor: 'grey', 
        color: '#000',
        textAlign: 'center',
        height: 45,
        borderRadius: 5,
        elevation: -1
    }
});

export default Form