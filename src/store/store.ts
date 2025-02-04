import { configureStore } from '@reduxjs/toolkit'
import reducerTeacher from './sliceTeacher'
import reducerStudent from './sliceStudent'
import reducerUser from './sliceUser'

export const store = configureStore({
  reducer: {
    teacher: reducerTeacher,
    student: reducerStudent,
    user: reducerUser,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
