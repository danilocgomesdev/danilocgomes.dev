import styles from './Header.module.css';

import igniteLogo from '../assets/logodanilo.png'

export function Header(){
    return (
        <header className={styles.header}>
            <span>danilocgomes.dev</span>
        </header>
    )
}