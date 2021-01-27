import * as actionTypes from './constant'
import {Map} from 'immutable'

const defaultStatus = Map({
    topBanners: [],
    hotRecommends: [],
})

export default (state = defaultStatus, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNER: 
            return state.set("topBanners", action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.recommends);
        default:
            return state
    }
}