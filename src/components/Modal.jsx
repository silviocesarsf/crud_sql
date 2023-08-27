import React, { useState, useEffect } from "react";
import Textfield from "./Textfield";
import Button from "./Button";
import axios from "axios";

const Modal = ({ setIsModalOpen }) => {
  const [values, setValues] = useState();

  const handleClose = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsModalOpen(false);
  };

  const handleChangeValues = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/post", {
        nome: values.nome,
        telefone: values.telefone,
        endereco: values.endereco,
        email: values.email,
        senha: values.senha,
      })
      .then((response) => {
        console.log(response);
        setIsModalOpen(false);
      });
  };

  useEffect(() => {
    console.log(values);
  });

  return (
    <div className="bg-black/20 fixed flex items-center justify-center w-full min-h-screen z-20">
      <form
        className="shadow-lg rounded-lg w-[50%] min-h-[60vh] bg-white p-5 flex flex-col items-center justify-center gap-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl mb-4 font-medium">Cadastrar usuário</h1>
        <div className="flex items-center justify-between w-full gap-3">
          <Textfield
            onChange={handleChangeValues}
            id="nome"
            type="text"
            placeholder="Nome"
          />
          <Textfield
            onChange={handleChangeValues}
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center justify-between w-full gap-3">
          <Textfield
            onChange={handleChangeValues}
            id="telefone"
            type="tel"
            placeholder="Telefone"
          />
          <Textfield
            onChange={handleChangeValues}
            id="endereco"
            type="text"
            placeholder="Endereco"
          />
        </div>
        <Textfield
          onChange={handleChangeValues}
          id="senha"
          type="password"
          placeholder="Senha"
        />
        <Button type="submit" onClick={handleSubmit}>
          Cadastrar
        </Button>
      </form>
    </div>
  );
};

export default Modal;
