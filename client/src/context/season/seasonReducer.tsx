import { SeasonActionType } from './seasonActions'
import { RoundDetailsMode, SeasonStateInterface } from './seasonContext'

type Action =
  | {
      type: SeasonActionType.CHANGE_ROUND_DETAILS_MODE
      payload: { newMode: RoundDetailsMode }
    }
  | { type: SeasonActionType.TOGGLE_COURSE }
  | { type: SeasonActionType.TOGGLE_SCORE_TRACKER }

const seasonReducer = (state: SeasonStateInterface, action: Action): SeasonStateInterface => {
  switch (action.type) {
    case SeasonActionType.CHANGE_ROUND_DETAILS_MODE:
      return {
        ...state,
        roundDetailsMode: action.payload.newMode
      }
    case SeasonActionType.TOGGLE_COURSE:
      return {
        ...state,
        showEasyCourse: !state.showEasyCourse
      }
    case SeasonActionType.TOGGLE_SCORE_TRACKER:
      return {
        ...state,
        showScoreTracker: !state.showScoreTracker
      }
    default:
      throw new Error(`No such action: ${action}`)
  }
}

export default seasonReducer
