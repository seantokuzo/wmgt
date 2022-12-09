import { createContext, useReducer, useContext } from 'react'
import { SeasonActionType } from './seasonActions'
import seasonReducer from './seasonReducer'

export type RoundDetailsMode = 'full' | 'easy' | 'hard' | 'aces' | 'coconuts' | 'race'

export interface SeasonStateInterface {
  roundDetailsMode: RoundDetailsMode
  showEasyCourse: boolean
  showScoreTracker: boolean
  showFrontNine: boolean
}

export const initialSeasonState: SeasonStateInterface = {
  roundDetailsMode: 'full',
  showEasyCourse: true,
  showScoreTracker: false,
  showFrontNine: true
}

interface SeasonContextInterface extends SeasonStateInterface {
  changeRoundDetailsMode: (newMode: RoundDetailsMode) => void
  toggleCourse: () => void
  toggleScoreTracker: () => void
  toggleScorecardNine: () => void
}

const SeasonContext = createContext<SeasonContextInterface>({
  ...initialSeasonState,
  changeRoundDetailsMode: () => null,
  toggleCourse: () => null,
  toggleScoreTracker: () => null,
  toggleScorecardNine: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const SeasonContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(seasonReducer, initialSeasonState)

  const changeRoundDetailsMode = (newMode: RoundDetailsMode) => {
    dispatch({ type: SeasonActionType.CHANGE_ROUND_DETAILS_MODE, payload: { newMode } })
  }

  const toggleCourse = () => {
    dispatch({ type: SeasonActionType.TOGGLE_COURSE })
  }

  const toggleScoreTracker = () => {
    dispatch({ type: SeasonActionType.TOGGLE_SCORE_TRACKER })
  }

  const toggleScorecardNine = () => {
    dispatch({ type: SeasonActionType.TOGGLE_SCORECARD_NINE })
  }

  return (
    <SeasonContext.Provider
      value={{
        ...state,
        changeRoundDetailsMode,
        toggleCourse,
        toggleScoreTracker,
        toggleScorecardNine
      }}
    >
      {children}
    </SeasonContext.Provider>
  )
}

const useSeasonContext = () => {
  return useContext(SeasonContext) as SeasonContextInterface
}

export { SeasonContextProvider, useSeasonContext }
