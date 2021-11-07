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


const Sidebar = ({sidebar,toggleSidebar}) => {



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
            <li>
                <MdExitToApp size={23} />
                <span>Home</span>
            </li>
            <hr />
        </nav>

    )
}

export default Sidebar
