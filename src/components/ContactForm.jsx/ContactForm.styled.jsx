import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
flex-direction: column;
margin: 0 auto;
align-items: center;
gap: 12px;
@media screen and (max-width: 375px and min-width: 425px) {
    min-width: 300px;
}
@media screen and (max-width: 768px) {
    max-width: 500px;
}
@media screen and (max-width: 1024px) {
    max-width: 600px;
}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
width: 100%;
gap: 4px;
font-size: 18px;
font-weight: 500;
line-height: 1.14;
`

export const Input = styled.input`
padding: 12px 8px;
font-size: 18px;
line-height: 1.12;
font-style: italic;
font-weight: 300;
border: 2px solid #EF972C;
border-radius: 8px;
background-color: #E6F4F1
`

export const Button = styled.button`
display: inline-block;
min-width: 150px;
margin-top: 24px;
padding: 8px 10px;
border: 2px solid #EF972C;
border-radius: 8px;
background-color: #EF972C;
font-size: 18px;
font-weight: 500;

`