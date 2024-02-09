// import styled from '@emotion/styled';
import styled from 'styled-components';
// import 'normalize.css';

// export const AppWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-image: url(${example});
//   background-repeat: no-repeat;
//   background-position: left top;
//   background-size: 100% 100%;
// `;

export const AppWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
  `;


export const AppForm = styled.form` 
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  `;


export const AppLabel = styled.label` 
  margin-bottom: 10px;
  `;


export const AppInput = styled.input` 
  width: 200px;
  padding: 5px;
  margin-left: 10px;
  `;


export const AppButton = styled.button` 
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  `;


 export const AppResult = styled.div`
  font-size: 18px;
  margin-top: 20px;
  `;
