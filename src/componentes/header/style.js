import styled from 'styled-components'

export const Header = styled.header`
    background-color: #f5f5f5;
    padding: 10px;
`

export const Nav = styled.nav`
    margin: 0 auto;
    
    & > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none
    }
`