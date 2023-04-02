import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import List from './List'
import Write from './Write'

const App = () => {
    const inputRef = useRef(1)
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<List />} />
                <Route path='board' element={<List />} />
                <Route path='write' element={<Write inputRef={inputRef} />} />
            </Route>
        </Routes>
    )
}

export default App