import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/50583232?s=460&u=727345b5339659ca284f3d9b8947baf1d13de741&v=4" alt="Pedro Maranini"/>
                    <div>
                        <strong>Pedro Maranini</strong>
                        <span>Matemática</span>
                    </div>
            </header>
                <p>
                    Professor de Matemática.
                <br /> <br />
                    Mias de 10 anos como professor de Matemática
                </p>

                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatss App" />
                            Entrar em contato
                    </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;