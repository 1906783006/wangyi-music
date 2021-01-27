import React, {memo, useEffect, useState, useRef, useCallback} from 'react'
import {useSelector, shallowEqual, useDispatch} from 'react-redux'

import {getBanner} from '../../store/actionCreator'

import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
  } from './style';

export default memo(function TopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector(state => ({
    banners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)

  const bannerRef = useRef();
  const bgImage = state.banners[currentIndex] && (state.banners[currentIndex].imageUrl + "?imageView&blur=40x20")
  
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(from);
    }, 0);
  }, []);

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
                        {
                            state.banners.map((item) => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl className="control">
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})