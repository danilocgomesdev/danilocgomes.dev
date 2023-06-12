import styles from './Post.module.css';

export function Post({dados}) {
  return (
    <article className={styles.post}>
      <header>
      <div className={styles.author}>
          <div className={styles.authorInfo}>
            <strong>{dados.empresa}</strong>
            <span>{dados.cargo}</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">{dados.periodo}</time>
      </header>

      <div className={styles.content}>
        <p>{dados.outras_informacoes}</p>
      </div>
    </article>
  )
}