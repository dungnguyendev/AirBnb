import React from 'react';
import http from '../constant/api';

export type accountTypes = {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    gender: boolean;
    role: boolean;
};
export type localUser = {
    code: number;
    email: string;
    name: string;
};
export const managerAccout = {
    register: (payload: accountTypes) => http.post(`account/register`, payload),
    login: (payload: accountTypes) => http.post(`account/login`, payload),
};
