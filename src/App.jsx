import React, { useState } from 'react'
import Comment from './pages/Comment';

export const LangContext = React.createContext();

function App() {
  return (
    <LangContext.Provider value={[{ val: 'uz' }, { val: 'ru' }, { val: 'en' }]}>
      <Comment/>
    </LangContext.Provider>
  )
}

export default App
