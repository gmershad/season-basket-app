import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';



const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: 20,
    },
    section: {
        marginBottom: 10,
    },
    header: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#808000'
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: 1,
        paddingVertical: 5,
        borderColor: '#ccc',
    },
    itemName: {
        fontSize: 14,
    },
    itemPrice: {
        fontSize: 14,
        color: '#333',
    },
    total: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    totalLabel: {
        fontSize: 16,
        marginRight: 10,
    },
    totalPrice: {
        fontSize: 16,
        color: '#333',
    },
});

const PDFView = ({ data }) => {
    return (
        <>
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.header}>Season Basket</Text>
                    <Text style={styles.header}>Items</Text>
                    {data.map((item, index) => (
                        <View key={index} style={styles.item}>
                            <Text style={styles.itemName}>{item.Name}</Text>
                            {/* <Text style={styles.itemPrice}>{ite}</Text> */}
                        </View>
                    ))}
                    {/* <View style={styles.total}>
                        <Text style={styles.totalLabel}>Total:</Text>
                        <Text style={styles.totalPrice}>$100.00</Text>
                    </View> */}
                </Page>
            </Document>
        </>
    );
};

export default PDFView;



