import * as actionTypes from './constant'
import {Map} from 'immutable'

const defaultStatus = Map({
    topBanners: [],
    hotRecommends: [],
    settleSings: [],
    newAlbums: [],
})

export default (state = defaultStatus, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_BANNER: 
            return state.set("topBanners", action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.recommends);
        case actionTypes.CHANGE_SETTLE_SINGER:
            return state.set("settleSings", action.settleSings);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums", action.newAlbum);
        default:
            return state
    }
}