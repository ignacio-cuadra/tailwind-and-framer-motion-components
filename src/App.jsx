import { useState } from 'react'
import Card from './components/tfmc/Card'
import Table from './components/tfmc/Table'

function App() {
  return (
    <div className="h-full bg-slate-300 p-5">
      <div className='container mx-auto'>
        <div className="my-5 w-[400px]">
          <Card />
        </div>
        <div className="my-5">
          <Table />
        </div>
      </div>
    </div>
  )
}

export default App
