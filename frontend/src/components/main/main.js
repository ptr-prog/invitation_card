import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('../../assets/img/17.png')" }}>
      <a
        className="btn-responsive translate-y-72 m-6 inline-block rounded-2xl bg-pink-500 text-white no-underline border border-pink-200 px-6 py-2 text-center hover:bg-slate-700 transition duration-300"
        href="/form"
      >
        OPEN INVITATION
      </a>
    </div>
  );
};

export default Main;
