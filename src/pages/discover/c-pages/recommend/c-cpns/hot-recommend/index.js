import React, {memo, useEffect, useCallback} from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { useHistory } from 'react-router-dom';

import {getRecommend} from '../../store/actionCreator'

import ThemeHeaderRcm from '@/components/theme-header-rcm'
import HYThemeCover from '@/components/theme-cover'

import { 
    RecommendWrapper
  } from "./style";

export default memo(function HotRecommend() {
    const history = useHistory();
    const dispatch = useDispatch();

    const keywordClick = useCallback((keyword) => {
        history.push({pathname: "/discover/songs", cat: keyword});
    }, [history]);

    const state = useSelector(state => ({
        recommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual);

    useEffect(() => {
        dispatch(getRecommend())
    }, [dispatch])

    return (
        
        <RecommendWrapper>
            <ThemeHeaderRcm 
                        title="热门推荐" 
                        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
                        moreLink="/discover/songs"
                        keywordClick={keywordClick}/>
            <div className="recommend-list">
                {
                    state.recommends.slice(0, 8).map((item, index) => {
                        return (
                            <HYThemeCover info={item} key={item.id}/>
                        )
                    })
                }
            </div>
        </RecommendWrapper>
    )
})