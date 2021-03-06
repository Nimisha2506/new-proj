import React from 'react';
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AcceessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <HeaderContainer>
            
            {/* Header left -----is a comment*/}
            <HeaderLeft>
                <HeaderAvatar
                 // TODO: Add onclick
                />
                <AcceessTimeIcon />
            </HeaderLeft>

            {/* Header search ----- is a comment*/}
            <HeaderSearch>
                <SearchIcon />
                <input type="text" placeholder="Search anything here"/>
            </HeaderSearch>

            {/* Header right ------ is a comment*/}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderSearch =styled.div`
    flex:0.4;
    opacity:1;
    border-radius: 6px;
    background-color: #101b61;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: #cdd9dc;
    border: 1px #cdd9dc solid;

    > input{
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color:white;
        
    }

`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width:100%;
    align-items: center;
    padding: 10px 0;
    background-color: var(--mp-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`;