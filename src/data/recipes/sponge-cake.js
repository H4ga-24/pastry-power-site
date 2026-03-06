const spongeCake = {
  id: "sponge-cake",
  title: "Sponge Cake",
  category: "Pâtisserie",
  subCategory: ["Biscuits"], // Base de biscuit
  isVip: false,
  prepTime: "20 MIN",
  cookTime: "30 MIN",
  difficulty: "MOYEN",
  description: "Le gâteau éponge anglo-saxon, très aéré et parfait pour le cake design.",
  image: "https://cuisine.nessma.tv/uploads/7/2020-03/ddacbec3991374b258f32e57bcac03ae.png",
  baseServings: 1, // gâteau
  
  ingredients: [
    { name: "Oeufs", amount: 4, unit: "pièces" },
    { name: "Sucre", amount: 200, unit: "g" },
    { name: "Beurre mou", amount: 200, unit: "g" },
    { name: "Farine", amount: 200, unit: "g" },
    { name: "Levure chimique", amount: 8, unit: "g" },
    { name: "Extrait de vanille", amount: 1, unit: "c.à.c" }
  ],

  steps: [
    { 
      title: "CRÉMAGE", 
      text: "Battre le beurre et le sucre jusqu'à obtention d'une crème pâle et mousseuse." 
    },
    { 
      title: "OEUFS", 
      text: "Ajouter les œufs un à un en fouettant bien entre chaque ajout pour créer une belle émulsion." 
    },
    { 
      title: "ARÔME", 
      text: "Ajouter l'extrait de vanille." 
    },
    { 
      title: "POUDRES", 
      text: "Incorporer la farine et la levure tamisées, en mélangeant délicatement à la maryse pour ne pas faire retomber l'appareil." 
    },
    { 
      title: "CUISSON", 
      text: "Verser dans deux moules identiques et cuire à 180°C pendant 25-30 minutes." 
    }
  ],

  advices: ["Vos œufs et votre beurre doivent impérativement être à température ambiante pour que l'émulsion se fasse correctement."],
  chefQuote: "Il est de même poids en œufs, beurre, sucre et farine. C'est le cousin anglais du quatre-quarts, mais monté différemment !",
  equipment: ["Batteur", "Moules à gâteaux", "Tamis"]
};

export default spongeCake;