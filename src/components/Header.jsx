import styles from './Header.module.css';

import igniteLogo from '../assets/logodanilo.png'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <strong>danilocgomes.dev</strong>
        </header>
    )
}