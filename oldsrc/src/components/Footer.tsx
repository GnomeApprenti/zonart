// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white flex flex-col justify-center items-center py-12 h-screen">
      <h2 className="text-4xl mb-6">Contact</h2>
      <p className="text-center text-sm opacity-80">
        pas de spam, que de l’esthétique et de l’innovation :)
      </p>
      <form className="mt-6 flex items-center gap-4 border border-white rounded-full px-6 py-2">
        <input
          type="email"
          placeholder="ajouter une adresse mail..."
          className="bg-transparent text-white outline-none placeholder:text-gray-400 text-sm"
        />
        <button type="submit" className="uppercase text-sm font-semibold">
          Envoyer
        </button>
      </form>
    </footer>
  );
};

export default Footer;
