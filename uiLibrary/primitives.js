import styled from "@emotion/styled";
import {
  color,
  fontSize,
  space,
  width,
  display,
  border,
  boxShadow,
  opacity,
  overflow,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  alignItems,
  justifyContent,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  verticalAlign,
} from "styled-system";

//import * as styledFunctions from "styled-system";
///===== missing Variant Styles ==== ///

// Function Name	Prop	CSS Property	Theme Field
// textStyle	textStyle	style object	textStyles
// colorStyle	colors	style object	colorStyles
// buttonStyle	variant	style object	buttons


//const allFuncs = () => styledFunctions.reduce((acc,func) => {},{})

export const Box = styled.div`
    ${color}
    ${space}
    ${width}
    ${fontSize}
    ${display}
    ${border}
    ${opacity}
    ${boxShadow}
    ${overflow}
    // position
    ${position}
    ${zIndex}
    ${top}
    ${right}
    ${bottom}
    ${left}
    ${alignItems}
    ${alignContent}
    ${justifyContent}
    ${flexWrap}
    ${flexDirection}
    ${flex}
    ${flexBasis}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${justifyItems}
    // Layout
    ${maxWidth}
    ${minWidth}
    ${height}
    ${maxHeight}
    ${minHeight}
    ${size}
    ${verticalAlign}
    `;

Box.displayName = 'Box'
