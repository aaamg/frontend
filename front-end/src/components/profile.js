import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth'

export default function ValuesList() {
  const [Values, setValues] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`https://stormy-basin-77789.herokuapp.com/api/values`)
    .then(res => {
      console.log('response', res.data);
      setValues(res.data);
    })
 }, []);
  

  return (
        <div>{Values.map(value => {
          return value.name
        })}</div>
  )
    
}

/// styled components:

const Welcome = styled.h1`
  color: #624f69;
  font-size: 5rem;
  font-family: 'Liu Jian Mao Cao', cursive;
`;

const Definition = styled.h3`
  color: #624f69;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
`;

const Instructions = styled.h3`
  color: #624f69;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`;

const CardSection = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 50px 50px;
`;