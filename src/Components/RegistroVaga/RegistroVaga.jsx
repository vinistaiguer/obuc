import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import * as jsPDF from 'jspdf';

import { useForm } from "react-hook-form";

import "./CSS/styles.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function RegistroVaga() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // const getForm =  (data) => {
    
  // }

    
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.tituloCargo) {
      const tituloCargo = data.tituloCargo;
      console.log(tituloCargo)
      document.getElementById("campoUm").innerText = tituloCargo
    }
    if (data.habilidades) {
      const habilidades = data.habilidades;
      console.log(habilidades)
      document.getElementById("campoDois").innerText = habilidades
    }
    if (data.atividades) {
      const atividades = data.atividades;
      console.log(atividades)
      document.getElementById("campoTres").innerText = atividades
    }
    else if (data.salario) {
      const salario = data.salario;
      console.log(salario)
      document.getElementById("campoQuatro").innerText = salario
    }
    if (data.beneficios) {
      const beneficios = data.beneficios;
      console.log(beneficios)
      document.getElementById("campoCinco").innerText = beneficios
    }
    if (data.etapas) {
      const etapas = data.etapas;
      console.log(etapas)
      document.getElementById("campoSeis").innerText = etapas
    }
    if (data.experiencia) {
      const experiencia = data.experiencia;
      console.log(experiencia)
      document.getElementById("campoSete").innerText = experiencia
    }

    var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'cm',
      format: 'letter'
    })
    doc.setFontSize(40);
    doc.text(35, 25, "VAGA DE EMPREGO");
    doc.save('a4.pdf')
    doc.getElementById('card_vaga')
    
  };
  return (
    <>
        <NavBar />
        <form className="form_trabalhe" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_bg">
                <Row className="form_input">

                    <h1>Registro de Vaga</h1>
                    <Col>
                        <label htmlFor="tituloCargo">Título do cargo</label>
                        <input
                        htmlFor="cargo"
                        placeholder="Título do cargo"
                        type="text"
                        {...register("tituloCargo")}
                        />
                        
                        <label htmlFor="habilidades">Habilidades necessárias</label>
                        <textarea
                          className="form_text_area form_text_area_height"
                          placeholder="Habilidades necessárias"
                          type="text"
                          {...register("habilidades")}
                        />

                        <label htmlFor="atividades">Atividades que o cargo exerce</label>
                        <textarea
                          className="form_text_area form_text_area_height"
                          placeholder="Atividades que o cargo exerce"
                          type="text"
                          {...register("atividades")}
                        />
                    </Col>

                    <Col>
                        <label htmlFor="salario">Salário</label>
                        <input
                        placeholder="Salário"
                        type="text"
                        {...register("salario")}
                        />

                        <label htmlFor="beneficio">Benefícios do cargo</label>
                        <textarea
                        className="form_text_area form_text_area_height"
                        placeholder="Benefícios do cargo"
                        type="text"
                        {...register("beneficios")}
                        />

                        <label htmlFor="etapas">Etapas do processo</label>
                        <textarea
                        className="form_text_area form_text_area_height"
                        placeholder="Etapas do processo"
                        type="text"
                        {...register("etapas")}
                        />
                    </Col>
                    
                    <Row>
                        <label htmlFor="experiencia">Experiência necessária</label>
                        <textarea
                        className="form_text_area form_text_area_en"
                        placeholder="Experiência necessária"
                        type="text"
                        {...register("experiencia")}
                        />
                    </Row>

                    <div style={{ color: "red" }}>
                      {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>
                    <input className="form_button_submit" type="submit" />
                </Row>
                <Col id="card_vaga">
                  <h1 id="campoUm"></h1>
                  <ul className="ul_vagas">
                    <li id="campoDois"></li>
                    <li id="campoTres"></li>
                    <li id="campoQuatro"></li>
                    <li id="campoCinco"></li>
                    <li id="campoSeis"></li>
                    <li id="campoSete"></li>
                  </ul>

                </Col>
            </div>
        </form>


        <Footer />
    </>
  );
}

