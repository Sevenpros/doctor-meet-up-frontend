import React from "react";
import createAsyncThunk from "@reduxjs/toolkit";

const ADD_BOOKING = "bookings/addBooking";
const REMOVE_BOOKING = "bookings/removeBooking";
const FETCH_BOOKINGS = "bookings/fetchBookings";

const fetch_API = 'http://localhost:3000/users/:id/bookings';

export const fetchBookings = createAsyncThunk(
    FETCH_BOOKINGS,
    async () => {
        const response = await fetch(fetch_API);
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const initialState = {
    bookings: [],
    status: "idle",
};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            };
        case REMOVE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter(
                    (booking) => booking.id !== action.payload
                ),
            };
        case FETCH_BOOKINGS:
            return {
                ...state,
                bookings: action.payload,
            };
        default:
            return state;
    }
};

export default bookingsReducer;

