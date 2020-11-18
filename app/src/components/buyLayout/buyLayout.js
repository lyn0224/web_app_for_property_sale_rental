import React from 'react'
import { Container, Map, List,SecondSection,Search,SearchIcon,SearchInput,FirstSection,Footer} from './styles/style';
function Buy({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
            </Container>
    )
}

export default Buy
Buy.FirstSection = function BuyFirst({children,...restProps}){
    return(
        <FirstSection {...restProps}>
            {children}
            </FirstSection>
    )
}
Buy.SecondSection = function BuySecond({children,...restProps}){
    return(
        <SecondSection {...restProps}>
            {children}
            </SecondSection>
    )
}
Buy.Footer = function BuyFooter({children,...restProps}){
    return(
        <Footer {...restProps}>
            {children}
            </Footer>
    )
}
Buy.Map = function BuyMap({children,...restProps}){
    return(
        <Map {...restProps}>
            {children}
            </Map>
    )

}
Buy.List = function BuyList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

Buy.Search = function BuySearch ({ searchTerm, setSearchTerm, ...restProps }){
    return (
        <Search>
            
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search houses you want"

            />
            <SearchIcon style={{ outline: 'none' }}>
                    <i className="fas fa-search"></i>
            </SearchIcon>
        </Search>
    )
} 