import React from "react";
import "../index.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Modal from "../components/Modal";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [modalIsOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <table className="w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Email</th>
                <th>Senha</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>(123) 456-7890</td>
                <td>123 Main St</td>
                <td>john@example.com</td>
                <td>********</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Home;
