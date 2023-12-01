import React from 'react';
import { Menu } from './Components/menu';
import Banner from './Components/Banner';
import Features from './Components/features';
import Footer from './Components/footer'
import Servicos from './Components/servicos';
import Avaliacoes from './Components/Avaliacoes';
import './site.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Site(){
    return <div>
      <Menu/>
      <Banner/>
      <Features />
      <Avaliacoes />
      <Servicos />
      <Footer/>
    </div>;
  }

export default Site;