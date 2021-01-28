import * as actionTypes from "./constant";
import { 
    getTopBanner, 
    getHotRecommend, 
    getArtistList, 
    getNewAlbum,
    getTopList 
} from "@/service/recommend";

const changeBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    banners: res.banners,
});

const changeRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

const changeSettleSings = res => ({
    type: actionTypes.CHANGE_SETTLE_SINGER,
    settleSings: res
})

const changeNewAlbumAction = res => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.albums
})

const changeNewListAction = res => ({
    type: actionTypes.CHANGE_NEW_LIST,
    topNewList: res.playlist
})

const changeOriginListAction = res => ({
    type: actionTypes.CHANGE_ORIGIN_LIST,
    topOriginList: res.playlist
})

const changeUpListAction = res => ({
    type: actionTypes.CHANGE_UP_LIST,
    topUpList: res.playlist
})

export const getBanner = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeBannerAction(res));
        });
    };
};

export const getRecommend = () => {
    return dispatch => {
        getHotRecommend().then(res => {
            dispatch(changeRecommendAction(res));
        })
    }
}

export const getSettleSings = () => {
    return dispatch => {
        getArtistList(5, 5001).then(res => {
            dispatch(changeSettleSings(res.artists));
        })
    }
}

export const getNewAlbums = () => {
    return dispatch => {
        getNewAlbum(10, 0).then(res => {
            dispatch(changeNewAlbumAction(res));
        })
    }
}

export const getTopData = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch(idx) {
                case 0: 
                    return dispatch(changeNewListAction(res));
                case 2:
                    return dispatch(changeOriginListAction(res));
                case 3:
                    return dispatch(changeUpListAction(res));
                default:
                    console.log('其他数据处理');
            }
        })
    }
}