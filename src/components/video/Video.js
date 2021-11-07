import React from 'react'
import "./_video.scss"
import { AiFillEye } from 'react-icons/ai'

const Video = () => {
    return (
       <div className="video">
           <div className="video__top">
               <img src="https://lh6.googleusercontent.com/proxy/0Npu4iQzdnzHzNmkne6gFvOV4KXh0Lxeu8HEEpsDD3qDlCxiiDWTvBhgUCufZAdwb0K8uAIPN4Q7JBHkAJcV67btZ1-HtlGUIgdH13LQEqt7yHP1jsLgDXj87ghIy7kg-I3poOefKLAN_g=w1152-h603-s-nd" alt="" srcset="" />
               <span>05:43</span>
           </div>

           <div className="video__title">
                Create App in 5 min by Chintu who is from school
           </div>

           <div className="video__details">
               <span>
                   <AiFillEye /> 5M - views
               </span>
           </div>
           <div className="video__channel">
               <img src="https://yt3.ggpht.com/ytc/AKedOLRyvLqGG_cZtKNRY-oPsx6gduk3MVjsmgzyUTFtOA=s68-c-k-c0x00ffffff-no-rj" alt="" />
               <p>Rainbow Hat jr</p>
           </div>
       </div>
    )
}

export default Video
