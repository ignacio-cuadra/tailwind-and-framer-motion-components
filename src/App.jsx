import { useState } from 'react'
import Card from './components/tfmc/Card'

function App() {
  return (
    <div className="h-full bg-slate-300 p-5">
      <div className='container mx-auto'>
        <div className="w-[400px]">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
