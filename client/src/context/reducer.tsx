import { ActionType } from './actions'
import { StateInterface, AlertType, WindowSize } from './appContext'

type Action =
  | {
      type: ActionType.CHOOSE_USER_PLAYER
      payload: { userPlayer: string }
    }
  | { type: ActionType.TOGGLE_DARK_MODE }
  | {
      type: ActionType.SHOW_ALERT
      payload: { alertType: AlertType; msg: string }
    }
  | { type: ActionType.CLEAR_ALERT }
  | {
      type: ActionType.UPDATE_WINDOW_SIZE
      payload: { newSize: WindowSize }
    }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
    case ActionType.CHOOSE_USER_PLAYER:
      return {
        ...state,
        userPlayer: action.payload.userPlayer
      }
    case ActionType.UPDATE_WINDOW_SIZE:
      return {
        ...state,
        windowSize: action.payload.newSize
      }
    case ActionType.SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: action.payload.alertType,
        alertText: action.payload.msg
      }
    case ActionType.CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: ''
      }
    case ActionType.TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
