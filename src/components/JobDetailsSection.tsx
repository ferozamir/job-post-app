
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Button, Chip, HelperText } from 'react-native-paper';
import ProgressBar from '../components/ProgressBar';
import colors from '../colors';
import CustomText from './CustomText';

const JobDetailsSection = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [jobType, setJobType] = useState('');
    const [education, setEducation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [skillsList, setSkillsList] = useState<string[]>([]);

    const addSkill = () => {
        if (skills.trim()) {
            setSkillsList([...skillsList, skills.trim()]);
            setSkills('');
        }
    };

    return (
        <View style={styles.container}>
            <CustomText style={styles.sectionTitle}>Job Title</CustomText>
            <TextInput
                style={styles.input}
                placeholder="Enter job title"
                placeholderTextColor="#ADAEAE"
                value={jobTitle}
                onChangeText={text => setJobTitle(text)}
            />

            <CustomText style={styles.sectionTitle}>Description</CustomText>
            <View>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    multiline
                    placeholder="Your job description"
                    placeholderTextColor="#ADAEAE"
                    value={description}
                    onChangeText={text => setDescription(text)}
                    maxLength={1500}
                />
                <HelperText type="info" style={styles.descLength}>{`${description.length}/1500`}</HelperText>
            </View>
            <CustomText style={styles.sectionTitle}>Skills</CustomText>
            <View style={styles.skillsContainer}>
                <TextInput
                    style={styles.skillInput}
                    placeholder="Type skill"
                    placeholderTextColor="#ADAEAE"
                    value={skills}
                    onChangeText={text => setSkills(text)}
                />
                <TouchableOpacity style={styles.addButton} onPress={addSkill}>
                    <CustomText style={{color: '#fff', fontSize: 26, fontWeight: 300}}>+</CustomText>
                </TouchableOpacity>
            </View>
            <View style={styles.skillsChips}>
                {skillsList.map((skill, index) => (
                    <Chip
                        key={index}
                        style={styles.chip}
                        onClose={() => setSkillsList(skillsList.filter((s, i) => i !== index))}
                    >
                        {skill}
                    </Chip>
                ))}
            </View>

            <CustomText style={styles.sectionTitle}>Job Type</CustomText>
            <TextInput
                style={styles.input}
                placeholder="Select job type"
                placeholderTextColor="#ADAEAE"
                value={jobType}
                onChangeText={text => setJobType(text)}
            />

            <CustomText style={styles.sectionTitle}>Education</CustomText>
            <TextInput
                style={styles.input}
                placeholder="Enter job title"
                placeholderTextColor="#ADAEAE"
                value={education}
                onChangeText={text => setEducation(text)}
            />

            <CustomText style={styles.sectionTitle}>Experience Level</CustomText>
            <TextInput
                style={styles.input}
                placeholder="Select job type"
                placeholderTextColor="#ADAEAE"
                value={experienceLevel}
                onChangeText={text => setExperienceLevel(text)}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('Get Started')}>
                    <CustomText style={styles.buttonText}>Get Started</CustomText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    input: {
        marginBottom: 16,
        backgroundColor: colors.background,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    textArea: {
        height: 307,
        textAlignVertical: 'top',
        paddingVertical: 16
    },
    descLength: {
        color: '#ADAEAE',
        position: 'absolute',
        bottom: 26,
        right: 4
    },
    skillsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    skillInput: {
        width: '100%',
        marginBottom: 16,
        backgroundColor: colors.background,
        paddingHorizontal: 14,
        borderRadius: 8
    },
    addButton: {
        position: 'absolute',
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        borderRadius: 8,
        right: 7,
        top: 6
    },
    skillsChips: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 8,
    },
    chip: {
        margin: 4,
    },
    buttonContainer: {
        borderTopColor: '#333',
        borderTopWidth: 0.5,
        width: '109%',
        paddingHorizontal: 16,
        marginLeft: -16
    },
    button: {
        backgroundColor: colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default JobDetailsSection