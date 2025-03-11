import { Route, Routes } from 'react-router'
import './App.css'
import { Rebus } from './Rebus'
import { Final } from './Final'

function App() {
  const rebusWord = import.meta.env.REBUS_WORD || '777'
  console.log({ rebusWord })

  return (
    <Routes>
      <Route index element={<Rebus />} />
      <Route path={rebusWord} element={<Final />} />
    </Routes>
  )
}

export default App
