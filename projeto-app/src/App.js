import React from 'react'
import Previsao from './componentes/Previsao/Previsao'
import Contador from './componentes/Contador/Contador'
import Comentarios from './componentes/Comentarios/Comentarios'
import comentarios from './dados/comentarios'



class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (

      <div className="container">
        <Previsao />
        <Contador />
        <div className="comentarios">
          {
            comentarios.map((comentario) => (
              <Comentarios
                nome={comentario.autora.nome}
                imagem={comentario.autora.imagem}
                subtitulo={comentario.subtitulo}
                texto={comentario.texto}
              />
            ))
          }
        </div>
      </div>
    )
  }
}


export default App;