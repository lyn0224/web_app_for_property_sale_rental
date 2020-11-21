import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import{ Container, CardImg, CardButton, Title, Text,Link,Base,ImageBase} from './styles/style'

function HouseDetail({children, ...restProp}){
    return <Container {...restProp}>
        {children}
    </Container>
}

export default HouseDetail


HouseDetail.Base = function HouseDetailBase({children, ref,...restProps}){
    return <Base {...restProps} ref = {ref}>
                {children}
                </Base>
}
HouseDetail.ImageBase = function HouseImageBase({children, ref,...restProps}){
    return <ImageBase {...restProps} ref = {ref}>
                {children}
                </ImageBase>
}
HouseDetail.Link = function HouseDetailLink({to,children,...restProps}){
    return (

            <ReactRouterLink to = {to} {...restProps} style = {{textDecoration:"none"}}>
                            {children}
                </ReactRouterLink>
            )
}

HouseDetail.img = function HouseDetailImg({src,alt, children,...restProps}){
    return(
            <CardImg src = {src} alt = {alt} {...restProps}>
                {children}
                </CardImg>
    )
}
HouseDetail.Button = function HouseDetailButton({to,toggleDisplay,children,...restProps}){
    return(
            <ReactRouterLink to = {to}>
                <CardButton {...restProps} style={{ outline: 'none' }} onClick = {()=>toggleDisplay()}> 
                    {children}
                    </CardButton>
                </ReactRouterLink>
    )
}

HouseDetail.Title = function HouseDetailTitle({children,...restProps}){
    return(
        <Title {...restProps}>
            {children}
        </Title>
    )
}

HouseDetail.Text = function HouseDetailText({children,...restProps}){
    return(
        <Text {...restProps}>
            {children}
        </Text>
    )
}