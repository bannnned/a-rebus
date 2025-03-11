import { Route, Routes } from 'react-router'
import './App.css'
import { Rebus } from './Rebus'
import { Final } from './Final'
import { PATH_PREFIX } from './constants'

function App() {
  const rebusWord = import.meta.env.REBUS_WORD || '777'
  console.log({ rebusWord, PATH_PREFIX })

  return (
    <Routes>
      <Route path={PATH_PREFIX} element={<Rebus />} >
        <Route path={rebusWord} element={<Final />} />
      </Route>
    </Routes>
  )
}

export default App
