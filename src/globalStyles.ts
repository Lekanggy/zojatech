import styled, {createGlobalStyle} from 'styled-components'
import { device } from './responsiveness'
type HeadingProps = {
    margin?: string,
    mb?: string,
    mt?: string,
    inverse?: string,
    width?: string
}

type FlexProps = {
    justify?: string,
    align?: string,
    padding?: string,
    gap?:string,
    margin?: string,
    position?: string,
    width?: string,
    minWidth?: string,
    maxWidth?: string,
    height?: string,
    minHeight?: string,
    maxHeight?:string,
    wrap?: string
}

type TextProps = {
    color?:string,
    size?:string,
    weight?:string,
    spacing?:string,
    padding?:string;
    margin?:string,
    mb?:string,
    mt?: string
}

// console.log(window.outerHeight)

const GlobalStyle = createGlobalStyle`
  body{
   
    font-size: 1rem;
    /* width: 100vw;
    height: 100vh; */
    display: grid;
    margin: 0;
	padding: 0;
  }

 
	
  *{
    box-sizing: border-box;
	/* margin: 0;
	padding: 0; */
	font-family: 'Mulish', 'Inter', 'Montserrat', sans-serif, ;
    --label-color: #088F71;
    --box-shadow: 10px 50px 50px 0px rgba(0, 0, 0, 0.06)
	
	//--linear-green: linear-gradient(316deg, #088F71 0%, #6ECB1A 100%);
  }

`;

export const Container = styled.div`
   
	
    /* min-height: 100vh; */
   
   
	/* max-width: 1300px; */
	/* margin-right: auto;
	margin-left: auto; */
	/* padding: 50px 0;
	display: flex;
	justify-content: center;
	align-items: center; */
    //min-height: 100vh;

	@media screen and (max-width: 960px) {
		padding:30px 0;
	}
`;

export const TextWrapper = styled.span<TextProps>`
	color: ${({ color }) => (color ? color : '')};
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
`;

export const Heading = styled.h2<HeadingProps>`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const Row = styled.div<FlexProps>`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;

export const Column = styled.div<FlexProps>`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;

type Color = {
color?: string
}

export const Text500 = styled.span<Color>`
	color: ${({ color }) => (color ? color : '')};
	font-family: "Inter";
	font-size: 1rem;
	font-style: normal;
	font-weight: 500;
	line-height: 120%; 
`
export const Text400 = styled(Text500)`
    font-size: 14px;
	font-weight: 400;
`
export const Text600 = styled(Text500)`
	font-weight: 600;
`
export const Text700 = styled(Text500)`
	font-weight: 700;
`

export const ScreenLayout = styled.div`
	 //padding-top: 5rem;
	margin-top: 2rem;
    margin-inline: 1rem;
    padding: 35px 20px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background: #1A1E26;
    

    @media screen  and (min-width: 768px){
       padding: 45px 65px; 
       margin: 0 20px;
       margin-top: 3rem;
       //margin-top: ;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;

    @media screen  and (${device.mobile600}){
       gap: 30px;
       //margin-top: ;
    }
`
export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 250px;
    border: none;
    @media screen  and (${device.mobile600}){
        
        width: 350px;
    }

    @media screen  and (min-width: 760px){
        
       width: 380px;
    }

    @media screen  and (${device.laptopL}){
        
        width: 400px;
    }

    
`
export const ButtonItem = styled(FormItem)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-top: 1.5rem;
    @media screen  and (min-width: 760px){
        
       gap: 20px;
    }
 
     /* @media screen  and (${device.laptopL}){
         
         width: 400px;
     } */
`
export const Button = styled.button`
    display: flex;
    width: 100%;
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 4px;
    background: var(--linear-green);
    color: #FFF;
    cursor: pointer;

    /* Font/Button */
    font-family: 'Inter';
    font-size: 0.85rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 19.2px */

    @media screen and (${device.mobile600}) {
        width: 200px;
        padding: 15px 40px;
        font-size: 1rem;
        /* height: 48px; */
        
    }
    @media screen  and (${device.laptopL}){
        
        width: 250px;
    }
`
export const FormLabel = styled.label`
    display:inline-block;
    color: #088F71;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    text-align: left;

/* Font/Paragraph 1 */
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 21px */
   
`
export const FormTitle = styled.h3`
    color: #FFF;
    font-family: "Inter";
    font-size:1.5rem;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    //line-height: 120%; /* 43.2px */
    @media screen  and (min-width: 768px){
        font-size:clamp(1rem, 100vw, 2rem);
       //margin-top: ;
    }
`  

export const ModalItemContainer = styled.div`
    border-radius: 20px;
    background: #1A1E26;
`
export const ModalHeader = styled(Row)`
    justify-content: space-between;
`
export const ModalCloseIcon = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color:#fff;
`
export const Input = styled.input`
    align-self: center;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: #23272F;
    color: #fff;
    padding: 0 20px;
    font-size: 1rem;
    &:focus{
        outline: none;
        //outline-color: red;
    }
    
    @media screen and (${device.mobile600}) {
       width: 100%;
       height: 55px;
       font-size: 1.2rem;
	}
    /* @media screen and (min-width: 768px) {
       width: 350px;
	} */
   
`

export const Select = styled.select`
    align-self: center;
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background: #23272F;
    color: #fff;
    padding: 0 20px;
    font-size: 1rem;
    &:focus{
        outline: none;
        //outline-color: red;
    }
    
    @media screen and (${device.mobile600}) {
       width: 355px;
      
       font-size: 1.2rem;
	}
    /* @media screen and (min-width: 768px) {
       width: 350px;
	} */
   
`

export default GlobalStyle