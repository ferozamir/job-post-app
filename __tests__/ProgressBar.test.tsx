import React from 'react';
import { render } from '@testing-library/react-native';
import ProgressBar from '../src/components/ProgressBar';

const steps = ['Step 1', 'Step 2', 'Step 3'];

describe('ProgressBar Component', () => {
  it('renders all steps correctly', () => {
    const { getByText } = render(<ProgressBar steps={steps} currentStep={0} />);

    steps.forEach(step => {
      expect(getByText(step)).toBeTruthy();
    });
  });
});
