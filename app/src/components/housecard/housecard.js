import  React from 'react'
import{Link as ReactRouterLink} from 'react-router-dom'
import { Container, CardImg, CardButton, Title, Text,Link,Base,Favorite,ImageContainer,TextContainer} from './styles/style';

function Housecard({children,...restProps}){
    return <Container {...restProps}>
                {children}</Container>
}

export default Housecard

Housecard.Base = function HousecardBase({children, ref,...restProps}){
    return <Base {...restProps} ref = {ref}>
                {children}
                </Base>
}

Housecard.Link = function HousecardLink({to,children,...restProps}){
    return (

            <ReactRouterLink to = {to} {...restProps} style = {{textDecoration:"none"}}>
                            {children}
                </ReactRouterLink>
            )
}

Housecard.img = function HousecardImg({src,alt, children,...restProps}){
    return(
            <CardImg src = {src} alt = {alt} {...restProps}>
               
                {children}
                </CardImg>
    )
}
Housecard.Favorite = function HousecardFavorite({children, removeFavorite,...restProps}){
    return(
        <Favorite {...restProps} onClick = {()=>removeFavorite()}>
            <i class="fas fa-heart" ></i>
        </Favorite>
    )
}
Housecard.notFavorite = function HousecardnotFavorite({children,addFavorite,...restProps}){
    return(
        <Favorite {...restProps} onClick = {()=>addFavorite()}>
            <i class="far fa-heart"></i>
        </Favorite>
    )
}
Housecard.Button = function HousecardButton({to,children,...restProps}){
    return(
            <ReactRouterLink to = {to}>
                <CardButton {...restProps} style={{ outline: 'none' }}>
                    {children}
                    </CardButton>
                </ReactRouterLink>
    )
}

Housecard.Title = function HousecardTitle({children,...restProps}){
    return(
        <Title {...restProps}>
            {children}
        </Title>
    )
}

Housecard.Text = function HousecardText({children,...restProps}){
    return(
        <Text {...restProps}>
            {children}
        </Text>
    )
}
Housecard.ImageContainer = function HousecardImageContainer({children,...restProps}){
        return(
            <ImageContainer {...restProps}>
                {children}
            </ImageContainer>
        )
}

Housecard.TextContainer = function HousecardTextContainer({children,...restProps}){
    return(
        <TextContainer {...restProps}>
            {children}
        </TextContainer>
    )
}