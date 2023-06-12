import dados from './dados/experiencias.json';

import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Introducao } from './components/Introducao';
import { Experiencias } from './components/Experiencias';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Introducao />
          {dados.experiencia.map(a => {
            return (
              <Experiencias
                key={a.id}
                dados={a}
              />
            )
          })}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
