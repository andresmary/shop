import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className="container-xxl d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-10 py-3">
          <div>
            <nav>
              <a href="https://careers-meli.mercadolibre.com/?utm_campaign=site-mla&amp;utm_source=mercadolibre&amp;utm_medium=mercadolibre">
                Trabajá con nosotros
              </a>
              <a href="https://www.mercadolibre.com.ar/ayuda/terminos-y-condiciones-de-uso_991">Términos y condiciones</a>
              <a href="https://www.mercadolibre.com.ar/privacidad">Cómo cuidamos tu privacidad</a>
              <a href="https://www.mercadolibre.com.ar/ayuda/18697">Información al usuario financiero</a>
              <a href="https://www.mercadolibre.com.ar/ayuda">Ayuda</a>
              <a href="https://www.mercadolibre.com.ar/ayuda/Defensa-del-Consumidor_s20014">Defensa del Consumidor</a>
            </nav>
          </div>
          <small className={styles.copyright}>Copyright ©&nbsp;1999-2021 MercadoLibre S.R.L.</small>
          <p className={styles.secondaryinfo}>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
