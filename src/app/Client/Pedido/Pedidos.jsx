import React from "react";
import Produtos from "./Produtos/produtos";
import Footer from "../../../site/Components/footer";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Navbar from "../../Components/Navbar/navbar";

function Pedidos() {
  return (
    <div>
      <Navbar />
      <Produtos />
      <Footer />
    </div>
  );
}

export default Pedidos;
