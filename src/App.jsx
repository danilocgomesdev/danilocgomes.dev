import experiencias from './dados/experiencias.json';

import './global.css';
import styles from './App.module.css'
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Introducao } from './components/Introducao';
import { Post } from './components/Post';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Introducao />
          {experiencias.experiencia.map(dados => {
            return (
              <Post
                key={dados.id}
                dados={dados}
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
