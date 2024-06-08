

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import colors from '../colors';
import CustomText from '../components/CustomText';

const PostSuccessScreen = () => {

    return (
        <View style={styles.container}>

            <View style={styles.successImageContainer}>
                <Image source={require('../assets/SuccessIcon.png')} style={styles.successImage} />
            </View>

            <View style={styles.textContainer}>
                <CustomText style={styles.title}>Your Job is Posted!</CustomText>
                <CustomText style={styles.message}>Congratulations! Your job has been successfully posted and is now visible to potential candidates. Good luck in your recruitment process!</CustomText>
                <TouchableOpacity style={styles.button}>
                    <CustomText style={styles.buttonText}>Manage Jobs</CustomText>
                </TouchableOpacity>
            </View>


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    successImageContainer: {

    },
    successImage: {
        width: 140,
        height: 230,
        resizeMode: 'contain',
        margin: 'auto'
    },
    textContainer: {
        paddingHorizontal: 50
    },
    title: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Poppins-Regular'
    },
    message: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        opacity: 0.8,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular'
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 8,
        width: 197,
        height: 56,
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginHorizontal: 'auto',
        marginTop: 20,
    },
    buttonText: {
        color: colors.primary,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'Poppins-Regular',
        fontSize: 16
    }
})


export default PostSuccessScreen;