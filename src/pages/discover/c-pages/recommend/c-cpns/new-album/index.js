import React, { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import AlbumCover from "@/components/album-cover";
import { Carousel } from "antd";
import { AlbumWrapper } from "./style";

import { getNewAlbums } from "../../store/actionCreator";

export default memo(function NewAlbum() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNewAlbums());
    }, [dispatch]);

    const state = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"]),
    }), shallowEqual);

    const carouselRef = useRef();

    return (
        <AlbumWrapper>
            <ThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
            <div className="content">
                <div className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel ref={carouselRef} dots={false}>
                        {[0, 1].map(item => {
                            return (
                                <div key={item} className="page">
                                    {state.newAlbums.slice(item * 5, (item + 1) * 5).map(item => {
                                        return <AlbumCover key={item.id} info={item} />;
                                    })}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02" onClick={e => carouselRef.current.next()}></div>
            </div>
        </AlbumWrapper>
    );
});
