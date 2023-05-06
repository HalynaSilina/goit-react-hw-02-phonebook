import styled from '@emotion/styled';

export const List = styled.ul`
max-height: 60vh;
margin-top: 12px;
padding: 8px 12px;
list-style: none;
background-color: #fff;
background-image: repeating-linear-gradient(
    to bottom,
    #E6F4F1,
    #E6F4F1 20px,
    #FCFCD4 20px,
    #FCFCD4 50px 
  );
border-radius: 8px;
border: 2px solid #EF972C;
overflow-y: scroll;
@media screen and (min-width: 1024px) {
   margin-top: 0;
}
`