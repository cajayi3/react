import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        gas: "Gas",
        price: "Price",
        model: "Model",
        mph: "MPH",
        type: "Type",
        engine: "Engine"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseGas: (state, action) => { state.gas = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseMPH: (state, action) => { state.mph = action.payload},
        chooseType: (state, action) => { state.type = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseGas, choosePrice, chooseModel, chooseMPH, chooseType, chooseEngine} = rootSlice.actions