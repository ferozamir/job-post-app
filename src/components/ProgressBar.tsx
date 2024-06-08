// components/ProgressBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../colors';

import Icon from 'react-native-vector-icons/AntDesign';

type ProgressBarProps = {
    steps: string[];
    currentStep: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
    return (
        <View style={styles.container}>
            {steps.map((step, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                return (
                    <React.Fragment key={index}>
                        <View style={styles.stepContainer}>
                            <View style={[styles.circle, isCompleted && styles.completedCircle, isActive && styles.activeCircle]}>
                                {isCompleted && <Icon name="check" size={16} color="white" />}
                            </View>
                            <Text numberOfLines={1} style={[styles.stepLabel, isCompleted && styles.completedLabel, isActive && styles.activeLabel]}>{step}</Text>
                        </View>
                        {index < steps.length - 1 && (
                            <View style={styles.lineContainer}>
                                <View style={[styles.line, isCompleted && styles.completedLine]} />
                            </View>
                        )}
                    </React.Fragment>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: colors.background,
        fontFamily: 'Poppins',
        width: '86%',
        height: 70,
        padding: 16,
        margin: 'auto'
    },
    stepContainer: {
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: colors.background,
        borderWidth: 2,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        zIndex: 10
    },
    completedCircle: {
        backgroundColor: '#7A7C85',
        borderColor: 'transparent',
    },
    activeCircle: {
        backgroundColor: colors.primary,
        width: 34,
        height: 24,
        borderColor: 'transparent',
    },
    lineContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        width: '110%',
        height: 2,
        top:11,
        backgroundColor: '#ccc',
        // position: 'absolute',
        // bottom: 0
    },
    completedLine: {
        backgroundColor: '#E0E0E0',
        height: 24,
        top: 0
    },

    completedLabel: {
        color: '#62636A'
    },
    stepLabel: {
        marginTop: 28,
        color: '#95969D',
        fontSize: 13,
        position: 'absolute',
        top: 0,
    },
    activeLabel: {
        color: colors.primary,
    },
});

export default ProgressBar;
