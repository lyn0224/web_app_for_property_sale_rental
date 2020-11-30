import React, { useState } from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Container,Link,TextLink,Text,CardsContainer} from './styles/style'
function Profile({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
            </Container>
    )
}

export default Profile


Profile.CardsContainer = function ProfileCardsContainer({ children, ...restProps  }){
    return<CardsContainer {...restProps} > 
            
                    {children}

                </CardsContainer> 
}

Profile.Text = function ProfileText({ children, ...restProps  }){
    return<Text {...restProps} > 
            
                    {children}

                </Text> 
}
