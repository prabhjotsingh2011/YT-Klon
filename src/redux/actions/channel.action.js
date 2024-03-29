import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, SET_SUBSCRIPTION_STATUS } from "../actionTypes";
import request from '../../api'

export const getChannelDetails = (id) => async dispatch => {
    try {
        dispatch({
            type:CHANNEL_DETAILS_REQUEST,
        })

        const {data}=await request.get('/channels',{
            params:{
                part:'snippet,statistics,contentDetails',
                id:id
            }
        })
        dispatch({
            type:CHANNEL_DETAILS_SUCCESS,
            payload:data.items[0]
        })
    } catch (error) {
        console.log("error while calling getChannelDetails",error);
        dispatch({
            type:CHANNEL_DETAILS_FAIL,
            payload:error.message
        })
    }
}


export const checkSubscriptionStatus = (id) => async (dispatch,getState) => {
    try {
   
        const {data}=await request.get('/subscriptions',{
            params:{
                part: 'snippet',
                forChannelId: id,
                mine: true,
            },
            headers:{
                Authorization:`Bearer ${getState().auth.accessToken}`,
                Accept: 'application/json'
            },
            
            
        })
        dispatch({
            type:SET_SUBSCRIPTION_STATUS,
            payload:data.items.length !== 0,
        })
        console.log(data);
    } catch (error) {
        console.log("error while calling subscription check ",error);
        // dispatch({
        //     payload:error.message
        // })
    }
}