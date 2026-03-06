const rectangleFinancierPistacheAbricot = {
  id: "rectangle-financier-pistache-abricot",
  title: "Rectangle Financier Pistache, Abricot & Dulcey",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: false,
  prepTime: "2H 30",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "L'élégance d'un format 'Finger' allongé. La douceur biscuitée du chocolat blond Dulcey enveloppe l'acidité franche de l'abricot, le tout reposant sur un socle intense de pistache.",
  image: "https://www.tendances-food.fr/wp-content/uploads/2022/05/pistache-abricot.jpg",
  baseServings: 14, // "1 cadre = 14 parts"
  
  ingredients: [
    { name: "Beurre noisette", amount: 150, unit: "g", note: "Biscuit Financier" },
    { name: "Blancs d'oeufs", amount: 150, unit: "g", note: "Biscuit Financier" },
    { name: "Sucre glace", amount: 140, unit: "g", note: "Biscuit Financier" },
    { name: "Poudre d'amande", amount: 60, unit: "g", note: "Biscuit Financier" },
    { name: "Pâte de pistache pure", amount: 40, unit: "g", note: "Biscuit Financier" },
    { name: "Farine T55", amount: 50, unit: "g", note: "Biscuit Financier" },
    { name: "Levure chimique", amount: 2, unit: "g", note: "Biscuit Financier" },
    { name: "Pâte de pistache", amount: 50, unit: "g", note: "Croustillant" },
    { name: "Chocolat blanc", amount: 30, unit: "g", note: "Croustillant" },
    { name: "Feuilletine", amount: 60, unit: "g", note: "Croustillant" },
    { name: "Pistaches concassées", amount: 20, unit: "g", note: "Croustillant" },
    { name: "Purée d'abricot", amount: 250, unit: "g", note: "Insert" },
    { name: "Oreillons d'abricots (dés)", amount: 100, unit: "g", note: "Insert" },
    { name: "Sucre semoule", amount: 40, unit: "g", note: "Insert" },
    { name: "Pectine NH", amount: 4, unit: "g", note: "Insert" },
    { name: "Lait entier", amount: 125, unit: "g", note: "Bavaroise Dulcey" },
    { name: "Jaunes d'oeufs", amount: 30, unit: "g", note: "Bavaroise Dulcey" },
    { name: "Chocolat Dulcey", amount: 170, unit: "g", note: "Bavaroise Dulcey" },
    { name: "Gélatine", amount: 4, unit: "g", note: "Bavaroise Dulcey" },
    { name: "Crème liquide 35% montée", amount: 250, unit: "g", note: "Bavaroise Dulcey" }
  ],

  steps: [
    { 
      title: "Biscuit Financier Pistache", 
      text: "Réaliser un beurre noisette. Mélanger les poudres (sucre glace, amande, farine, levure). Ajouter les blancs d'oeufs non montés, puis la pâte de pistache et enfin le beurre noisette tiède. Couler dans le cadre. Cuire 20 min à 170°C." 
    },
    { 
      title: "Croustillant Pistache", 
      text: "Fondre le chocolat blanc. Mélanger avec la pâte de pistache, la feuilletine, les pistaches concassées et la fleur de sel. Étaler finement sur le biscuit refroidi." 
    },
    { 
      title: "Insert Abricot", 
      text: "Chauffer la purée et les dés d'abricots à 40°C. Ajouter le sucre mélangé à la pectine NH. Porter à ébullition 1 min. Ajouter le jus de citron. Couler dans un insert et surgeler." 
    },
    { 
      title: "Bavaroise Dulcey", 
      text: "Réaliser une crème anglaise (lait, jaunes, sucre) cuite à 82°C. Hors du feu, ajouter la gélatine hydratée. Verser sur le chocolat Dulcey. Mixer. À 30°C, incorporer la crème montée." 
    },
    { 
      title: "Montage", 
      text: "Dans le cadre (montage à l'envers ou à l'endroit selon préférence), couler la bavaroise, insérer le palet d'abricot surgelé, recouvrir de bavaroise et fermer avec le biscuit/croustillant. Surgeler. Détailler en rectangles (fingers) à la sortie." 
    }
  ],

  advices: ["Le montage en cadre est idéal pour obtenir des bords bien nets lors de la découpe en fingers."],
  chefQuote: "L'acidité de l'abricot vient parfaitement casser le côté très sucré et lacté du chocolat Dulcey.",
  equipment: ["Cadre 9x55cm", "Mixeur plongeant", "Thermomètre"]
};
export default rectangleFinancierPistacheAbricot;