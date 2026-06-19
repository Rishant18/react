import{configureStore} from '@reduxjs/toolkit'
import todoreducer from '../Feature/Todo/Todoslice'

export const store = configureStore({
    reducer: todoreducer
})