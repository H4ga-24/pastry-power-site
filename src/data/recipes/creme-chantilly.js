const cremeChantilly = {
  id: "creme-chantilly",
  title: "Crème Chantilly",
  category: "Pâtisserie",
  subCategory: ["Crèmes"],
  isVip: false,
  prepTime: "10 MIN",
  cookTime: "0 MIN",
  difficulty: "TRÈS FACILE",
  description: "Le classique aérien et sucré, indispensable pour accompagner les glaces, tartes ou simplement des fraises.",
  image: "https://blog.cerfdellier.com/wp-content/uploads/2021/06/comment-faire-une-chantilly-maison.jpg",
  baseServings: 1, // Pour ~500g de crème foisonnée
  
  ingredients: [
    { name: "Crème liquide entière 35% MG", amount: 500, unit: "g" },
    { name: "Sucre glace", amount: 50, unit: "g" },
    { name: "Gousse de vanille", amount: 1, unit: "pièce" }
  ],

  steps: [
    { 
      title: "Préparation", 
      text: "S'assurer que la crème est bien froide (4°C). Placer le bol du batteur et le fouet au réfrigérateur 30 minutes avant." 
    },
    { 
      title: "Démarrage", 
      text: "Verser la crème froide dans le bol. Fendre la gousse de vanille et ajouter les graines. Commencer à fouetter à vitesse moyenne pour incorporer de l'air." 
    },
    { 
      title: "Foisonnement", 
      text: "Lorsque la crème commence à épaissir et laisser des traces (stade bec d'oiseau souple), ajouter le sucre glace en pluie." 
    },
    { 
      title: "Serrage", 
      text: "Augmenter légèrement la vitesse pour 'serrer' la chantilly jusqu'à obtenir une consistance ferme mais onctueuse. Attention à ne pas faire du beurre !" 
    }
  ],

  advices: [
    "Utilisez impérativement une crème à 30% ou 35% de matière grasse (entière). La crème légère ne montera jamais."
  ],
  chefQuote: "Pour une meilleure tenue (surtout en été), vous pouvez ajouter un peu de mascarpone (10-20% du poids de la crème) au début.",
  equipment: [
    "Batteur ou fouet électrique",
    "Cul-de-poule"
  ]
};

export default cremeChantilly;