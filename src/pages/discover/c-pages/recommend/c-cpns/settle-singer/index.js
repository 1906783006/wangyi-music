import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import ThemeHeaderSmall from "@/components/theme-header-small";

import { SetterSongerWrapper } from "./style";

import { getSettleSings } from "../../store/actionCreator";
import {
    getSizeImage
  } from "@/utils/format-utils";

export default memo(function SettleSinger() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSettleSings());
    }, [dispatch]);

    const state = useSelector(
        state => ({
            settleSings: state.getIn(["recommend", "settleSings"]),
        }),
        shallowEqual
    );

    return (
        <SetterSongerWrapper>
            <ThemeHeaderSmall title="入驻歌手" more="查看全部" />
            <div className="singer-list">
                {state.settleSings.map((item, index) => {
                    return (
                        <a href="/singer" key={item.id} className="item">
                            <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                            <div className="info">
                                <div className="title">{item.alias.join("") || item.name}</div>
                                <div className="name">{item.name}</div>
                            </div>
                        </a>
                    );
                })}
            </div>
            <div className="apply-for">
                <a href="/abc">申请成为网易音乐人</a>
            </div>
        </SetterSongerWrapper>
    );
});
