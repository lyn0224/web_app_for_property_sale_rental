import styled from 'styled-components'
import {Link as ReactRouterLink} from 'react-router-dom'


function Gridcard({children,...restProps}){
return <Container>{children}</Container>
}

export default Gridcard

Gridcard.Link = function GridcardLink({to,children,...restProps}){
    return (<ReactRouterLink to = {to} {...restProps}>
                        {children}
            </ReactRouterLink>)
}

Gridcard.img = function GridcardImg({src,alt, children,...restProps}){
    return(
            <CardImg src = {src} alt = {alt} {...restProps}>
                {children}
                </CardImg>
    )
}
Gridcard.Button = function GridcardButton({children,...restProps}){
    return(
        <CardButton {...restProps}>
            {children}
            </CardButton>
    )
}
