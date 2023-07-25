import React from 'react'
import http from '../constant/api'

export type getLocationRoom = {
    "id": number,
    "nameLocation": string,
    "province": string,
    "country": string,
    "image": string
}
export const managerLocationRoom = {
    getLocationRoom: () => http.get(`locationRoom`),
    getLocationRoomById: (payload: number) => http.get(`locationRoom/location/${payload}`),
    getLocationSearch: (payload: string) => http.post(`locationRoom/search`, payload)
}

