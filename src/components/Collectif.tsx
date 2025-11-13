export default function Collectif() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20 space-y-12 md:space-y-16">
      {/* Premier paragraphe */}
      <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
        Zon'art est un projet collectif réunissant 5 associés et amis qui visent
        à partager leurs compétences singulières dans un espace de création
        libre et versatile, alliant design, programmation et peinture.
      </p>

      {/* Image centrale */}
      <div className="w-full flex justify-center">
        <img 
          src="/img/tarzan.png" 
          alt="nous sur un arbre genre" 
          className="max-w-full h-auto md:max-w-2xl lg:max-w-3xl"
        />
      </div>

      {/* Second paragraphe */}
      <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
        Ce projet est marqué par sa versatilité, notre jeunesse et son regard
        neuf ainsi que notre authenticité. 
        <br />
        <br />
        Ces incarnations nous permettent un
        grand niveau d'adaptation et une polyvalence de médiums
        (écrit/ordinateur), ainsi nous pouvons visés des collaborations avec
        tous types de public que ce soient les particuliers ou les entreprises.
        <br />
        <br />
        Notre approche hybride mêlant arts visuels et programmations numériques
        s'ancre dans l'évolution contemporaine des nouvelles technologies et de
        leurs places grandissantes.
        <br />
        <br />
        Zon'art suit don le cours de l'Histoire tout
        en conservant une véritable singularité et en veillant au respect de
        l'art et des artistes. En somme, Zon'art est donc un atelier créatif où
        l'art rencontre la technologie. Brut et précis, underground et raffiné,
        le projet explore tous les médiums pour repousser les normes et laisser
        une empreinte authentique, jeune et versatile.
        <br />
        <br />
        Ce projet vise à s'ancrer
        vers le sens de l'évolution, le numérique prend place partout, dans tous
        les secteurs, il est omniprésent.
        <br />
        <br />
        Il est ainsi nécessaire que de
        véritables artistes prennent cela en main afin de préserver l'art d'une
        industrialisation numérique de masse.
      </p>
    </div>
  );
}