const entremetsOpera = {
  id: "entremets-opera",
  title: "Entremets Opéra",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "2H 30",
  cookTime: "30 MIN",
  difficulty: "AVANCÉ",
  description: "Le summum du raffinement parisien. Des couches successives de biscuit Joconde imbibé au café, de ganache chocolat et de crème au beurre café, le tout recouvert d'un glaçage intense.",
  image: "https://cdn.stoneline.de/thumbnail/e9/a5/e5/1727689765/gateau-opera_1920x1920.jpeg?ts=1727689805",
  baseServings: 20, // "Pour un cadre de 40 x 60 cm"
  
  ingredients: [
    { name: "Oeufs entiers", amount: 750, unit: "g", note: "Biscuit Joconde" },
    { name: "Poudre d'amande", amount: 500, unit: "g", note: "Biscuit Joconde" },
    { name: "Sucre glace", amount: 500, unit: "g", note: "Biscuit Joconde" },
    { name: "Blancs d'oeufs", amount: 660, unit: "g", note: "Biscuit Joconde" },
    { name: "Sucre semoule", amount: 100, unit: "g", note: "Biscuit Joconde" },
    { name: "Farine T55", amount: 130, unit: "g", note: "Biscuit Joconde" },
    { name: "Beurre fondu", amount: 100, unit: "g", note: "Biscuit Joconde" },
    { name: "Eau", amount: 1000, unit: "g", note: "Sirop Café" },
    { name: "Sucre semoule", amount: 600, unit: "g", note: "Sirop Café" },
    { name: "Extrait de café", amount: 70, unit: "g", note: "Sirop Café" },
    { name: "Crème liquide 35%", amount: 600, unit: "g", note: "Ganache" },
    { name: "Chocolat noir 65%", amount: 600, unit: "g", note: "Ganache" },
    { name: "Trimoline (sucre inverti)", amount: 60, unit: "g", note: "Ganache" },
    { name: "Jaunes d'oeufs", amount: 240, unit: "g", note: "Crème au Beurre" },
    { name: "Sucre", amount: 380, unit: "g", note: "Crème au Beurre (sirop)" },
    { name: "Eau", amount: 120, unit: "g", note: "Crème au Beurre (sirop)" },
    { name: "Beurre pommade", amount: 900, unit: "g", note: "Crème au Beurre" },
    { name: "Extrait de café", amount: 40, unit: "g", note: "Crème au Beurre" },
    { name: "Pâte à glacer brune", amount: 500, unit: "g", note: "Glaçage 421" },
    { name: "Chocolat noir couverture", amount: 500, unit: "g", note: "Glaçage 421" },
    { name: "Huile de pépins de raisin", amount: 100, unit: "g", note: "Glaçage 421" },
    { name: "Chocolat noir", amount: 200, unit: "g", note: "Finition (chablon)" }
  ],

  steps: [
    { 
      title: "Préparation du Biscuit Joconde", 
      text: "Monter les oeufs, la poudre d'amande et le sucre glace au ruban (environ 10 min). Incorporer la farine tamisée. Monter les blancs en neige avec le sucre semoule. Mélanger délicatement les deux masses. Ajouter le beurre fondu. Étaler sur 3 plaques. Cuire à 220°C pendant 6-8 min." 
    },
    { 
      title: "Crème au Beurre Café", 
      text: "Réaliser un sirop à 118°C. Verser sur les jaunes montés (Pâte à bombe). Fouetter jusqu'à refroidissement complet. Incorporer le beurre pommade petit à petit. Ajouter l'extrait de café." 
    },
    { 
      title: "Montage", 
      text: "1. Chablonner la première feuille de biscuit (chocolat fondu). Retourner. 2. Imbiber de sirop café. 3. Étaler une couche de crème au beurre. 4. Poser la 2ème feuille. Imbiber. 5. Étaler la ganache chocolat. 6. Poser la 3ème feuille. Imbiber. 7. Étaler la dernière couche de crème au beurre. Lisser parfaitement." 
    },
    { 
      title: "Glaçage", 
      text: "Fondre les chocolats et l'huile (Glaçage 421) à 35°C. Verser sur l'entremets très froid en une seule fois. Lisser à la palette en un seul passage. Parer les bords pour la netteté." 
    }
  ],

  advices: ["Veillez à étaler les couches de manière très régulière pour voir les strates nettes à la découpe."],
  chefQuote: "L'Opéra se déguste à température ambiante pour apprécier le fondant de la crème au beurre.",
  equipment: ["Cadre inox 40x60", "Batteur", "Spatule coudée"]
};

export default entremetsOpera;