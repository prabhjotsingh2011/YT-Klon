import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import Comments from '../../components/comments/Comments'
import VideoHorizontal from '../../components/VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../components/videoMetaData/VideoMetaData'
import { getVideoById } from '../../redux/actions/videos.action'

import './watchScreen.scss'

const WatchScreen = () => {
    const {id}=useParams();

    const dispatch=useDispatch()
    const {video,loading}= useSelector(state=> state.selectedVideo)

    useEffect(()=>{
        dispatch(getVideoById(id))
    },[id])

    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen__player" >
                    <iframe 
                    src={`https://www.youtube.com/embed/${id}` }
                    frameBorder='0'
                    title={video?.snippet?.title}
                    allowFullScreen
                    width='100%'
                    height='100%'
                    ></iframe>
                </div>

                {
                    !loading ?<VideoMetaData video={video} videoId={id} />: <h1>loading...</h1>
                }
                <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
            </Col>

            <Col lg={4}>
                {
                    [...Array(10)].map(() => <VideoHorizontal />)
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
