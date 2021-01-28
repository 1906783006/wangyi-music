import React, {memo, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {getTopData} from '../../store/actionCreator'

import ThemeHeaderRCM from '@/components/theme-header-rcm'

import {
    RankingWrapper
} from "./style";

export default memo(function RankingList() {

    const dispatch = useDispatch();

    useEffect(() => {
        getTopData(0);
        getTopData(2);
        getTopData(3);
    }, [dispatch])

    const state = useSelector(state => ({
        topUpList: state.getIn(["recommend", "topUpList"]),
        topNewList: state.getIn(["recommend", "topNewList"]),
        topOriginList: state.getIn(["recommend", "topOriginList"])
    }), shallowEqual)

    return (
        <RankingWrapper>
            <ThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
        </RankingWrapper>
    )
})