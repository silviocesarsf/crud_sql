import React from "react";
import "../index.css";
import {
  AiOutlineUserAdd,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { useState } from "react";
import Modal from "../components/Modal";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);
  const [fetchData, setFetchData] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleDelete = (param) => {
    console.log("Excluiu", param);

    axios
      .delete(`http://localhost:3001/delete/${param}`)
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        setFetchData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [modalIsOpen, handleDelete]);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white">
      {modalIsOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <div className="w-[80%] min-h-[70vh] shadow-lg rounded-lg p-5 relative overflow-hidden">
        {/* Cabeçalho */}
        <div className="w-full h-[60px] flex items-center justify-center font-medium text-2xl text-white bg-gradient-to-l from-[#85b2df] to-[#c5d9fb] absolute top-0 left-0">
          CRUD
          <a
            href="#"
            onClick={handleOpenModal}
            className="cursor-pointer opacity-70 duration-100 hover:opacity-100 absolute right-5 text-4xl"
          >
            <AiOutlineUserAdd />
          </a>
        </div>
        {/* Conteúdo */}
        <div className="pt-[65px]">
          {fetchData.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Endereço</th>
                  <th>Email</th>
                  <th>Senha</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {typeof fetchData !== "undefined" &&
                  fetchData.map((data) => (
                    <tr key={data.idcrud}>
                      <td>{data.idcrud}</td>
                      <td>{data.nome}</td>
                      <td>{data.telefone}</td>
                      <td>{data.endereco}</td>
                      <td>{data.email}</td>
                      <td>{data.senha}</td>
                      <td onClick={() => handleDelete(data.idcrud)}>
                        <AiOutlineDelete />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <div className="absolute top-[50%] left-[43%] text-xl text-[#000000ab]">
              Ainda não há nada cadastrado
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
