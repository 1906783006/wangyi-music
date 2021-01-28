import request from "./axios";

function getTopBanner() {
    return request({
        url: "/banner",
    });
}

function getHotRecommend() {
    return request({
        url: "/personalized",
    });
}

function getArtistList(limit, cat) {
    return request({
        url: "/artist/list",
        params: {
            cat,
            limit,
        },
    });
}

function getNewAlbum(limit, offset) {
    return request({
        url: "/top/album",
        params: {
            limit,
            offset,
        },
    });
}

function getTopList(idx) {
    return request({
        url: "/top/list",
        params: {
            idx,
        },
    });
}

export { 
    getTopBanner, 
    getHotRecommend, 
    getArtistList, 
    getNewAlbum,
    getTopList
};
