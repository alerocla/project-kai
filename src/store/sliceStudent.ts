import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UsersType } from '../types/usersType'

interface InitialStateProps {
  student: UsersType | null
  error: boolean
  loading: boolean
}

const initialState: InitialStateProps = {
  student: null,
  error: false,
  loading: false,
}

export const fetchStudent = createAsyncThunk('fetchUserById', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/1'
  )
  return response.data as UsersType
})

const sliceUsers = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudent.pending, (state) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(fetchStudent.fulfilled, (state, action) => {
      state.student = action.payload
      state.error = false
      state.loading = false
    })
    builder.addCase(fetchStudent.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export default sliceUsers.reducer
