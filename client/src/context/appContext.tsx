import { createContext, useReducer, useContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'
import { courseData, CourseInterface } from 'data/course-data/wmgt-course-data'

export type WindowSize = { width: number; height: number }
export type AlertType = 'danger' | 'success' | ''

export interface StateInterface {
  userPlayer: string
  windowSize: WindowSize
  darkMode: boolean
  courseData: CourseInterface[]
  isLoading: boolean
  showAlert: boolean
  alertType: AlertType
  alertText: string
}

const localUser = localStorage.getItem('userPlayer')

export const initialState: StateInterface = {
  userPlayer: localUser ? JSON.parse(localUser) : '',
  windowSize: { width: window.innerWidth, height: window.innerHeight },
  darkMode: true,
  courseData: courseData,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: ''
}

interface AppContextInterface extends StateInterface {
  chooseUserPlayer: (userPlayer: string) => void
  changeWindowSize: (newSize: WindowSize) => void
  displayAlert: (alertType: AlertType, msg: string) => void
  clearAlert: () => void
  toggleDarkMode: () => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  chooseUserPlayer: () => null,
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

  const chooseUserPlayer = (userPlayer: string) => {
    dispatch({ type: ActionType.CHOOSE_USER_PLAYER, payload: { userPlayer } })
    localStorage.setItem('userPlayer', JSON.stringify(userPlayer))
  }

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
        chooseUserPlayer,
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
