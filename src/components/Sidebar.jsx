import { EnvelopeSimple, InstagramLogo } from 'phosphor-react';
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
        <span>Developer Fullstack</span>
        <span className={styles.linha}/>
        <span><EnvelopeSimple size={20}/> contato@danilocgomes.dev</span>
        <span> <InstagramLogo size={20} />danilocgomes.dev</span>
        </div>
    </aside>
  );
}