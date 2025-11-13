export default function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-12 lg:gap-20">
        {/* Image des flèches - cachée sur mobile */}
        <img
          src="/src/img/arrows.svg"
          alt="des fleches chepas trop c quoi tu connais"
          className="hidden md:block w-24 lg:w-32 object-contain"
        />

        {/* Formulaire */}
        <div className="flex flex-col justify-between w-full md:w-auto md:flex-1 max-w-2xl space-y-4 md:space-y-6">
          <input
            placeholder="NOM ET PRÉNOM"
            className="border-2 border-black rounded-2xl p-3 md:p-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            placeholder="ADRESSE E-MAIL"
            type="email"
            className="border-2 border-black rounded-2xl p-3 md:p-4 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="VOTRE PROJET"
            className="border-2 border-black rounded-2xl p-3 md:p-4 h-32 md:h-40 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white py-3 md:py-4 rounded-2xl hover:bg-gray-800 transition-colors text-sm md:text-base font-medium">
            ENVOYER
          </button>
        </div>
      </div>
    </div>
  );
}