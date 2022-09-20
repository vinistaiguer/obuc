import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Bolos from './Components/Bolos/Bolos.jsx';
import KitPresente from './Components/KitPresente/KitPresente.jsx';
import Perfil from './Components/PerfilUsuario/perfil.jsx';
import DadosPerfil from './Components/PerfilUsuario/DadosPerfil/index.jsx';
import MinhasCompras from './Components/PerfilUsuario/MinhasCompras/index.jsx';
import MeusProdutos from './Components/PerfilUsuario/MeusProdutos/index.jsx';
import Favoritos from './Components/PerfilUsuario/Favoritos/index.jsx';
import Pagamento from './Components/PerfilUsuario/Pagamento/index.jsx';
import Configuracoes from './Components/PerfilUsuario/Configuracoes/index.jsx';
import Ajuda from './Components/PerfilUsuario/Ajuda/index.jsx';
import TrabalheConosco from './Components/TrabalheConosco/TrabalheConosco.jsx';
import RegistroVaga from './Components/RegistroVaga/RegistroVaga.jsx';

import './App.css'




const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/kit-presente" element={<KitPresente />}/>
          <Route path="/"exact element={<Bolos />}/>
          <Route path="/trabalhe-conosco"element={<TrabalheConosco />}/>
          <Route path="/registro-vaga"element={<RegistroVaga />}/>
          <Route path="/perfil" element={<Perfil />}>
            <Route index element={<DadosPerfil />}/>
            <Route path="minhas-compras" element={<MinhasCompras />}/>
            <Route path="meus-produtos" element={<MeusProdutos />}/>
            <Route path="favoritos" element={<Favoritos />}/>
            <Route path="pagamentos" element={<Pagamento />}/>
            <Route path="configuracoes" element={<Configuracoes />}/>
            <Route path="ajuda" element={<Ajuda />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    );
}

export default App