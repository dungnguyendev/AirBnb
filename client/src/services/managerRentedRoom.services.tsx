import React from 'react';
import http from '../constant/api';

export type getRentedRoom = {
    id: number;
    codeRoom: number;
    roomName: string;
    guest: number;
    bedRoom: number;
    bed: number;
    discription: string;
    price: number;
    washingMachine: boolean;
    iron: boolean;
    tivi: boolean;
    airConditioner: boolean;
    kitchen: boolean;
    parking: boolean;
    wifi: boolean;
    pool: boolean;
    locationCode: number;
    image: string;
    bathroom: boolean;
    status: boolean;
};
export const managerRentedRoom = {
    getRentedRoom: () => http.get(`rentedRoom`),
    getRentedRoomById: (payload: number) => http.get(`rentedRoom/detail/${payload}`),
    getRentedRoomByLocation: (payload: number) => http.get(`rentedRoom/location/${payload}`),
    getRentedSearch: (payload: string) => http.post(`rentedRoom/search`, payload),
};
