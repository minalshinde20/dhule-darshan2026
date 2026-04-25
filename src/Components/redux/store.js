import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './slice/user'
import projectReducer  from './slice/project'
import screenReducer  from './slice/screen'

export const store = configureStore({
  reducer: {
    user:userReducer,
    project:projectReducer,
    currentScreen:screenReducer
  },
})