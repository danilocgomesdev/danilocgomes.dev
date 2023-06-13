import styles from './Introducao.module.css';

export function Introducao() {
  return (
    <article className={styles.post}>
     <div className={styles.content}>
      <h3>Bem-vindo(a) ao meu site! </h3>
        <p>Sou Analista Sênior apaixonado por criar soluções 
          inovadoras que impulsionam negócios e melhoram a vida das pessoas. Com uma combinação única
           de habilidades técnicas e criatividade, estou comprometido em transformar conceitos em 
           realidade digital.</p>
        <p>Com anos de experiência no desenvolvimento de software, estou sempre buscando estar na vanguarda 
          das tecnologias emergentes e tendências do setor. Minha paixão por programação e resolução de 
          problemas me levou a dominar diversas linguagens de programação, frameworks e ferramentas. 
          Isso me permite oferecer soluções personalizadas e escaláveis que atendem às necessidades 
          específicas dos meus clientes.</p>
        <p>
        Segue abaixo um pouco das minhas experiências profissionais.
        </p>
      </div>
      
    </article>
  )
}