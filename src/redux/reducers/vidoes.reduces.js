import { HOME_VIDEO_FAIL, 
    HOME_VIDEO_REQUEST, 
    HOME_VIDEO_SUCCESS ,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL
} from "../actionTypes";


const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}

export const homeVideosReducer = (state = (initialState), action) => {
    const { type, payload } = action
    switch (type) {
        case HOME_VIDEO_SUCCESS:
            return {
                ...state,
                videos:
                    state.activeCategory  === payload.category?[...state.videos,...payload.videos]:payload.videos
                ,
                loading: false,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category,
            }
            break;

        case HOME_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
            break;

        case HOME_VIDEO_REQUEST:
            return {
                ...state,
                loading: false,
            }
            break;

        default:
            return state;
    }
}

const ThisState={
    loading:true,
    video:null,
}

export const selectedVideoReducer=(state=(ThisState), action)=>{
    const {payload,type}=action;
    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return{
                ...state,
                loading:true,
            }
    
        case SELECTED_VIDEO_SUCCESS:
            return{
                ...state,
                loading:false,
                video:payload,
                
            }
        case SELECTED_VIDEO_FAIL:
            return{
                ...state,
                loading:false,
                error:payload,

            }
    
        default:
            return state;
    }
}