import React,{ useEffect,useState } from 'react'
import './VideoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'
import numeral from 'numeral'
import moment from 'moment'
import request from '../../api'
import { useHistory } from 'react-router'
const VideoHorizontal = ({video,searchScreen}) => {
    const url = 'https://scontent.fccu19-1.fna.fbcdn.net/v/t1.18169-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NVZpEvSB__wAX_Ochg-&_nc_ht=scontent.fccu19-1.fna&oh=67493e08bd16b5e503614aef02db7ec9&oe=61AD18B3'


    const {id,snippet:{channelId,channelTitle,description , title,publishedAt,thumbnails:{medium}}}=video

    
    const [views, setViews] = useState(null)
    const [Duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    
    useEffect(() => {
        const get_videos_details = async () => {
            const { data: { items } } = await request.get('/videos', {
                params: {
                    part: "snippet,contentDetails,statistics",
                    id: id.videoId,
                }
            })
            // console.log(items);
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
            // console.log(publishAt);
        }
        get_videos_details();
    }, [id])


    useEffect(() => {
        const get_icon = async () => {
            const { data: { items } } = await request.get('/channels', {
                params: {
                    part: "snippet",
                    id: channelId,
                }
            })
            // console.log(items);\
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_icon();
    }, [channelId])



    const seconds = moment.duration(Duration).asSeconds()
    const duration = moment.utc(seconds * 1000).format("mm:ss")
    const history=useHistory()

    const handleClick=()=>{
        isVideo
            ?history.push(`/watch/${id.videoId}`)
        :history.push(`/channel/${id.channelId}`)
    }



    const isVideo= id.kind === 'youtube#video'
        

    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center' onClick={handleClick}>
            <Col xs={6} md={4}
                className='VideoHorizontal__left'
            >
                <img src={medium.url} alt="" srcset="" className='videoHorizontal__thumbnail' />
                
                <span className='videoHorizontal__duration'>{duration}</span>
            </Col>
            <Col xs={6} md={8} className='videoHorizontal__right p-0'>
                <p className='videoHorizontal__title mb-1 '>
                    {title}
                </p>

                {isVideo &&
                
                <div className="video__details">
                    <AiFillEye /> {numeral(views).format("0.a")}
                    &nbsp;&nbsp;&nbsp;
                    {moment(publishedAt).fromNow()}
                </div>

                }


                {isVideo && 
                    <p className='mt-1 desc ' > 
                        {description}
                    </p>
                }

                <div className='videoHorizontal__channel d-flex align-items-center my-1' >
               {
                    isVideo && 
                    <img src={channelIcon?.url} alt=""  />   
                }
                    <p>{channelTitle}</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
