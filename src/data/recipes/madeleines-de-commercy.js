const madeleinesDeCommercy = {
  id: "madeleines-de-commercy",
  title: "Les Madeleines de Commercy (Lorraine)",
  category: "Pâtisserie",
  subCategory: ["Desserts Régionaux"],
  isVip: false,
  prepTime: "15 MIN",
  cookTime: "8 à 10 MIN",
  difficulty: "MOYEN",
  description: "Le célèbre petit gâteau moelleux en forme de coquillage, reconnaissable à sa bosse dorée et son parfum de citron.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/c4616ba865f4c6654f6d93f0b0353868.jpg",
  baseServings: 20, // environ
  
  ingredients: [
    { name: "Œufs entiers", amount: 3, unit: "pièces" },
    { name: "Farine", amount: 150, unit: "g" },
    { name: "Beurre", amount: 125, unit: "g" },
    { name: "Sucre semoule", amount: 130, unit: "g" },
    { name: "Levure chimique", amount: 6, unit: "g", note: "1/2 sachet" },
    { name: "Citron (Zeste uniquement)", amount: 1, unit: "pièce" },
    { name: "Miel (pour le moelleux)", amount: 20, unit: "g" },
    { name: "Sel", amount: 1, unit: "pincée" }
  ],

  steps: [
    { 
      title: "1. Préparation du beurre", 
      text: "Faites fondre le beurre dans une casserole à feu doux. Laissez-le tiédir à température ambiante (il ne doit pas être brûlant lors de l'incorporation)." 
    },
    { 
      title: "2. L'Appareil", 
      text: "Dans un cul-de-poule, fouettez les œufs, le sucre, le sel et le miel jusqu'à ce que le mélange blanchisse légèrement. Tamisez la farine et la levure chimique ensemble. Incorporez-les au mélange œufs/sucre sans trop travailler la pâte." 
    },
    { 
      title: "3. Finition et Aromatisation", 
      text: "Versez le beurre fondu refroidi dans la pâte. Mélangez jusqu'à incorporation complète. Ajoutez les zestes du citron râpés finement." 
    },
    { 
      title: "4. Le Repos au Froid (Crucial)", 
      text: "Couvrez le récipient au contact avec un film alimentaire. Placez la pâte au réfrigérateur pendant au moins 2 heures (idéalement toute une nuit). La pâte doit être très froide au moment d'enfourner." 
    },
    { 
      title: "5. Moulage", 
      text: "Beurrez et farinez les moules à madeleines (sauf si moule silicone). Remplissez les alvéoles aux 3/4 avec la pâte froide (à la poche à douille ou à la cuillère). Ne lissez pas la pâte." 
    },
    { 
      title: "6. Cuisson (Le Choc Thermique)", 
      text: "Préchauffez votre four à 220°C (th. 7-8). Enfournez les madeleines et baissez immédiatement la température à 180°C. Laissez cuire 8 à 10 minutes. La bosse va se former grâce au choc de température. Elles doivent être dorées sur les bords et claires au centre." 
    },
    { 
      title: "7. Finition", 
      text: "Démoulez immédiatement sur une grille à la sortie du four." 
    }
  ],

  advices: ["Le miel apporte du moelleux et aide à la conservation."],
  chefQuote: "Une madeleine réussie doit avoir une belle bosse et une mie serrée mais légère.",
  equipment: ["Moule à madeleines en métal (idéal)", "Zesteur"]
};

export default madeleinesDeCommercy;