import { HOME_VIDEO_FAIL, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionTypes";
import request from '../../api'

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEO_REQUEST,
        })
        const { data } = await request.get('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                // pageToken:'',
            }
        })

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All'
            }
        })

    } catch (error) {
        console.log("error in getPopular Videos", error);
        dispatch({
            type: HOME_VIDEO_FAIL,
            payload: error.message
        })
    }
}



export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEO_REQUEST,
        })

        const { data } = await request.get('/search', {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: 'video'
            }
        })

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
            }
        })

        console.log(data);
    } catch (error) {
        console.log("error in getPopular Videos", error);
        dispatch({
            type: HOME_VIDEO_FAIL,
            payload: error.message
        })
    }
}


export const getVideoById = (id) => async dispatch => {
    try {
        dispatch({
            type:SELECTED_VIDEO_REQUEST,
        })

        const {data}=await request.get('/videos',{
            params:{
                part:'snippet,statistics',
                id:id
            }
        })
        dispatch({
            type:SELECTED_VIDEO_SUCCESS,
            payload:data.items[0]
        })
    } catch (error) {
        console.log("error while calling getVideoById",error);
        dispatch({
            type:SELECTED_VIDEO_FAIL,
            payload:error.message
        })
    }
}