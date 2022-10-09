import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Result = ({ data }) => {

    return (
        <View style = { styles.container }>
        <Text style = { styles.title }>Resumen</Text>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Cantidad Solicitada</Text>
                <Text style = { styles.resumenText }>{ data.cantidad }</Text>
            </View>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Tamaño</Text>
                <Text style = { styles.resumenText }>{ data.tamanioText }</Text>
            </View>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Tipo Café</Text>
                <Text style = { styles.resumenText }>{ data.tipoCafeText }</Text>
            </View>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Tipo de Pago</Text>
                <Text style = { styles.resumenText }>{ data.tipoPago }</Text>
            </View>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Descuento %</Text>
                <Text style = { styles.resumenText }>{ data.descuento }%</Text>
            </View>
            <View style = { styles.containerDescription }>
                <Text style = { styles.resumenText }>Total a Pagar</Text>
                <Text style = { styles.resumenText }>${ (data.total).toFixed(2) }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        elevation: -1
    },
    title: {
        textAlign: 'center',
        fontSize: 25,
    },
    containerDescription: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
        marginHorizontal: 30,
    },
    resumenText: {
        fontSize: 15
    }
});

export default Result