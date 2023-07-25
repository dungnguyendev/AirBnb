import React from 'react'
import http from '../constant/api'

export type bookingRoom = {
  "roomCode": number,
  "arrivalDay": string,
  "dayOut": string,
  "theNumberGuests": number,
  "userCode": number
}
export const managerbookingRoom = {
  upBookingRoom: (payload: bookingRoom) => http.post(`/bookRoom/order`, payload),
  getBookingRoom: () => http.get(`/bookRoom/`)
}