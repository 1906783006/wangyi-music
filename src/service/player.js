import request from "./axios";

function getSongDetail(ids) {
    return request({
        url: "/song/detail",
        params: {
            ids,
        },
    });
}

export function getLyric(id) {
    return request({
      url: "/lyric",
      params: {
        id
      }
    })
}

export { getSongDetail };
