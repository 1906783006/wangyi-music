import React from 'react'
import {Redirect} from 'react-router-dom'

const Discover = React.lazy( _ => import("@/pages/discover"))
const Recommend = React.lazy(_ => import("@/pages/discover/c-pages/recommend"))

export default [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: Discover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to={"/discover/artist"}></Redirect>
            },
            {
                path: '/discover/recommend',
                component: Recommend
            }
        ]
    }
]
