export const recipes = [

  {
    id: "bowl-poulet", titre: "Bowl poulet rôti",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/bowl-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Poulet", qty: 200, unit: "g", role: "lever" },
          { name: "Quinoa", qty: 80, unit: "g", role: "lever" },
          { name: "Courgette", qty: 250, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 8, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Cuire le quinoa 15 min à l'eau salée." },
          { n: "Poulet", d: "Griller le poulet à l'huile d'olive, 6 min par face." },
          { n: "Assembler", d: "Bowl quinoa + poulet + courgette poêlée." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Poulet", qty: 240, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Avocat", qty: 80, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Cuire le riz basmati." },
          { n: "Poulet", d: "Griller le poulet." },
          { n: "Assembler", d: "Bowl riz + poulet + avocat + sauce tahini." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Poulet", qty: 520, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Avocat", qty: 120, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Sauce sriracha", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Cuire le riz basmati." },
          { n: "Poulet", d: "Griller très généreusement le poulet." },
          { n: "Assembler", d: "Bowl riz + poulet + avocat + courgette + sriracha." },
        ]},
    ]
  },

  {
    id: "smash-burger", titre: "Smash burger",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["occasion"], temps: 15,
    img: "/images/recettes/smash-burger-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Bœuf 5%", qty: 150, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 30, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 100, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Former", d: "Boulette + écraser fort sur la poêle chaude." },
          { n: "Cuire", d: "2 min chaque côté." },
          { n: "Assembler", d: "Pain complet + salade + tomate + moutarde." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Bœuf 15%", qty: 200, unit: "g", role: "lever" },
          { name: "Pain brioche", qty: 80, unit: "g", role: "lever" },
          { name: "Cheddar", qty: 20, unit: "g", role: "lever" },
          { name: "Laitue", qty: 20, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce burger", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Former", d: "Boulette + écraser fort." },
          { n: "Cuire", d: "2 min + fromage fondu." },
          { n: "Assembler", d: "Pain brioche + sauce burger." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Bœuf 5%", qty: 520, unit: "g", role: "lever" },
          { name: "Pain brioche", qty: 120, unit: "g", role: "lever" },
          { name: "Cheddar", qty: 40, unit: "g", role: "lever" },
          { name: "Laitue", qty: 30, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce burger", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Former", d: "Deux boulettes maigres + écraser fort." },
          { n: "Cuire", d: "2 min chaque côté + cheddar fondu." },
          { n: "Assembler", d: "Double smash maigre — protéines maximales." },
        ]},
    ]
  },

  {
    id: "shakshuka", titre: "Shakshuka",
    cat: "sale", repas: ["petit-dej", "dejeuner", "diner"], tags: ["express", "vegetarien"], temps: 20,
    img: "/images/recettes/shakshuka-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Oeufs", qty: 165, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Tomates + poivron + paprika 10 min." },
          { n: "Oeufs", d: "Casser 3 oeufs dans la sauce, couvrir 5 min." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Oeufs", qty: 240, unit: "g", role: "lever" },
          { name: "Feta", qty: 70, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Oignon + poivron + tomates + paprika 10 min." },
          { n: "Oeufs + feta", d: "Casser 4 oeufs, émietter la feta. Couvrir 5 min." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Oeufs", qty: 430, unit: "g", role: "lever" },
          { name: "Feta", qty: 100, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce généreuse", d: "Oignon + poivron + tomates + épices 10 min." },
          { n: "8 oeufs + feta", d: "Casser 8 oeufs, feta très généreuse. Couvrir 6 min." },
        ]},
    ]
  },

  {
    id: "salmon-teriyaki", titre: "Salmon teriyaki",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/salmon-teriyaki-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Saumon", qty: 140, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 120, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Saumon + sauce soja 10 min." },
          { n: "Cuire", d: "Poêler 4 min chaque côté. Cuire le riz." },
          { n: "Servir", d: "Saumon + riz + courgette vapeur." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Saumon", qty: 200, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Edamame", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce teriyaki", qty: 30, unit: "ml", role: "condiment" },
          { name: "Sésame", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Saumon + teriyaki 10 min." },
          { n: "Cuire", d: "Poêler le saumon. Cuire riz + edamame." },
          { n: "Servir", d: "Saumon teriyaki + riz + edamame + sésame." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Saumon", qty: 390, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Edamame", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce teriyaki", qty: 30, unit: "ml", role: "condiment" },
          { name: "Sésame", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Saumon + teriyaki 15 min." },
          { n: "Cuire", d: "Poêler généreusement. Cuire riz généreux + edamame." },
          { n: "Servir", d: "Double portion saumon + riz + edamame." },
        ]},
    ]
  },

  {
    id: "poke-bowl", titre: "Poké bowl thon & mangue",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/poke-bowl-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Thon", qty: 120, unit: "g", role: "lever" },
          { name: "Riz sushi", qty: 100, unit: "g", role: "lever" },
          { name: "Mangue", qty: 100, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Thon + sauce soja 5 min." },
          { n: "Assembler", d: "Riz + thon + mangue + edamame." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Thon", qty: 170, unit: "g", role: "lever" },
          { name: "Riz sushi", qty: 170, unit: "g", role: "lever" },
          { name: "Avocat", qty: 90, unit: "g", role: "lever" },
          { name: "Mangue", qty: 120, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Thon + soja 5 min." },
          { n: "Assembler", d: "Riz + thon + avocat + mangue + edamame." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Thon", qty: 330, unit: "g", role: "lever" },
          { name: "Riz sushi", qty: 270, unit: "g", role: "lever" },
          { name: "Avocat", qty: 100, unit: "g", role: "lever" },
          { name: "Edamame", qty: 100, unit: "g", role: "fixed" },
          { name: "Mangue", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Thon + soja 5 min." },
          { n: "Assembler", d: "Riz généreux + thon généreux + avocat + edamame + mangue." },
        ]},
    ]
  },

  {
    id: "curry", titre: "Curry de pois chiches",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 25,
    img: "/images/recettes/curry-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Pois chiches", qty: 400, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Faire revenir", d: "Oignon + poivron + curry 3 min." },
          { n: "Mijoter", d: "Pois chiches + tomates + lait coco 15 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Pois chiches", qty: 440, unit: "g", role: "lever" },
          { name: "Lait coco", qty: 400, unit: "ml", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 12, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Faire revenir", d: "Oignon + épices 2 min." },
          { n: "Mijoter", d: "Tout ensemble 20 min. Servir avec le riz." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Pois chiches", qty: 650, unit: "g", role: "lever" },
          { name: "Tofu ferme", qty: 260, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 12, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Faire revenir", d: "Oignon + tofu en dés + curry 4 min." },
          { n: "Mijoter", d: "Pois chiches + tomates + lait coco 20 min. Servir avec riz très généreux." },
        ]},
    ]
  },

  {
    id: "poulet-basquaise", titre: "Poulet basquaise",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 35,
    img: "/images/recettes/poulet-basquaise-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Poulet", qty: 280, unit: "g", role: "lever" },
          { name: "Poivron", qty: 300, unit: "g", role: "fixed" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Dorer", d: "Faire dorer le poulet 5 min dans une cocotte." },
          { n: "Mijoter", d: "Ajouter poivrons, oignon, tomates, paprika. Mijoter 25 min." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Poulet", qty: 370, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Poivron", qty: 250, unit: "g", role: "fixed" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Dorer", d: "Faire dorer le poulet 5 min." },
          { n: "Mijoter", d: "Légumes + tomates + épices 25 min. Servir avec le riz." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Poulet", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Poivron", qty: 250, unit: "g", role: "fixed" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Chorizo", qty: 70, unit: "g", role: "lever" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Dorer", d: "Faire dorer poulet + chorizo 5 min." },
          { n: "Mijoter", d: "Légumes + tomates 25 min. Servir avec riz très généreux." },
        ]},
    ]
  },

  {
    id: "boeuf-bourguignon", titre: "Bœuf bourguignon",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch", "occasion"], temps: 90,
    img: "/images/recettes/boeuf-bourguignon-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Bœuf 5%", qty: 600, unit: "g", role: "lever" },
          { name: "Carottes", qty: 300, unit: "g", role: "fixed" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Dorer le bœuf 5 min à feu vif." },
          { n: "Mijoter", d: "Légumes + concentré. Couvrir d'eau 75 min à feu doux." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Bœuf 15%", qty: 770, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 600, unit: "g", role: "lever" },
          { name: "Carottes", qty: 250, unit: "g", role: "fixed" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Lardons", qty: 90, unit: "g", role: "lever" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Dorer bœuf + lardons 5 min." },
          { n: "Mijoter", d: "Légumes + pommes de terre + concentré. 75 min à feu doux." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Bœuf 15%", qty: 1170, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 900, unit: "g", role: "lever" },
          { name: "Carottes", qty: 250, unit: "g", role: "fixed" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Lardons", qty: 160, unit: "g", role: "lever" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Dorer très généreusement bœuf + lardons." },
          { n: "Mijoter", d: "Légumes + pommes de terre très généreuses. 75 min." },
        ]},
    ]
  },

  {
    id: "quiche-lorraine", titre: "Quiche lorraine",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["occasion", "batch"], temps: 45,
    img: "/images/recettes/quiche-lorraine-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 150, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 200, unit: "g", role: "lever" },
          { name: "Emmental", qty: 60, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Battre oeufs + crème. Ajouter jambon + emmental." },
          { n: "Cuire", d: "Verser dans un plat. Four 180°C, 30 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Oeufs", qty: 300, unit: "g", role: "lever" },
          { name: "Lardons", qty: 170, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 220, unit: "g", role: "lever" },
          { name: "Emmental", qty: 100, unit: "g", role: "lever" },
          { name: "Farine", qty: 120, unit: "g", role: "lever" },
          { name: "Beurre", qty: 50, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Mélanger farine + beurre + eau froide. Étaler dans le moule." },
          { n: "Garniture", d: "Battre oeufs + crème + lardons + emmental. Verser. 180°C, 30 min." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Oeufs", qty: 570, unit: "g", role: "lever" },
          { name: "Lardons", qty: 260, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 220, unit: "g", role: "lever" },
          { name: "Emmental", qty: 160, unit: "g", role: "lever" },
          { name: "Farine", qty: 120, unit: "g", role: "lever" },
          { name: "Beurre", qty: 50, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Farine + beurre + eau froide. Étaler dans le moule." },
          { n: "Garniture", d: "Oeufs très généreux + crème + lardons + emmental abondant. 180°C, 35 min." },
        ]},
    ]
  },

  {
    id: "steak-haricots-verts", titre: "Steak & haricots verts",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/steak-haricots-verts-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Bœuf 5%", qty: 150, unit: "g", role: "lever" },
          { name: "Haricots verts", qty: 200, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Steak 3 min par face. Haricots à la vapeur 8 min." },
          { n: "Servir", d: "Steak + haricots + moutarde." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Bœuf 15%", qty: 220, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 240, unit: "g", role: "lever" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Beurre", qty: 10, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pommes de terre vapeur 20 min. Steak 3 min par face." },
          { n: "Servir", d: "Steak + pommes de terre beurrées + haricots." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Bœuf 5%", qty: 460, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 450, unit: "g", role: "lever" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Beurre", qty: 10, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pommes de terre vapeur généreuses. Steak maigre épais 4 min par face." },
          { n: "Servir", d: "Double steak maigre + pommes de terre très généreuses + haricots." },
        ]},
    ]
  },

  {
    id: "poulet-champignons", titre: "Poulet à la crème et champignons",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 30,
    img: "/images/recettes/poulet-champignons-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Poulet", qty: 300, unit: "g", role: "lever" },
          { name: "Champignons", qty: 250, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 100, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Faire revenir poulet + oignon 5 min. Ajouter champignons 5 min." },
          { n: "Sauce", d: "Ajouter crème allégée. Mijoter 10 min." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Poulet", qty: 400, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Revenir poulet + oignon. Champignons 5 min. Crème 10 min." },
          { n: "Servir", d: "Poulet crème champignons + riz." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Poulet", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Emmental", qty: 50, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Revenir poulet + oignon. Champignons. Crème + emmental 10 min." },
          { n: "Servir", d: "Poulet gratiné + riz très généreux." },
        ]},
    ]
  },

  {
    id: "omelette-champignons", titre: "Omelette champignons & fromage",
    cat: "sale", repas: ["petit-dej", "dejeuner", "diner"], tags: ["express", "vegetarien"], temps: 10,
    img: "/images/recettes/omelette-champignons-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Oeufs", qty: 165, unit: "g", role: "lever" },
          { name: "Champignons", qty: 150, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Faire revenir", d: "Champignons à la poêle 3 min." },
          { n: "Omelette", d: "Battre oeufs + verser sur champignons. 3 min à feu moyen." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Oeufs", qty: 240, unit: "g", role: "lever" },
          { name: "Emmental", qty: 40, unit: "g", role: "lever" },
          { name: "Champignons", qty: 150, unit: "g", role: "fixed" },
          { name: "Beurre", qty: 8, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Champignons revenus au beurre 3 min." },
          { n: "Omelette", d: "Battre oeufs + emmental + verser. 3 min. Plier." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Oeufs", qty: 430, unit: "g", role: "lever" },
          { name: "Emmental", qty: 70, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 100, unit: "g", role: "lever" },
          { name: "Champignons", qty: 150, unit: "g", role: "fixed" },
          { name: "Beurre", qty: 8, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Champignons + jambon revenus 3 min." },
          { n: "Omelette", d: "Battre 8 oeufs + emmental généreux. 4 min. Plier." },
        ]},
    ]
  },

  {
    id: "salade-nicoise", titre: "Salade niçoise",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/salade-nicoise-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Thon", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 55, unit: "g", role: "lever" },
          { name: "Tomate", qty: 150, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 100, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 60, unit: "g", role: "fixed" },
          { name: "Vinaigre balsamique", qty: 10, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Cuire oeuf dur 10 min. Haricots vapeur 6 min." },
          { n: "Assembler", d: "Laitue + tomates + haricots + thon + oeuf + vinaigrette." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Thon", qty: 170, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 180, unit: "g", role: "lever" },
          { name: "Tomate", qty: 150, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 100, unit: "g", role: "fixed" },
          { name: "Olives", qty: 30, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 50, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Cuire pommes de terre vapeur + oeufs durs. Haricots vapeur." },
          { n: "Assembler", d: "Tout ensemble avec huile d'olive." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Thon", qty: 330, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 300, unit: "g", role: "lever" },
          { name: "Tomate", qty: 150, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 100, unit: "g", role: "fixed" },
          { name: "Olives", qty: 30, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 50, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Cuire pommes de terre + oeufs. Haricots vapeur." },
          { n: "Assembler", d: "Thon très généreux + 4 oeufs + pommes de terre très généreuses." },
        ]},
    ]
  },

  {
    id: "soupe-lentilles", titre: "Soupe de lentilles",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 30,
    img: "/images/recettes/soupe-lentilles-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Lentilles corail", qty: 250, unit: "g", role: "lever" },
          { name: "Carottes", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
          { name: "Curry", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Revenir oignon + carottes 3 min. Lentilles + eau 1L. Mijoter 20 min." },
          { n: "Mixer", d: "Mixer finement. Assaisonner." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Lentilles corail", qty: 330, unit: "g", role: "lever" },
          { name: "Couscous", qty: 180, unit: "g", role: "lever" },
          { name: "Carottes", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
          { name: "Curry", qty: 8, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Revenir oignon + carottes. Lentilles + eau 1.2L. Mijoter 20 min." },
          { n: "Finir", d: "Mixer légèrement. Servir avec couscous et huile d'olive." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Lentilles corail", qty: 520, unit: "g", role: "lever" },
          { name: "Couscous", qty: 300, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 260, unit: "g", role: "lever" },
          { name: "Carottes", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
          { name: "Curry", qty: 10, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Lentilles + pois chiches + carottes + eau 1.5L. Mijoter 20 min." },
          { n: "Finir", d: "Mixer partiellement. Servir avec couscous très généreux." },
        ]},
    ]
  },

  {
    id: "pasta-carbonara", titre: "Pasta carbonara",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/pasta-carbonara-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 80, unit: "g", role: "lever" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Garder 50ml d'eau de cuisson." },
          { n: "Sauce", d: "Battre oeufs + parmesan. Mélanger hors du feu avec pâtes + jambon." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Lardons", qty: 90, unit: "g", role: "lever" },
          { name: "Parmesan", qty: 30, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Lardons poêlés 4 min." },
          { n: "Sauce", d: "Mélanger oeufs + crème + parmesan. Mélanger hors du feu." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 360, unit: "g", role: "lever" },
          { name: "Lardons", qty: 160, unit: "g", role: "lever" },
          { name: "Parmesan", qty: 60, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Très généreuses pâtes al dente. Lardons bien grillés." },
          { n: "Sauce", d: "Beaucoup d'oeufs + parmesan généreux + crème. Mélanger hors du feu." },
        ]},
    ]
  },

  {
    id: "pasta-bolognaise", titre: "Pasta bolognaise",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 40,
    img: "/images/recettes/pasta-bolognaise-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 200, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir oignon + bœuf. Ajouter tomate + concentré 20 min." },
          { n: "Cuire", d: "Cuire les pâtes. Mélanger avec la sauce." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Bœuf 15%", qty: 280, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir oignon + carottes + bœuf. Tomate 20 min." },
          { n: "Servir", d: "Pâtes + sauce + parmesan râpé." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 520, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Bœuf maigre très généreux + légumes + tomate 25 min." },
          { n: "Servir", d: "Pâtes très généreuses + bolognaise riche + parmesan." },
        ]},
    ]
  },

  {
    id: "risotto-champignons", titre: "Risotto aux champignons",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegetarien"], temps: 35,
    img: "/images/recettes/risotto-champignons-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Riz basmati", qty: 150, unit: "g", role: "lever" },
          { name: "Champignons", qty: 250, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Base", d: "Revenir oignon + riz 2 min. Ajouter eau louche par louche en remuant." },
          { n: "Finir", d: "Intégrer champignons poêlés + parmesan hors du feu." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Champignons", qty: 250, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Beurre", qty: 15, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 50, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Risotto", d: "Riz nacré dans beurre + oignon. Louche par louche 18 min." },
          { n: "Finir", d: "Champignons + parmesan + crème. Mantecatura hors du feu." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Riz basmati", qty: 390, unit: "g", role: "lever" },
          { name: "Champignons", qty: 300, unit: "g", role: "fixed" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 70, unit: "g", role: "lever" },
          { name: "Beurre", qty: 15, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 50, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Risotto", d: "Riz très généreux nacré dans beurre. 20 min." },
          { n: "Finir", d: "Champignons + oeufs + parmesan généreux + crème." },
        ]},
    ]
  },

  {
    id: "pasta-pesto-poulet", titre: "Pasta pesto & poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/pasta-pesto-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Poulet", qty: 160, unit: "g", role: "lever" },
          { name: "Sauce pesto", qty: 30, unit: "g", role: "lever" },
          { name: "Tomates", qty: 100, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Griller le poulet." },
          { n: "Assembler", d: "Pâtes + poulet + pesto + tomates." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Poulet", qty: 240, unit: "g", role: "lever" },
          { name: "Sauce pesto", qty: 50, unit: "g", role: "lever" },
          { name: "Tomates", qty: 100, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Griller le poulet." },
          { n: "Assembler", d: "Pâtes + poulet + pesto + tomates + parmesan." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Poulet", qty: 470, unit: "g", role: "lever" },
          { name: "Sauce pesto", qty: 50, unit: "g", role: "lever" },
          { name: "Tomates", qty: 100, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Noix de cajou", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Cuire", d: "Pâtes très généreuses. Poulet très généreux grillé." },
          { n: "Assembler", d: "Tout ensemble + noix de cajou pour le croquant." },
        ]},
    ]
  },

  {
    id: "pasta-arrabiata", titre: "Pasta arrabiata",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "express"], temps: 20,
    img: "/images/recettes/pasta-arrabiata-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir oignon. Tomates + concentré + paprika 15 min." },
          { n: "Servir", d: "Pâtes al dente + sauce arrabiata." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 170, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir oignon + huile. Pois chiches + tomates 15 min." },
          { n: "Servir", d: "Pâtes + sauce + pois chiches." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 330, unit: "g", role: "lever" },
          { name: "Tofu ferme", qty: 200, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 20, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir tofu en dés + oignon. Pois chiches + tomates 15 min." },
          { n: "Servir", d: "Pâtes très généreuses + sauce hyperprotéinée végétale." },
        ]},
    ]
  },

  {
    id: "lasagnes", titre: "Lasagnes",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch", "occasion"], temps: 60,
    img: "/images/recettes/lasagnes-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Pâtes", qty: 200, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 400, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 400, unit: "g", role: "fixed" },
          { name: "Mozzarella", qty: 100, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Bolognaise", d: "Revenir oignon + bœuf. Sauce tomate + concentré 20 min." },
          { n: "Monter", d: "Alterner pâtes / bolognaise / mozzarella. Four 180°C 30 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Pâtes", qty: 300, unit: "g", role: "lever" },
          { name: "Bœuf 15%", qty: 550, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 400, unit: "g", role: "fixed" },
          { name: "Mozzarella", qty: 180, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 160, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 30, unit: "g", role: "lever" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Bolognaise", d: "Revenir oignon + bœuf. Sauce + concentré 20 min." },
          { n: "Monter", d: "Crème fraîche légère. Monter lasagnes. Gratiner 30 min." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Pâtes", qty: 450, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 910, unit: "g", role: "lever" },
          { name: "Sauce tomate", qty: 400, unit: "g", role: "fixed" },
          { name: "Mozzarella", qty: 260, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 160, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 60, unit: "g", role: "lever" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Bolognaise", d: "Bœuf maigre très généreux + sauce 25 min." },
          { n: "Monter", d: "Lasagnes hyperprotéinées + mozzarella très abondante. 35 min." },
        ]},
    ]
  },

  {
    id: "minestrone", titre: "Minestrone",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 35,
    img: "/images/recettes/minestrone-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Haricots rouges", qty: 200, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Revenir oignon + carottes. Tout ensemble + eau 1.5L. Mijoter 25 min." },
          { n: "Assaisonner", d: "Sel, poivre, herbes." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Haricots rouges", qty: 280, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 180, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 150, unit: "g", role: "fixed" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Légumes + haricots + eau 1.5L. Ajouter pâtes 10 min avant la fin." },
          { n: "Finir", d: "Épinards + huile d'olive. Assaisonner." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Haricots rouges", qty: 390, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 260, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 300, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 150, unit: "g", role: "fixed" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Concentré de tomate", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Légumes + haricots + pois chiches + eau. Pâtes 10 min avant." },
          { n: "Finir", d: "Épinards + huile généreuse. Soupe hyperprotéinée végane." },
        ]},
    ]
  },

  {
    id: "paella-mixte", titre: "Paella poulet & crevettes",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["occasion", "batch"], temps: 45,
    img: "/images/recettes/paella-mixte-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Poulet", qty: 300, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 150, unit: "g", role: "lever" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Tomates", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Dorer poulet 5 min. Ajouter légumes + riz + eau 600ml + paprika." },
          { n: "Finir", d: "Ajouter crevettes les 5 dernières minutes." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Riz basmati", qty: 480, unit: "g", role: "lever" },
          { name: "Poulet", qty: 440, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 220, unit: "g", role: "lever" },
          { name: "Chorizo", qty: 80, unit: "g", role: "lever" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Tomates", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Dorer poulet + chorizo. Légumes + riz + bouillon 800ml." },
          { n: "Finir", d: "Crevettes les 5 dernières min. Repos 5 min avant service." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Riz basmati", qty: 750, unit: "g", role: "lever" },
          { name: "Poulet", qty: 780, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 390, unit: "g", role: "lever" },
          { name: "Chorizo", qty: 140, unit: "g", role: "lever" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Tomates", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Très généreuses protéines dorées + légumes + riz + bouillon 1.2L." },
          { n: "Finir", d: "Crevettes très généreuses en fin. Paella de compétition." },
        ]},
    ]
  },

  {
    id: "tortilla-espanola", titre: "Tortilla española",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegetarien", "batch"], temps: 30,
    img: "/images/recettes/tortilla-espanola-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 250, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pommes de terre + oignon poêlés dans peu d'huile 15 min." },
          { n: "Omelette", d: "Battre oeufs + mélanger avec pommes de terre. Cuire 5 min par face." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Oeufs", qty: 360, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 420, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pommes de terre + oignon dans huile d'olive 15 min." },
          { n: "Tortilla", d: "Mélanger avec oeufs battus. 5 min par face. Servir tiède." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Oeufs", qty: 570, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 680, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Jambon blanc", qty: 130, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pommes de terre très généreuses + oignon dans huile. Jambon en dés." },
          { n: "Tortilla", d: "Beaucoup d'oeufs + tout le reste. Très épaisse, 6 min par face." },
        ]},
    ]
  },

  {
    id: "riz-saute-poulet", titre: "Riz sauté au poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/riz-saute-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Riz basmati", qty: 150, unit: "g", role: "lever" },
          { name: "Poulet", qty: 200, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 55, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Sauter", d: "Poulet + légumes sautés à feu vif 5 min." },
          { n: "Riz", d: "Ajouter riz cuit + oeuf battu + sauce soja. 3 min à feu vif." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Poulet", qty: 290, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Petits pois", qty: 80, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Poulet + légumes à feu vif 5 min dans huile chaude." },
          { n: "Riz", d: "Ajouter riz + oeufs battus + sauce soja. 3 min à feu vif." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Riz basmati", qty: 390, unit: "g", role: "lever" },
          { name: "Poulet", qty: 520, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Petits pois", qty: 80, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Très généreux poulet + légumes à feu vif." },
          { n: "Riz", d: "Riz très généreux + 4 oeufs battus + sauce soja. Bien sauté." },
        ]},
    ]
  },

  {
    id: "pad-thai-crevettes", titre: "Pad thaï aux crevettes",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/pad-thai-crevettes-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 200, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes ramollies à l'eau chaude 5 min. Crevettes poêlées." },
          { n: "Assembler", d: "Tout sauter à feu vif + sauce soja. Oeuf brouillé intégré." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 280, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Beurre cacahuète", qty: 30, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
          { name: "Sésame", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes trempées. Crevettes + légumes sautés." },
          { n: "Assembler", d: "Tout + beurre de cacahuète + sauce soja. Sésame + oeuf." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 380, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 460, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Beurre cacahuète", qty: 50, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sésame", qty: 10, unit: "g", role: "condiment" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Cuire", d: "Pâtes trempées. Très généreuses crevettes sautées." },
          { n: "Assembler", d: "Beurre cacahuète + sauce + 4 oeufs + amandes. Pad thaï de champion." },
        ]},
    ]
  },

  {
    id: "ramen-poulet", titre: "Ramen au poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 30,
    img: "/images/recettes/ramen-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Poulet", qty: 240, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Bouillon", d: "Bouillon de poulet maison 20 min." },
          { n: "Assembler", d: "Pâtes + poulet + oeuf mollet + épinards + soja." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Poulet", qty: 350, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Champignons", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 30, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Bouillon", d: "Bouillon de poulet + sauce soja 20 min." },
          { n: "Assembler", d: "Bol ramen : pâtes + poulet + 3 oeufs + légumes + bouillon." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Poulet", qty: 650, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 380, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Oeufs", qty: 290, unit: "g", role: "lever" },
          { name: "Champignons", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 30, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Bouillon", d: "Bouillon riche + poulet très généreux." },
          { n: "Assembler", d: "Ramen hyperprotéiné : double poulet + 5 oeufs + pâtes très généreuses." },
        ]},
    ]
  },

  {
    id: "dahl-lentilles", titre: "Dahl de lentilles",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 30,
    img: "/images/recettes/dahl-lentilles-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Lentilles corail", qty: 300, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Revenir oignon + curry 2 min. Lentilles + tomates + lait coco + eau 400ml. 20 min." },
          { n: "Servir", d: "Écraser légèrement. Assaisonner." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Lentilles corail", qty: 390, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Lait coco", qty: 200, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 10, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Revenir oignon + curry dans huile. Lentilles + tomates + lait coco 20 min." },
          { n: "Finir", d: "Épinards 2 min. Servir avec riz." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Lentilles corail", qty: 590, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 260, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Lait coco", qty: 360, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 12, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Lentilles + pois chiches + lait coco très généreux 20 min." },
          { n: "Finir", d: "Épinards. Dahl hyperprotéiné végane + riz très généreux." },
        ]},
    ]
  },

  {
    id: "buddha-bowl", titre: "Buddha bowl veggie",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan"], temps: 20,
    img: "/images/recettes/buddha-bowl-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Quinoa", qty: 80, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 80, unit: "g", role: "lever" },
          { name: "Épinards", qty: 80, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Quinoa 15 min. Pois chiches rôtis au four 15 min." },
          { n: "Assembler", d: "Bowl quinoa + pois chiches + légumes frais + tahini." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Quinoa", qty: 120, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 130, unit: "g", role: "lever" },
          { name: "Avocat", qty: 80, unit: "g", role: "lever" },
          { name: "Épinards", qty: 80, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Betterave", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 25, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Quinoa 15 min. Pois chiches rôtis." },
          { n: "Assembler", d: "Bowl coloré : quinoa + légumes + avocat + tahini." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Quinoa", qty: 200, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 230, unit: "g", role: "lever" },
          { name: "Edamame", qty: 100, unit: "g", role: "lever" },
          { name: "Avocat", qty: 90, unit: "g", role: "lever" },
          { name: "Épinards", qty: 80, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Betterave", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 30, unit: "g", role: "condiment" },
          { name: "Graines de tournesol", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Cuire", d: "Quinoa + pois chiches rôtis. Edamame cuit vapeur." },
          { n: "Assembler", d: "Bowl maximaliste très généreux : tout + graines + tahini." },
        ]},
    ]
  },

  {
    id: "bo-bun-boeuf", titre: "Bo bun au bœuf",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/bo-bun-boeuf-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Bœuf 5%", qty: 240, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Vermicelles. Bœuf sauté à feu vif + sauce soja." },
          { n: "Assembler", d: "Bol : vermicelles + bœuf + carottes + laitue." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Bœuf 5%", qty: 350, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 60, unit: "g", role: "fixed" },
          { name: "Sésame", qty: 10, unit: "g", role: "condiment" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sauce teriyaki", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Vermicelles. Bœuf mariné + sauté à feu vif." },
          { n: "Assembler", d: "Bo bun classique + sésame." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Bœuf 5%", qty: 620, unit: "g", role: "lever" },
          { name: "Pâtes", qty: 380, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 100, unit: "g", role: "lever" },
          { name: "Laitue", qty: 60, unit: "g", role: "fixed" },
          { name: "Sésame", qty: 10, unit: "g", role: "condiment" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Bœuf très généreux + oeuf mollet + edamame." },
          { n: "Assembler", d: "Bo bun hyperprotéiné — double viande + oeuf." },
        ]},
    ]
  },

  {
    id: "bibimbap", titre: "Bibimbap",
    cat: "sale", repas: ["dejeuner", "diner"], tags: [], temps: 30,
    img: "/images/recettes/bibimbap-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Riz basmati", qty: 160, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 200, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Riz cuit. Bœuf sauté + soja. Légumes sautés séparément." },
          { n: "Assembler", d: "Bol riz + légumes disposés + bœuf. Sauce soja." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 310, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
          { name: "Sauce sriracha", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Riz cuit. Bœuf + légumes sautés séparément. Oeuf au plat." },
          { n: "Assembler", d: "Bol bibimbap classique + oeuf + sauces." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Riz basmati", qty: 390, unit: "g", role: "lever" },
          { name: "Bœuf 5%", qty: 550, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 100, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
          { name: "Sauce sriracha", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Double bœuf + 4 oeufs + edamame + légumes." },
          { n: "Assembler", d: "Bibimbap de champion — protéines maximales." },
        ]},
    ]
  },

  {
    id: "chili-con-carne", titre: "Chili con carne",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 45,
    img: "/images/recettes/chili-con-carne-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Bœuf 5%", qty: 400, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 300, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Revenir oignon + bœuf 5 min." },
          { n: "Mijoter", d: "Haricots + tomates + poivron + épices. 30 min à feu doux." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Bœuf 15%", qty: 550, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 330, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Maïs", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Revenir oignon + bœuf 5 min." },
          { n: "Mijoter", d: "Tout ensemble 35 min. Servir avec riz." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Bœuf 5%", qty: 910, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 520, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 380, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Maïs", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Saisir", d: "Bœuf maigre très généreux + oignon 5 min." },
          { n: "Mijoter", d: "Chili très riche en protéines 35 min. Riz très généreux." },
        ]},
    ]
  },

  {
    id: "burrito-bowl", titre: "Burrito bowl poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/burrito-bowl-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Poulet", qty: 140, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 100, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 80, unit: "g", role: "lever" },
          { name: "Laitue", qty: 50, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Poulet assaisonné + riz. Haricots réchauffés." },
          { n: "Assembler", d: "Bowl : riz + poulet + haricots + laitue + tomate." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Poulet", qty: 200, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 170, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 110, unit: "g", role: "lever" },
          { name: "Maïs", qty: 60, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 70, unit: "g", role: "lever" },
          { name: "Laitue", qty: 50, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce sriracha", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Poulet épicé + riz. Haricots + maïs réchauffés." },
          { n: "Assembler", d: "Bowl complet : riz + tout + avocat + sriracha." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Poulet", qty: 390, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 270, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 160, unit: "g", role: "lever" },
          { name: "Maïs", qty: 60, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 100, unit: "g", role: "lever" },
          { name: "Laitue", qty: 50, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce sriracha", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Triple portion poulet épicé + riz très généreux." },
          { n: "Assembler", d: "Bowl maximaliste — burrito bowl de compétition." },
        ]},
    ]
  },

  {
    id: "salade-caesar-poulet", titre: "Salade caesar au poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/salade-caesar-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Poulet", qty: 120, unit: "g", role: "lever" },
          { name: "Laitue", qty: 120, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 15, unit: "g", role: "lever" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Griller", d: "Poulet grillé 6 min par face. Trancher." },
          { n: "Assembler", d: "Laitue + poulet + parmesan + vinaigrette moutardée." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Poulet", qty: 180, unit: "g", role: "lever" },
          { name: "Laitue", qty: 120, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 30, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 60, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 50, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Croutons au four 10 min. Oeuf dur 10 min. Poulet grillé." },
          { n: "Assembler", d: "Laitue + poulet + croutons + parmesan + vinaigrette." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Poulet", qty: 360, unit: "g", role: "lever" },
          { name: "Laitue", qty: 120, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 50, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 90, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Croutons généreux + 2 oeufs durs + généreux poulet grillé." },
          { n: "Assembler", d: "Caesar hyperprotéinée — triple poulet + 2 oeufs." },
        ]},
    ]
  },

  {
    id: "wrap-tuna", titre: "Wrap thon & avocat",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 10,
    img: "/images/recettes/wrap-tuna-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Thon", qty: 100, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Mélanger thon + moutarde." },
          { n: "Assembler", d: "Tortilla + laitue + tomate + thon. Rouler." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Thon", qty: 170, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 90, unit: "g", role: "lever" },
          { name: "Avocat", qty: 70, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Écraser avocat + thon + moutarde." },
          { n: "Assembler", d: "Tortilla garnie de tout. Rouler serré." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Thon", qty: 330, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 100, unit: "g", role: "lever" },
          { name: "Avocat", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 70, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Thon généreux + avocat + oeuf dur émietté + moutarde." },
          { n: "Assembler", d: "Mega-wrap hyperprotéiné. Rouler serré." },
        ]},
    ]
  },

  {
    id: "club-sandwich", titre: "Club sandwich",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 10,
    img: "/images/recettes/club-sandwich-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Poulet", qty: 100, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 80, unit: "g", role: "lever" },
          { name: "Laitue", qty: 30, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Griller", d: "Pain toasté. Poulet grillé tranché." },
          { n: "Assembler", d: "Pain + moutarde + laitue + tomate + poulet." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Poulet", qty: 150, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 70, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 120, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 30, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Oeuf dur 10 min. Pain toasté. Poulet grillé." },
          { n: "Assembler", d: "Club 3 couches : pain + poulet + jambon + oeuf + laitue + tomate." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Poulet", qty: 310, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 100, unit: "g", role: "lever" },
          { name: "Pain complet", qty: 180, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Emmental", qty: 40, unit: "g", role: "lever" },
          { name: "Laitue", qty: 30, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "2 oeufs durs. Pain toasté épais. Très généreuse volaille." },
          { n: "Assembler", d: "Méga club hyperprotéiné + fromage fondu." },
        ]},
    ]
  },

  {
    id: "houmous-legumes", titre: "Bowl houmous & légumes",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "express"], temps: 10,
    img: "/images/recettes/houmous-legumes-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Houmous", qty: 100, unit: "g", role: "lever" },
          { name: "Pain pita", qty: 60, unit: "g", role: "lever" },
          { name: "Concombre", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Olives", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Légumes coupés en bâtonnets. Réchauffer pita." },
          { n: "Assembler", d: "Bowl : houmous + légumes + pita + olives." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Houmous", qty: 170, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 100, unit: "g", role: "lever" },
          { name: "Pain pita", qty: 100, unit: "g", role: "lever" },
          { name: "Concombre", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Olives", qty: 25, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Pois chiches rôtis au four 15 min. Légumes." },
          { n: "Assembler", d: "Houmous généreux + pois chiches rôtis + légumes + pita." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Houmous", qty: 260, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 200, unit: "g", role: "lever" },
          { name: "Quinoa", qty: 120, unit: "g", role: "lever" },
          { name: "Pain pita", qty: 100, unit: "g", role: "lever" },
          { name: "Concombre", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 100, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 80, unit: "g", role: "fixed" },
          { name: "Olives", qty: 25, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "condiment" },
          { name: "Graines de tournesol", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Préparer", d: "Quinoa cuit. Pois chiches rôtis. Légumes." },
          { n: "Assembler", d: "Super bowl veggie très protéiné + graines." },
        ]},
    ]
  },

  {
    id: "falafel-wrap", titre: "Falafel wrap",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan"], temps: 25,
    img: "/images/recettes/falafel-wrap-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Pois chiches", qty: 150, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Falafels", d: "Mixer pois chiches + épices. Former des boulettes. Poêler 3 min par face." },
          { n: "Assembler", d: "Tortilla + crudités + falafels + tahini." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Pois chiches", qty: 220, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 90, unit: "g", role: "lever" },
          { name: "Houmous", qty: 70, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Olives", qty: 20, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Falafels", d: "Mixer pois chiches + épices. Poêler boulettes." },
          { n: "Assembler", d: "Tortilla + houmous + crudités + falafels + tahini." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Pois chiches", qty: 390, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 100, unit: "g", role: "lever" },
          { name: "Houmous", qty: 100, unit: "g", role: "lever" },
          { name: "Quinoa", qty: 90, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Olives", qty: 20, unit: "g", role: "fixed" },
          { name: "Sauce tahini", qty: 25, unit: "g", role: "condiment" },
          { name: "Graines de tournesol", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Falafels", d: "Falafels très généreux. Quinoa cuit." },
          { n: "Assembler", d: "Mega-wrap veggie très hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "wrap-grec", titre: "Wrap grec au poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/wrap-grec-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Poulet", qty: 120, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Sauce tzatziki", qty: 30, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Griller", d: "Poulet grillé + tranché." },
          { n: "Assembler", d: "Tortilla + laitue + tomate + concombre + poulet + tzatziki." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Poulet", qty: 180, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 90, unit: "g", role: "lever" },
          { name: "Feta", qty: 40, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Olives", qty: 20, unit: "g", role: "fixed" },
          { name: "Sauce tzatziki", qty: 40, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Griller", d: "Poulet grillé + épices." },
          { n: "Assembler", d: "Mega-wrap grec : tout + feta + olives + tzatziki." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Poulet", qty: 360, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 100, unit: "g", role: "lever" },
          { name: "Feta", qty: 50, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 70, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 60, unit: "g", role: "fixed" },
          { name: "Olives", qty: 20, unit: "g", role: "fixed" },
          { name: "Sauce tzatziki", qty: 40, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Double poulet grillé + oeuf dur tranché." },
          { n: "Assembler", d: "Wrap XXL grec hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "chili-vegan", titre: "Chili végane",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 40,
    img: "/images/recettes/chili-vegan-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Haricots rouges", qty: 400, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Revenir", d: "Oignon + poivron 3 min." },
          { n: "Mijoter", d: "Haricots + tomates + paprika 30 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Haricots rouges", qty: 440, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 220, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Maïs", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 12, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Revenir", d: "Légumes dans huile 3 min." },
          { n: "Mijoter", d: "Légumineuses + tomates + maïs 30 min. Servir avec riz." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Haricots rouges", qty: 650, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 390, unit: "g", role: "lever" },
          { name: "Tofu ferme", qty: 260, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 380, unit: "g", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Maïs", qty: 100, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 12, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Revenir", d: "Tofu + légumes + épices 5 min." },
          { n: "Mijoter", d: "Chili végane hyperprotéiné 30 min. Riz très généreux." },
        ]},
    ]
  },

  {
    id: "cabillaud-citron-riz", titre: "Cabillaud citron & riz",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/cabillaud-citron-riz-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Cabillaud", qty: 280, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 120, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 8, unit: "g", role: "condiment" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Cabillaud à la vapeur ou poêlé 4 min par face. Riz cuit." },
          { n: "Servir", d: "Poisson + riz + courgette vapeur + jus de citron." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Cabillaud", qty: 400, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 190, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Câpres", qty: 15, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Cabillaud poêlé 4 min par face. Sauce crème + câpres." },
          { n: "Servir", d: "Cabillaud en sauce + riz + courgette." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Cabillaud", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 330, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Câpres", qty: 15, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Très généreux cabillaud poêlé + oeuf dur. Sauce crème + câpres." },
          { n: "Servir", d: "Double portion poisson + riz très généreux — protéines légères." },
        ]},
    ]
  },

  {
    id: "crevettes-sautees", titre: "Crevettes sautées & riz",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/crevettes-sautees-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Crevettes", qty: 280, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 120, unit: "g", role: "lever" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Crevettes poêlées à feu vif 3 min. Riz cuit." },
          { n: "Assembler", d: "Crevettes + poivron + sauce soja + riz." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Crevettes", qty: 390, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 190, unit: "g", role: "lever" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Légumes + crevettes à feu vif dans l'huile 5 min." },
          { n: "Servir", d: "Avec riz basmati + sauce soja." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Crevettes", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Très généreuses crevettes + légumes à feu vif. Oeufs brouillés." },
          { n: "Servir", d: "Riz très généreux + crevettes + oeufs — protéines légères." },
        ]},
    ]
  },

  {
    id: "dinde-legumes", titre: "Dinde & légumes rôtis",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express", "batch"], temps: 30,
    img: "/images/recettes/dinde-legumes-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Dinde", qty: 280, unit: "g", role: "lever" },
          { name: "Courgette", qty: 300, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 200, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Four", d: "Légumes + dinde + huile + paprika. Four 200°C 25 min." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Dinde", qty: 400, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 300, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Four", d: "Pommes de terre + légumes + dinde + huile. 200°C 30 min." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Dinde", qty: 650, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 530, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Four", d: "Dinde très généreuse + pommes de terre très généreuses + légumes. 200°C 35 min." },
        ]},
    ]
  },

  {
    id: "gratin-pates-jambon", titre: "Gratin de pâtes au jambon",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 40,
    img: "/images/recettes/gratin-pates-jambon-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 100, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 100, unit: "g", role: "lever" },
          { name: "Emmental", qty: 40, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Mélanger avec crème + jambon." },
          { n: "Gratiner", d: "Emmental par-dessus. Four 200°C 15 min." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 170, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Emmental", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes. Appareil : oeufs + crème + jambon." },
          { n: "Gratiner", d: "Pâtes + appareil + emmental. Four 180°C 20 min." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 380, unit: "g", role: "lever" },
          { name: "Jambon blanc", qty: 290, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Emmental", qty: 160, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes très généreuses. Appareil oeufs + crème + jambon abondant." },
          { n: "Gratiner", d: "Emmental très généreux. Four 180°C 20 min. Gratin de champion." },
        ]},
    ]
  },

  {
    id: "porc-pommes-terre", titre: "Filet de porc & pommes de terre",
    cat: "sale", repas: ["dejeuner", "diner"], tags: [], temps: 30,
    img: "/images/recettes/porc-pommes-terre-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Porc filet", qty: 280, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 200, unit: "g", role: "lever" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Porc poêlé 4 min par face. Pommes de terre vapeur. Haricots vapeur." },
          { n: "Servir", d: "Porc + accompagnements + moutarde." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Porc filet", qty: 400, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 360, unit: "g", role: "lever" },
          { name: "Champignons", qty: 150, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Moutarde", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Porc + champignons poêlés. Sauce crème + moutarde. Pommes de terre vapeur." },
          { n: "Servir", d: "Porc en sauce + pommes de terre + haricots." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Porc filet", qty: 650, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 600, unit: "g", role: "lever" },
          { name: "Champignons", qty: 150, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Moutarde", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Très généreuse portion porc + champignons en sauce crémeuse." },
          { n: "Servir", d: "Porc + pommes de terre très généreuses + haricots." },
        ]},
    ]
  },

  {
    id: "saumon-epinards", titre: "Saumon & épinards à la crème",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/saumon-epinards-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Saumon", qty: 280, unit: "g", role: "lever" },
          { name: "Épinards", qty: 200, unit: "g", role: "fixed" },
          { name: "Riz basmati", qty: 100, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 8, unit: "g", role: "condiment" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Saumon poêlé 4 min par face. Épinards tombés 2 min. Riz cuit." },
          { n: "Servir", d: "Saumon + épinards + riz." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Saumon", qty: 400, unit: "g", role: "lever" },
          { name: "Épinards", qty: 200, unit: "g", role: "fixed" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Saumon poêlé. Épinards + crème fraîche 5 min." },
          { n: "Servir", d: "Saumon + crème aux épinards + riz." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Saumon", qty: 650, unit: "g", role: "lever" },
          { name: "Épinards", qty: 200, unit: "g", role: "fixed" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Très généreux saumon + épinards + crème + parmesan." },
          { n: "Servir", d: "Double portion saumon + sauce crémeuse + riz très généreux." },
        ]},
    ]
  },

  {
    id: "boeuf-brocoli-riz", titre: "Bœuf brocoli & riz",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express", "batch"], temps: 20,
    img: "/images/recettes/boeuf-brocoli-riz-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Bœuf 5%", qty: 280, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 150, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 300, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Bœuf saisi à feu vif 3 min. Brocoli vapeur 6 min. Riz cuit." },
          { n: "Assembler", d: "Bowl riz + bœuf + brocoli + sauce soja." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Bœuf 5%", qty: 400, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sauce teriyaki", qty: 20, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Bœuf + oignon à feu vif 4 min. Brocoli ajouté 3 min." },
          { n: "Servir", d: "Avec riz + sauces." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Bœuf 5%", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 390, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 300, unit: "g", role: "fixed" },
          { name: "Oeufs", qty: 140, unit: "g", role: "lever" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sauce teriyaki", qty: 20, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Sauter", d: "Bœuf maigre très généreux + oeuf + brocoli. Feu vif." },
          { n: "Servir", d: "Riz très généreux + protéines maximales." },
        ]},
    ]
  },

  {
    id: "soupe-potiron", titre: "Velouté de potiron",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 30,
    img: "/images/recettes/soupe-potiron-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Pomme de terre", qty: 600, unit: "g", role: "lever" },
          { name: "Carottes", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 6, unit: "g", role: "condiment" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Légumes + eau 1L. Mijoter 20 min." },
          { n: "Mixer", d: "Mixer finement. Curry + assaisonnement." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Pomme de terre", qty: 840, unit: "g", role: "lever" },
          { name: "Carottes", qty: 300, unit: "g", role: "fixed" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Pois chiches", qty: 220, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 8, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Légumes + lait coco + eau 1L. 20 min." },
          { n: "Mixer", d: "Mixer + pois chiches entiers parsemés. Huile d'olive." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Pomme de terre", qty: 1200, unit: "g", role: "lever" },
          { name: "Carottes", qty: 300, unit: "g", role: "fixed" },
          { name: "Lait coco", qty: 240, unit: "ml", role: "lever" },
          { name: "Pois chiches", qty: 390, unit: "g", role: "lever" },
          { name: "Lentilles corail", qty: 130, unit: "g", role: "lever" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 10, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Tout ensemble + lentilles + lait coco + eau 1.2L. 25 min." },
          { n: "Mixer", d: "Velouté riche + pois chiches entiers + huile généreuse." },
        ]},
    ]
  },

  {
    id: "tofu-legumes", titre: "Tofu & légumes sautés",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan"], temps: 20,
    img: "/images/recettes/tofu-legumes-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Tofu ferme", qty: 280, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 150, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 200, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 20, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Tofu doré à la poêle 5 min par face. Légumes sautés." },
          { n: "Assembler", d: "Riz + légumes + tofu + sauce soja." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Tofu ferme", qty: 400, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 200, unit: "g", role: "fixed" },
          { name: "Carottes", qty: 100, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 90, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sauce teriyaki", qty: 20, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 10, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Cuire", d: "Tofu croustillant + légumes sautés + edamame." },
          { n: "Assembler", d: "Riz + tout + sauce teriyaki." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Tofu ferme", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 380, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 200, unit: "g", role: "lever" },
          { name: "Brocoli", qty: 200, unit: "g", role: "fixed" },
          { name: "Edamame", qty: 130, unit: "g", role: "lever" },
          { name: "Sauce soja", qty: 25, unit: "ml", role: "condiment" },
          { name: "Sauce teriyaki", qty: 20, unit: "ml", role: "condiment" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Sésame", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Tofu + pois chiches rôtis. Légumes + edamame sautés." },
          { n: "Assembler", d: "Bowl veggie hyperprotéiné + sésame." },
        ]},
    ]
  },

  {
    id: "poulet-tikka", titre: "Poulet tikka masala",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch"], temps: 35,
    img: "/images/recettes/poulet-tikka-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Poulet", qty: 600, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 12, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Poulet + épices 15 min. Dorer 5 min." },
          { n: "Mijoter", d: "Sauce tomate + lait coco 20 min à feu doux." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Poulet", qty: 770, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 360, unit: "g", role: "lever" },
          { name: "Lait coco", qty: 220, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 12, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mariner", d: "Poulet + épices + crème 15 min. Dorer." },
          { n: "Mijoter", d: "Sauce tomate + lait coco 20 min. Servir avec riz." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Poulet", qty: 1170, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 600, unit: "g", role: "lever" },
          { name: "Lait coco", qty: 360, unit: "ml", role: "lever" },
          { name: "Tomates concassées", qty: 400, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 100, unit: "g", role: "fixed" },
          { name: "Curry", qty: 15, unit: "g", role: "condiment" },
          { name: "Paprika", qty: 10, unit: "g", role: "condiment" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mariner", d: "Poulet très généreux + épices. Dorer bien." },
          { n: "Mijoter", d: "Sauce riche 25 min. Riz très généreux." },
        ]},
    ]
  },

  {
    id: "risotto-poulet", titre: "Risotto au poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: [], temps: 35,
    img: "/images/recettes/risotto-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Riz basmati", qty: 150, unit: "g", role: "lever" },
          { name: "Poulet", qty: 200, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Risotto", d: "Nacrer riz + oignon. Louches d'eau chaude 18 min." },
          { n: "Finir", d: "Poulet grillé + champignons + parmesan." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Riz basmati", qty: 240, unit: "g", role: "lever" },
          { name: "Poulet", qty: 290, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Beurre", qty: 12, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 50, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Risotto", d: "Riz nacré dans beurre + oignon. 18 min." },
          { n: "Finir", d: "Poulet + champignons + crème + parmesan. Mantecatura." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Riz basmati", qty: 390, unit: "g", role: "lever" },
          { name: "Poulet", qty: 520, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 70, unit: "g", role: "lever" },
          { name: "Beurre", qty: 15, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Risotto", d: "Riz très généreux nacré 20 min." },
          { n: "Finir", d: "Double poulet + champignons + parmesan très généreux." },
        ]},
    ]
  },

  {
    id: "bowl-quinoa-legumes", titre: "Bowl quinoa & légumes rôtis",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan"], temps: 25,
    img: "/images/recettes/bowl-quinoa-legumes-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Quinoa", qty: 80, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 120, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 120, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 8, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Rôtir", d: "Légumes + huile + paprika. Four 200°C 20 min." },
          { n: "Assembler", d: "Quinoa + légumes rôtis." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Quinoa", qty: 120, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 110, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 120, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 120, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 70, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 12, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Rôtir", d: "Légumes + pois chiches + huile. Four 200°C 20 min." },
          { n: "Assembler", d: "Quinoa + légumes + avocat + tahini." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Quinoa", qty: 200, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 210, unit: "g", role: "lever" },
          { name: "Edamame", qty: 100, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 120, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 120, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 90, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
          { name: "Graines de tournesol", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Rôtir", d: "Légumes + pois chiches croustillants 20 min." },
          { n: "Assembler", d: "Super bowl veggie très hyperprotéiné + graines." },
        ]},
    ]
  },

  {
    id: "pasta-crevettes", titre: "Pasta aux crevettes",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/pasta-crevettes-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 200, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Sauce soja", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Revenir crevettes + oignon + courgette 5 min." },
          { n: "Assembler", d: "Pâtes + crevettes + sauce soja." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 310, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Crevettes + oignon + courgette + crème 8 min." },
          { n: "Servir", d: "Pâtes + sauce + parmesan râpé." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Crevettes", qty: 520, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
          { name: "Courgette", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 80, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes très généreuses. Double portion crevettes + légumes + crème." },
          { n: "Servir", d: "Pasta di mare hyperprotéinée + parmesan." },
        ]},
    ]
  },

  {
    id: "moussaka", titre: "Moussaka",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["batch", "occasion"], temps: 60,
    img: "/images/recettes/moussaka-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Bœuf 5%", qty: 500, unit: "g", role: "lever" },
          { name: "Aubergine", qty: 600, unit: "g", role: "fixed" },
          { name: "Sauce tomate", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 120, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Revenir oignon + bœuf + tomate + épices 15 min." },
          { n: "Monter", d: "Aubergines grillées + sauce viande. Four 180°C 30 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Bœuf 15%", qty: 660, unit: "g", role: "lever" },
          { name: "Aubergine", qty: 600, unit: "g", role: "fixed" },
          { name: "Sauce tomate", qty: 300, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 200, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Emmental", qty: 70, unit: "g", role: "lever" },
          { name: "Oignon", qty: 120, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Bœuf + oignon + tomate 15 min." },
          { n: "Monter", d: "Aubergines + viande + béchamel légère (crème + oeufs + emmental). Four 35 min." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Bœuf 5%", qty: 1040, unit: "g", role: "lever" },
          { name: "Aubergine", qty: 600, unit: "g", role: "fixed" },
          { name: "Sauce tomate", qty: 300, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 220, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Emmental", qty: 100, unit: "g", role: "lever" },
          { name: "Oignon", qty: 120, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Sauce", d: "Bœuf maigre très généreux + oignon + tomate 20 min." },
          { n: "Monter", d: "Moussaka hyperprotéinée maigre. Four 35 min. Emmental généreux." },
        ]},
    ]
  },

  {
    id: "gazpacho", titre: "Gazpacho",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "express"], temps: 10,
    img: "/images/recettes/gazpacho-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Tomates", qty: 800, unit: "g", role: "lever" },
          { name: "Concombre", qty: 200, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Vinaigre balsamique", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Tous les légumes + vinaigre. Mixer finement." },
          { n: "Refroidir", d: "Filtrer si désiré. Servir bien froid." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Tomates", qty: 800, unit: "g", role: "lever" },
          { name: "Concombre", qty: 200, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Pain complet", qty: 100, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Vinaigre balsamique", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Tous légumes + pain + huile. Mixer finement." },
          { n: "Servir", d: "Bien froid + croutons de pain complet." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Tomates", qty: 800, unit: "g", role: "lever" },
          { name: "Concombre", qty: 200, unit: "g", role: "fixed" },
          { name: "Poivron", qty: 150, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Pain complet", qty: 140, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 260, unit: "g", role: "lever" },
          { name: "Tofu ferme", qty: 200, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 25, unit: "g", role: "fixed" },
          { name: "Vinaigre balsamique", qty: 15, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Légumes + pain + huile. Mixer." },
          { n: "Servir", d: "Froid + pois chiches rôtis + dés de tofu — gazpacho hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "tian-provencal", titre: "Tian provençal",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegan", "batch"], temps: 50,
    img: "/images/recettes/tian-provencal-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Courgette", qty: 400, unit: "g", role: "lever" },
          { name: "Tomates", qty: 400, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 300, unit: "g", role: "fixed" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Trancher finement tous les légumes en rondelles." },
          { n: "Cuire", d: "Disposer en couches + huile + paprika. Four 180°C 40 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Courgette", qty: 400, unit: "g", role: "lever" },
          { name: "Tomates", qty: 400, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 300, unit: "g", role: "fixed" },
          { name: "Pomme de terre", qty: 360, unit: "g", role: "lever" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Pois chiches", qty: 220, unit: "g", role: "lever" },
          { name: "Huile olive", qty: 30, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 6, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Légumes en rondelles + pois chiches dans le plat." },
          { n: "Cuire", d: "Huile généreuse + paprika. Four 180°C 45 min." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Courgette", qty: 400, unit: "g", role: "lever" },
          { name: "Tomates", qty: 400, unit: "g", role: "fixed" },
          { name: "Aubergine", qty: 300, unit: "g", role: "fixed" },
          { name: "Pomme de terre", qty: 600, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 390, unit: "g", role: "lever" },
          { name: "Lentilles corail", qty: 230, unit: "g", role: "lever" },
          { name: "Oignon", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 35, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 6, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Légumes + légumineuses. Disposer en couches." },
          { n: "Cuire", d: "Tian végane hyperprotéiné. Four 180°C 50 min." },
        ]},
    ]
  },

  {
    id: "poulet-citron-thym", titre: "Poulet citron & thym",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express", "batch"], temps: 25,
    img: "/images/recettes/poulet-citron-thym-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Poulet", qty: 280, unit: "g", role: "lever" },
          { name: "Courgette", qty: 300, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 8, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Poulet + jus citron + thym 10 min." },
          { n: "Cuire", d: "Poulet poêlé 6 min par face. Légumes vapeur." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Poulet", qty: 400, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 180, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 12, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Poulet + citron + thym 10 min." },
          { n: "Cuire", d: "Poulet doré + riz + légumes." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Poulet", qty: 650, unit: "g", role: "lever" },
          { name: "Riz basmati", qty: 300, unit: "g", role: "lever" },
          { name: "Courgette", qty: 200, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 150, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Mariner", d: "Très généreuse volaille marinée citron + thym." },
          { n: "Cuire", d: "Poulet très généreux + riz + légumes abondants." },
        ]},
    ]
  },

  {
    id: "pasta-saumon-creme", titre: "Pasta saumon & crème",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/pasta-saumon-creme-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Pâtes", qty: 150, unit: "g", role: "lever" },
          { name: "Saumon", qty: 180, unit: "g", role: "lever" },
          { name: "Crème fraîche allégée", qty: 80, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes al dente. Saumon poêlé 3 min par face." },
          { n: "Sauce", d: "Crème + épinards 3 min. Mélanger avec pâtes + saumon émietté." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Pâtes", qty: 240, unit: "g", role: "lever" },
          { name: "Saumon", qty: 260, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Câpres", qty: 15, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 20, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes. Saumon poêlé 3 min par face. Sauce crème + épinards + câpres." },
          { n: "Servir", d: "Pâtes + sauce + parmesan." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Pâtes", qty: 390, unit: "g", role: "lever" },
          { name: "Saumon", qty: 470, unit: "g", role: "lever" },
          { name: "Crème fraîche", qty: 100, unit: "g", role: "lever" },
          { name: "Épinards", qty: 100, unit: "g", role: "fixed" },
          { name: "Câpres", qty: 15, unit: "g", role: "fixed" },
          { name: "Parmesan", qty: 40, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Pâtes très généreuses + saumon très généreux. Sauce crème." },
          { n: "Servir", d: "Pasta saumon hyperprotéinée + parmesan." },
        ]},
    ]
  },

  {
    id: "salade-composee", titre: "Salade composée aux oeufs",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["vegetarien", "express"], temps: 10,
    img: "/images/recettes/salade-composee-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Laitue", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 120, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Radis", qty: 50, unit: "g", role: "fixed" },
          { name: "Vinaigre balsamique", qty: 10, unit: "ml", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Oeufs durs 10 min. Refroidir et couper." },
          { n: "Assembler", d: "Laitue + légumes + oeufs + vinaigrette." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Feta", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 120, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Olives", qty: 25, unit: "g", role: "fixed" },
          { name: "Betterave", qty: 60, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Oeufs durs 10 min." },
          { n: "Assembler", d: "Salade complète : légumes + 3 oeufs + feta + olives + betterave." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Oeufs", qty: 360, unit: "g", role: "lever" },
          { name: "Feta", qty: 70, unit: "g", role: "lever" },
          { name: "Pois chiches", qty: 100, unit: "g", role: "lever" },
          { name: "Laitue", qty: 100, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 120, unit: "g", role: "fixed" },
          { name: "Concombre", qty: 80, unit: "g", role: "fixed" },
          { name: "Olives", qty: 25, unit: "g", role: "fixed" },
          { name: "Betterave", qty: 60, unit: "g", role: "fixed" },
          { name: "Huile olive", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "6 oeufs durs. Pois chiches rôtis." },
          { n: "Assembler", d: "Méga salade hyperprotéinée végé." },
        ]},
    ]
  },

  {
    id: "steak-hache-champignons", titre: "Steak haché sauce champignons",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 20,
    img: "/images/recettes/steak-hache-champignons-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Bœuf 5%", qty: 280, unit: "g", role: "lever" },
          { name: "Champignons", qty: 250, unit: "g", role: "fixed" },
          { name: "Haricots verts", qty: 200, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Steaks hachés 3 min par face. Champignons poêlés 5 min. Haricots vapeur." },
          { n: "Servir", d: "Steak + sauce champignons + haricots." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Bœuf 15%", qty: 380, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 300, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Steaks 3 min par face. Sauce : oignon + champignons + crème + moutarde." },
          { n: "Servir", d: "Steak en sauce + pommes de terre vapeur." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Bœuf 5%", qty: 650, unit: "g", role: "lever" },
          { name: "Pomme de terre", qty: 530, unit: "g", role: "lever" },
          { name: "Champignons", qty: 200, unit: "g", role: "fixed" },
          { name: "Crème fraîche allégée", qty: 60, unit: "g", role: "lever" },
          { name: "Emmental", qty: 50, unit: "g", role: "lever" },
          { name: "Oignon", qty: 60, unit: "g", role: "fixed" },
          { name: "Moutarde", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Double steak maigre + sauce champignons + emmental fondu." },
          { n: "Servir", d: "Steak gratiné + pommes de terre très généreuses." },
        ]},
    ]
  },

  {
    id: "tacos-poulet", titre: "Tacos poulet",
    cat: "sale", repas: ["dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/tacos-poulet-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Poulet", qty: 120, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 60, unit: "g", role: "lever" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Paprika", qty: 3, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Assaisonner", d: "Poulet + paprika. Griller 6 min par face." },
          { n: "Assembler", d: "Tortilla + laitue + tomate + poulet épicé." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Poulet", qty: 180, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 90, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 70, unit: "g", role: "lever" },
          { name: "Maïs", qty: 50, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 60, unit: "g", role: "lever" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Poulet épicé grillé. Haricots + maïs réchauffés." },
          { n: "Assembler", d: "Tacos complets : tout + avocat." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Poulet", qty: 360, unit: "g", role: "lever" },
          { name: "Tortilla blé", qty: 100, unit: "g", role: "lever" },
          { name: "Haricots rouges", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 70, unit: "g", role: "lever" },
          { name: "Maïs", qty: 50, unit: "g", role: "fixed" },
          { name: "Laitue", qty: 40, unit: "g", role: "fixed" },
          { name: "Tomate", qty: 80, unit: "g", role: "fixed" },
          { name: "Avocat", qty: 80, unit: "g", role: "lever" },
          { name: "Paprika", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Triple poulet + oeuf brouillé. Haricots + maïs." },
          { n: "Assembler", d: "Méga-tacos hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "crepes-salees", titre: "Crêpes salées jambon & fromage",
    cat: "sale", repas: ["petit-dej", "dejeuner", "diner"], tags: ["express"], temps: 15,
    img: "/images/recettes/crepes-salees-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Farine", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Emmental", qty: 40, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Farine + oeufs + lait amande. Mélanger." },
          { n: "Cuire", d: "Crêpes + emmental fondu par-dessus." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Farine", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 200, unit: "ml", role: "lever" },
          { name: "Jambon blanc", qty: 170, unit: "g", role: "lever" },
          { name: "Emmental", qty: 70, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Farine + oeufs + lait entier." },
          { n: "Cuire", d: "Crêpes + jambon + emmental fondu. Plier." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Farine", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 360, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 200, unit: "ml", role: "lever" },
          { name: "Jambon blanc", qty: 290, unit: "g", role: "lever" },
          { name: "Emmental", qty: 100, unit: "g", role: "lever" },
          { name: "Sel, poivre", qty: null, unit: null, role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Beaucoup d'oeufs + farine + lait. Pâte très riche en protéines." },
          { n: "Cuire", d: "Crêpes très généreuses + double jambon + emmental fondu." },
        ]},
    ]
  },

  {
    id: "overnight-oats", titre: "Overnight oats",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express", "batch"], temps: 5,
    img: "/images/recettes/overnight-oats-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Flocons avoine", qty: 50, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 180, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + lait amande dans un bocal." },
          { n: "Réfrigérer", d: "Toute la nuit. Myrtilles au matin." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Flocons avoine", qty: 80, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 190, unit: "ml", role: "lever" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Beurre amande", qty: 10, unit: "g", role: "fixed" },
          { name: "Miel", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + lait + beurre amande dans un bocal." },
          { n: "Réfrigérer", d: "Toute la nuit. Banane + filet de miel au matin." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Flocons avoine", qty: 90, unit: "g", role: "lever" },
          { name: "Skyr", qty: 180, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 110, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + skyr + protéines + lait amande. Bien mélanger." },
          { n: "Réfrigérer", d: "Toute la nuit. Myrtilles au matin." },
        ]},
    ]
  },

  {
    id: "acai-bowl", titre: "Açaï bowl",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 8,
    img: "/images/recettes/acai-bowl-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Açaï", qty: 100, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 80, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Banane", qty: 60, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Açaï + lait amande + demi-banane. Consistance épaisse." },
          { n: "Bowl", d: "Myrtilles + tranches banane par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Açaï", qty: 100, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 80, unit: "ml", role: "lever" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 40, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Açaï + lait amande + banane. Consistance épaisse." },
          { n: "Bowl", d: "Granola + myrtilles + tranches banane." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Açaï", qty: 100, unit: "g", role: "lever" },
          { name: "Skyr", qty: 180, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 60, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Granola", qty: 25, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Açaï + skyr + protéines + lait amande. Bien homogène." },
          { n: "Bowl", d: "Myrtilles + granola par-dessus." },
        ]},
    ]
  },

  {
    id: "protein-pancakes", titre: "Protein pancakes",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express", "batch"], temps: 12,
    img: "/images/recettes/protein-pancakes-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Banane", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 15, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Banane + oeufs + protéines. Consistance lisse." },
          { n: "Cuire", d: "Petites galettes, 2 min chaque côté à feu moyen." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Banane", qty: 130, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Banane + oeufs + protéines." },
          { n: "Cuire", d: "Pancakes moelleux + myrtilles dans la pâte." },
          { n: "Garnir", d: "Filet de miel par-dessus." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Banane", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 210, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 40, unit: "g", role: "lever" },
          { name: "Flocons avoine", qty: 40, unit: "g", role: "lever" },
          { name: "Skyr", qty: 120, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Banane + oeufs + protéines + flocons + skyr. Pâte épaisse." },
          { n: "Cuire", d: "Pancakes épais hyperprotéinés, 3 min chaque côté à feu doux." },
        ]},
    ]
  },

  {
    id: "tiramisu-healthy", titre: "Tiramisu healthy",
    cat: "sucre", repas: ["gouter"], tags: ["occasion", "batch"], temps: 20,
    img: "/images/recettes/tiramisu-healthy-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Skyr", qty: 400, unit: "g", role: "lever" },
          { name: "Biscuits cuillère", qty: 80, unit: "g", role: "lever" },
          { name: "Café", qty: 150, unit: "ml", role: "condiment" },
          { name: "Miel", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Crème", d: "Skyr + miel, fouetter jusqu'à consistance lisse." },
          { n: "Monter", d: "Biscuits trempés dans le café. Alterner couches. Réfrigérer 4h." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Mascarpone allégé", qty: 260, unit: "g", role: "lever" },
          { name: "Skyr", qty: 220, unit: "g", role: "lever" },
          { name: "Biscuits cuillère", qty: 170, unit: "g", role: "lever" },
          { name: "Café", qty: 150, unit: "ml", role: "condiment" },
          { name: "Sucre", qty: 25, unit: "g", role: "condiment" },
          { name: "Chocolat noir", qty: 15, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Crème", d: "Mascarpone + skyr + sucre, fouetter." },
          { n: "Monter", d: "Couches biscuits + crème. Réfrigérer 4h." },
          { n: "Finir", d: "Chocolat râpé par-dessus avant de servir." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Skyr", qty: 480, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 50, unit: "g", role: "lever" },
          { name: "Biscuits cuillère", qty: 100, unit: "g", role: "lever" },
          { name: "Café", qty: 150, unit: "ml", role: "condiment" },
          { name: "Miel", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Crème hyperprotéinée", d: "Skyr + protéines vanille + miel. Bien fouetter." },
          { n: "Monter", d: "Tremper biscuits dans café. Alterner couches. Réfrigérer 4h." },
        ]},
    ]
  },

  {
    id: "granola-maison", titre: "Granola maison",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "batch"], temps: 25,
    img: "/images/recettes/granola-maison-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Flocons avoine", qty: 200, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 30, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 3, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + sirop d'agave + cannelle." },
          { n: "Cuire", d: "Four 170°C 15 min en remuant à mi-cuisson. Laisser refroidir." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Flocons avoine", qty: 220, unit: "g", role: "lever" },
          { name: "Amandes", qty: 70, unit: "g", role: "lever" },
          { name: "Noix de cajou", qty: 50, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 40, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 3, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + fruits secs + huile + sirop + cannelle." },
          { n: "Cuire", d: "Four 170°C 20 min en remuant. Refroidir." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Flocons avoine", qty: 330, unit: "g", role: "lever" },
          { name: "Amandes", qty: 100, unit: "g", role: "lever" },
          { name: "Noix de cajou", qty: 80, unit: "g", role: "lever" },
          { name: "Graines de tournesol", qty: 50, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 25, unit: "g", role: "lever" },
          { name: "Chocolat noir", qty: 30, unit: "g", role: "fixed" },
          { name: "Sirop d'agave", qty: 50, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 25, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 3, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Tous les ingrédients secs + huile + sirop." },
          { n: "Cuire", d: "Four 170°C 20 min. Ajouter chocolat noir après refroidissement." },
        ]},
    ]
  },

  {
    id: "smoothie-bowl-banane", titre: "Smoothie bowl banane & mangue",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "express"], temps: 8,
    img: "/images/recettes/smoothie-bowl-banane-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Banane", qty: 150, unit: "g", role: "lever" },
          { name: "Mangue", qty: 100, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 100, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Banane + mangue + lait amande. Consistance épaisse." },
          { n: "Bowl", d: "Myrtilles par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Banane", qty: 160, unit: "g", role: "lever" },
          { name: "Mangue", qty: 130, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 80, unit: "ml", role: "lever" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Framboise", qty: 40, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Banane + mangue + lait amande. Consistance épaisse." },
          { n: "Bowl", d: "Granola + fruits rouges par-dessus." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Banane", qty: 170, unit: "g", role: "lever" },
          { name: "Mangue", qty: 140, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 100, unit: "ml", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Banane + mangue + protéines + lait avoine. Épais." },
          { n: "Bowl", d: "Granola + myrtilles + graines chia." },
        ]},
    ]
  },

  {
    id: "french-toast", titre: "French toast protéiné",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 10,
    img: "/images/recettes/french-toast-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Pain complet", qty: 80, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 50, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "Pain dans mélange oeufs + lait amande + cannelle." },
          { n: "Cuire", d: "Poêle chaude 3 min par face. Servir avec fraises." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Pain brioche", qty: 110, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 60, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 60, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "Pain brioche dans oeufs + lait + cannelle." },
          { n: "Cuire", d: "3 min par face. Sirop érable + fruits frais." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Pain brioche", qty: 160, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 210, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 60, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "3 oeufs + protéines + lait. Brioche bien imbibée." },
          { n: "Cuire", d: "French toast épais hyperprotéiné 4 min par face." },
        ]},
    ]
  },

  {
    id: "porridge-pomme-cannelle", titre: "Porridge pomme & cannelle",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "batch"], temps: 10,
    img: "/images/recettes/porridge-pomme-cannelle-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Flocons avoine", qty: 50, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Pomme", qty: 100, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait amande + cannelle 5 min à feu doux." },
          { n: "Servir", d: "Pomme râpée ou coupée par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Flocons avoine", qty: 80, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 200, unit: "ml", role: "lever" },
          { name: "Pomme", qty: 120, unit: "g", role: "fixed" },
          { name: "Noix", qty: 25, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 10, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait avoine 5 min. Ajouter pomme en dés." },
          { n: "Servir", d: "Porridge + noix + sirop d'agave." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Flocons avoine", qty: 100, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 200, unit: "ml", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Pomme", qty: 120, unit: "g", role: "fixed" },
          { name: "Noix", qty: 40, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 10, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait + protéines 5 min. Pomme en dés." },
          { n: "Servir", d: "Porridge hyperprotéiné + noix + graines chia." },
        ]},
    ]
  },

  {
    id: "yaourt-parfait", titre: "Yaourt parfait",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 5,
    img: "/images/recettes/yaourt-parfait-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Yaourt grec", qty: 150, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 80, unit: "g", role: "fixed" },
          { name: "Flocons avoine", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Assembler", d: "Yaourt + flocons + myrtilles. Couches alternées." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Yaourt grec", qty: 220, unit: "g", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Fraise", qty: 60, unit: "g", role: "fixed" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Assembler", d: "Yaourt + granola + fruits rouges + miel. Couches alternées." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Yaourt grec", qty: 360, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Granola", qty: 60, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Fraise", qty: 60, unit: "g", role: "fixed" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Yaourt + protéines vanille. Bien incorporer." },
          { n: "Assembler", d: "Parfait hyperprotéiné : yaourt + granola + fruits + amandes." },
        ]},
    ]
  },

  {
    id: "banana-bread", titre: "Banana bread protéiné",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["batch"], temps: 50,
    img: "/images/recettes/banana-bread-classic.jpg",
    versions: [
      { l: "Light", n: 8, ing: [
          { name: "Banane", qty: 400, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 220, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 150, unit: "g", role: "lever" },
          { name: "Cannelle", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Écraser bananes + oeufs + farine + cannelle." },
          { n: "Cuire", d: "Moule à cake. Four 170°C 45 min." },
        ]},
      { l: "Classique", n: 8, ing: [
          { name: "Banane", qty: 420, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 240, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 150, unit: "g", role: "lever" },
          { name: "Chocolat noir", qty: 60, unit: "g", role: "fixed" },
          { name: "Noix", qty: 60, unit: "g", role: "lever" },
          { name: "Miel", qty: 30, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Bananes + oeufs + farine + miel + cannelle. Intégrer noix + chocolat." },
          { n: "Cuire", d: "Four 170°C 45 min." },
        ]},
      { l: "Volume", n: 8, ing: [
          { name: "Banane", qty: 440, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 410, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 80, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 120, unit: "g", role: "lever" },
          { name: "Chocolat noir", qty: 60, unit: "g", role: "fixed" },
          { name: "Amandes", qty: 80, unit: "g", role: "lever" },
          { name: "Miel", qty: 25, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Bananes + oeufs + protéines + farine + miel + cannelle." },
          { n: "Cuire", d: "Amandes + chocolat intégrés. Four 170°C 45 min." },
        ]},
    ]
  },

  {
    id: "bowl-fruits-rouges", titre: "Bowl fruits rouges",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "express"], temps: 5,
    img: "/images/recettes/bowl-fruits-rouges-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Fraise", qty: 100, unit: "g", role: "lever" },
          { name: "Framboise", qty: 80, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 150, unit: "ml", role: "lever" },
          { name: "Flocons avoine", qty: 30, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Fraises + framboises + lait amande. Verser sur flocons." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Fraise", qty: 110, unit: "g", role: "lever" },
          { name: "Framboise", qty: 90, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Lait amande", qty: 120, unit: "ml", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 12, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Fraises + framboises + lait amande + sirop. Base épaisse." },
          { n: "Bowl", d: "Granola + myrtilles + graines chia par-dessus." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Fraise", qty: 100, unit: "g", role: "lever" },
          { name: "Framboise", qty: 80, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 100, unit: "ml", role: "lever" },
          { name: "Granola", qty: 60, unit: "g", role: "lever" },
          { name: "Amandes", qty: 25, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Fruits + protéines + lait avoine. Épais." },
          { n: "Bowl", d: "Granola + amandes + graines chia — bowl hyperprotéiné végane." },
        ]},
    ]
  },

  {
    id: "chia-pudding", titre: "Chia pudding coco",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "batch"], temps: 5,
    img: "/images/recettes/chia-pudding-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Graines chia", qty: 30, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Chia + lait amande + sirop. Réfrigérer 4h minimum." },
          { n: "Servir", d: "Myrtilles par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Graines chia", qty: 40, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 200, unit: "ml", role: "lever" },
          { name: "Mangue", qty: 80, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Granola", qty: 30, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 10, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Chia + lait coco + sirop. Réfrigérer 4h." },
          { n: "Servir", d: "Mangue + myrtilles + granola par-dessus." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Graines chia", qty: 50, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 150, unit: "ml", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Yaourt grec", qty: 120, unit: "g", role: "lever" },
          { name: "Mangue", qty: 80, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Chia + lait coco + protéines + yaourt. Réfrigérer 4h." },
          { n: "Servir", d: "Chia pudding hyperprotéiné + granola + fruits." },
        ]},
    ]
  },

  {
    id: "waffles-proteines", titre: "Waffles protéinés",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["batch"], temps: 15,
    img: "/images/recettes/waffles-proteines-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Banane", qty: 120, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 80, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 80, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Pâte", d: "Mixer oeufs + banane + farine + lait amande." },
          { n: "Cuire", d: "Gaufrier 4 min. Servir avec myrtilles." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Banane", qty: 160, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 90, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 80, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Mixer tout ensemble. Pâte lisse." },
          { n: "Cuire", d: "Gaufrier 4 min. Sirop érable + myrtilles." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Oeufs", qty: 280, unit: "g", role: "lever" },
          { name: "Banane", qty: 170, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 45, unit: "g", role: "lever" },
          { name: "Farine complète", qty: 120, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 80, unit: "ml", role: "lever" },
          { name: "Myrtilles", qty: 60, unit: "g", role: "fixed" },
          { name: "Amandes", qty: 30, unit: "g", role: "lever" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Beaucoup de protéines + oeufs généreux. Pâte épaisse." },
          { n: "Cuire", d: "Gaufres épaisses hyperprotéinées + amandes + sirop érable." },
        ]},
    ]
  },

  {
    id: "energy-balls", titre: "Energy balls cacao & noisette",
    cat: "sucre", repas: ["gouter"], tags: ["vegan", "batch"], temps: 15,
    img: "/images/recettes/energy-balls-classic.jpg",
    versions: [
      { l: "Light", n: 8, ing: [
          { name: "Flocons avoine", qty: 150, unit: "g", role: "lever" },
          { name: "Pâte à tartiner", qty: 60, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 15, unit: "g", role: "condiment" },
          { name: "Sirop d'agave", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Tous les ingrédients jusqu'à obtenir une pâte homogène." },
          { n: "Former", d: "Rouler en boules. Réfrigérer 30 min." },
        ]},
      { l: "Classique", n: 8, ing: [
          { name: "Flocons avoine", qty: 150, unit: "g", role: "lever" },
          { name: "Pâte à tartiner", qty: 90, unit: "g", role: "lever" },
          { name: "Noisettes", qty: 50, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 15, unit: "g", role: "condiment" },
          { name: "Sirop d'agave", qty: 25, unit: "g", role: "condiment" },
          { name: "Graines chia", qty: 10, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Flocons + pâte + noisettes concassées + chia + cacao + sirop." },
          { n: "Former", d: "Boules de 30g. Réfrigérer 30 min." },
        ]},
      { l: "Volume", n: 8, ing: [
          { name: "Flocons avoine", qty: 150, unit: "g", role: "lever" },
          { name: "Pâte à tartiner", qty: 100, unit: "g", role: "lever" },
          { name: "Protéines chocolat", qty: 50, unit: "g", role: "lever" },
          { name: "Noisettes", qty: 70, unit: "g", role: "lever" },
          { name: "Amandes", qty: 40, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 15, unit: "g", role: "condiment" },
          { name: "Sirop d'agave", qty: 20, unit: "g", role: "condiment" },
          { name: "Graines chia", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Tous ingrédients + protéines chocolat. Pâte ferme." },
          { n: "Former", d: "Energy balls hyperprotéinées — 8 boules de 40g." },
        ]},
    ]
  },

  {
    id: "bowl-mangue-coco", titre: "Bowl mangue & coco",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "express"], temps: 8,
    img: "/images/recettes/bowl-mangue-coco-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Mangue", qty: 200, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 100, unit: "ml", role: "lever" },
          { name: "Flocons avoine", qty: 30, unit: "g", role: "lever" },
          { name: "Ananas", qty: 60, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Mangue + lait coco. Consistance épaisse." },
          { n: "Bowl", d: "Flocons + ananas par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Mangue", qty: 210, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 100, unit: "ml", role: "lever" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Ananas", qty: 60, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 40, unit: "g", role: "fixed" },
          { name: "Graines chia", qty: 10, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Mangue + lait coco. Base épaisse." },
          { n: "Bowl", d: "Granola + ananas + myrtilles + graines chia." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Mangue", qty: 220, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 100, unit: "ml", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Noix de cajou", qty: 30, unit: "g", role: "lever" },
          { name: "Ananas", qty: 60, unit: "g", role: "fixed" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Mangue + lait coco + protéines. Épais." },
          { n: "Bowl", d: "Granola + cajou + ananas + chia — tropical hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "brioche-perdue", titre: "Brioche perdue",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 10,
    img: "/images/recettes/brioche-perdue-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Pain complet", qty: 80, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 60, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "Pain dans oeufs + lait + cannelle." },
          { n: "Cuire", d: "Poêle 3 min par face. Fraises en accompagnement." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Pain brioche", qty: 110, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 60, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 60, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "Brioche dans oeufs + lait entier + cannelle." },
          { n: "Cuire", d: "3 min par face. Fruits + sirop érable." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Pain brioche", qty: 160, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 210, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 60, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 15, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Tremper", d: "3 oeufs + protéines + lait. Brioche bien imbibée." },
          { n: "Cuire", d: "Brioche perdue hyperprotéinée 4 min par face." },
        ]},
    ]
  },

  {
    id: "mousse-choco", titre: "Mousse chocolat protéinée",
    cat: "sucre", repas: ["gouter"], tags: ["batch"], temps: 10,
    img: "/images/recettes/mousse-choco-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Yaourt grec", qty: 300, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 20, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 15, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mélanger", d: "Yaourt + cacao + sirop. Fouetter vigoureusement." },
          { n: "Réfrigérer", d: "1h minimum. Servir frais." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Yaourt grec", qty: 330, unit: "g", role: "lever" },
          { name: "Chocolat noir", qty: 70, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 15, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 20, unit: "g", role: "condiment" },
          { name: "Amandes", qty: 25, unit: "g", role: "lever" },
        ], steps: [
          { n: "Chocolat", d: "Fondre chocolat noir au bain-marie. Laisser tiédir." },
          { n: "Mélanger", d: "Yaourt + cacao + chocolat fondu + sirop. Amandes concassées." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Yaourt grec", qty: 480, unit: "g", role: "lever" },
          { name: "Protéines chocolat", qty: 50, unit: "g", role: "lever" },
          { name: "Chocolat noir", qty: 50, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 10, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 15, unit: "g", role: "condiment" },
          { name: "Amandes", qty: 30, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Yaourt + protéines chocolat + cacao + sirop. Fouetter." },
          { n: "Finir", d: "Chocolat fondu + amandes. Réfrigérer 1h." },
        ]},
    ]
  },

  {
    id: "smoothie-vert", titre: "Smoothie bowl vert",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan", "express"], temps: 5,
    img: "/images/recettes/smoothie-vert-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Épinards", qty: 60, unit: "g", role: "fixed" },
          { name: "Banane", qty: 100, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Kiwi", qty: 80, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Mixer", d: "Épinards + banane + lait amande + kiwi. Boire." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Épinards", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 130, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 160, unit: "ml", role: "lever" },
          { name: "Kiwi", qty: 80, unit: "g", role: "fixed" },
          { name: "Flocons avoine", qty: 35, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 10, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Épinards + banane + lait + flocons. Consistance épaisse." },
          { n: "Bowl", d: "Kiwi + graines chia par-dessus." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Épinards", qty: 80, unit: "g", role: "fixed" },
          { name: "Banane", qty: 140, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 170, unit: "ml", role: "lever" },
          { name: "Kiwi", qty: 80, unit: "g", role: "fixed" },
          { name: "Flocons avoine", qty: 50, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Épinards + banane + protéines + lait + flocons. Très épais." },
          { n: "Bowl", d: "Kiwi + amandes + graines chia — green bowl hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "crumble-pomme", titre: "Crumble pomme avoine",
    cat: "sucre", repas: ["gouter"], tags: ["vegan", "batch"], temps: 30,
    img: "/images/recettes/crumble-pomme-classic.jpg",
    versions: [
      { l: "Light", n: 4, ing: [
          { name: "Pomme", qty: 600, unit: "g", role: "lever" },
          { name: "Flocons avoine", qty: 120, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 30, unit: "g", role: "condiment" },
          { name: "Cannelle", qty: 4, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Pommes en dés + cannelle dans un plat." },
          { n: "Crumble", d: "Flocons + sirop. Saupoudrer. Four 180°C 20 min." },
        ]},
      { l: "Classique", n: 4, ing: [
          { name: "Pomme", qty: 760, unit: "g", role: "lever" },
          { name: "Flocons avoine", qty: 180, unit: "g", role: "lever" },
          { name: "Amandes", qty: 70, unit: "g", role: "lever" },
          { name: "Noix", qty: 50, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 40, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Pommes en dés + cannelle." },
          { n: "Crumble", d: "Flocons + amandes + noix + huile + sirop. Four 180°C 25 min." },
        ]},
      { l: "Volume", n: 4, ing: [
          { name: "Pomme", qty: 800, unit: "g", role: "lever" },
          { name: "Flocons avoine", qty: 200, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 50, unit: "g", role: "lever" },
          { name: "Amandes", qty: 100, unit: "g", role: "lever" },
          { name: "Noix", qty: 60, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 25, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 40, unit: "g", role: "condiment" },
          { name: "Huile olive", qty: 20, unit: "g", role: "fixed" },
          { name: "Cannelle", qty: 5, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Pommes + cannelle." },
          { n: "Crumble", d: "Flocons + protéines + fruits secs + graines. Four 180°C 25 min." },
        ]},
    ]
  },

  {
    id: "pancakes-ricotta", titre: "Pancakes à la ricotta",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: [], temps: 15,
    img: "/images/recettes/pancakes-ricotta-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Ricotta", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Farine", qty: 50, unit: "g", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Vanille", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Ricotta + oeufs + farine + vanille. Mélanger." },
          { n: "Cuire", d: "Pancakes 3 min par face. Fraises en accompagnement." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Ricotta", qty: 170, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 120, unit: "g", role: "lever" },
          { name: "Farine", qty: 70, unit: "g", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 12, unit: "g", role: "condiment" },
          { name: "Vanille", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Ricotta + oeufs + farine + vanille. Pâte onctueuse." },
          { n: "Cuire", d: "Pancakes moelleux 3 min par face. Fruits + sirop." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Ricotta", qty: 240, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 210, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Farine", qty: 70, unit: "g", role: "lever" },
          { name: "Fraise", qty: 80, unit: "g", role: "fixed" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 12, unit: "g", role: "condiment" },
          { name: "Vanille", qty: 2, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Ricotta très généreuse + 3 oeufs + protéines + farine." },
          { n: "Cuire", d: "Pancakes épais hyperprotéinés + fruits + sirop." },
        ]},
    ]
  },

  {
    id: "bowl-coco-proteines", titre: "Bowl coco & protéines",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: [], temps: 5,
    img: "/images/recettes/bowl-coco-proteines-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Yaourt grec", qty: 150, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 80, unit: "ml", role: "lever" },
          { name: "Ananas", qty: 80, unit: "g", role: "fixed" },
          { name: "Flocons avoine", qty: 25, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Yaourt + lait coco. Verser sur flocons." },
          { n: "Bowl", d: "Ananas par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Yaourt grec", qty: 220, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 80, unit: "ml", role: "lever" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Ananas", qty: 80, unit: "g", role: "fixed" },
          { name: "Mangue", qty: 60, unit: "g", role: "fixed" },
          { name: "Graines chia", qty: 10, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Yaourt + lait coco." },
          { n: "Bowl", d: "Granola + ananas + mangue + graines chia." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Yaourt grec", qty: 360, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait coco allégé", qty: 60, unit: "ml", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Noix de cajou", qty: 25, unit: "g", role: "lever" },
          { name: "Ananas", qty: 80, unit: "g", role: "fixed" },
          { name: "Mangue", qty: 60, unit: "g", role: "fixed" },
          { name: "Graines chia", qty: 15, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mélanger", d: "Yaourt + protéines + lait coco." },
          { n: "Bowl", d: "Granola + cajou + fruits tropicaux + chia — coco bowl de champion." },
        ]},
    ]
  },

  {
    id: "porridge-cacao", titre: "Porridge cacao & noisette",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["vegan"], temps: 10,
    img: "/images/recettes/porridge-cacao-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Flocons avoine", qty: 50, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Cacao en poudre", qty: 10, unit: "g", role: "lever" },
          { name: "Banane", qty: 60, unit: "g", role: "fixed" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait amande + cacao 5 min à feu doux." },
          { n: "Servir", d: "Banane tranchée + sirop d'agave." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Flocons avoine", qty: 80, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 200, unit: "ml", role: "lever" },
          { name: "Cacao en poudre", qty: 15, unit: "g", role: "lever" },
          { name: "Noisettes", qty: 25, unit: "g", role: "lever" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Pâte à tartiner", qty: 20, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait avoine + cacao 5 min." },
          { n: "Servir", d: "Noisettes + banane + pâte à tartiner + sirop." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Flocons avoine", qty: 100, unit: "g", role: "lever" },
          { name: "Lait avoine", qty: 200, unit: "ml", role: "lever" },
          { name: "Protéines chocolat", qty: 35, unit: "g", role: "lever" },
          { name: "Cacao en poudre", qty: 10, unit: "g", role: "lever" },
          { name: "Noisettes", qty: 30, unit: "g", role: "lever" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Pâte à tartiner", qty: 20, unit: "g", role: "lever" },
          { name: "Graines chia", qty: 10, unit: "g", role: "lever" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Cuire", d: "Flocons + lait + protéines chocolat + cacao 5 min." },
          { n: "Servir", d: "Noisettes + banane + pâte à tartiner + graines chia." },
        ]},
    ]
  },

  {
    id: "bowl-framboise-proteines", titre: "Bowl framboise & protéines",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 5,
    img: "/images/recettes/bowl-framboise-proteines-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Framboise", qty: 150, unit: "g", role: "lever" },
          { name: "Yaourt grec", qty: 150, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 60, unit: "ml", role: "lever" },
          { name: "Flocons avoine", qty: 20, unit: "g", role: "lever" },
        ], steps: [
          { n: "Mixer", d: "Framboises + yaourt + lait amande. Épais." },
          { n: "Bowl", d: "Flocons par-dessus." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Framboise", qty: 160, unit: "g", role: "lever" },
          { name: "Yaourt grec", qty: 200, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 50, unit: "ml", role: "lever" },
          { name: "Granola", qty: 40, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 40, unit: "g", role: "fixed" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Framboises + yaourt + lait amande. Consistance épaisse." },
          { n: "Bowl", d: "Granola + myrtilles + sirop d'agave." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Framboise", qty: 170, unit: "g", role: "lever" },
          { name: "Yaourt grec", qty: 240, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 30, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 50, unit: "ml", role: "lever" },
          { name: "Granola", qty: 50, unit: "g", role: "lever" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 40, unit: "g", role: "fixed" },
          { name: "Sirop d'agave", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Mixer", d: "Framboises + yaourt + protéines + lait. Très épais." },
          { n: "Bowl", d: "Granola + amandes + myrtilles — bowl hyperprotéiné." },
        ]},
    ]
  },

  {
    id: "rice-cakes-proteines", titre: "Rice cakes & beurre amande",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 5,
    img: "/images/recettes/rice-cakes-proteines-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Flocons avoine", qty: 40, unit: "g", role: "lever" },
          { name: "Banane", qty: 100, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Préparer", d: "Galettes de riz du commerce. Banane tranchée + myrtilles." },
          { n: "Assembler", d: "Flocons + banane + myrtilles." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Flocons avoine", qty: 60, unit: "g", role: "lever" },
          { name: "Beurre amande", qty: 25, unit: "g", role: "lever" },
          { name: "Banane", qty: 110, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Galettes de flocons avoine. Beurre amande + banane." },
          { n: "Assembler", d: "Flocons + beurre amande + banane + myrtilles + miel." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Flocons avoine", qty: 80, unit: "g", role: "lever" },
          { name: "Beurre amande", qty: 35, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 25, unit: "g", role: "lever" },
          { name: "Banane", qty: 140, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Flocons + protéines vanille mélangés." },
          { n: "Assembler", d: "Beurre amande généreux + banane + amandes + myrtilles + miel." },
        ]},
    ]
  },

  {
    id: "crepes-sucrees", titre: "Crêpes sucrées",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["batch"], temps: 20,
    img: "/images/recettes/crepes-sucrees-classic.jpg",
    versions: [
      { l: "Light", n: 2, ing: [
          { name: "Farine", qty: 100, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 110, unit: "g", role: "lever" },
          { name: "Lait amande", qty: 200, unit: "ml", role: "lever" },
          { name: "Fraise", qty: 120, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Pâte", d: "Farine + oeufs + lait amande. Mélanger sans grumeaux." },
          { n: "Cuire", d: "Crêpes fines 1 min par face. Fraises en accompagnement." },
        ]},
      { l: "Classique", n: 2, ing: [
          { name: "Farine", qty: 130, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 180, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 210, unit: "ml", role: "lever" },
          { name: "Beurre", qty: 15, unit: "g", role: "fixed" },
          { name: "Fraise", qty: 120, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 20, unit: "g", role: "condiment" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Pâte", d: "Farine + oeufs + lait + beurre fondu. Reposer 30 min." },
          { n: "Cuire", d: "Crêpes 1 min par face. Fraises + banane + sirop érable." },
        ]},
      { l: "Volume", n: 2, ing: [
          { name: "Farine", qty: 150, unit: "g", role: "lever" },
          { name: "Oeufs", qty: 340, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 40, unit: "g", role: "lever" },
          { name: "Lait entier", qty: 230, unit: "ml", role: "lever" },
          { name: "Beurre", qty: 15, unit: "g", role: "fixed" },
          { name: "Fraise", qty: 120, unit: "g", role: "fixed" },
          { name: "Banane", qty: 80, unit: "g", role: "fixed" },
          { name: "Sirop érable", qty: 20, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Pâte", d: "Beaucoup d'oeufs + protéines + farine + lait. Pâte très riche." },
          { n: "Cuire", d: "Crêpes épaisses hyperprotéinées. Fruits + sirop." },
        ]},
    ]
  },

  {
    id: "tartines-nut", titre: "Tartines beurre amande & banane",
    cat: "sucre", repas: ["petit-dej", "gouter"], tags: ["express"], temps: 5,
    img: "/images/recettes/tartines-nut-classic.jpg",
    versions: [
      { l: "Light", n: 1, ing: [
          { name: "Pain complet", qty: 60, unit: "g", role: "lever" },
          { name: "Banane", qty: 100, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
        ], steps: [
          { n: "Assembler", d: "Pain complet toasté + banane tranchée + myrtilles." },
        ]},
      { l: "Classique", n: 1, ing: [
          { name: "Pain complet", qty: 90, unit: "g", role: "lever" },
          { name: "Beurre amande", qty: 25, unit: "g", role: "lever" },
          { name: "Banane", qty: 130, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Assembler", d: "Pain toasté + beurre amande + banane + myrtilles + miel." },
        ]},
      { l: "Volume", n: 1, ing: [
          { name: "Pain complet", qty: 130, unit: "g", role: "lever" },
          { name: "Beurre amande", qty: 35, unit: "g", role: "lever" },
          { name: "Protéines vanille", qty: 20, unit: "g", role: "lever" },
          { name: "Yaourt grec", qty: 120, unit: "g", role: "lever" },
          { name: "Banane", qty: 150, unit: "g", role: "lever" },
          { name: "Myrtilles", qty: 50, unit: "g", role: "fixed" },
          { name: "Amandes", qty: 20, unit: "g", role: "lever" },
          { name: "Miel", qty: 8, unit: "g", role: "condiment" },
        ], steps: [
          { n: "Préparer", d: "Yaourt + protéines. Tartiner le pain." },
          { n: "Assembler", d: "Pain + yaourt protéiné + beurre amande + banane + amandes." },
        ]},
    ]
  }
]