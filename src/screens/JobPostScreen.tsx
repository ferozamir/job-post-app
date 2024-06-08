
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';
import { Button, Chip, HelperText } from 'react-native-paper';
import ProgressBar from '../components/ProgressBar';
import colors from '../colors';
import JobDetailsSection from '../components/JobDetailsSection';
import PreviewSection from '../components/PreviewSection';


type Props = {
  navigation: any;
};

const JobPostScreen: React.FC<Props> = ({ navigation }) => {

  const steps = ['Job Detail', 'Post Detail', 'Preview', 'Payment'];
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <ScrollView >
      <ProgressBar steps={steps} currentStep={currentStep} />

      {currentStep === 0 && (<JobDetailsSection setCurrentStep={setCurrentStep} />)}
      {currentStep === 2 && (<PreviewSection />)}

    </ScrollView >
  );
};



export default JobPostScreen;
