import { Route, Routes } from 'react-router'
import './App.css'
import { Rebus } from './Rebus'
import { Final } from './Final'

function App() {
  const rebusWord = import.meta.env.REBUS_WORD || '777'
  console.log({ rebusWord })

  return (
    <Routes>
      <Route path={'/alfa-rebus/'} element={<Rebus />} />
      <Route path={'/alfa-rebus/' + rebusWord} element={<Final />} />
    </Routes>
  )
}

export default App
