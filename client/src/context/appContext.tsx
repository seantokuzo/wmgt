import { createContext, useReducer, useContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'
import { courseData, CourseInterface } from 'data/course-data/wmgt-course-data'

export type WindowSize = { width: number; height: number }
export type AlertType = 'danger' | 'success' | ''

export interface StateInterface {
  windowSize: WindowSize
  darkMode: boolean
  courseData: CourseInterface[]
  isLoading: boolean
  showAlert: boolean
  alertType: AlertType
  alertText: string
}

export const initialState: StateInterface = {
  windowSize: { width: window.innerWidth, height: window.innerHeight },
  darkMode: true,
  courseData: courseData,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: ''
}

interface AppContextInterface extends StateInterface {
  changeWindowSize: (newSize: WindowSize) => void
  displayAlert: (alertType: AlertType, msg: string) => void
  clearAlert: () => void
  toggleDarkMode: () => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  changeWindowSize: () => null,
  displayAlert: () => null,
  clearAlert: () => null,
  toggleDarkMode: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeWindowSize = (newSize: WindowSize) => {
    dispatch({ type: ActionType.UPDATE_WINDOW_SIZE, payload: { newSize } })
  }

  const displayAlert = (alertType: AlertType, msg: string) => {
    dispatch({ type: ActionType.SHOW_ALERT, payload: { alertType, msg } })
    clearAlert()
  }

  const clearAlert = (time = 2000) => {
    setTimeout(() => {
      dispatch({ type: ActionType.CLEAR_ALERT })
    }, time)
  }

  const toggleDarkMode = () => {
    dispatch({ type: ActionType.TOGGLE_DARK_MODE })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeWindowSize,
        displayAlert,
        clearAlert,
        toggleDarkMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext) as AppContextInterface
}

export { AppContextProvider, useAppContext }
