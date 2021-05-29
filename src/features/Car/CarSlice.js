import { createSlice } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const initialState = {
    cars: [
        <Link to="/model-s">Model S</Link>,
        <Link to="/model-3">Model 3</Link>,
        <Link to="/model-x">Model X</Link>,
        <Link to="/model-y">Model Y</Link>
    ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;