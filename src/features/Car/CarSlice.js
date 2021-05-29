import { createSlice } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

const initialState = {
    cars: [
        <Link to="#model-s">Harly Devinson</Link>,
        <Link to="#model-3">Yamaha MT15</Link>,
        <Link to="#model-x">Royal Enfield</Link>,
        <Link to="#model-y">X-cel</Link>
    ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer;