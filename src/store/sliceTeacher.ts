import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UsersType } from '../types/usersType'

interface InitialStateProps {
  teacher: UsersType | null
  error: boolean
  loading: boolean
}

const initialState: InitialStateProps = {
  teacher: null,
  error: false,
  loading: false,
}

export const fetchTeacher = createAsyncThunk('fetchUserById', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/2'
  )
  return response.data as UsersType
})

const sliceUsers = createSlice({
  name: 'teacher',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeacher.pending, (state) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(fetchTeacher.fulfilled, (state, action) => {
      state.teacher = action.payload
      state.error = false
      state.loading = false
    })
    builder.addCase(fetchTeacher.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export default sliceUsers.reducer
