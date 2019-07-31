import Link from 'next/link'
import { useMemo } from 'react'
import { Flexbox } from 'styled'
import { useDispatch } from 'redux-react-hook'
import { jason } from 'actions'
import useJasonWorkType from '../../hooks/useJasonWorkType'
export default function HomeView () {
  const dispatch = useDispatch()
  const type = useJasonWorkType()
  return useMemo(
    () => {
      return (
        <>
          <Flexbox>
            JASON
          </Flexbox>
          <button onClick={() => dispatch(jason.changeType())}>changeType</button>
          <Flexbox>
            {/* {API_URL} */}
            {type}
          </Flexbox>
          <Link href='route'>to route</Link>
        </>
      )
    },
    [type]
  )
}
