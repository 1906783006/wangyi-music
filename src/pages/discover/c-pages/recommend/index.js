import React, {memo} from 'react'

import TopBanner from './c-cpns/top-banner'
import HopRecommend from './c-cpns/hot-recommend'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'

import {RecommendWrapper, Content, RecommendLeft, RecommendRight} from './style'

export default memo(
    function Recommend() {
        return (
            <RecommendWrapper>
                <TopBanner />
                <Content className="wrap-v2">
                    <RecommendLeft>
                        <HopRecommend />
                        <NewAlbum />
                        <RankingList />
                    </RecommendLeft>
                    <RecommendRight>
                        <UserLogin />
                        <SettleSinger />
                    </RecommendRight>
                </Content>
            </RecommendWrapper>
        )
    }
) 