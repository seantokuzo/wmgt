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
  viewCourse: (course: 'easy' | 'hard') => void
  toggleScoreTracker: () => void
  viewScorecard: () => void
  toggleScorecardNine: () => void
  viewFrontNine: () => void
}

const SeasonContext = createContext<SeasonContextInterface>({
  ...initialSeasonState,
  changeRoundDetailsMode: () => null,
  toggleCourse: () => null,
  viewCourse: () => null,
  toggleScoreTracker: () => null,
  viewScorecard: () => null,
  toggleScorecardNine: () => null,
  viewFrontNine: () => null
})

type Props = {
  children: JSX.Element | JSX.Element[]
}

const SeasonContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(seasonReducer, initialSeasonState)

  const changeRoundDetailsMode = (newMode: RoundDetailsMode) => {
    dispatch({ type: SeasonActionType.CHANGE_ROUND_DETAILS_MODE, payload: { newMode } })
    newMode === 'easy' && viewCourse('easy')
    newMode === 'hard' && viewCourse('hard')
  }

  const toggleCourse = () => {
    dispatch({ type: SeasonActionType.TOGGLE_COURSE })
  }

  const viewCourse = (course: 'easy' | 'hard') => {
    dispatch({ type: SeasonActionType.VIEW_COURSE, payload: { showEasy: course === 'easy' } })
  }

  const toggleScoreTracker = () => {
    dispatch({ type: SeasonActionType.TOGGLE_SCORE_TRACKER })
  }

  const viewScorecard = () => {
    console.log('viewScorecard')

    dispatch({ type: SeasonActionType.VIEW_SCORECARD })
  }

  const toggleScorecardNine = () => {
    dispatch({ type: SeasonActionType.TOGGLE_SCORECARD_NINE })
  }

  const viewFrontNine = () => {
    dispatch({ type: SeasonActionType.VIEW_FRONT_NINE })
  }

  return (
    <SeasonContext.Provider
      value={{
        ...state,
        changeRoundDetailsMode,
        toggleCourse,
        viewCourse,
        toggleScoreTracker,
        viewScorecard,
        toggleScorecardNine,
        viewFrontNine
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
