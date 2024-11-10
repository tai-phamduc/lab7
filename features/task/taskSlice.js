import { createSlice } from "@reduxjs/toolkit"

export const taskSlice = createSlice({
  name: "task",
  initialState: [
    "To check email",
    "UI task web page",
    "Learn javascript basic",
    "Learn HTML Advance",
    "Medical App UI",
    "Learn Java"
  ],
  reducers: {
    addNewTask: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { addNewTask } = taskSlice.actions

export default taskSlice.reducer