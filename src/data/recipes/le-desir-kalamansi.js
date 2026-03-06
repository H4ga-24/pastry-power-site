const leDesirKalamansi = {
  id: "le-desir-kalamansi",
  title: "Le Désir Kalamansi",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "2H 45",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "Une explosion de fraîcheur exotique. L'acidité vibrante du Kalamansi rencontre la douceur d'une mousse au chocolat au lait, le tout reposant sur un biscuit 'Safari' intense. Une finition velours chocolat pour une élégance parfaite.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/6b04d01df81eaf60028ec8382d3aa4d2.png",
  baseServings: 12, // "1 cadre de 37 x 28,5 cm"
  
  ingredients: [
    { name: "Oeufs entiers", amount: 375, unit: "g", note: "Biscuit Safari" },
    { name: "Sucre semoule", amount: 160, unit: "g", note: "Biscuit Safari" },
    { name: "Chocolat noir 50%", amount: 125, unit: "g", note: "Biscuit Safari" },
    { name: "Beurre doux", amount: 125, unit: "g", note: "Biscuit Safari" },
    { name: "Farine T55", amount: 80, unit: "g", note: "Biscuit Safari" },
    { name: "Purée de Kalamansi", amount: 250, unit: "g", note: "Mousse Kalamansi" },
    { name: "Sucre inverti (Trimoline)", amount: 40, unit: "g", note: "Mousse Kalamansi" },
    { name: "Gélatine (feuilles)", amount: 12, unit: "g", note: "Mousse Kalamansi" },
    { name: "Chocolat couverture lactée 40%", amount: 380, unit: "g", note: "Mousse Kalamansi" },
    { name: "Crème fouettée 35%", amount: 550, unit: "g", note: "Mousse Kalamansi" },
    { name: "Chocolat noir couverture", amount: 350, unit: "g", note: "Velours" },
    { name: "Beurre de cacao", amount: 150, unit: "g", note: "Velours" },
    { name: "Colorant brun", amount: 2, unit: "g", note: "Velours (facultatif)" },
    { name: "Zestes de citron vert", amount: 1, unit: "pc", note: "Décor" },
    { name: "Feuille d'or", amount: 1, unit: "feuille", note: "Décor" }
  ],

  steps: [
    { 
      title: "1. Biscuit Safari Chocolat", 
      text: "Monter les œufs entiers avec le sucre semoule au ruban (le mélange doit tripler de volume et blanchir). Faire fondre le chocolat et le beurre ensemble à 45°C. Prélever une petite partie des œufs montés et les mélanger vigoureusement au mélange chocolat/beurre pour l'alléger. Reverser le tout dans la masse principale d'œufs et mélanger délicatement à la maryse. Incorporer la farine tamisée en pluie fine. Étaler sur une plaque recouverte de papier cuisson (pour un cadre de 37x28,5 cm). Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir sur grille." 
    },
    { 
      title: "2. Mousse Chocolat Kalamansi", 
      text: "Réhydrater la gélatine dans de l'eau froide. Dans une casserole, chauffer une partie de la purée de Kalamansi (environ 1/3) avec le sucre inverti jusqu'à 50°C. Hors du feu, ajouter la gélatine essorée. Verser ce mélange sur la purée froide restante pour tempérer l'ensemble. Fondre le chocolat au lait à 45°C. Verser progressivement la purée de fruit sur le chocolat en réalisant une émulsion à la maryse (comme une ganache). Mixer pour parfaire l'émulsion si besoin. Lorsque le mélange est à 30/35°C, incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "3. Appareil Velours (Finition)", 
      text: "Fondre le chocolat de couverture et le beurre de cacao séparément à 50°C. Les mélanger ensemble. Ajouter le colorant si nécessaire et mixer pour bien homogénéiser. Filtrer au chinois étamine. Utiliser à une température comprise entre 40°C et 45°C dans un pistolet à peinture alimentaire." 
    },
    { 
      title: "4. Montage et Finition", 
      text: "Chemiser le cadre inox de rhodoïd. Déposer le biscuit Safari au fond. Couler la mousse chocolat Kalamansi par-dessus jusqu'à hauteur du cadre. Lisser soigneusement à la grande spatule ou à la règle. Surgeler à cœur (minimum 6 heures ou une nuit). Démouler l'entremets congelé. Pulvériser immédiatement l'appareil velours sur toute la surface pour créer l'effet texturé. Décorer avec quelques zestes de citron vert frais et une touche de feuille d'or pour le contraste." 
    }
  ],

  advices: ["Le kalamansi est un agrume très acide, le chocolat au lait permet d'adoucir l'ensemble."],
  chefQuote: "L'émulsion de la mousse est primordiale pour obtenir une texture soyeuse.",
  equipment: ["Cadre inox", "Pistolet à peinture", "Batteur"]
};

export default leDesirKalamansi;