import styled from "styled-components";
import { rules } from "@/styles/rules";


export const Container = styled.div`
padding: 0 40px;
display:grid;
justify-content: space-between;
`

export const Title = styled.h1`
font-size: 78px;
line-height : 81px;
font-weight : 900;
width: 630px;
height :270px;
margin : 140px 0 24px 0;
color: ${rules.colors.textColorPrimary};
span{
    color : ${rules.colors.textColorSecundary}
}

`

export const SubTitle = styled.h2`
font-size:24px;
color : ${rules.colors.textColorParagraphy};
margin-bottom: 48px;
width : 606px;
height : 72px;
line-height: 36px;
font-weight: normal;

`

export const ListCards = styled.div`
display: flex;
gap: 24px;
align-items: center;
width: 558px;
height:180px;
margin-bottom: 62px;
`

export const Cards = styled.div`
display : flex ; 
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
text-align: center;
width: 170px;
height:180px;
background-color: ${rules.colors.cardBackground};
font-family: ${rules.fonts.Primary};
font-size: 16px;
font-weight: 500;
color:${rules.colors.textColorParagraphy};
border-radius: 24px;
box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);

img{
    width: 40px;
    height: 44px;
    margin: 0 auto;
}

`

export const ButonImc= styled.button`

background-color: ${rules.colors.buttonColor};
display: block;
margin: 14px auto ;
width: 340px;
height: 72px;
border-radius: 18px;    
cursor: pointer;
color: ${rules.colors.cardBackground};
font-size: 24px;
border:none;
`

export const TextSecurity = styled.p`

color:${rules.colors.textColorParagraphy};
display:flex;
align-items: center;
font-size: 18px;
justify-content:center;
gap: 5px;
`
export const ImgBackground = styled.img`
margin-top: 210px;
width: 466px;
height: 472px;

`

export const Footer = styled.div`
grid-column : 1/5;
grid-row : 4/5;
height:80px;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 12px;
color:#434656;
margin-top: 62px;
`