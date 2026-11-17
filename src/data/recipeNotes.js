// Compléments « Bon à savoir » des fiches recettes : à quoi sert la préparation,
// les erreurs fréquentes et la conservation.
//
// Affichés par src/components/RecipeNotes.jsx et écrits dans le HTML statique par scripts/prerender.mjs.
// Pour compléter une fiche : ajouter une entrée avec l'identifiant de la recette (le même que dans catalog.js).
// Une recette sans entrée s'affiche simplement sans cet encart.

export const recipeNotes = {
  // ── Meringues, pâte d'amande ──────────────────────────────────────────────
  "meringue-italienne": {
    usage: "C'est la meringue la plus stable : le sirop cuit pasteurise les blancs. Elle sert à meringuer une tarte au citron, à alléger une mousse aux fruits ou une crème au beurre, et à masquer une omelette norvégienne avant de la passer au chalumeau.",
    erreurs: [
      "Verser le sirop sur le fouet : il est projeté sur les parois de la cuve et forme des grains de sucre. Versez-le en filet, entre le fouet et le bord.",
      "Arrêter le batteur trop tôt : la meringue doit tourner jusqu'à être presque froide, sinon elle retombe et fait fondre la crème ou le beurre qu'on lui ajoute.",
    ],
    conservation: "À utiliser dans l'heure pour profiter de sa tenue. Une fois dressée et colorée, elle tient 24 h au réfrigérateur ; elle supporte bien la congélation dans un entremets.",
  },
  "pate-amande-confiseur": {
    usage: "Une pâte d'amande cuite, plus sucrée et plus souple que la pâte d'amande crue : elle sert au modelage de sujets, à recouvrir un gâteau, à fourrer des fruits déguisés ou des bonbons de chocolat.",
    erreurs: [
      "Broyer trop longtemps d'un seul coup : l'amande chauffe, rend son huile et la pâte devient grasse. Travaillez par à-coups et laissez refroidir entre deux passages.",
      "Dépasser la cuisson du sirop : la pâte durcit et s'effrite. Le glucose et le sucre inverti sont là pour garder la souplesse, ne les supprimez pas.",
    ],
    conservation: "Filmée au contact puis en boîte hermétique, à température ambiante et à l'abri de l'air : plusieurs semaines. Elle croûte très vite dès qu'elle reste découverte.",
  },

  // ── Biscuits ──────────────────────────────────────────────────────────────
  "biscuit-aux-noix": {
    usage: "Un fond moelleux et parfumé, à mi-chemin entre la génoise et la dacquoise. Il porte très bien les entremets au café, au caramel, à la poire ou au chocolat au lait, et se détaille aussi en bandes pour chemiser un cercle.",
    erreurs: [
      "Utiliser une poudre de noix ancienne : la noix rancit vite et donne de l'amertume. Goûtez-la avant, ou mixez vous-même des cerneaux frais avec un peu de sucre glace.",
      "Verser le beurre fondu en une fois : il tombe au fond et casse la meringue. Délayez-le d'abord avec une petite partie de l'appareil.",
    ],
    conservation: "Filmé, 2 jours au réfrigérateur. Il se congèle très bien à plat, bien emballé, pendant 1 mois : c'est même plus simple pour le détailler net.",
  },
  "dacquoise-amande": {
    usage: "Un biscuit meringué aux amandes, croustillant dessus et moelleux dedans, naturellement pauvre en farine. C'est la base classique des entremets pralinés, des tartes aux fruits rouges revisitées et des succès.",
    erreurs: [
      "Trop mélanger après l'ajout des poudres : la meringue retombe et le biscuit sort plat et collant. Quelques tours de maryse suffisent.",
      "Ouvrir le four en début de cuisson ou sortir le biscuit trop tôt : il s'affaisse. Il doit être légèrement doré et se décoller du papier.",
    ],
    conservation: "Il ramollit à l'humidité : gardez-le filmé 24 h au sec, ou congelez-le tout de suite après refroidissement (1 mois). Une fois garni, il se tient 2 jours au froid.",
  },
  "genoise": {
    usage: "Le biscuit de base de la pâtisserie française : fraisier, forêt-noire, moka, gâteaux d'anniversaire. Elle est volontairement sèche, parce qu'elle est faite pour être imbibée de sirop puis garnie de crème.",
    erreurs: [
      "Ne pas monter assez les œufs : le mélange doit tripler de volume et former un ruban qui se pose sans disparaître tout de suite. C'est lui qui fait lever la génoise, pas une levure.",
      "Incorporer la farine au fouet ou en force : l'air s'échappe et le biscuit devient compact. Tamisez la farine et pliez à la maryse en partant du centre.",
    ],
    conservation: "Filmée, 2 jours à température ambiante. Elle se tranche plus proprement le lendemain et se congèle 1 mois, entière ou déjà coupée en disques.",
  },
  "genoise-au-chocolat": {
    usage: "Un biscuit au cacao à œufs séparés, plus léger et plus souple qu'une génoise. Il sert de fond pour les entremets au chocolat, les bûches et les forêts-noires, et accepte bien un sirop au kirsch ou au café.",
    erreurs: [
      "Ne pas tamiser le cacao avec la farine et la fécule : le cacao fait des grumeaux qui ne se défont plus une fois dans la meringue.",
      "Ajouter un beurre fondu encore chaud : il fait retomber les blancs. La recette demande un beurre fondu refroidi, c'est important.",
    ],
    conservation: "Bien filmé, 2 jours au frais. Le cacao assèche vite la mie : congelez le biscuit si vous ne l'utilisez pas le jour même (1 mois).",
  },
  "sponge-cake": {
    usage: "Le gâteau de base anglo-saxon, fait par crémage et non par œufs montés : mie serrée, beurrée et régulière. C'est lui qui supporte le mieux le poids d'un layer cake, d'une pâte à sucre ou d'un gâteau à étages.",
    erreurs: [
      "Crémer un beurre trop froid ou trop peu longtemps : le mélange beurre-sucre doit blanchir et gonfler, sinon le gâteau reste dense.",
      "Ajouter des œufs froids d'un coup : l'appareil tranche. Sortez-les à l'avance et incorporez-les un par un.",
    ],
    conservation: "3 jours filmé à température ambiante. Il se congèle 1 mois et se découpe beaucoup mieux quand il est encore très froid.",
  },

  // ── Crèmes ────────────────────────────────────────────────────────────────
  "creme-amande": {
    usage: "La garniture qui cuit avec la pâte : tartes amandines et Bourdaloue, pithiviers, croissants aux amandes. Mélangée à de la crème pâtissière, elle devient la frangipane de la galette des rois.",
    erreurs: [
      "Fouetter trop fort : l'air incorporé fait gonfler la crème au four, puis elle retombe en creusant le centre de la tarte. On mélange sans chercher à faire mousser.",
      "Utiliser des œufs froids sur un beurre pommade : la crème tranche. Tous les ingrédients doivent être à température ambiante.",
    ],
    conservation: "Crue, 48 h au réfrigérateur dans une boîte fermée ; ressortez-la un peu avant pour la pocher. Elle se congèle crue 1 mois.",
  },
  "creme-bavaroise": {
    usage: "Une crème anglaise collée à la gélatine puis allégée de crème fouettée. C'est la garniture des bavarois, des charlottes et de nombreux entremets, où elle apporte une texture fondante qui se tient à la découpe.",
    erreurs: [
      "Dépasser 85 °C à la cuisson de l'anglaise : les jaunes coagulent et la crème devient granuleuse.",
      "Incorporer la crème fouettée dans une anglaise encore chaude (elle fond) ou déjà prise (elle fait des grains) : le bon moment est autour de 25-30 °C, quand l'anglaise commence à épaissir.",
    ],
    conservation: "À couler dès qu'elle est prête, elle fige vite. Une fois prise, 48 h au réfrigérateur ; l'entremets monté se congèle 1 mois.",
  },
  "creme-bavaroise-cacao": {
    usage: "La version cacao du bavarois : un goût de chocolat net sans la lourdeur d'une ganache. Elle garnit charlottes et entremets, et s'associe bien à la poire, à l'orange, au café ou au praliné.",
    erreurs: [
      "Ajouter le cacao directement dans le lait chaud : il fait des grumeaux. Délayez-le d'abord avec un peu de lait froid ou mélangez-le au sucre.",
      "Oublier que le cacao épaissit l'anglaise : elle nappe plus tôt que d'habitude, fiez-vous au thermomètre (82-84 °C) et non à l'œil.",
    ],
    conservation: "48 h au réfrigérateur une fois prise. Se congèle 1 mois dans l'entremets ; décongelez toujours au réfrigérateur.",
  },
  "creme-bavaroise-chocolat-blanc": {
    usage: "Une bavaroise très douce et lactée, parfaite pour équilibrer un insert acide : framboise, passion, citron, cassis. Sa couleur ivoire permet aussi de jolis contrastes à la découpe.",
    erreurs: [
      "Verser l'anglaise bouillante sur le chocolat blanc : il supporte mal la chaleur et peut grainer. Laissez-la redescendre un peu et émulsionnez en trois fois.",
      "Garder le dosage de sucre d'une bavaroise vanille : le chocolat blanc est déjà très sucré, la recette en tient compte, ne le remplacez pas par un autre chocolat à poids égal.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois ; elle reste plus souple que les autres bavaroises à la sortie du froid.",
  },
  "creme-beurre-oeufs": {
    usage: "La crème au beurre à la pâte à bombe, la plus riche et la plus onctueuse : moka, bûches traditionnelles, opéra, macarons. Elle se parfume au café, au praliné, à la pistache ou à la vanille.",
    erreurs: [
      "Ajouter le beurre sur une pâte à bombe encore tiède : il fond et la crème devient liquide. Le mélange doit être revenu à température ambiante.",
      "Paniquer quand la crème semble trancher : continuez de fouetter, ou réchauffez très légèrement la cuve, elle se relie d'elle-même.",
    ],
    conservation: "5 jours au réfrigérateur en boîte fermée, 1 mois au congélateur. Laissez-la revenir à température puis fouettez-la avant de l'utiliser.",
  },
  "creme-brulee": {
    usage: "Un dessert de restaurant par excellence : une crème prise très fondante sous une fine plaque de caramel craquant. Elle se parfume facilement (café, tonka, pistache, lavande) en changeant l'infusion.",
    erreurs: [
      "Cuire trop chaud ou sans bain-marie : la crème fait des bulles et prend un goût d'œuf. Elle doit encore trembloter au centre à la sortie du four.",
      "Brûler le sucre à l'avance : le caramel fond en une heure au contact de la crème. On caramélise au dernier moment, sur une crème bien froide.",
    ],
    conservation: "Non caramélisée, 48 h au réfrigérateur, filmée pour ne pas prendre les odeurs. Ne se congèle pas dans son ramequin.",
  },
  "creme-caramel": {
    usage: "La crème renversée de bistrot : un flan aux œufs entiers démoulé sur son caramel liquide. Avec seulement du lait, des œufs et du sucre, c'est aussi l'un des desserts les plus économiques.",
    erreurs: [
      "Fouetter l'appareil énergiquement : la mousse crée des trous à la cuisson. Mélangez sans faire mousser et écumez la surface.",
      "Démouler trop tôt : il faut une nuit au froid pour que la crème se raffermisse et que le caramel se redissolve en sauce.",
    ],
    conservation: "3 jours au réfrigérateur dans les moules, filmés. Démoulez au moment de servir. Ne se congèle pas.",
  },
  "creme-chantilly": {
    usage: "La crème fouettée sucrée et vanillée : pour garnir choux, saint-honoré et fraisiers, accompagner une tarte ou une glace, et alléger d'autres crèmes (diplomate, bavaroise, mousses).",
    erreurs: [
      "Travailler une crème pas assez froide ou à moins de 30 % de matière grasse : elle ne montera jamais. Crème, cuve et fouet doivent sortir du froid.",
      "Fouetter quelques secondes de trop : la chantilly graine puis tourne en beurre. Finissez à petite vitesse, ou à la main.",
    ],
    conservation: "À utiliser de préférence dans les heures qui suivent. Elle tient 24 h au réfrigérateur mais rend un peu d'eau ; un peu de mascarpone la stabilise.",
  },
  "creme-frangipane": {
    usage: "Le mélange de crème d'amande et de crème pâtissière qui garnit la galette des rois. La pâtissière apporte du moelleux et évite que la garniture ne sèche à la cuisson.",
    erreurs: [
      "Incorporer une crème pâtissière sortant du réfrigérateur sans la lisser : elle laisse des morceaux. Fouettez-la d'abord pour l'assouplir.",
      "Trop garnir ou garnir jusqu'au bord : la frangipane gonfle et fuit par la soudure du feuilletage. Laissez 2 cm libres tout autour.",
    ],
    conservation: "24 h au réfrigérateur avant cuisson, à cause de la pâtissière. La galette cuite se garde 2 jours et se réchauffe quelques minutes au four.",
  },
  "creme-mascarpone": {
    usage: "Une chantilly enrichie au mascarpone, bien plus ferme et stable : idéale pour pocher des décors qui tiennent, garnir un layer cake, un number cake ou des choux préparés à l'avance.",
    erreurs: [
      "Fouetter le mascarpone seul et froid : il fait des grumeaux. Détendez-le d'abord avec un peu de crème liquide.",
      "Monter à pleine vitesse : cette crème passe de souple à grainée en quelques secondes. Ralentissez dès qu'elle marque le fouet.",
    ],
    conservation: "48 h au réfrigérateur, où elle garde sa tenue. Un gâteau décoré se conserve 2 jours au frais ; évitez la congélation.",
  },
  "creme-orange": {
    usage: "Un crémeux d'agrume acidulé, collé à la gélatine pour se tenir à la découpe : fond de tarte à l'orange, insert d'entremets au chocolat, garniture de macarons ou de verrines.",
    erreurs: [
      "Cuire à feu vif sans remuer : les œufs coagulent en grains au fond de la casserole. Cuisez à la nappe en remuant sans arrêt, puis passez au chinois.",
      "Ajouter le beurre dans une crème trop chaude : il fond en huile au lieu de s'émulsionner. Attendez qu'elle redescende vers 40 °C et mixez.",
    ],
    conservation: "3 jours au réfrigérateur, filmée au contact. Se congèle 1 mois, en insert ou en poche.",
  },
  "creme-patissiere-citron": {
    usage: "Une crème au citron liée à la fécule, franche et acidulée : garniture de tartes au citron, de choux, d'éclairs et de verrines. La gélatine lui donne une coupe nette.",
    erreurs: [
      "Ne pas porter à ébullition : la fécule ne cuit pas, la crème garde un goût farineux et relâche de l'eau le lendemain.",
      "Cuire dans une casserole en aluminium : l'acidité du citron attaque le métal et donne un goût métallique. Utilisez de l'inox.",
    ],
    conservation: "48 h au réfrigérateur, filmée au contact. Fouettez-la pour la lisser avant de garnir.",
  },

  // ── Crémeux ───────────────────────────────────────────────────────────────
  "cremeux-au-chocolat": {
    usage: "Une crème anglaise émulsionnée avec du chocolat noir : plus dense qu'une mousse, plus souple qu'une ganache. Elle garnit les tartes au chocolat, se poche en quenelles sur un dessert à l'assiette ou se coule en insert.",
    erreurs: [
      "Verser toute l'anglaise d'un coup sur le chocolat : l'émulsion ne se fait pas et le crémeux reste terne. Procédez en trois fois, puis mixez sans incorporer d'air.",
      "L'utiliser tout de suite : il faut une nuit au froid pour que le beurre de cacao cristallise et donne la texture finale.",
    ],
    conservation: "3 jours au réfrigérateur, filmé au contact. Se congèle 1 mois, coulé en insert ou en cadre.",
  },
  "cremeux-cafe": {
    usage: "Un crémeux infusé au café en grains, arrondi par le chocolat au lait : pour un entremets café-noisette, un opéra revisité, des éclairs ou un dessert à l'assiette.",
    erreurs: [
      "Infuser trop longtemps ou à ébullition : le café devient amer et astringent. Une infusion à couvert, hors du feu, suffit.",
      "Ne pas repeser le liquide après filtration : les grains absorbent une partie du lait et de la crème. Complétez pour retrouver le poids de départ.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois ; le goût de café s'atténue un peu avec le froid.",
  },
  "cremeux-caramel": {
    usage: "Un caramel à sec déglacé à la crème puis lié aux jaunes et à la gélatine : une texture fondante, avec une pointe d'amertume. Excellent avec la pomme, la poire, la noisette ou le chocolat noir.",
    erreurs: [
      "Arrêter le caramel trop clair : le crémeux sera seulement sucré. Cherchez une couleur ambrée franche, juste avant qu'il ne fume.",
      "Déglacer avec une crème froide : le caramel masse en blocs et projette. Faites chauffer la crème avant de la verser, en plusieurs fois.",
    ],
    conservation: "3 jours au réfrigérateur, filmé au contact. Se congèle 1 mois en insert.",
  },
  "cremeux-estragon": {
    usage: "Un crémeux herbacé et légèrement anisé, adouci par le chocolat blanc. Il surprend en dessert à l'assiette avec la fraise, l'abricot, la pêche ou les agrumes.",
    erreurs: [
      "Faire bouillir l'estragon : il prend un goût d'herbe cuite et vire au brun. Infusez à couvert, hors du feu.",
      "Presser trop fort les feuilles au moment de filtrer : la chlorophylle amère passe dans la crème.",
    ],
    conservation: "48 h au réfrigérateur : les parfums d'herbes fraîches s'éventent vite. Se congèle, mais avec une perte d'arôme.",
  },
  "cremeux-exotique": {
    usage: "Un crémeux aux fruits lié aux œufs et monté au beurre, sur le principe d'un lemon curd : acidulé et très fondant. Il réveille un entremets coco, chocolat au lait ou vanille.",
    erreurs: [
      "Cuire sans remuer ou à feu trop vif : les œufs coagulent. Remuez sans arrêt jusqu'à la nappe (82-84 °C).",
      "Incorporer le beurre à chaud : mixez-le dans la crème redescendue vers 40 °C pour obtenir une émulsion lisse et brillante.",
    ],
    conservation: "3 jours au réfrigérateur, filmé au contact. Se congèle 1 mois.",
  },
  "cremeux-fleur-oranger": {
    usage: "Un crémeux très délicat, au parfum de brioche et de pâtisserie orientale. Il accompagne la fraise, l'abricot, la pistache, l'amande ou le miel.",
    erreurs: [
      "Ajouter l'eau de fleur d'oranger avant la cuisson : son parfum s'évapore à la chaleur. Elle s'ajoute à la fin, hors du feu.",
      "Forcer la dose : au-delà d'un certain seuil, la fleur d'oranger donne un goût de savon. Goûtez à froid, le parfum ressort davantage.",
    ],
    conservation: "3 jours au réfrigérateur, bien filmé car il prend facilement les odeurs. Se congèle 1 mois.",
  },
  "cremeux-framboise": {
    usage: "Un crémeux de fruit rouge vif et acidulé : insert d'entremets au chocolat, à la pistache ou à la vanille, garniture de tartelettes et de macarons.",
    erreurs: [
      "Utiliser une purée avec pépins : passez-la au tamis avant de peser, la texture doit être parfaitement lisse.",
      "Trop cuire : la framboise perd sa couleur et son goût de fruit frais. Arrêtez dès que la crème nappe la spatule.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois ; la couleur reste belle si le crémeux est filmé au contact.",
  },
  "cremeux-fruit-gelifier": {
    usage: "Une base de crémeux aux fruits plus fortement collée, pensée pour les montages qui doivent tenir : inserts épais, tartes hautes, gâteaux à transporter. Elle fonctionne avec la plupart des purées.",
    erreurs: [
      "Garder le même dosage pour un fruit très acide (passion, citron) ou une purée très liquide : la prise est alors plus faible, adaptez la gélatine.",
      "Utiliser de l'ananas, du kiwi ou de la papaye crus : leurs enzymes détruisent la gélatine. Ces purées doivent bouillir avant utilisation.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois, de préférence déjà coulé à la bonne forme.",
  },
  "cremeux-noisette": {
    usage: "Un crémeux au praliné, rond et gourmand : pour un paris-brest revisité, une bûche, un entremets noisette-citron ou noisette-chocolat.",
    erreurs: [
      "Ne pas mélanger le praliné avant de le peser : l'huile remonte à la surface du pot, et le fond est plus sec.",
      "Verser l'anglaise sans émulsionner : le gras de la noisette se sépare. Versez en plusieurs fois et mixez pour obtenir une texture lisse.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois sans perte de qualité.",
  },
  "cremeux-pistache": {
    usage: "Un crémeux à la pâte de pistache pure, au goût net de fruit sec. Il s'accorde avec la framboise, la fraise, la griotte, l'abricot et la fleur d'oranger.",
    erreurs: [
      "Prendre une pâte de pistache aromatisée et colorée : le goût devient artificiel. La recette est prévue pour une pâte 100 % pistache.",
      "Se fier à la couleur : une vraie pistache donne un vert kaki, pas un vert vif. Ne cherchez pas à corriger avec du colorant.",
    ],
    conservation: "3 jours au réfrigérateur, filmé au contact pour éviter l'oxydation. Se congèle 1 mois.",
  },
  "cremeux-vanille": {
    usage: "Le crémeux de base, à décliner : garniture de tarte vanille, insert d'entremets, cœur de bûche. La gélatine et le beurre lui donnent une coupe nette et une texture fondante.",
    erreurs: [
      "Gratter la vanille sans laisser infuser : le parfum reste faible. Infusez gousses et graines dans le liquide chaud, à couvert.",
      "Incorporer le beurre sans mixer : le crémeux reste terne et gras en bouche. L'émulsion au mixeur plongeant fait toute la différence.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois.",
  },
  "cremeux-vanille-chocolat-blanc": {
    usage: "Un crémeux vanille enrichi au chocolat blanc, plus doux et plus stable. Il garnit tartes et choux, et se monte au fouet après une nuit au froid pour obtenir une crème pochable.",
    erreurs: [
      "Chauffer le chocolat blanc trop fort : il graine au-delà de 45 °C. Versez l'anglaise chaude dessus plutôt que de le fondre à part.",
      "Vouloir le pocher le jour même : il lui faut au moins 12 h de froid pour cristalliser.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois.",
  },
  "cremeux-verveine": {
    usage: "Un crémeux infusé à la verveine fraîche, citronné et végétal. Il accompagne très bien la pêche, l'abricot, la fraise et les fruits rouges d'été.",
    erreurs: [
      "Utiliser de la verveine sèche à poids égal : elle est beaucoup plus concentrée et plus amère, réduisez nettement la dose.",
      "Infuser à ébullition : la verveine perd sa fraîcheur. Infusez hors du feu, à couvert, puis filtrez sans presser.",
    ],
    conservation: "48 h au réfrigérateur pour garder le parfum. Se congèle, avec une légère perte d'arôme.",
  },

  // ── Desserts régionaux ────────────────────────────────────────────────────
  "clafoutis": {
    usage: "Le dessert limousin de saison des cerises : un appareil proche de la pâte à crêpes, cuit autour des fruits. Hors saison, la même base fonctionne avec des prunes, des abricots ou des poires (on parle alors de flognarde).",
    erreurs: [
      "Utiliser des cerises surgelées non égouttées : elles rendent beaucoup d'eau et le clafoutis ne prend pas.",
      "Le sortir trop tôt : il doit être gonflé, doré, et la lame d'un couteau doit ressortir propre. Il retombe en refroidissant, c'est normal.",
    ],
    conservation: "2 jours au réfrigérateur. Il est meilleur tiède : sortez-le un peu avant ou passez-le quelques minutes au four.",
  },
  "far-breton": {
    usage: "Le flan breton aux pruneaux : une pâte dense et fondante, à la croûte presque caramélisée. Il se mange tiède ou froid, au goûter comme en dessert.",
    erreurs: [
      "Verser l'appareil dans un plat froid : le far attache et ne croûte pas. Beurrez généreusement et démarrez dans un four bien chaud.",
      "Trop fouetter après l'ajout de la farine : la pâte devient élastique. Mélangez juste assez pour qu'elle soit lisse, puis laissez-la reposer.",
    ],
    conservation: "3 jours au réfrigérateur, filmé. Il se raffermit au froid : laissez-le revenir à température avant de le servir.",
  },

  // ── Gâteaux de voyage ─────────────────────────────────────────────────────
  "cake-aux-fruits": {
    usage: "Le cake de voyage classique des salons de thé : une pâte beurrée, des fruits confits et des raisins macérés au rhum. Il se bonifie en quelques jours.",
    erreurs: [
      "Mettre les fruits tels quels dans la pâte : ils tombent au fond. Égouttez-les bien et roulez-les dans un peu de farine.",
      "Cuire trop fort : le cake colore avant d'être cuit à cœur. Fendez-le à la lame après 15 minutes et couvrez-le d'un papier s'il brunit trop vite.",
    ],
    conservation: "Bien filmé, 1 semaine à température ambiante ; il est meilleur à partir du deuxième jour. Se congèle 2 mois.",
  },
  "moelleux-chocolat": {
    usage: "Un gâteau au chocolat simple et rapide, fondant au centre. Servi tiède avec une crème anglaise ou une glace vanille, il devient un dessert de restaurant.",
    erreurs: [
      "Trop cuire : la différence entre fondant et sec se joue à deux minutes près. Le centre doit rester légèrement tremblotant.",
      "Fondre le chocolat à feu direct : il brûle et fait des grains. Faites-le fondre avec le beurre au bain-marie ou par courtes séquences au micro-ondes.",
    ],
    conservation: "3 jours filmé à température ambiante. Dix secondes au micro-ondes lui rendent son fondant.",
  },
  "muffins-chocolat-noisette": {
    usage: "Des muffins au cacao garnis de pépites et de noisettes, pour le goûter, le brunch ou la vente à emporter. La pâte à l'huile reste moelleuse plusieurs jours.",
    erreurs: [
      "Trop mélanger : c'est l'erreur numéro un. Dès que la farine a disparu, on s'arrête, même s'il reste des grumeaux ; sinon les muffins sont caoutchouteux.",
      "Remplir les caissettes à ras bord : ils débordent au lieu de former un dôme. Arrêtez-vous aux trois quarts.",
    ],
    conservation: "3 jours en boîte hermétique. Se congèlent très bien 2 mois ; réchauffez-les quelques minutes au four.",
  },
  "muffins-vanille": {
    usage: "La pâte à muffins de base, à personnaliser : myrtilles, pépites de chocolat, zestes d'agrumes, cœur de pâte à tartiner ou de confiture.",
    erreurs: [
      "Travailler la pâte comme un cake : on mélange très peu, juste pour humidifier la farine. Une pâte trop lisse donne un muffin dense et pointu.",
      "Ajouter des fruits surgelés décongelés : ils colorent toute la pâte et la détrempent. Incorporez-les encore gelés, à la fin.",
    ],
    conservation: "3 jours en boîte hermétique. Se congèlent 2 mois.",
  },
  "quatre-quart-pommes": {
    usage: "Le quatre-quarts breton au beurre demi-sel, enrichi de pommes : un gâteau familial qui se garde bien. Le principe : le même poids d'œufs, de sucre, de farine et de beurre.",
    erreurs: [
      "Choisir des pommes qui se défont à la cuisson : elles rendent de l'eau et font un trou dans la mie. Préférez une variété qui tient, comme la reinette ou la golden.",
      "Démouler à chaud : le gâteau est encore fragile et se casse. Attendez une dizaine de minutes.",
    ],
    conservation: "4 jours filmé à température ambiante. Les pommes le gardent moelleux ; se congèle 1 mois.",
  },

  // ── Glaçages ──────────────────────────────────────────────────────────────
  "glacage-chocolat-noir": {
    usage: "Un glaçage miroir au chocolat de couverture et au lait concentré : brillant, opaque et souple à la découpe. Il se coule sur un entremets ou une bûche sortant du congélateur.",
    erreurs: [
      "Mixer en incorporant de l'air : les bulles restent visibles sur le gâteau. Gardez le mixeur plongeant bien immergé et incliné, puis filtrez.",
      "Couler trop chaud (il glisse et laisse voir la mousse) ou trop froid (il fige en vagues épaisses) : la plupart des glaçages miroir s'utilisent entre 30 et 35 °C.",
    ],
    conservation: "1 semaine au réfrigérateur, filmé au contact, ou 2 mois au congélateur. Refondez-le doucement et mixez-le de nouveau avant utilisation.",
  },
  "glacage-fruits-rouges": {
    usage: "Un glaçage miroir coloré à base de purée de fruits rouges et de chocolat blanc, pour les entremets aux fruits, les bûches d'été et les petits gâteaux individuels.",
    erreurs: [
      "Utiliser un colorant hydrosoluble : il se mélange mal à la matière grasse du chocolat blanc. La recette prévoit un colorant liposoluble.",
      "Glacer un entremets couvert de givre : le glaçage n'adhère pas et se décolle. Passez la main ou un chiffon sec sur le gâteau juste avant.",
    ],
    conservation: "1 semaine au réfrigérateur, 2 mois au congélateur. Réchauffez-le sans dépasser 40 °C pour garder la couleur.",
  },
  "glacage-lactee": {
    usage: "La version chocolat au lait du glaçage miroir : une couleur caramel et un goût plus doux, qui convient aux entremets praliné, café, caramel ou poire.",
    erreurs: [
      "Laisser la gélatine en morceaux : en poudre, elle doit être hydratée dans son poids d'eau précis et totalement fondue dans le sirop chaud.",
      "L'utiliser le jour même : une nuit au froid permet à la gélatine de se stabiliser, et le glaçage devient plus brillant et plus régulier.",
    ],
    conservation: "1 semaine au réfrigérateur, filmé au contact, ou 2 mois au congélateur.",
  },
  "glacage-neutre": {
    usage: "Un nappage transparent à la pectine NH : il fait briller les fruits d'une tarte, les protège du dessèchement et sert de base neutre à colorer ou à parfumer.",
    erreurs: [
      "Verser la pectine seule dans le liquide : elle fait des grumeaux impossibles à rattraper. Mélangez-la toujours à une partie du sucre.",
      "L'ajouter dans un liquide déjà bouillant : la pectine NH s'incorpore vers 40 °C, puis on porte à ébullition.",
    ],
    conservation: "2 semaines au réfrigérateur. Il est thermoréversible : on le refond autant de fois que nécessaire.",
  },
  "glacage-noir": {
    usage: "Le glaçage miroir au cacao, noir profond et très brillant : c'est la finition classique des entremets au chocolat et des bûches.",
    erreurs: [
      "Ne pas faire bouillir le cacao : il reste granuleux et le glaçage manque de brillance. Une vraie ébullition, en remuant, est nécessaire.",
      "Sauter le passage au chinois : le moindre grain de cacao ou de gélatine se voit sur une surface noire.",
    ],
    conservation: "1 semaine au réfrigérateur, filmé au contact, ou 2 mois au congélateur. Réchauffez-le au bain-marie et mixez-le sans bulles.",
  },
  "glacage-noisette": {
    usage: "Le glaçage « rocher » : un chocolat au lait assoupli à l'huile, avec des éclats de noisette. Il enrobe cakes, entremets et esquimaux d'une coque croquante.",
    erreurs: [
      "Supprimer l'huile : c'est elle qui rend la coque fine et facile à couper. Sans elle, le chocolat casse en plaques.",
      "Glacer un gâteau à température ambiante : le glaçage coule sans figer. Le gâteau doit sortir du congélateur ou du réfrigérateur.",
    ],
    conservation: "Plusieurs semaines en boîte fermée, à température ambiante. Refondez-le doucement au moment de l'utiliser.",
  },

  // ── Inserts ───────────────────────────────────────────────────────────────
  "caramel-beurre-sale-religieuses": {
    usage: "Un caramel à la crème, souple et coulant, à glisser au cœur d'une religieuse, d'un chou ou d'un entremets. Il sert aussi de sauce sur une glace ou une crêpe.",
    erreurs: [
      "Remuer le sucre pendant qu'il fond : il cristallise et masse. Laissez-le fondre seul, en inclinant simplement la casserole.",
      "Ajouter le beurre dans un caramel bouillant sans émulsionner : il se sépare et le caramel graisse. Incorporez-le hors du feu, en morceaux, puis mixez.",
    ],
    conservation: "2 semaines au réfrigérateur en bocal fermé. Il durcit au froid : tiédissez-le quelques secondes pour le pocher.",
  },
  "insert-blanc-manger": {
    usage: "Un insert au lait d'amande, blanc et très doux, qui apporte une couche fondante et un contraste de couleur dans un entremets aux fruits rouges, à l'abricot ou à la pêche.",
    erreurs: [
      "Forcer sur l'extrait d'amande amère : quelques gouttes suffisent, au-delà le goût devient chimique.",
      "Couler dans le moule un appareil encore chaud et liquide : attendez qu'il commence à épaissir, sinon le gras et le liquide se séparent en deux couches.",
    ],
    conservation: "Se prépare à l'avance : 1 mois au congélateur, filmé dans son moule. Posez-le encore congelé dans l'entremets.",
  },
  "insert-caramel-exotique": {
    usage: "Un caramel décuit à la purée de passion et de mangue : l'acidité du fruit casse le sucre. Il se place au centre d'un entremets coco, chocolat au lait ou vanille.",
    erreurs: [
      "Décuire avec une purée froide : le caramel masse et projette. Chauffez la purée avant de la verser, hors du feu et en plusieurs fois.",
      "Ne pas recuire après le déglaçage : l'insert reste trop liquide. La seconde cuisson concentre le caramel et lui donne sa tenue.",
    ],
    conservation: "1 mois au congélateur dans son moule. Au réfrigérateur, 1 semaine en boîte fermée.",
  },
  "insert-caramel-fleur-de-sel": {
    usage: "Un cœur de caramel salé, légèrement collé pour ne pas couler à la découpe : pour les entremets chocolat, pomme, poire, vanille ou cacahuète.",
    erreurs: [
      "Saler avec du sel fin à poids égal : la fleur de sel est moins salante et garde du croquant. Ajoutez-la en fin de préparation.",
      "Verser la gélatine dans un caramel à plus de 80 °C : elle perd une partie de son pouvoir gélifiant. Laissez tiédir quelques minutes.",
    ],
    conservation: "1 mois au congélateur. Il reste souple même congelé, ce qui permet de le démouler facilement.",
  },
  "insert-creme-brulee": {
    usage: "Une crème brûlée cuite puis congelée en disque : elle apporte une couche crémeuse et vanillée au milieu d'une mousse au chocolat, au caramel ou aux fruits.",
    erreurs: [
      "Dépasser 82-84 °C à la cuisson : les jaunes coagulent et l'insert devient granuleux. Cuisez à la nappe, à feu doux.",
      "Démouler avant congélation complète : la crème est trop fragile. Elle doit être dure à cœur pour être manipulée.",
    ],
    conservation: "1 mois au congélateur, filmé pour ne pas prendre le givre ni les odeurs.",
  },
  "insert-ganache": {
    usage: "Une ganache noire au miel, coulée en fine couche : elle ajoute de l'intensité et du fondant dans un entremets, ou garnit des tartelettes et des macarons.",
    erreurs: [
      "Fouetter pour mélanger : on incorpore de l'air et la ganache perd son brillant. Émulsionnez à la maryse en partant du centre, ou au mixeur plongeant.",
      "Ajouter le beurre dans une ganache trop chaude : attendez 35-40 °C pour qu'il s'incorpore sans fondre en huile.",
    ],
    conservation: "1 mois au congélateur en insert. Au réfrigérateur, 5 jours filmée au contact.",
  },
  "insert-gelifie-aux-fruits": {
    usage: "Une gelée de purée de fruits, vive et acidulée : la touche de fraîcheur qui équilibre une mousse riche. Elle se coule en disque fin ou en cadre.",
    erreurs: [
      "Faire bouillir la purée avec la gélatine : la gélatine s'ajoute hors du feu, dans une purée chaude mais non bouillante.",
      "Chauffer toute la purée : le fruit perd sa couleur et son goût de frais. N'en chauffez qu'une partie, juste assez pour fondre le sucre et la gélatine.",
    ],
    conservation: "1 mois au congélateur. Au réfrigérateur, il rend un peu d'eau après 2 jours.",
  },
  "insert-praline-fruits-secs": {
    usage: "Un croustillant au praliné et aux fruits secs torréfiés : il apporte le croquant qui manque souvent dans un entremets tout en mousse. On le place contre le biscuit.",
    erreurs: [
      "Sauter la torréfaction : des fruits secs crus sont mous et sans goût. Ils doivent être dorés à cœur et refroidis avant d'être mélangés.",
      "Le poser au contact d'une crème humide sans protection : il ramollit. Le chocolat et le beurre de cacao de la recette servent justement à l'isoler.",
    ],
    conservation: "2 semaines au réfrigérateur en boîte hermétique, 1 mois au congélateur.",
  },
  "insert-riz-souffle-caramelise": {
    usage: "Un croustillant léger de riz soufflé caramélisé, lié au chocolat au lait : il se glisse dans une bûche ou un entremets, ou se détaille en barres gourmandes.",
    erreurs: [
      "Caraméliser à feu trop vif : le riz brûle avant d'être enrobé. Remuez sans arrêt et débarrassez dès que la couleur est blonde.",
      "Mélanger au chocolat un riz encore chaud : le chocolat chauffe trop, blanchit et ne fige pas correctement.",
    ],
    conservation: "1 semaine en boîte hermétique, au sec. Il craint l'humidité plus que le froid.",
  },

  // ── Meringues et mousses de base ──────────────────────────────────────────
  "meringue-francaise": {
    usage: "La meringue la plus simple, faite à froid : coques, pavlovas, décors, vacherins, champignons de bûche. Séchée au four, elle est croquante et fondante.",
    erreurs: [
      "Laisser une trace de jaune ou de gras dans la cuve : les blancs ne montent pas. Dégraissez le matériel et cassez les œufs un par un.",
      "Cuire trop chaud : la meringue jaunit, craque et perle de sirop. Elle doit sécher longtemps à basse température, pas cuire.",
    ],
    conservation: "Plusieurs semaines en boîte hermétique, au sec. Elle ramollit dès qu'elle prend l'humidité : jamais au réfrigérateur.",
  },
  "meringue-suisse": {
    usage: "Une meringue chauffée au bain-marie avant d'être montée : plus dense, plus lisse et plus brillante que la française. Idéale pour les décors pochés précis et la crème au beurre suisse.",
    erreurs: [
      "Chauffer sans fouetter : les blancs cuisent sur les parois. Fouettez en continu jusqu'à ce que le sucre soit totalement fondu, vers 55-60 °C.",
      "Arrêter de monter quand elle est encore tiède : elle doit être froide, ferme et former un bec net.",
    ],
    conservation: "Cuite et bien sèche, plusieurs semaines en boîte hermétique à l'abri de l'humidité.",
  },
  "mousse-caramel": {
    usage: "Une mousse au caramel montée aux œufs, à l'ancienne : jaunes pour le liant, blancs pour la légèreté. Elle se sert en verrine ou garnit un entremets pomme, poire ou chocolat.",
    erreurs: [
      "Ajouter les jaunes dans un caramel trop chaud : ils cuisent en filaments. Laissez tiédir la base avant de les incorporer.",
      "Casser les blancs en mélangeant : détendez la base avec un tiers des blancs, puis incorporez le reste délicatement à la maryse.",
    ],
    conservation: "24 h au réfrigérateur : elle contient des œufs crus, à consommer rapidement. Ne se congèle pas.",
  },
  "mousse-caramel-beurre-sale": {
    usage: "Une mousse au caramel salé allégée à la chantilly, sans œufs : texture aérienne et tenue régulière. Pour les entremets, les bûches et les verrines.",
    erreurs: [
      "Incorporer la chantilly dans un caramel encore chaud : elle fond et la mousse ne prend pas. La base doit être redescendue vers 25-30 °C.",
      "Attendre trop longtemps : la gélatine fige la base, qui fait alors des grains dans la crème. Surveillez le moment où elle épaissit.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois dans l'entremets.",
  },
  "mousse-chocolat-blanc-oeuf": {
    usage: "La mousse au chocolat traditionnelle des bistrots : chocolat noir, jaunes et blancs en neige, sans crème. Un goût de chocolat intense et une texture très aérée.",
    erreurs: [
      "Mélanger les jaunes dans un chocolat trop chaud ou trop froid : dans le premier cas ils cuisent, dans le second le chocolat fige en pépites. Visez un chocolat tiède, vers 45 °C.",
      "Monter les blancs trop fermes : ils font des paquets et se mélangent mal. Arrêtez-vous au bec d'oiseau.",
    ],
    conservation: "24 h au réfrigérateur, filmée : les œufs sont crus. Laissez prendre au moins 4 h avant de servir.",
  },
  "mousse-chocolat-creme-fleurette": {
    usage: "Une mousse sur base ganache, sans œufs : la plus simple et la plus stable. Elle convient aux entremets, aux bûches et aux verrines, et se congèle très bien.",
    erreurs: [
      "Mélanger la crème fouettée à une ganache trop chaude (la crème fond) ou trop froide (le chocolat fige en grains) : la ganache doit être autour de 35-40 °C.",
      "Monter la crème trop ferme : une crème mousseuse, encore souple, donne une mousse plus lisse.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois sans perte de texture.",
  },
  "mousse-chocolat-pate-a-bombe": {
    usage: "La mousse au chocolat des pâtissiers : les jaunes sont cuits par un sirop chaud (pâte à bombe), ce qui donne une mousse onctueuse, stable et plus sûre qu'avec des œufs crus.",
    erreurs: [
      "Verser le sirop d'un coup : les jaunes cuisent en grains. Versez-le en filet sur les jaunes qui tournent.",
      "Assembler dans le désordre : le chocolat fondu et la pâte à bombe doivent être tièdes tous les deux avant d'ajouter la crème fouettée.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-citron-mascarpone": {
    usage: "Une mousse au citron sur une base proche du tiramisu : mascarpone, jaunes et blancs en neige. Fraîche et rapide, elle se sert en verrine avec un biscuit ou un crumble.",
    erreurs: [
      "Verser le jus de citron d'un coup sur le mascarpone froid : il graine. Détendez d'abord le mascarpone avec les jaunes sucrés.",
      "Zester jusqu'au blanc : la partie blanche de l'écorce apporte de l'amertume. Ne prélevez que la peau colorée.",
    ],
    conservation: "24 h au réfrigérateur, car elle contient des œufs crus. Ne se congèle pas.",
  },
  "mousse-foret-noire": {
    usage: "Une ganache montée au chocolat et au kirsch, pensée pour la forêt-noire : elle se poche, se lisse à la spatule et tient entre les couches de biscuit.",
    erreurs: [
      "La monter sans repos : la ganache doit passer plusieurs heures au froid, idéalement une nuit, sinon elle ne prendra pas de volume.",
      "Fouetter trop longtemps : comme une chantilly, elle graine en quelques secondes. Arrêtez dès qu'elle forme un bec souple.",
    ],
    conservation: "La base se garde 3 jours au réfrigérateur avant montage. Une fois montée, utilisez-la tout de suite.",
  },
  "mousse-fromage-blanc": {
    usage: "Une mousse légère au fromage blanc, sans gélatine : en verrine avec des fruits rouges ou un coulis, ou en garniture de tarte façon cheesecake léger.",
    erreurs: [
      "Utiliser un fromage blanc non égoutté : il rend de l'eau et la mousse s'affaisse. Égouttez-le une heure dans une passoire fine.",
      "Prendre un fromage blanc allégé : c'est la matière grasse qui donne la tenue et la rondeur.",
    ],
    conservation: "24 h au réfrigérateur. Sans gélatine, elle ne supporte ni l'attente ni la congélation.",
  },
  "mousse-gianduja": {
    usage: "Une mousse au gianduja (chocolat et noisette broyés ensemble), douce et très gourmande : pour les bûches, les entremets praliné et les desserts à l'assiette.",
    erreurs: [
      "Chauffer le gianduja comme un chocolat noir : il est riche en noisette et en sucre, il brûle vite. Faites-le fondre doucement, sans dépasser 45 °C.",
      "Incorporer la crème fouettée trop tôt : la base doit être tiède, sinon la mousse reste liquide.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-marron": {
    usage: "Une mousse d'automne à la pâte et à la crème de marron, relevée au rhum. Elle garnit les bûches et se marie avec le cassis, la poire, la vanille et le chocolat.",
    erreurs: [
      "Mélanger la pâte de marron froide et compacte : elle laisse des morceaux. Détendez-la d'abord avec la crème de marron, puis lissez au fouet.",
      "Trop sucrer : la crème de marron est déjà très sucrée. Une pointe de sel ou de rhum équilibre mieux qu'un ajout de sucre.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois dans l'entremets.",
  },
  "mousse-noisette": {
    usage: "Une mousse au praliné, stabilisée au mascarpone : onctueuse et facile à pocher. Pour un entremets noisette-citron, noisette-chocolat ou une bûche.",
    erreurs: [
      "Verser la crème chaude sur le praliné sans émulsionner : le gras de noisette se sépare. Mélangez en plusieurs fois, puis mixez.",
      "Monter la crème et le mascarpone trop fermes : la mousse devient lourde. Gardez une texture souple.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-riz-imperatrice": {
    usage: "Le riz à l'impératrice, un grand classique : un riz au lait lié à une crème anglaise collée, allégé de crème fouettée et garni de fruits confits au kirsch. Il se moule et se sert froid.",
    erreurs: [
      "Cuire le riz à gros bouillons dans le lait : les grains éclatent et le lait attache. Gardez un simple frémissement et remuez de temps en temps.",
      "Ajouter la crème fouettée dans un riz encore chaud : elle fond. L'ensemble doit être froid et commencer à prendre.",
    ],
    conservation: "48 h au réfrigérateur, filmé. Ne se congèle pas : le riz durcit.",
  },

  // ── Pâte à choux ──────────────────────────────────────────────────────────
  "choux-creme": {
    usage: "Des choux coiffés d'un disque de craquelin, qui les fait gonfler bien ronds et réguliers, puis garnis d'une chantilly au mascarpone. La base des choux de vitrine.",
    erreurs: [
      "Ouvrir le four pendant la pousse : les choux retombent. Attendez qu'ils soient bien dorés et secs.",
      "Garnir trop tôt : la crème ramollit le chou en quelques heures. Garnissez au plus près du service.",
    ],
    conservation: "Les coques vides se gardent 2 jours en boîte ou 1 mois au congélateur ; repassez-les 5 minutes au four. Garnis, à déguster dans la journée.",
  },
  "churros": {
    usage: "La pâte à frire espagnole, sans œufs : des bâtonnets cannelés croustillants, roulés dans le sucre à la cannelle et trempés dans un chocolat chaud épais.",
    erreurs: [
      "Frire dans une huile pas assez chaude : les churros boivent le gras. L'huile doit être autour de 180 °C.",
      "Dresser avec une douille lisse : la surface cannelée laisse la vapeur s'échapper. Avec une douille lisse, le churro peut éclater dans l'huile.",
    ],
    conservation: "À manger aussitôt : ils ramollissent en une heure. La pâte crue peut attendre 24 h au réfrigérateur dans la poche.",
  },

  // ── Pâtes et crumbles ─────────────────────────────────────────────────────
  "craquelin-pate-choux": {
    usage: "Un disque de pâte sucrée posé sur le chou cru : en fondant, il guide la pousse et donne un chou rond, régulier et craquant. Indispensable pour les choux et les religieuses modernes.",
    erreurs: [
      "L'étaler trop épais : il pèse sur le chou et l'empêche de gonfler. Visez environ 2 mm, entre deux feuilles de papier.",
      "Le détailler à température ambiante : il colle et se déforme. Travaillez-le toujours congelé.",
    ],
    conservation: "1 mois au congélateur, en plaque ou déjà détaillé. Posez-le encore congelé sur les choux.",
  },
  "crumble-amande": {
    usage: "Des éclats sablés aux amandes, cuits à part : pour apporter du croustillant sur une verrine, une tarte, une compote ou un dessert à l'assiette.",
    erreurs: [
      "Travailler avec un beurre mou : on obtient une pâte et non des grains. Le beurre doit être froid et le sablage rapide.",
      "Serrer les morceaux sur la plaque : ils fusionnent. Espacez-les et remuez-les à mi-cuisson.",
    ],
    conservation: "Cuit : 2 semaines en boîte hermétique. Cru : 1 mois au congélateur, à cuire sans décongélation.",
  },
  "la-pate-sablee": {
    usage: "La pâte friable et beurrée des tartes aux fruits, au citron ou au chocolat, et des petits sablés. La poudre d'amande lui donne du goût et du fondant.",
    erreurs: [
      "Trop pétrir : la pâte devient élastique, se rétracte à la cuisson et durcit. On fraise une ou deux fois, pas plus.",
      "Foncer sans repos : la pâte doit passer au moins une heure au froid, puis encore quelques minutes une fois dans le moule.",
    ],
    conservation: "Crue : 3 jours au réfrigérateur ou 2 mois au congélateur, filmée. Un fond cuit se garde 3 jours en boîte hermétique.",
  },
  "streusel-amande": {
    usage: "La pâte à crumble alsacienne, à poids égaux : parsemée sur une tarte, une brioche ou un muffin avant cuisson, ou cuite seule pour servir de fond croustillant.",
    erreurs: [
      "Sabler trop longtemps : la pâte s'amalgame en boule. Arrêtez dès que vous obtenez de gros grains.",
      "L'utiliser tiède : passez-le au froid avant cuisson pour que les grains gardent leur forme.",
    ],
    conservation: "Cru : 1 mois au congélateur. Cuit : 2 semaines en boîte hermétique.",
  },

  // ── Petits fours secs ─────────────────────────────────────────────────────
  "craquant-breton": {
    usage: "Un petit four sec très croquant, aux blancs d'œufs et aux noisettes, sans matière grasse ajoutée. Il accompagne le café, une glace ou une mousse.",
    erreurs: [
      "Dresser trop serré : la pâte s'étale à la cuisson. Laissez de l'espace entre les pièces.",
      "Décoller à chaud : les craquants sont encore mous et se déchirent. Ils durcissent en refroidissant sur la plaque.",
    ],
    conservation: "2 semaines en boîte en fer, au sec.",
  },
  "dentelle-amande-orange": {
    usage: "Des tuiles ajourées très fines, au beurre et au jus d'orange. Elles décorent les desserts à l'assiette et se moulent en tuile, en cigarette ou en coupelle.",
    erreurs: [
      "Déposer trop de pâte : elle s'étale énormément. Une demi-cuillère à café par pièce, très espacée, suffit.",
      "Attendre trop pour les mettre en forme : la dentelle se façonne quelques secondes après la sortie du four, puis elle casse.",
    ],
    conservation: "3 à 4 jours en boîte hermétique, avec un absorbeur d'humidité si possible. Elles ramollissent très vite à l'air.",
  },
  "financier-au-miel": {
    usage: "Le petit gâteau aux amandes et au beurre noisette, ici parfumé au miel qui lui garde son moelleux. Il se décline en mignardises ou en base de dessert.",
    erreurs: [
      "Fondre le beurre sans le pousser jusqu'à la couleur noisette : c'est cette cuisson qui donne le goût caractéristique. Filtrez-le pour retirer les dépôts brûlés.",
      "Fouetter les blancs : on les ajoute crus et non montés, juste mélangés.",
    ],
    conservation: "4 jours en boîte hermétique. La pâte crue se garde 3 jours au froid et gagne même à reposer une nuit.",
  },
  "langue-de-chat": {
    usage: "Un biscuit fin et allongé, croquant sur les bords : l'accompagnement classique des glaces, des crèmes et des mousses. La même pâte sert aux tuiles et aux cigarettes.",
    erreurs: [
      "Ajouter des blancs froids sur le beurre : la pâte tranche. Travaillez avec des ingrédients à température ambiante.",
      "Sortir les biscuits trop pâles : seul le pourtour doit colorer, le centre reste clair. Surveillez, la cuisson est très rapide.",
    ],
    conservation: "1 semaine en boîte en fer, au sec.",
  },
  "les-biarritz": {
    usage: "Un petit four rond aux amandes, dont la base est trempée dans le chocolat noir. Un classique des boîtes de fours secs.",
    erreurs: [
      "Enrober avec un chocolat non tempéré : il blanchit et reste collant. Mettez le chocolat au point avant de tremper.",
      "Chocolater des biscuits encore tièdes : le chocolat fond et ne brille pas. Attendez le refroidissement complet.",
    ],
    conservation: "10 jours en boîte hermétique, au frais mais pas au réfrigérateur, pour préserver le chocolat.",
  },
  "les-congolais": {
    usage: "Les rochers à la noix de coco : dorés dehors, moelleux dedans. Ils utilisent des blancs d'œufs et se préparent en quelques minutes.",
    erreurs: [
      "Sauter la chauffe de l'appareil : tiédir le mélange dissout le sucre et donne des rochers qui se tiennent et restent moelleux.",
      "Trop cuire : ils sèchent complètement. La pointe doit être dorée et le cœur encore tendre.",
    ],
    conservation: "5 jours en boîte hermétique. Ils se congèlent 1 mois.",
  },
  "les-cookies": {
    usage: "Le biscuit américain aux pépites de chocolat : croustillant sur les bords, moelleux au centre. La pâte se prépare à l'avance et se cuit à la demande.",
    erreurs: [
      "Cuire jusqu'à ce qu'ils paraissent cuits : ils sont alors secs une fois refroidis. Sortez-les quand le centre semble encore un peu pâle.",
      "Enfourner une pâte molle : les cookies s'étalent en galette. Un passage au froid avant cuisson garde leur épaisseur.",
    ],
    conservation: "4 jours en boîte hermétique. Les boules de pâte crue se congèlent 2 mois et se cuisent encore gelées.",
  },
  "les-florentin": {
    usage: "Un disque d'amandes effilées et de fruits confits pris dans un caramel au miel et à la crème, nappé de chocolat noir sur une face.",
    erreurs: [
      "Ne pas cuire assez le sirop : en dessous de 118 °C, l'appareil s'étale trop et reste collant.",
      "Chocolater sans tempérage : le chocolat blanchit en quelques jours.",
    ],
    conservation: "2 semaines en boîte hermétique, au frais et au sec. L'humidité les rend collants.",
  },
  "les-palais-des-dames": {
    usage: "De petits palets moelleux, abricotés puis glacés au sucre : un four sec ancien, que l'on trouve souvent aux raisins secs macérés.",
    erreurs: [
      "Glacer directement sur le biscuit : la couche de confiture d'abricot sert d'isolant, sans elle le glaçage est absorbé.",
      "Trop cuire : les palets doivent rester pâles, à peine dorés sur le bord, pour garder leur moelleux.",
    ],
    conservation: "1 semaine en boîte hermétique.",
  },
  "les-sables-au-beurre": {
    usage: "Le sablé de base, friable et parfumé au citron : à l'emporte-pièce pour le goûter, ou comme fond de tartelette et de dessert à l'assiette.",
    erreurs: [
      "Travailler la pâte après l'ajout de la farine : elle durcit à la cuisson. Rassemblez-la sans la pétrir.",
      "Abaisser une pâte trop froide ou trop chaude : dure, elle casse ; molle, elle colle. Laissez-la revenir quelques minutes après le repos au froid.",
    ],
    conservation: "2 semaines en boîte en fer. La pâte crue se congèle 2 mois.",
  },
  "madeleine": {
    usage: "Le petit gâteau en forme de coquille, reconnaissable à sa bosse. Nature, au citron, au miel ou trempée dans le chocolat.",
    erreurs: [
      "Cuire la pâte sans repos au froid : la bosse vient du choc thermique entre une pâte bien froide et un four très chaud.",
      "Trop remplir les empreintes : la pâte déborde et la coquille perd sa forme. Arrêtez-vous aux trois quarts.",
    ],
    conservation: "3 jours en boîte hermétique ; elles sont à leur meilleur le jour même. La pâte crue se garde 2 jours au froid.",
  },
  "petit-four-pate-amande": {
    usage: "Des petits fours pochés à la pâte d'amande, décorés de fruits confits : croûte fine dehors, cœur fondant. Un incontournable des boîtes de fours secs traditionnelles.",
    erreurs: [
      "Ajouter tous les blancs d'un coup : la pâte devient trop molle pour être pochée. Incorporez-les petit à petit jusqu'à la bonne consistance.",
      "Cuire sans laisser croûter : le séchage, plusieurs heures à l'air, fixe le dessin de la douille.",
    ],
    conservation: "2 semaines en boîte hermétique.",
  },
  "rocher-amande-coco": {
    usage: "De petits rochers aux blancs d'œufs, à faire aux amandes hachées ou à la noix de coco. Une bonne façon d'utiliser des blancs en trop.",
    erreurs: [
      "Façonner des rochers trop gros : l'extérieur brûle avant que le cœur soit pris.",
      "Cuire à four trop doux : ils sèchent sans colorer. Il faut une chaleur vive et une cuisson courte.",
    ],
    conservation: "1 semaine en boîte hermétique.",
  },
  "sable-diamants": {
    usage: "Un sablé roulé en boudin, enrobé de sucre cristal puis tranché : le bord brille comme une rangée de diamants. Très simple à préparer en quantité.",
    erreurs: [
      "Trancher un boudin mou : les sablés s'écrasent et perdent leur rond. Le boudin doit être très froid, presque dur.",
      "Rouler dans le sucre sans humidifier : dorez légèrement la surface à l'œuf ou à l'eau pour que le sucre adhère.",
    ],
    conservation: "2 semaines en boîte en fer. Le boudin cru se congèle 2 mois : on tranche et on cuit à la demande.",
  },
  "sable-spitz": {
    usage: "Un sablé viennois poché à la douille cannelée, fondant, dont une extrémité est trempée dans le chocolat noir.",
    erreurs: [
      "Pocher une pâte trop froide : elle est trop ferme et la poche éclate. Le beurre doit être bien pommade.",
      "Trop travailler après la farine : la pâte se raffermit et les stries s'effacent à la cuisson.",
    ],
    conservation: "10 jours en boîte hermétique, au frais.",
  },
  "speculoos": {
    usage: "Le biscuit épicé belge à la cassonade : à croquer avec le café, à émietter en fond de cheesecake ou à mixer en pâte à tartiner.",
    erreurs: [
      "Cuire la pâte le jour même : une nuit de repos au froid développe les épices et facilite le détaillage.",
      "Remplacer la cassonade brune par du sucre blanc : on perd la couleur et le goût caramélisé qui font le spéculoos.",
    ],
    conservation: "3 semaines en boîte en fer : c'est l'un des biscuits qui se gardent le mieux.",
  },

  // ── Sauces ────────────────────────────────────────────────────────────────
  "sauce-samourai": {
    usage: "La sauce pimentée des friteries belges, sur une base de mayonnaise : pour les frites, les burgers, les kebabs, les grillades et les sandwichs.",
    erreurs: [
      "Tout doser d'un coup : la force des sauces piquantes varie beaucoup d'une marque à l'autre. Ajoutez le piment progressivement et goûtez.",
      "La servir tout de suite : après un passage au froid, les saveurs se fondent et le piquant s'arrondit.",
    ],
    conservation: "5 jours au réfrigérateur en bocal fermé si la mayonnaise est du commerce ; 48 h avec une mayonnaise maison.",
  },

  // ── Mousses aux fruits ────────────────────────────────────────────────────
  "mousse-abricot": {
    usage: "Une mousse acidulée et parfumée, qui se marie avec la pistache, l'amande, le romarin ou la lavande. Elle garnit charlottes et entremets d'été, sur un biscuit joconde ou une dacquoise.",
    erreurs: [
      "Chauffer toute la purée : l'abricot brunit et prend un goût de confiture. Ne chauffez que la part nécessaire pour dissoudre le sucre et la gélatine.",
      "Incorporer la chantilly dans une purée encore tiède : la mousse retombe et se sépare en deux couches au froid.",
    ],
    conservation: "48 h au réfrigérateur une fois prise. Montée en entremets, elle se congèle 1 mois.",
  },
  "mousse-ananas": {
    usage: "Une mousse exotique et fraîche, relevée au rhum. Elle s'associe à la noix de coco, au citron vert, à la vanille ou au gingembre, sur un biscuit coco ou une dacquoise.",
    erreurs: [
      "Utiliser de l'ananas frais sans le faire bouillir : la broméline, une enzyme du fruit cru, détruit la gélatine et la mousse reste liquide. Les purées pasteurisées du commerce ne posent pas ce problème.",
      "Ajouter le rhum dans la purée bouillante : l'arôme s'évapore. Versez-le une fois le mélange tiédi.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois dans l'entremets.",
  },
  "mousse-banane": {
    usage: "Une mousse douce et ronde, faite avec des bananes fraîches bien mûres. Elle aime le chocolat, le caramel, le fruit de la passion et la cacahuète.",
    erreurs: [
      "Prendre des bananes à peine mûres : elles sont farineuses et sans parfum. Choisissez des fruits à la peau tigrée.",
      "Mixer sans jus de citron : la banane noircit en quelques minutes. Le citron s'ajoute dès le mixage.",
    ],
    conservation: "24 à 48 h au réfrigérateur : la couleur grise un peu avec le temps. Se congèle 1 mois, la teinte reste alors stable.",
  },
  "mousse-cassis": {
    usage: "Une mousse au goût puissant et à la couleur violette intense, adoucie par la meringue italienne. Le cassis s'accorde avec le marron, la vanille, la violette et le chocolat blanc.",
    erreurs: [
      "Incorporer une meringue encore chaude : elle fait fondre la crème fouettée. Laissez-la tourner jusqu'à complet refroidissement.",
      "Mélanger en une seule fois : détendez d'abord la purée collée avec un peu de meringue, puis ajoutez le reste et la crème délicatement.",
    ],
    conservation: "48 h au réfrigérateur. La meringue italienne lui donne une très bonne tenue à la congélation (1 mois).",
  },
  "mousse-cerise": {
    usage: "Une mousse fruitée relevée au kirsch, naturellement associée au chocolat (façon forêt-noire), à la pistache et à l'amande.",
    erreurs: [
      "Confondre purée de cerise douce et purée de griotte : la griotte est bien plus acide, la mousse sera plus vive. Goûtez et ajustez le sucre.",
      "Verser le kirsch à chaud : l'alcool et le parfum s'en vont. Ajoutez-le dans la purée refroidie.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-coco": {
    usage: "Une mousse blanche et douce, peu acide, qui sert souvent de base neutre autour d'un insert vif : passion, mangue, ananas, framboise, citron vert.",
    erreurs: [
      "Oublier de mélanger la purée avant de la peser : la matière grasse de la coco fige en surface, le fond est plus aqueux.",
      "Monter la crème trop ferme : avec le gras de la coco, la mousse devient compacte et laisse une sensation grasse en bouche.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle très bien, 1 mois.",
  },
  "mousse-fraise": {
    usage: "La mousse de printemps par excellence : pour une charlotte, un fraisier revisité ou un entremets avec pistache, rhubarbe, basilic ou vanille.",
    erreurs: [
      "Compter sur des fraises fades : la mousse amplifie le goût du fruit, pas l'inverse. Hors saison, préférez une bonne purée surgelée.",
      "Supprimer le jus de citron : il ne se sent pas, mais il fixe la couleur et fait ressortir le goût de la fraise.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois ; la couleur pâlit légèrement.",
  },
  "mousse-framboise": {
    usage: "Une mousse à l'acidité franche et à la couleur vive. La framboise est l'un des fruits les plus faciles à marier : chocolat, pistache, vanille, litchi, rose.",
    erreurs: [
      "Laisser les pépins : avec une purée maison, passez-la au tamis fin avant de peser.",
      "Monter la crème trop ferme : la recette demande une chantilly souple, qui s'incorpore sans faire de grains.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois sans perdre sa couleur.",
  },
  "mousse-fruit-exotique": {
    usage: "Une mousse sur un mélange de fruits tropicaux (souvent passion, mangue, banane, ananas) : acidulée et parfumée, elle accompagne la coco, le chocolat au lait et la vanille.",
    erreurs: [
      "Préparer son propre mélange avec de l'ananas ou du kiwi crus : leurs enzymes empêchent la gélatine de prendre. Faites bouillir ces fruits, ou utilisez une purée pasteurisée.",
      "Chauffer toute la purée : la passion perd son parfum à la chaleur. Chauffez-en une partie seulement.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-goyave": {
    usage: "Une mousse au parfum musqué et à la jolie couleur rose, relevée au citron vert. Elle s'accorde avec la fraise, la coco et le fruit de la passion.",
    erreurs: [
      "Utiliser une purée maison non tamisée : la goyave est pleine de petites graines très dures.",
      "Oublier le citron vert : la goyave est douce et peu acide, sans lui la mousse paraît plate.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-groseille": {
    usage: "Une mousse très acidulée, rouge vif, idéale pour réveiller un dessert doux : vanille, fromage blanc, chocolat blanc, pêche.",
    erreurs: [
      "Garder le sucre d'une mousse à la fraise : la groseille est beaucoup plus acide. Goûtez la purée sucrée avant de coller.",
      "Faire bouillir la purée : la groseille est riche en pectine, elle épaissit et prend un goût de gelée cuite.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-kalamansi": {
    usage: "Une mousse sur le kalamansi, petit agrume philippin entre la mandarine et le citron vert, très acide et très parfumé. Il s'accorde avec le chocolat au lait, la noisette, la coco et le thé.",
    erreurs: [
      "Le doser comme une purée de fruit doux : son acidité domine vite. Respectez la proportion de sucre et de crème de la recette.",
      "Verser la purée glacée sur la gélatine fondue : elle fige en filaments. Mélangez à température proche.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-kiwi": {
    usage: "Une mousse verte et acidulée, peu courante, qui se marie avec la fraise, la banane, la mangue ou le citron vert.",
    erreurs: [
      "Travailler le kiwi cru : son enzyme, l'actinidine, détruit la gélatine. La purée de fruits frais doit bouillir deux minutes, comme l'indique la recette.",
      "Mixer longtemps : les pépins broyés donnent de l'amertume et une couleur grise. Mixez brièvement ou passez au tamis.",
    ],
    conservation: "24 à 48 h au réfrigérateur : le vert ternit rapidement. Se congèle 1 mois.",
  },
  "mousse-litchi": {
    usage: "Une mousse très délicate, au parfum floral. Le trio litchi, framboise et rose est un classique ; elle va aussi avec le pamplemousse et la noix de coco.",
    erreurs: [
      "La placer à côté de saveurs fortes : le litchi est vite écrasé par le chocolat noir ou la passion.",
      "Trop chauffer la purée : son parfum est volatil. Chauffez-en le minimum, juste pour fondre la gélatine.",
    ],
    conservation: "48 h au réfrigérateur, bien filmée car elle prend les odeurs. Se congèle 1 mois.",
  },
  "mousse-mandarine": {
    usage: "Une mousse d'agrume douce et parfumée, parfaite en hiver : avec le chocolat, le marron, la noisette ou le pain d'épices.",
    erreurs: [
      "S'attendre à l'acidité d'un citron : la mandarine est douce. Un trait de jus de citron ou quelques zestes relèvent la mousse.",
      "Utiliser un jus filtré à la place de la purée sans rien changer : il contient plus d'eau, la prise sera plus fragile.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-mangue": {
    usage: "Une mousse ronde et sucrée, à la couleur jaune orangé, relevée au citron vert. Associations classiques : passion, coco, framboise, chocolat au lait.",
    erreurs: [
      "Choisir une mangue fibreuse pour une purée maison : la texture devient filandreuse. Mixez finement et passez au tamis.",
      "Supprimer le citron vert : la mangue est peu acide, il lui donne du relief.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois sans changer de couleur.",
  },
  "mousse-mirabelle": {
    usage: "Une mousse de fin d'été à la mirabelle de Lorraine, relevée d'une pointe d'eau-de-vie. Elle s'accorde avec l'amande, la vanille et la cannelle.",
    erreurs: [
      "Utiliser des fruits pas assez mûrs : la mirabelle doit être dorée et tachetée pour donner tout son parfum.",
      "Forcer sur l'eau-de-vie : elle doit souligner le fruit, pas le couvrir. Ajoutez-la à froid, en goûtant.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-mure": {
    usage: "Une mousse aux fruits noirs, au goût boisé et à la couleur profonde. Elle va bien avec la pomme, la vanille, le chocolat blanc et la violette.",
    erreurs: [
      "Garder les pépins : la mûre en contient beaucoup, et ils sont durs. Tamisez toujours la purée.",
      "Oublier le jus de citron : bien mûr, ce fruit est doux, le citron lui rend sa vivacité.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-myrtille": {
    usage: "Une mousse d'un violet intense, au goût doux. Elle se marie avec le citron, le fromage blanc, la vanille et l'amande.",
    erreurs: [
      "Compter sur la myrtille seule pour le goût : elle est peu acide, le jus de citron est indispensable pour la réveiller.",
      "Utiliser des myrtilles de culture pour une purée maison sans la concentrer : elles sont plus aqueuses et moins parfumées que les myrtilles sauvages.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois ; attention, elle tache les biscuits clairs.",
  },
  "mousse-orange-sanguine": {
    usage: "Une mousse d'agrume à la couleur rouge orangé et à la légère amertume. Elle accompagne le chocolat noir, les épices douces et l'amande.",
    erreurs: [
      "Chauffer trop fort : la couleur vire au brun et l'amertume ressort. Chauffez une petite partie de la purée seulement.",
      "Ajouter des zestes prélevés avec le blanc de l'écorce : ils renforcent l'amertume.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-pamplemousse": {
    usage: "Une mousse fraîche et légèrement amère, à base de jus de pamplemousse rose. Elle s'associe à la fraise, au litchi, à la vanille et au thé.",
    erreurs: [
      "Traiter le jus comme une purée : il est plus liquide et la mousse tient moins bien. Respectez le dosage de gélatine prévu pour cette recette.",
      "Presser le fruit trop fort : les membranes libèrent de l'amertume. Filtrez le jus.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-papaye": {
    usage: "Une mousse douce et orangée, relevée au citron vert. Elle complète un dessert exotique avec la passion, la coco ou la mangue.",
    erreurs: [
      "Utiliser de la papaye fraîche crue : comme l'ananas et le kiwi, elle contient une enzyme (la papaïne) qui empêche la gélatine de prendre. Portez la purée de fruits frais à ébullition, ou prenez une purée pasteurisée.",
      "Tarder à l'utiliser : la papaye s'oxyde et son goût s'affadit. Mixez-la au dernier moment, avec le citron vert.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-passion": {
    usage: "Une mousse très parfumée et très acide, à utiliser comme un condiment : elle réveille le chocolat au lait, la coco, la mangue et la banane.",
    erreurs: [
      "Réduire le sucre : la passion est l'un des fruits les plus acides, la mousse devient agressive.",
      "Chauffer toute la purée : son parfum est fragile. Une petite partie suffit pour fondre la gélatine.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-peche": {
    usage: "Une mousse d'été délicate, à marier avec la verveine, la framboise (pêche Melba), la vanille ou l'amande.",
    erreurs: [
      "Mixer des pêches sans jus de citron : la purée brunit très vite.",
      "L'associer à des goûts trop puissants : la pêche est subtile, elle disparaît derrière le chocolat ou la passion.",
    ],
    conservation: "48 h au réfrigérateur ; la couleur fonce un peu. Se congèle 1 mois.",
  },
  "mousse-poire": {
    usage: "Une mousse fine à la poire Williams, relevée d'eau-de-vie de poire : la garniture de la charlotte aux poires, à associer au chocolat, au caramel ou au marron.",
    erreurs: [
      "Mixer des poires fraîches crues : elles s'oxydent et le goût reste faible. Utilisez des poires pochées ou une purée du commerce.",
      "Oublier l'alcool de poire ou en mettre trop : quelques grammes suffisent à faire ressortir le fruit.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },
  "mousse-pomme": {
    usage: "Une mousse préparée à partir de pommes compotées, parfumée au calvados. Elle s'accorde avec le caramel, la cannelle, le spéculoos et le sarrasin.",
    erreurs: [
      "Utiliser une compote trop liquide : la mousse manque de goût et de tenue. Faites-la réduire pour concentrer le fruit.",
      "Choisir une pomme sans acidité : préférez une variété parfumée comme la reinette, la boskoop ou la granny smith.",
    ],
    conservation: "48 h au réfrigérateur. Se congèle 1 mois.",
  },

  // ── Cakes salés ───────────────────────────────────────────────────────────
  "cake-anchois-tomate": {
    usage: "Un cake aux saveurs provençales, à couper en cubes pour l'apéritif ou en tranches avec une salade de roquette.",
    erreurs: [
      "Saler l'appareil : les anchois, les olives et le gruyère salent déjà largement. Poivrez seulement.",
      "Mettre les tomates avec leurs pépins et leur jus : la mie devient pâteuse. Épépinez-les et égouttez-les sur du papier absorbant.",
    ],
    conservation: "3 jours au réfrigérateur, filmé. Il est meilleur à température ambiante ou légèrement tiédi.",
  },
  "cake-artichaut-olive": {
    usage: "Un cake végétarien au goût doux et légèrement acidulé, pour un buffet froid, un pique-nique ou une entrée avec une sauce au yaourt.",
    erreurs: [
      "Utiliser des fonds d'artichauts en conserve sans les égoutter ni les sécher : ils détrempent la pâte.",
      "Oublier le jus de citron : il évite que l'artichaut noircisse et relève son goût.",
    ],
    conservation: "3 jours au réfrigérateur, bien emballé. Se congèle en tranches 1 mois.",
  },
  "cake-boudin-noir": {
    usage: "Un accord sucré-salé classique, boudin et pomme, en version cake : en tranches tièdes à l'apéritif d'automne, ou en entrée avec une salade de mâche.",
    erreurs: [
      "Laisser la peau du boudin : elle devient caoutchouteuse à la cuisson. Retirez-la avant de couper le boudin.",
      "Ajouter les pommes crues : elles rendent leur eau dans la mie. Faites-les revenir au beurre pour les sécher et les dorer.",
    ],
    conservation: "2 jours au réfrigérateur. À servir tiède : quelques minutes au four suffisent.",
  },
  "cake-carotte": {
    usage: "Un cake végétarien moelleux et parfumé au cumin, coloré par la carotte : apéritif, boîte à lunch ou accompagnement d'une soupe.",
    erreurs: [
      "Râper les carottes trop gros : elles restent croquantes et la tranche se défait. Utilisez une râpe fine.",
      "Ne pas presser les carottes râpées : très juteuses, elles alourdissent la mie.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle très bien, 1 mois.",
  },
  "cake-champignons": {
    usage: "Un cake forestier à l'ail et au persil, à servir en tranches avec une salade ou en cubes à l'apéritif.",
    erreurs: [
      "Mettre les champignons crus : ils sont composés d'eau à 90 % et la rendent dans la pâte. Faites-les sauter jusqu'à évaporation complète.",
      "Les incorporer encore chauds : ils font cuire les œufs de l'appareil et activent la levure trop tôt.",
    ],
    conservation: "2 à 3 jours au réfrigérateur, filmé.",
  },
  "cake-cheddar-jambon": {
    usage: "Un cake de pub, au cheddar, au jambon et à la bière : pour un apéritif entre amis ou un brunch, avec des pickles.",
    erreurs: [
      "Choisir une bière très amère : l'amertume se concentre à la cuisson. Une blonde légère suffit largement.",
      "Choisir un cheddar jeune : il fond sans donner de goût. Un cheddar affiné a bien plus de caractère.",
    ],
    conservation: "3 jours au réfrigérateur. Il est meilleur légèrement tiède, quand le cheddar redevient fondant.",
  },
  "cake-chevre-noix-raisins": {
    usage: "Un cake sucré-salé, chèvre, noix et raisins secs, à servir à l'apéritif ou en fin de repas à la place du plateau de fromages, avec un peu de miel.",
    erreurs: [
      "Mettre les raisins secs tels quels : ils boivent l'humidité de la pâte et tombent au fond. Réhydratez-les, séchez-les et farinez-les.",
      "Utiliser un chèvre frais très humide : préférez une bûche, coupée en dés.",
    ],
    conservation: "3 jours au réfrigérateur, filmé.",
  },
  "cake-foie-volaille": {
    usage: "Un cake de caractère, aux foies de volaille déglacés au porto et aux pignons : en entrée tiède avec une salade, ou sur un buffet de fêtes.",
    erreurs: [
      "Trop cuire les foies à la poêle : ils finissent de cuire dans le cake. Gardez-les rosés à cœur.",
      "Oublier de les dénerver : les filaments et les traces vertes de fiel donnent de l'amertume.",
    ],
    conservation: "2 jours au réfrigérateur : les abats se gardent peu. Ne le congelez pas.",
  },
  "cake-jambon-olive": {
    usage: "Le cake salé de référence, celui des apéritifs et des pique-niques. La recette de base à maîtriser avant toutes les variantes.",
    erreurs: [
      "Ajouter les olives encore humides de saumure : elles glissent au fond du moule. Égouttez-les, séchez-les et roulez-les dans un peu de farine.",
      "Trop mélanger l'appareil : la mie devient dense et élastique. Arrêtez dès que la farine est incorporée.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle entier ou en tranches, 1 mois.",
  },
  "cake-lapin-pruneaux": {
    usage: "Un cake de terroir, lapin et pruneaux, relevé par le poivré du cresson et la sarriette : une entrée originale ou une pièce de buffet campagnard.",
    erreurs: [
      "Utiliser une chair de lapin sèche : effilochez-la et mélangez-la à un peu d'huile d'olive avant de l'incorporer.",
      "Laisser les pruneaux entiers : ils créent des trous à la découpe. Coupez-les en deux ou trois.",
    ],
    conservation: "2 jours au réfrigérateur, filmé.",
  },
  "cake-lard-banane": {
    usage: "Un cake sucré-salé inspiré des cuisines créoles : lardons fumés, banane, gingembre et cacahuètes. Il surprend toujours à l'apéritif.",
    erreurs: [
      "Prendre une banane très mûre : elle fond et sucre toute la mie. Une banane encore ferme garde des morceaux.",
      "Ne pas dégraisser les lardons : faites-les dorer à sec puis égouttez-les, sinon le cake est gras.",
    ],
    conservation: "2 jours au réfrigérateur : la banane noircit ensuite.",
  },
  "cake-lardons-pruneaux": {
    usage: "Le grand classique sucré-salé des cakes d'apéritif : le fumé des lardons contre le moelleux des pruneaux.",
    erreurs: [
      "Saler l'appareil : entre les lardons et le gruyère, c'est inutile.",
      "Verser les lardons avec leur gras de cuisson : il sature la pâte. Égouttez-les sur du papier absorbant.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois.",
  },
  "cake-oceane": {
    usage: "Un cake aux fruits de mer, à l'ail et au persil : en entrée avec une mayonnaise citronnée, ou en bouchées sur un buffet marin.",
    erreurs: [
      "Utiliser un cocktail de fruits de mer surgelé sans le décongeler ni l'égoutter : il lâche énormément d'eau.",
      "Incorporer les fruits de mer encore chauds : ils cuisent les œufs de l'appareil. Laissez-les refroidir complètement après les avoir fait revenir.",
    ],
    conservation: "24 à 48 h au réfrigérateur, pas davantage : les fruits de mer sont fragiles. Ne recongelez pas un produit déjà décongelé.",
  },
  "cake-poivrons-feta": {
    usage: "Un cake méditerranéen, poivrons, feta et olives : à servir frais en été, avec une salade de tomates ou un tzatziki.",
    erreurs: [
      "Incorporer des poivrons encore chauds ou juteux : faites-les fondre jusqu'à ce qu'ils soient tendres et bien secs, puis laissez-les refroidir.",
      "Saler comme d'habitude : la feta et les olives apportent déjà beaucoup de sel.",
    ],
    conservation: "3 jours au réfrigérateur, filmé.",
  },
  "cake-poulet-estragon": {
    usage: "Un cake complet, poulet et estragon : avec une salade verte, il fait un déjeuner. Pratique aussi pour utiliser un reste de volaille rôtie.",
    erreurs: [
      "Utiliser de l'estragon séché : il n'a ni la fraîcheur ni le parfum anisé de l'estragon frais.",
      "Couper le poulet en gros morceaux : la tranche se casse. Détaillez-le en petits dés réguliers.",
    ],
    conservation: "2 jours au réfrigérateur. Se congèle en tranches 1 mois.",
  },
  "cake-ratatouille": {
    usage: "Un cake végétarien aux légumes du soleil, à servir froid ou tiède, seul ou avec un coulis de tomate.",
    erreurs: [
      "Incorporer une ratatouille juteuse : la mie ne cuit pas. Faites réduire les légumes jusqu'à ce qu'il n'y ait plus de liquide dans la poêle.",
      "Couper les légumes trop gros : de petits dés se répartissent mieux et la tranche se tient.",
    ],
    conservation: "3 jours au réfrigérateur. Un reste de ratatouille bien égouttée convient parfaitement.",
  },
  "cake-saumon-ciboulette": {
    usage: "Un cake chic et rapide, au saumon fumé et à la ciboulette : en cubes à l'apéritif, ou en tranches avec une crème citronnée.",
    erreurs: [
      "Saler comme un cake classique : le saumon fumé apporte déjà beaucoup de sel, une pincée suffit.",
      "Mixer ou trop mélanger le saumon : il part en miettes et colore la pâte en gris. Coupez-le en lanières et incorporez-le à la fin.",
    ],
    conservation: "2 jours au réfrigérateur, bien filmé. À servir frais.",
  },
  "cake-saumon-oseille": {
    usage: "L'accord classique saumon-oseille, en cake : l'acidité de l'oseille allège le poisson. En entrée tiède, avec un beurre blanc ou une crème à l'aneth.",
    erreurs: [
      "Mettre l'oseille crue : elle doit être fondue au beurre, sinon elle rend son eau et reste filandreuse.",
      "Cuire le saumon avant : il se dessèche. Coupé en dés, il cuit dans le cake.",
    ],
    conservation: "2 jours au réfrigérateur. Ne se congèle pas si le saumon a déjà été congelé.",
  },
  "cake-thon-poivron": {
    usage: "Un cake économique et familial, au thon et aux poivrons : pour les pique-niques, les boîtes à lunch et les apéritifs d'été.",
    erreurs: [
      "Ne pas égoutter le thon : pressez-le bien, puis émiettez-le grossièrement pour garder des morceaux.",
      "Ajouter les poivrons crus : faites-les revenir à l'huile d'olive pour les attendrir et concentrer leur goût.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois.",
  },
  "cake-tomate-mozza": {
    usage: "Les saveurs de la salade caprese en cake : tomate, mozzarella et basilic. À servir tiède pour profiter du fromage filant.",
    erreurs: [
      "Utiliser la mozzarella sans l'égoutter : elle rend du petit-lait et creuse des poches dans la mie. Égouttez-la longuement et coupez-la en dés.",
      "Ajouter le basilic mixé dans l'appareil : il noircit. Ciselez-le au dernier moment.",
    ],
    conservation: "2 jours au réfrigérateur. Repassez-le au four avant de servir.",
  },
  "cake-trois-fromages": {
    usage: "Un cake pour amateurs de fromage : gruyère, bleu d'Auvergne et mimolette. En cubes à l'apéritif, avec un vin blanc sec.",
    erreurs: [
      "Ajouter du sel : les trois fromages en apportent déjà, la recette n'en prévoit d'ailleurs pas.",
      "Émietter le bleu trop finement : il fond et colore toute la pâte. Gardez des morceaux pour avoir des poches fondantes.",
    ],
    conservation: "3 jours au réfrigérateur. Se congèle 1 mois.",
  },
  "pain-de-thon": {
    usage: "Une recette familiale très simple, entre le cake et la terrine : froid avec une mayonnaise ou une sauce cocktail, tiède avec un coulis de tomate.",
    erreurs: [
      "Laisser le thon gorgé d'eau : égouttez-le et pressez-le, sinon le pain ne se tient pas à la découpe.",
      "Démouler à chaud : il est fragile à la sortie du four. Laissez-le tiédir dans le moule.",
    ],
    conservation: "3 jours au réfrigérateur, filmé. Il se tranche plus proprement le lendemain.",
  },
};
