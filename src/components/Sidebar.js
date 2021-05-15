import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SidebarOption from "./SidebarOption";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';




function Sidebar() { 
    const [channels, loading, error] = useCollection(db.collection('rooms'));
   
            
    
    //const history = useHistory();

            //const redirect = () => history.push('./Teams.js');
            //const redirect = {useCallback(() => history.push('./Teams.js'), [history]) }
          //const teamclicked() {
               // alert("clicked")
          //}
    
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>COLLABO</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Come N Collab
                    </h3>
                </SidebarInfo>
                <CreateIcon />
            </SidebarHeader>
            

            <SidebarOption Icon={InsertCommentIcon} title="Your Chat Rooms"  /> 
          
           {/* Header left -----is a comment <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            
    <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />*/}
    <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            {/*<SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
<hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
<SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />*/}
            {channels?.docs.map(doc => (
            <SidebarOption key={doc.id} id={doc.id}  title={doc.data().name} />
            ))}
            
        </SidebarContainer>
    );
};

export default Sidebar;

const SidebarContainer = styled.div`
    color: white;
    background-color: var(--mp-color);
    flex: 0.3;
    border-top: 1px solid #0c18b4;
    max-width: 260px;
    margin-top: 60px;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #00008B;
    }

`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #0c18b4;
    padding-bottom: 10px;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274B;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }

    `;