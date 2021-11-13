import React from 'react'
import "./_sidebar.scss"

import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,

} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'


const Sidebar = ({sidebar,toggleSidebar}) => {

    const dispatch=useDispatch();
    const handleLogout=()=>{
        dispatch(log_out())
    }
    return (
        <nav className={sidebar ? 'sidebar open' : 'sidebar'}
            onClick={()=> toggleSidebar(false)}
        >
            <li>
                <MdHome size={23} />
                <span>Home</span>           
            </li>
            <hr />
            <li>
                <MdSubscriptions size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li>
                <MdThumbUp size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li>
                <MdHistory size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li>
                <MdLibraryBooks size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li>
                <MdSentimentDissatisfied size={23} />
                <span>Home</span>
            </li>
            <hr />
            <li onClick={handleLogout}>
                <MdExitToApp size={23}  />
                <span>Logout</span>
            </li>
            <hr />
        </nav>

    )
}

export default Sidebar
