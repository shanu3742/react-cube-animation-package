import React from 'react'
import styled, { keyframes } from 'styled-components'

const Cube = ({top_Color,box_plate_linear_gradient_first_color,box_plate_linear_gradient_Second_color,box_Shadow_Color,size}) => {

   
const halfOfSize=size/2

console.log(halfOfSize)
   
    const span0={
     
        position: `absolute`,
        top: `0`,
        left: 0,
        width: `100%`,
        height: `100%`,
        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(0deg) translateZ(${halfOfSize}rem)`
    }
    const span1={
     
        position: `absolute`,
        top: `0`,
        left: 0,
        width: `100%`,
        height: `100%`,
        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(90deg) translateZ(${halfOfSize}rem)`
    }

    const span2={
        position: `absolute`,
        top: `0`,
        left: 0,
        width: `100%`,
        height: `100%`,

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(180deg) translateZ(${halfOfSize}rem)`
    }
    const span3={
         position: `absolute`,
        top: `0`,
        left: 0,
        width: `100%`,
        height: `100%`,

        backgroundImage: `linear-gradient(${box_plate_linear_gradient_first_color},${box_plate_linear_gradient_Second_color} )`,
        transform: `rotateY(270deg) translateZ(${halfOfSize}rem)`
    }
   
    const top_Box_Color =top_Color
    const shadow_color=box_Shadow_Color

    const araayofShadowColor = shadow_color.split(',')

    const changeNumber = araayofShadowColor[2]

    const anotherchange=changeNumber.split(')') 

    const changeNumberatZero = araayofShadowColor[0]

    const anothercolorchange=changeNumberatZero.split('(') 

const FirstFixedColor =anothercolorchange[1]
    

    const secondFixedColor = araayofShadowColor[1]

    console.log(secondFixedColor)
    

    const changableColorCode =anotherchange[0]

    const shadow_first_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+2})`
    const shadow_second_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+4})`
    const shadow_third_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+6})`
    const shadow_fourth_light_color=`rgb(${FirstFixedColor}, ${secondFixedColor},${changableColorCode+8})`

    const actualSize = parseInt(size)/3

   
   

    const BlurDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${size}rem;
    height: ${size}rem;
     background: ${top_Box_Color }; 
    transform: rotateX(90deg) translateZ(${halfOfSize}rem);
    transform-style: preserve-3d;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${size}rem;
        height: ${size}rem;
        background-color: ${box_plate_linear_gradient_Second_color,box_Shadow_Color };
        transform: translateZ(-${size}rem);
        filter: blur(20px);
        box-shadow: 0 0 ${actualSize}rem ${shadow_color}, 0 0 ${actualSize+80}rem ${shadow_first_light_color},
        0 0 ${actualSize+180}rem ${shadow_second_light_color}, 0 0 ${actualSize+280}rem ${shadow_third_light_color},
        0 0 ${actualSize+380}rem ${shadow_fourth_light_color};
      }
      `

    //   <div className ='top' style={top}></div>
    const animate = keyframes`
    0% {
        transform: rotateX(-30deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(-30deg) rotateY(360deg);
      }
  `
 
const MainContainer =styled.div`
position: relative;
transform-style: preserve-3d;
transform: rotateX(-30deg);
animation:${animate} 4s linear infinite;
width:${size}rem;
height:${size}rem
`

// .cube div {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     transform-style: preserve-3d;
//   }
const Platediv = styled.div`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
`
const BottomDiv = styled.div`
position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
`
    return (
        <>
        <MainContainer >
        <BlurDiv></BlurDiv>
       
            <Platediv>
                    <span id='span0' style={span0}></span>
                    <span id='span1' style={span1}></span>
                    <span id='span2' style={span2}></span>
                    <span id='span3' style={span3}></span>
            </Platediv>
            
        </MainContainer>
        
      
       </>
    )
}

export default Cube
