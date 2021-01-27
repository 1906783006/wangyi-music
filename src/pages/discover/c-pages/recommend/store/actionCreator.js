import * as actionTypes from "./constant";
import { getTopBanner, getHotRecommend } from "@/service/recommend";

const changeBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BANNER,
    banners: res.banners,
});

const changeRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
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