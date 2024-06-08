
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native';
import { Button, Chip, HelperText } from 'react-native-paper';
import ProgressBar from '../components/ProgressBar';
import colors from '../colors';
import JobDetailsSection from '../components/JobDetailsSection';


const JobPostScreen = () => {

  const steps = ['Job Detail', 'Post Detail', 'Preview', 'Payment'];
  return (
    <ScrollView >
      <ProgressBar steps={steps} currentStep={2} />

      <JobDetailsSection />

    </ScrollView >
  );
};



export default JobPostScreen;
