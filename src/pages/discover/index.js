import React, { memo } from "react";
import {NavLink} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import { dicoverMenu } from "@/service/local-data";

import {DiscoverWrapper, TopMenu} from './style'

export default memo(
    function Discover(props) {
        const { route } = props;
        return (
            <DiscoverWrapper>
                <div className="top">
                    <TopMenu>
                        {
                            dicoverMenu.map((item, index) => {
                                return (
                                    <div className="item" key={item.title}>
                                        <NavLink to={item.link}>{item.title}</NavLink>
                                    </div>
                                )
                            })
                        }
                    </TopMenu>
                </div>
                {renderRoutes(route.routes)}
            </DiscoverWrapper>
            
        )
    }
)
