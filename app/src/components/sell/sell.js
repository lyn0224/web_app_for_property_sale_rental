import React, { useState } from 'react'
import {Container, Notice, Icon} from './styles/style'
function Sell({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Sell.Notice = function SellNotice({ children, ...restProps }) {
    return (
        <>
        {/* <Icon><i className="fas fa-search"></i></Icon> */}
        <Notice {...restProps}>{children}</Notice>
        </>
    )
    
    
}

export default Sell;