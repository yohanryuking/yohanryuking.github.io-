import React, { useEffect, useRef, useState } from "react";
import "./catalogo.css";
import "./catalogoR.css";
import imglayf from "../assets/layf.png";
import Nav from "./Nav";

const Catalogo = () => {
  // estructuras
  const productos = [
    { nombre: "Elefante", cat: "flores medianas" },
    { nombre: "muneca rubia", cat: "flores medianas" },
    { nombre: "animales", cat: "tulipanes" },
    { nombre: "spiderman", cat: "tulipanes" },
    { nombre: "perrito", cat: "tulipanes" },
    { nombre: "godzilla", cat: "bucaros pequenos" },
    { nombre: "unicornio", cat: "bucaros pequenos" },
    { nombre: "mini", cat: "bucaros pequenos" },
    { nombre: "animales x2", cat: "pareja de captus" },
    { nombre: "animales x2", cat: "pareja de captus" },
    { nombre: "ironman", cat: "escultura de enamorados" },
    { nombre: "mario", cat: "escultura de enamorados" },
    { nombre: "mamä osa", cat: "escultura de enamorados" },
    { nombre: "muneco de nieve", cat: "cuadro de parejas" },
    { nombre: "gatico", cat: "cuadro de parejas" },
    { nombre: "girafa", cat: "cuadro de parejas" },
    { nombre: "perrito", cat: "cintillos para ninas" },
    { nombre: "yoda", cat: "cintillos para ninas" },
    { nombre: "lady bougt", cat: "cintillos para ninas" },
    { nombre: "miraculos", cat: "cintillos para ninas" },
    { nombre: "gaticox2", cat: "carruseles para bb" },
    { nombre: "mario", cat: "carruseles para bb" },
    { nombre: "mujer", cat: "carruseles para bb" },
    { nombre: "cap america", cat: "carruseles para bb" },
    { nombre: "coneja", cat: "carruseles para bb" },
    { nombre: "pocoyo", cat: "carruseles para bb" },
    { nombre: "muneca", cat: "cuadros decorativos" },
    { nombre: "sirenita ariel", cat: "cuadros decorativos" },
    { nombre: "gato negro", cat: "cuadros decorativos" },
    { nombre: "yodax2", cat: "cuadros personales" },
    { nombre: "yodax3", cat: "cuadros familiares" },
    { nombre: "munecax2", cat: "cuadros familiares" },
    { nombre: "doctora rubia", cat: "cuadro de parejas" },
    { nombre: "granjeros", cat: "cuadro de parejas" },
    { nombre: "happy", cat: "cuadro de parejas" },
    { nombre: "cohala", cat: "cuadro de parejas" },
    { nombre: "costurera", cat: "cuadro de parejas" },
    { nombre: "costurerax2", cat: "amigurumis personalizados" },
    { nombre: "el pidio", cat: "amigurumis personalizados" },
    { nombre: "el pidio", cat: "amigurumis personalizados" },
    { nombre: "mohana", cat: "amigurumis personalizados" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "cuadros para" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "llaveros personalizados" },
    { nombre: "mohana", cat: "captus amigurumis" },
    { nombre: "mohana", cat: "captus tejidos pequenos" },
    { nombre: "mohana", cat: "captus tejidos pequenos" },
    { nombre: "mohana", cat: "captus grandes a crochet" },
    { nombre: "mohana", cat: "captus grandes a crochet" },
    { nombre: "mohana", cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", cat: "cuadros decorativos para el hogar" },
    { nombre: "mohana", cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", cat: "Decoraciones tejidas temática café" },
    { nombre: "mohana", cat: "Amigurumis especiales" },
    { nombre: "mohana", cat: "Amigurumis especiales" },
    { nombre: "mohana", cat: "Amigurumis especiales" },
    { nombre: "mohana", cat: "Amigurumis especiales" },
    { nombre: "mohana", cat: "Amigurumis especiales" },
    { nombre: "mohana", cat: "" },
    { nombre: "mohana", cat: "Frascos decorados a crochet" },
    { nombre: "mohana", cat: "Frascos decorados a crochet" },
    { nombre: "mohana", cat: "Frascos decorados a crochet" },
    { nombre: "mohana", cat: "Frascos decorados a crochet" },
    { nombre: "mohana", cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", cat: "Flores decorativas macetas pequeñas " },
    { nombre: "mohana", cat: "Flor invertida" },
    { nombre: "mohana", cat: "Flor invertida" },
    { nombre: "mohana", cat: "Flor invertida" },
    { nombre: "mohana", cat: "Flor invertida" },
    { nombre: "mohana", cat: "Suculentas" },
    { nombre: "mohana", cat: "Suculentas" },
    { nombre: "mohana", cat: "Suculentas" },
    { nombre: "mohana", cat: "Suculentas" },
    { nombre: "mohana", cat: "Terrarios a crochet" },
    { nombre: "mohana", cat: "Terrarios a crochet" },
    { nombre: "mohana", cat: "Terrarios a crochet" },
    { nombre: "mohana", cat: "Terrarios a crochet" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Flores decorativas" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Marcadores para libros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Llaveros" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Decoraciones para estetoscopio" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Llaveros de ojos turcos" },
    { nombre: "mohana", cat: "Carteras medíanas" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Bolsos para móviles" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Aretes tejidos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis medianos" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis pequeños" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis grandes" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
    { nombre: "mohana", cat: "Amigurumis promedio" },
  ];

  const subcate = [
    { nombre: "amigurumis pequeños", padre: "Amigurumis" },
    { nombre: "amigurumis grandes", padre: "Amigurumis" },
    { nombre: "amigurumis medianos", padre: "Amigurumis" },
    { nombre: "amigurumis promedios", padre: "Amigurumis" },
    { nombre: "amigurumis especiales", padre: "Amigurumis" },
    { nombre: "tulipanes en macetas y bucaros", padre: "Para El Hogar" },
    { nombre: "terrarios a crochet", padre: "Para El Hogar" },
    { nombre: "suculentas a crochet", padre: "Para El Hogar" },
    { nombre: "frascos decorados a crochet", padre: "Para El Hogar" },
    { nombre: "flores decorativas (búcaros pequeños)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas pequeñas)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas medianas)", padre: "Para El Hogar" },
    { nombre: "flores decorativas (macetas grandes)", padre: "Para El Hogar" },
    { nombre: "flor invertida", padre: "Para El Hogar" },
    { nombre: "decoraciones tejidas tematica café", padre: "Para El Hogar" },
    { nombre: "caudros decorativos para el hogar", padre: "Para El Hogar" },
    { nombre: "cactus tejios pequeños", padre: "Para El Hogar" },
    { nombre: "cactus grandes a crochet", padre: "Para El Hogar" },
    { nombre: "cactus amigurumi", padre: "Para El Hogar" },
    { nombre: "llaveros", padre: "Personalizar" },
    { nombre: "cuadros personales", padre: "Personalizar" },
    { nombre: "cuadros para bebes", padre: "Personalizar" },
    { nombre: "cuadros familiares", padre: "Personalizar" },
    { nombre: "cuadros de parejas", padre: "Personalizar" },
    { nombre: "amigurumis personalizado", padre: "Personalizar" },
    { nombre: "pareja de cactus", padre: "Especiales Para Parejas" },
    { nombre: "escultura de enamorados", padre: "Especiales Para Parejas" },
    {
      nombre: "cuadros decorativos para parejas",
      padre: "Especiales Para Parejas",
    },
    { nombre: "marcadores para libros", padre: "Accesorios" },
    { nombre: "llaveros", padre: "Accesorios" },
    { nombre: "decoraciones para estetoscopios", padre: "Accesorios" },
    { nombre: "coleccion de llaveros de ojos turcos", padre: "Accesorios" },
    { nombre: "carteras medianas", padre: "Accesorios" },
    { nombre: "bolsos para moviles", padre: "Accesorios" },
    { nombre: "aretes tejidos", padre: "Accesorios" },
    {
      nombre: "cuadros decorativos para habitaciones",
      padre: "Para Los Pequeños",
    },
    { nombre: "cintillos apar niñas", padre: "Para Los Pequeños" },
    { nombre: "carruseles para la cuna del bebe", padre: "Para Los Pequeños" },
  ];

  // funciones
  const cambio = (e) => {
    console.log(cate);
    setCate(String(e.target.firstChild.nodeValue));
    console.log(cate);
  };

  const abrir = (e) => {
    cambio(e);
    refmodal.current.classList.add("mostrar");
    // setSubcat(cate);
    setPosi(window.scrollY);
    setTimeout(arriba, 100);
  };

  const cambiar = (e) => {
    cerrar();
    console.log(subcat);
    setSubcat(e.target.firstChild.nodeValue);
    console.log(subcat);
  }


  const arriba = () => {
    window.scroll(0, 0);
  };

  const abajo = () => {
    window.scroll(0, posi);
  };

  const cerrar = () => {
    refmodal.current.classList.remove("mostrar");
    setTimeout(abajo, 100);
  };

  // use ref
  const refmodal = useRef();
  const subme = useRef();

  // use state
  const [cate, setCate] = useState("Amigurumis");
  const [subcat, setSubcat] = useState("amigurumis promedios");
  const [mostra, setMostra] = useState(
    subcate
      .filter((valor) => valor.padre == cate)
      .map((valor) => (
        <li
          key={valor.nombre}
          onClick={cambiar}
          className="subMenu_ul spr arial texto botones__cont"
        >
          {valor.nombre}
        </li>
      ))
  );
  const [posi, setPosi] = useState(0);
  const [productosA, setProductosA] = useState(
    productos
      .filter((valor) => valor.cat == subcat)
      .map((valor) => (
        <div className="card spr" key={valor.img}>
          <img className="card__img" src={valor.img} alt="" />
          <div className="card__content">
            <p className="card__text text">{valor.nombre}</p>
            <p className="card__text text">Precio</p>
            <p className="abrirModal" onClick={abrir}>
              <svg
                fill="rgb(102, 204, 102)"
                xmlns="http://www.w3.org/2000/svg"
                width="3vw"
                height="3vw"
                viewBox="0 0 24 24"
              >
                <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                <circle cx="10.5" cy="19.5" r="1.5" />
                <circle cx="16.5" cy="19.5" r="1.5" />
              </svg>
            </p>
          </div>
        </div>
      ))
  );

  useEffect(() => {
    setProductosA(
      productos
        .filter((valor) => valor.cat == subcat)
        .map((valor) => (
          <div className="card spr" key={valor.img}>
            <img className="card__img" src={valor.img} alt="" />
            <div className="card__content">
              <p className="card__text text">{valor.nombre}</p>
              <p className="card__text text">Precio</p>
              <p className="abrirModal" onClick={abrir}>
                <svg
                  fill="rgb(102, 204, 102)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="3vw"
                  height="3vw"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                  <circle cx="10.5" cy="19.5" r="1.5" />
                  <circle cx="16.5" cy="19.5" r="1.5" />
                </svg>
              </p>
            </div>
          </div>
        ))
    );
  }, [cate]);

  useEffect(() => {
    setMostra(subcate
      .filter((valor) => valor.padre == cate)
      .map((valor) => (
        <li
          key={valor.nombre}
          onClick={cambiar}
          className="subMenu_ul spr arial texto botones__cont"
        >
          {valor.nombre}
        </li>
      )));
  }, [cate]);

  return (
    <>
      <Nav></Nav>
      <div className="containerCatalogo">
        <h2 className="subTitle spr">Catálogo</h2>
        <p className="text spr">Descubra nuestros maravillósos productos</p>
        <br />
        <div className="botones spr">
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Amigurumis
            </p>
          </div>
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Personalizar
            </p>
          </div>
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Para El Hogar
            </p>
          </div>
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Especiales Para Parejas
            </p>
          </div>
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Accesiorios
            </p>
          </div>
          <div className="botones__cont spr arial texto">
            <p onClick={abrir} className="peque">
              Para Los Pequeños
            </p>
          </div>
        </div>
        <p className="text subrayado spr">{cate}</p>
        <div className="cardSection">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          {productosA}
          <div className="modalContainer" ref={refmodal}>
            <div className="modal">
              <button className="cerrarModal" onClick={cerrar}>
                X
              </button>
              <ul className="submenu">{mostra}</ul>
              <button className="botonModal">continuar</button>
            </div>
          </div>
        </div>
        <div className="layf__marca spr">
          <img src={imglayf} alt="" className="layf" />
        </div>
      </div>
    </>
  );
};

export default Catalogo;
