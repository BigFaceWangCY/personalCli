import { useCallback } from 'react'
import { useMappedState } from 'redux-react-hook'

export default function useJasonWorkType () {
  const mapState = useCallback(
    state => ({
      workType: state.jason.worktype
    }),
    []
  )
  const { workType } = useMappedState(mapState)
  return workType
}
