import React from 'react';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section id="home">
          <img 
            src="https://flixlandia.com.br/wp-content/uploads/2024/09/Shrek-humano-conheca-o-homem-que-inspirou-a-criacao-do-personagem.png" 
            alt="Shrek humano"
          />
          <h1 className='cor'>Bem-vindo a Seleção brasileira chamada São Paulo Futebol Clube Shrek!, maior time do brasil!</h1>

          <p>Aproveite para conheçer a historia dessa lenda do pantano </p>
          <p>Uma história bem comovente, pessoal! 😭</p>

          <iframe 
            width="400" 
            height="315"
            src="https://www.youtube.com/embed/0Kom6iiuS9E" 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </div>
  );
}

export default App;
