import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

const testImg = getByTestId('ok-img')
expect(testImg).toBeInTheDocument()