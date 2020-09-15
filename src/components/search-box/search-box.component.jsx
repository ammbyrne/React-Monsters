import { createGenerateClassName, Input } from '@material-ui/core';
import React from 'react';

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <Input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />  
);