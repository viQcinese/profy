import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">

      <header>
        <img src="https://avatars2.githubusercontent.com/u/65465930?s=460&u=f62ac43766224a5e661d78b2d39ba469ac3de51c&v=4" alt="Vitor Senise"/>

        <div>
          <strong>Vitor Senise</strong>
          <span>Filosofia</span>
        </div>
      </header>

      <p>
        Um textão muito louco com muitas coisas loucas <br/>
        Mais texto. Olha só quanto texto. Me texto, é texto demais, Brasil...
      </p>

      <footer>
        <p>
          Preço/hora 
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem