import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";

import "./CSS/styles.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function TrabalheConosco() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === "bill") {
      alert(JSON.stringify(data));
    } else {
      alert("There is an error");
    }
  };
  return (
    <>
        <NavBar />
        <form className="form_trabalhe" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_bg">
                <div className="form_input">
                    <h1>Formilário de envio</h1>
                    <label htmlFor="username">Nome</label>
                    <input placeholder="Nome" {...register("username")} />

                    <label htmlFor="lastName">Sobrenome</label>
                    <input placeholder="Sobrenome" {...register("lastName")} />

                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="example@hotmail.com"
                      type="text"
                      {...register("email")}
                    />

                    <div style={{ color: "red" }}>
                      {Object.keys(errors).length > 0 &&
                        "There are errors, check your console."}
                    </div>
                    <input className="form_button_submit" type="submit" />
                </div>
            </div>
        </form>

        <Footer />
    </>
  );
}

