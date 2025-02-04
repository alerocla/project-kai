import { createSlice } from '@reduxjs/toolkit'

interface initialStateBoolean {
  teacher: boolean
  student: boolean
}

const initialState: initialStateBoolean = {
  teacher: localStorage.getItem('userType') === 'teacher',
  student: localStorage.getItem('userType') === 'student',
}

const sliceUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addTeacher: (state) => {
      state.teacher = true
      state.student = false
      localStorage.setItem('userType', 'teacher')
    },
    addStudent: (state) => {
      state.student = true
      state.teacher = false
      localStorage.setItem('userType', 'student')
    },
    removeTeacher: (state) => {
      state.teacher = false
      localStorage.removeItem('userType')
    },
    removeStudent: (state) => {
      state.student = false
      localStorage.removeItem('userType')
    },
  },
})

export const { addStudent, addTeacher, removeStudent, removeTeacher } =
  sliceUser.actions

export default sliceUser.reducer
