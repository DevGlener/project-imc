import { createGlobalStyle } from "styled-components";
import { rules } from "./rules";
import { background } from "@/assets";


const GlobalStyle = createGlobalStyle`

*{
   list-style: none;
   font-family: ${rules.fonts.Primary};
   margin: 0;
   padding: 0;
   }

   body{
         background-image: url(${background});
         background-repeat: no-repeat;
         background-size: cover;
   }
`;

export default GlobalStyle;