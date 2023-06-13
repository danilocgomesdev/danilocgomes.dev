import { EnvelopeSimple, LinkedinLogo, GithubLogo } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';
import fundo from '../assets/fundo.jpg'

export function Sidebar(){
return (
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src={fundo} />
        <div className={styles.profile}>
        <Avatar src="https://github.com/danilocgomesdev.png" />
        <strong>Danilo Gomes</strong>
        <span>Desenvolvedor Fullstack</span>
        <span className={styles.linha}/>
        <a href='mailto:contato@danilocgomes.dev?' target='_blank'><span><EnvelopeSimple size={20}/> contato@danilocgomes.dev</span></a>
        <a href='https://github.com/danilocgomesdev/' target='_blank'><span> <GithubLogo size={20} />danilocgomesdev</span></a>
        <a href='https://www.linkedin.com/in/danilocgomesdev/' target='_blank'><span> <LinkedinLogo size={20} />danilocgomesdev</span></a>
        </div>
    </aside>
  );
}