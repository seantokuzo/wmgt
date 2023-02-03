import { CourseAlias } from 'data/course-data/wmgt-course-data'
import { createContext, useReducer, useContext } from 'react'
import { ActionType } from './actions'
import reducer from './reducer'

export type WindowSize = { width: number; height: number }
export type AlertType = 'danger' | 'success' | ''

export interface StateInterface {
  windowSize: WindowSize
  darkMode: boolean
  isLoading: boolean
  showAlert: boolean
  alertType: AlertType
  alertText: string
  userPlayer: string
  selectedCourse: CourseAlias | ''
}

const localUser = localStorage.getItem('userPlayer')

export const initialState: StateInterface = {
  windowSize: { width: window.innerWidth, height: window.innerHeight },
  darkMode: true,
  isLoading: false,
  showAlert: false,
  alertType: '',
  alertText: '',
  userPlayer: localUser ? JSON.parse(localUser) : '',
  selectedCourse: ''
}

interface AppContextInterface extends StateInterface {
  chooseUserPlayer: (userPlayer: string) => void
  chooseCourse: (course: CourseAlias | '') => void
  changeWindowSize: (newSize: WindowSize) => void
  displayAlert: (alertType: AlertType, msg: string) => void
  clearAlert: () => void
  toggleDarkMode: () => void
}

const AppContext = createContext<AppContextInterface>({
  ...initialState,
  chooseUserPlayer: () => null,
  chooseCourse: () => null,
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

  const chooseCourse = (course: CourseAlias | '') => {
    dispatch({ type: ActionType.SELECT_COURSE, payload: { selectedCourse: course } })
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
        chooseCourse,
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
