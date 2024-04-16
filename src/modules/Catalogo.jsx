import React, { useEffect, useRef, useState } from "react";
import "./catalogo.css";
import "./catalogoR.css";
import imglayf from "../assets/layf.png";
import Nav from "./Nav";
import { Card, Button, Modal, List } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { supabase } from "../Client";

const Catalogo = () => {
  // estructuras
  const [productos, setProductos] = useState([]);
  const [subcategoriaArr, setSubcategoriaArr] = useState([]);
  const [categoriaArr, setCategoriaArr] = useState([]);
  const [subcat, setSubcat] = useState(null);

  // funciones
  const abrir = (categoria) => {
    showModal();
    setCategoriaActual(categoria);
  };

  const cambiar = (obje) => {
    setIsModalVisible(false);
    setSubcat(obje);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // use state
  const [categoriaActual, setCategoriaActual] = useState("Amigurumis");
  const [mostra, setMostra] = useState(null);
  const [productosA, setProductosA] = useState()

  useEffect(() => {
    const fetchArticulos = async () => {

      let { data, error1 } = await supabase
        .from('articulos')
        .select('*');

      if (error1) {
        console.log("Error: ", error2);
      } else {
        setProductos(data);
      }
    };

    const fetchCategoria = async () => {
      let { data, error2 } = await supabase
        .from('categorias')
        .select('*');

      if (error2) {
        console.log("Error: ", error2);
      } else {
        setCategoriaArr(data);
      }
    };

    const fetchSubcategoria = async () => {
      let { data, error3 } = await supabase
        .from('subCategoria')
        .select('*');
      if (error3) {
        console.log("Error: ", error2);
      } else {
        setSubcategoriaArr(data);
      }
    };

    fetchSubcategoria();
    fetchArticulos();
    fetchCategoria();

  }, []);

  useEffect(() => {
    setMostra(subcategoriaArr
      .filter((valor) => valor.padre === categoriaActual)
      .map((valor) => (
        <List.Item key={valor.id} style={{ listStyleType: 'none' }}>
          <Button onClick={() => cambiar(valor.subCategoria)} style={{ display: 'block', margin: '10px auto' }}>
            {valor.subCategoria}
          </Button>
        </List.Item>
      )))

    console.log(categoriaActual)

  }, [categoriaActual]);

  useEffect(() => {
    setProductosA(productos.filter((valor) => valor.categoria === subcat).map((valor) => (
      <Card
        key={valor.id} // Asegúrate de que valor.id sea único para cada elemento
        hoverable
        style={{ width: 240 }}
        cover={<img alt={valor.id} src={valor.fotoUrl} />}
      >
        <Card.Meta title={valor.precio} description="Precio" />
        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={abrir}
          style={{ marginTop: '10px' }}
        >
          Añadir al carrito
        </Button>
      </Card>
    )))

    console.log(subcat)

  }, [subcat]);

  return (
    <>
      <Nav></Nav>
      <div className="containerCatalogo">
        <h2 className="subTitle spr">Catálogo</h2>
        <p className="text spr">Descubra nuestros maravillósos productos</p>
        <br />
        <div className="botones spr">
          {
            categoriaArr.map((valor) => (
              <Button
                key={valor.id} // Asegúrate de que valor.id sea único para cada elemento
                onClick={() => abrir(valor.categorias)}
                size="large"
                style={{ fontSize: '20px' }}
              >
                {valor.categorias}
              </Button>
            ))
          }

        </div>
        <p className="text subrayado spr">{categoriaActual}</p>
        <div className="cardSection">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          {productosA}
          <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <ul className="submenu">{mostra}</ul>
          </Modal>
        </div>
        <div className="layf__marca spr">
          <img src={imglayf} alt="" className="layf" />
        </div>
      </div>
    </>
  );
};

export default Catalogo;
