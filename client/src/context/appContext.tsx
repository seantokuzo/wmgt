import { createContext, useReducer, useContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'
import { courseData, CourseInterface } from 'data/course-data/wmgt-course-data'

export type AppMode = 'menu' | 'player' | 'season' | 'course'
export type AlertType = 'danger' | 'success' | ''

export interface StateInterface {
  darkMode: boolean
  mode: AppMode
  courseData: CourseInterface[]
  isLoading: boolean
  showAlert: boolean
  alertType: AlertType
  alertText: string
}

export const initialState: StateInterface = {
  darkMode: true,
  mode: 'menu',
  courseData: courseData,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: ''
}

interface AppContextInterface extends StateInterface {
  displayAlert: (alertType: AlertType, msg: string) => void
  clearAlert: () => void
  toggleDarkMode: () => void
  changeAppMode: (mode: AppMode) => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  displayAlert: () => null,
  clearAlert: () => null,
  toggleDarkMode: () => null,
  changeAppMode: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  const changeAppMode = (mode: AppMode) => {
    dispatch({ type: ActionType.CHANGE_APP_MODE, payload: { mode } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        toggleDarkMode,
        changeAppMode
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
