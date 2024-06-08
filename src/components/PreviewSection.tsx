import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../colors';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/AntDesign';

type Props = {
    // navigation: any;
};

const PreviewSection: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.previewText}>This is a preview of what your job post will look like to job seekers.</CustomText>
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.icon}>
                        <Image source={require('./../assets/PreviewInJob.png')} />
                    </View>
                    <View>
                        <View>
                            <>
                                <CustomText style={styles.title}>Jr. Front-End Designer</CustomText>
                                <CustomText style={styles.subtitle}><CustomText style={{ fontWeight: '600' }}>Kickstarter,</CustomText> in Manchester</CustomText>
                            </>
                            <Icon name="check" size={16} color="white" />
                        </View>
                        <View style={styles.tags}>
                            <View style={styles.tag}>
                                <CustomText style={styles.tagText}>React</CustomText>
                            </View>
                            <View style={styles.tag}>
                                <CustomText style={styles.tagText}>MongoDB</CustomText>
                            </View>
                        </View>
                        {/* <CustomText style={styles.timePosted}>Posted 6 hours ago</CustomText> */}
                    </View>
                </View>
                <View style={styles.body}>
                    <CustomText style={styles.sectionTitle}>Job Description</CustomText>
                    <CustomText style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel tincidunt risus. Vestibulum commodo tincidunt interdum. Quisque porta odio eu urna maximus dapibus. Praesent ut fringilla arcu. Nam sed imperdiet diam.
                    </CustomText>
                    <CustomText style={styles.sectionTitle}>Requirements</CustomText>
                    <CustomText style={styles.description}>
                        Suspendisse dignissim neque sed lorem mattis tristique. Cras viverra elit quis dolor sagittis, sed bibendum nisl consectetur. Pellentesque at imperdiet ante. Phasellus id felis eget leo scelerisque posuere quis sed est. Nam maximus dui vel quam vehicula, eget scelerisque velit lacinia. Quisque sodales eleifend urna. Fusce eu efficitur lectus, et fermentum dui.
                    </CustomText>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.paymentButton} onPress={()=>console.log('first')}>
                    <CustomText style={styles.paymentButtonText}>Payment</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        height: '110%'
    },
    previewText: {
        marginBottom: 20,
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        padding: 3,
        textAlign: 'justify'
    },
    card: {
        backgroundColor: '#fff',
        borderColor: '#AFB0B6',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        justifyContent: 'flex-start',
        backgroundColor: '#FF6F61',
        borderRadius: 8,
        marginRight: 16,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color: '#222741'
    },
    subtitle: {
        fontSize: 12,
        color: '#888',
        marginBottom: 8,
    },
    tags: {
        flexDirection: 'row',
    },
    tag: {
        backgroundColor: '#E0F7FA',
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginRight: 8,
    },
    tagText: {
        fontSize: 10,
        color: '#62636A',
    },
    timePosted: {
        fontSize: 10,
        color: '#75788D',
    },
    body: {
        marginTop: 16,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#222741'
    },
    description: {
        fontSize: 12,
        color: '#75788D',
        marginBottom: 16,
        lineHeight: 18
    },
    buttonContainer: {
        // position: 'absolute'
        borderTopColor: '#333',
        borderTopWidth: 0.5,
        width: '109%',
        paddingHorizontal: 16,
        marginLeft: -16
    },
    paymentButton: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    paymentButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default PreviewSection;
