import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1em;
`;

const Input = ({ label, type = 'text', value, onChange }) => (
  <InputContainer>
    <InputLabel>{label}</InputLabel>
    <TextInput type={type} value={value} onChange={onChange} />
  </InputContainer>
);

export default Input;
