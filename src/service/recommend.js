import request from './axios'

function getTopBanner() {
    return request({
        url: '/banner'
    })
}

function getHotRecommend() {
    return request({
        url: "/personalized"
    })
}

export {
    getTopBanner,
    getHotRecommend
}