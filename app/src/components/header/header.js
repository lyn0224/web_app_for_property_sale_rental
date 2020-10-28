import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom'
import {Group,
        Profile,
        RightPanel, 
        LeftPanel,
        LogoPosition,
        LogoText, 
        Background,
        Link,
        Text, 
        Container, 
        Logo, 
        ButtonLink,
        Dropdown,
        TextLink} from './styles/style'

function Header({children, ...resProps}){
return <Background {...resProps}>{children}</Background>
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <LogoPosition>
            <ReactRouterLink to={to}>
                
                    {/* <Logo {...restProps} /> */}
                    <LogoText>{children}</LogoText>
                
            </ReactRouterLink>
        </LogoPosition>
    )
}

Header.RightPanel = function HeaderRightPanel({children,...restProps}){
    return(
        <RightPanel {...restProps}>
            {children}
            </RightPanel>
    )
}

Header.LeftPanel = function HeaderLeftPanel({children,...restProps}){
    return(
        <LeftPanel {...restProps}>
            {children}
            </LeftPanel>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
}
Header.Link = function HeaderLink({ to, children, ...restProps  }){
    return<Link> 
            <ReactRouterLink to = {to } {...restProps}>
                    <Text>{children}</Text>
                    </ReactRouterLink>
                </Link> 
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return (
        <Profile {...restProps}>
            {children}
        </Profile>
    )
}
Header.Dropdown = function HeaderDRopdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>
}
export default Header

Header.TextLink = function HeaderTextLink({ to, children, ...restProps  }){
    
    return<TextLink {...restProps}>{children}
            </TextLink> 
}