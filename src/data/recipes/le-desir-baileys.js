const leDesirBaileys = {
  id: "le-desir-baileys",
  title: "Le Désir Bailey's",
  category: "Pâtisserie",
  subCategory: ["Entremets"],
  isVip: true,
  prepTime: "2H 30",
  cookTime: "15 MIN",
  difficulty: "AVANCÉ",
  description: "L'élégance à l'état pur. Une mousse légère et parfumée au Bailey's associée à un biscuit 'Safari' intense en cacao, le tout enveloppé d'un velours noir mystérieux. Un dessert sophistiqué pour les amateurs de liqueurs crémeuses.",
  image: "https://horizons-cdn.hostinger.com/65de4fb0-2eef-4e82-b782-d4d7e99e13fe/0739838a3f34c2628a4cc80a5c54445f.png",
  baseServings: 12, // "1 cadre de 37 x 28,5 cm"
  
  ingredients: [
    { name: "Oeufs entiers", amount: 375, unit: "g", note: "Biscuit Safari" },
    { name: "Sucre semoule", amount: 160, unit: "g", note: "Biscuit Safari" },
    { name: "Chocolat noir 50%", amount: 125, unit: "g", note: "Biscuit Safari" },
    { name: "Beurre doux", amount: 125, unit: "g", note: "Biscuit Safari" },
    { name: "Farine T55", amount: 80, unit: "g", note: "Biscuit Safari" },
    { name: "Jaunes d'œufs", amount: 120, unit: "g", note: "Mousse Bailey's" },
    { name: "Sirop à 30°B", amount: 135, unit: "g", note: "Mousse Bailey's" },
    { name: "Liqueur Bailey's", amount: 150, unit: "g", note: "Mousse Bailey's" },
    { name: "Gélatine (feuilles)", amount: 20, unit: "g", note: "Mousse Bailey's" },
    { name: "Chocolat couverture lactée", amount: 280, unit: "g", note: "Mousse Bailey's" },
    { name: "Crème fouettée 35%", amount: 950, unit: "g", note: "Mousse Bailey's" },
    { name: "Chocolat noir couverture", amount: 350, unit: "g", note: "Velours" },
    { name: "Beurre de cacao", amount: 150, unit: "g", note: "Velours" },
    { name: "Colorant liposoluble noir", amount: 2, unit: "g", note: "Velours (opt)" },
    { name: "Copeaux de chocolat noir", amount: 50, unit: "g", note: "Finition" }
  ],

  steps: [
    { 
      title: "1. Biscuit Safari Chocolat", 
      text: "Monter les œufs entiers avec le sucre semoule au ruban (le mélange doit tripler de volume et blanchir). Faire fondre le chocolat et le beurre ensemble à 45°C. Prélever une petite partie des œufs montés et les mélanger vigoureusement au mélange chocolat/beurre pour l'alléger. Reverser le tout dans la masse principale d'œufs et mélanger délicatement à la maryse. Incorporer la farine tamisée en pluie fine. Étaler sur une plaque recouverte de papier cuisson (pour un cadre de 37x28,5 cm, prévoir une plaque standard 40x60 cm pour pouvoir parer). Cuire à 170°C pendant 12 à 15 minutes. Laisser refroidir." 
    },
    { 
      title: "2. Mousse Chocolat Bailey's", 
      text: "Réhydrater la gélatine. Réaliser une pâte à bombe : pocher les jaunes d'œufs avec le sirop à 30°B (mélange d'eau et de sucre densité 1.26) au bain-marie jusqu'à 84°C, puis monter au batteur jusqu'à refroidissement complet. Faire chauffer légèrement le Bailey's et y dissoudre la gélatine essorée. Verser sur le chocolat au lait fondu à 45°C pour réaliser une ganache. Incorporer cette ganache à la pâte à bombe. Enfin, incorporer délicatement la crème fouettée mousseuse." 
    },
    { 
      title: "3. Appareil à Pulvériser (Velours)", 
      text: "Fondre le chocolat de couverture et le beurre de cacao séparément. Les mélanger ensemble. Ajouter le colorant liposoluble si désiré et mixer pour homogénéiser. Filtrer. Utiliser à une température de 40°C à 45°C dans un pistolet à peinture alimentaire." 
    },
    { 
      title: "4. Montage et Finition", 
      text: "Dans le cadre inox chemisé de rhodoïd : Déposer le biscuit Safari au fond (ajusté aux dimensions du cadre). Couler la mousse Bailey's par-dessus. Lisser à la palette coudée. Surgeler à cœur (minimum 4 heures, idéalement une nuit). Démouler l'entremets surgelé. Pulvériser l'appareil velours sur l'entremets congelé pour obtenir l'effet velours. Parer les bords pour avoir des couches nettes. Décorer avec des copeaux de chocolat noir ou selon l'inspiration." 
    }
  ],

  advices: ["Le pistolet à peinture doit être tenu à 30cm de l'entremets pour un effet velours fin."],
  chefQuote: "Le biscuit Safari est un biscuit très moelleux, proche du biscuit Sacher.",
  equipment: ["Cadre inox", "Pistolet à peinture (ou bombe velours)", "Batteur"]
};

export default leDesirBaileys;