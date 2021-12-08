import React, { useState } from 'react';
import {SafeAreaView} from 'react-native';
import Perfil from './pages/Perfil/Home';
import Pedidos from './pages/Pedidos/Home';
import Header from './components/Header';
import global from './global.js';


const App = () => {
  const [pedidosAtivo, setPedidosAtivo] = useState(true);
  const [perfilAtivo, setPerfilAtivo] = useState(false);

  function handleSetPedidosAtivo() {
    if(!pedidosAtivo) {
      setPerfilAtivo(false);
      setPedidosAtivo(true);
    }
  }

  function handleSetPerfilAtivo() {
    if(!perfilAtivo) {
      setPedidosAtivo(false);
      setPerfilAtivo(true);
    }
  }

  return (
    <SafeAreaView style={global.containerGlobal}>
      {pedidosAtivo ? <Pedidos /> : null}
      {perfilAtivo ? <Perfil /> : null}
      <Header pedidosAtivo={pedidosAtivo} perfilAtivo={perfilAtivo} handleSetPedidosAtivo={handleSetPedidosAtivo} handleSetPerfilAtivo={handleSetPerfilAtivo}/>
    </SafeAreaView>
    
  );
};

export default App;
