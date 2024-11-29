import './home.css'

import { Link, useLocation } from 'react-router-dom'

import { Logo } from '../../components/Logo'

export function Home() {
  return (
    <section className="wrapper d-flex vh-100 text-center bg-light">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="">
          <div>
            <Logo className="h3 float-md-start mb-0" />

            <nav className="nav nav-masthead justify-content-center float-md-end">

              <a class="btn btn-light fw-bold text-primary-emphasis" href="#" role="button">Home</a>

              <a class="btn btn-light fw-bold text-primary-emphasis" href="/signin" role="button">Entrar</a>

              <a class="btn btn-light fw-bold text-primary-emphasis" href="/signup" role="button">Cadastre-se</a>

            </nav>
          </div>
        </header>

        <main className="mt-auto mb-auto text-primary-emphasis">
          <h1>Meus Livros</h1>

          <p className="lead text-primary-emphasis">
          Registre sua experiência de leitura: registre, gerencie e organize 
          seus livros em uma lista de leitura, com tudo salvo e sincronizado na nuvem.
          </p>
        </main>
      </div>
    </section>
  )
}
