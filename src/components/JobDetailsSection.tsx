
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';
import { Button, Chip, HelperText } from 'react-native-paper';
import ProgressBar from '../components/ProgressBar';
import colors from '../colors';

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
            <Text style={styles.sectionTitle}>Job Title</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter job title"
                placeholderTextColor="#ADAEAE"
                value={jobTitle}
                onChangeText={text => setJobTitle(text)}
            />

            <Text style={styles.sectionTitle}>Description</Text>
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
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
                <TextInput
                    style={styles.skillInput}
                    placeholder="Type skill"
                    placeholderTextColor="#ADAEAE"
                    value={skills}
                    onChangeText={text => setSkills(text)}
                />
                <Button mode="contained" style={styles.addButton} onPress={addSkill}>
                    +
                </Button>
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

            <Text style={styles.sectionTitle}>Job Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Select job type"
                placeholderTextColor="#ADAEAE"
                value={jobType}
                onChangeText={text => setJobType(text)}
            />

            <Text style={styles.sectionTitle}>Education</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter job title"
                placeholderTextColor="#ADAEAE"
                value={education}
                onChangeText={text => setEducation(text)}
            />

            <Text style={styles.sectionTitle}>Experience Level</Text>
            <TextInput
                style={styles.input}
                placeholder="Select job type"
                placeholderTextColor="#ADAEAE"
                value={experienceLevel}
                onChangeText={text => setExperienceLevel(text)}
            />
            <View style={styles.buttonContainer}>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Get Started')}>
                    Get Started
                </Button>
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
        fontSize: 30,
        backgroundColor: colors.primary,
        borderRadius: 8,
        right: 6,
        top: 4
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
        borderTopWidth: 1,
        width: '109%',
        paddingHorizontal: 16,
        marginLeft: -16
    },
    button: {
        marginTop: 24,
        backgroundColor: colors.primary,
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 500,
        height: 56,
        textAlignVertical: 'center'
    },
});

export default JobDetailsSection