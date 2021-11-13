import React from 'react'
import './VideoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
import { Col, Row } from 'react-bootstrap'
import numeral from 'numeral'
import moment from 'moment'
const VideoHorizontal = () => {
    const url = 'https://scontent.fccu19-1.fna.fbcdn.net/v/t1.18169-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NVZpEvSB__wAX_Ochg-&_nc_ht=scontent.fccu19-1.fna&oh=67493e08bd16b5e503614aef02db7ec9&oe=61AD18B3'


    const seconds = moment.duration('10000000').asSeconds()
    const duration = moment.utc(seconds * 1000).format("mm:ss")

    return (
        <Row className='videoHorizontal m-1 py-2 align-items-center'>
            <Col xs={6} md={4}
                className='VideoHorizontal__left'
            >
                <img src={url} alt="" srcset="" className='videoHorizontal__thumbnail' />
                
                <span className='videoHorizontal__duration'>{duration}</span>
            </Col>
            <Col xs={6} md={8} className='videoHorizontal__right p-0'>
                <p className='videoHorizontal__title mb-1'>
                    Be a full stack dveloer
                </p>
                <div className="video__details">
                    <AiFillEye /> {numeral('1465466231').format("0.a")}
                    &nbsp;&nbsp;&nbsp;
                    {moment('2021-06-03').fromNow()}
                </div>

                <div className='videoHorizontal__channel d-flex align-items-center my-1' >
                    <p>Prabhjot Singh Blog</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
