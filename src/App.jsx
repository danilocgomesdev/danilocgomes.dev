import { useState } from 'react';

import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Introducao } from './components/Introducao';
import { Comment } from './components/Comment';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <Introducao />
      </div>
    </div>
  )
}

export default App
