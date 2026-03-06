const parisBrest = {
  id: "paris-brest",
  title: "Paris-Brest",
  category: "Pâtisserie",
  subCategory: ["Pâte à Choux"],
  isVip: false,
  prepTime: "1H 30",
  cookTime: "40 MIN",
  difficulty: "MOYEN",
  description: "Créé en 1910 pour la course cycliste, ce gâteau en forme de roue associe pâte à choux croustillante, amandes effilées et une généreuse crème mousseline au praliné.",
  image: "https://www.sunny-delices.fr/wp-content/uploads/2021/02/paris-brest-sans-gluten-individuel.jpg",
  baseServings: 6,
  
  ingredients: [
    { name: "Pâte à choux", amount: 300, unit: "g" },
    { name: "Lait entier", amount: 500, unit: "ml" },
    { name: "Sucre semoule", amount: 100, unit: "g" },
    { name: "Jaunes d'oeufs", amount: 80, unit: "g" },
    { name: "Poudre à crème", amount: 50, unit: "g" },
    { name: "Beurre doux", amount: 250, unit: "g" },
    { name: "Praliné noisette", amount: 150, unit: "g" },
    { name: "Amandes effilées", amount: 50, unit: "g" },
    { name: "Sucre glace", amount: 20, unit: "g" }
  ],

  steps: [
    { title: "Cuisson de la couronne", text: "Sur une plaque, dressez un cercle de pâte à choux de 20cm de diamètre. Dressez un second cercle collé à l'intérieur du premier, puis un troisième par-dessus à cheval sur les deux autres. Parsemez généreusement d'amandes effilées. Cuire 35-40 min à 170°C. Ne pas ouvrir le four." },
    { title: "Crème pâtissière de base", text: "Faites bouillir le lait. Fouettez jaunes, sucre et poudre à crème. Versez le lait dessus, reversez en casserole et cuire 2 min à ébullition. Incorporez la moitié du beurre (125g) chaud. Filmez au contact et laissez refroidir à température ambiante." },
    { title: "Crème mousseline praliné", text: "Fouettez le reste du beurre pommade (125g) avec le praliné jusqu'à ce qu'il soit mousseux. Incorporez petit à petit la crème pâtissière lissée (elles doivent être à la même température). Fouettez pour aérer la mousseline." },
    { title: "Montage", text: "Coupez la couronne refroidie en deux horizontalement. Pochez la mousseline sur la base avec une douille cannelée en faisant de belles rosaces." },
    { title: "Finition", text: "Posez le chapeau de la couronne délicatement. Saupoudrez de sucre glace. Réservez au frais mais sortez-le 15 min avant dégustation." }
  ],

  advices: ["La température des deux crèmes est cruciale pour l'émulsion : trop froid ça graine, trop chaud ça fond."],
  chefQuote: "Ajoutez un insert de praliné pur coulant au cœur de la mousseline pour une surprise gourmande.",
  equipment: ["Poche à douille", "Douille cannelée", "Batteur"]
};

export default parisBrest;