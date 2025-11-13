// src/components/Collective.tsx
import React from "react";

const Collective: React.FC = () => {
  const members = [
    { name: "Barth", handle: "@faitparbarth", img: "/barth.jpg" },
    { name: "Mounir", handle: "@mounirbdjl", img: "/mounir.jpg" },
    { name: "Leith", handle: "@zonartistes", img: "/leith.jpg" },
  ];

  return (
    <section id="collective" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gray-900">Le Collectif</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Zon’art est un projet collectif réunissant cinq associés et amis 
          qui visent à partager leurs compétences singulières dans un espace 
          de création libre et versatile, alliant design, programmation et peinture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-gray-500">{m.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collective;
