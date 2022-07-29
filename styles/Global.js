import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*, *::before, *::after{
margin:0;
padding:0;
box-sizing:border-box;
}

html, body{
height:100%;
width: 100%;
}

#__next{
height:100%;
width: 100%;
}

body{
background-color:${({ theme }) => theme.colors.primary};
}

// main{

//     h1{
//         padding: 2rem 0;
//     }
// }

`;

export { Global };
