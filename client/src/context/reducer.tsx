import { ActionType } from './actions'
import { StateInterface, AlertType, AppMode } from './appContext'

type Action =
  | { type: ActionType.TOGGLE_DARK_MODE }
  | {
      type: ActionType.SHOW_ALERT
      payload: { alertType: AlertType; msg: string }
    }
  | { type: ActionType.CLEAR_ALERT }
  | { type: ActionType.CHANGE_APP_MODE; payload: { mode: AppMode } }

const reducer = (state: StateInterface, action: Action): StateInterface => {
  switch (action.type) {
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
    case ActionType.CHANGE_APP_MODE:
      return {
        ...state,
        mode: action.payload.mode
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default reducer
