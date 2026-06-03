export const recipes = [
  {
    id: 'bowl-poulet',
    titre: 'Bowl poulet rôti',
    cat: 'sale',
    tags: ['muscu', 'express'],
    temps: 20,
    img: '/images/recettes/bowl-poulet-classic.jpg',
    versions: [
      { l: 'Light', k: 380, p: '42g', g: '32g', li: '8g', s: '<5g', t: '20 min', n: 2, ing: [['Poulet', '200g'], ['Courgette', '1'], ['Quinoa', '120g'], ['Huile olive', '1cc']], steps: [{ n: 'Cuire', d: 'Cuire le quinoa 15 min.' }, { n: 'Poulet', d: 'Griller le poulet 6 min.' }, { n: 'Assembler', d: 'Bowl quinoa + poulet + légumes.' }] },
      { l: 'Intermédiaire', k: 480, p: '46g', g: '42g', li: '12g', s: '<6g', t: '20 min', n: 2, ing: [['Poulet', '220g'], ['Avocat', '½'], ['Quinoa', '150g'], ['Sauce tahini', '1cs']], steps: [{ n: 'Cuire', d: 'Cuire le quinoa.' }, { n: 'Poulet', d: 'Griller le poulet.' }, { n: 'Assembler', d: 'Bowl + avocat + tahini.' }] },
      { l: 'Classique', k: 580, p: '50g', g: '52g', li: '16g', s: '<7g', t: '20 min', n: 2, ing: [['Poulet', '250g'], ['Avocat', '1'], ['Riz', '160g'], ['Sauce sriracha', '1cs']], steps: [{ n: 'Cuire', d: 'Cuire le riz.' }, { n: 'Poulet', d: 'Griller le poulet.' }, { n: 'Assembler', d: 'Bowl généreux + avocat + sriracha.' }] },
    ]
  },
  {
    id: 'salmon-teriyaki',
    titre: 'Salmon teriyaki',
    cat: 'sale',
    tags: ['cardio', 'express'],
    temps: 20,
    img: '/images/recettes/salmon-teriyaki-classic.jpg',
    versions: [
      { l: 'Light', k: 340, p: '34g', g: '28g', li: '8g', s: '<5g', t: '20 min', n: 2, ing: [['Saumon', '150g'], ['Riz basmati', '120g'], ['Sauce soja', '1cs']], steps: [{ n: 'Mariner', d: 'Saumon + soja 10 min.' }, { n: 'Cuire', d: 'Poêler 4 min chaque côté.' }] },
      { l: 'Intermédiaire', k: 440, p: '38g', g: '38g', li: '12g', s: '<6g', t: '20 min', n: 2, ing: [['Saumon', '180g'], ['Riz', '150g'], ['Sauce teriyaki', '2cs'], ['Edamame', '60g']], steps: [{ n: 'Mariner', d: 'Saumon + teriyaki.' }, { n: 'Cuire', d: 'Poêler + riz + edamame.' }] },
      { l: 'Classique', k: 540, p: '42g', g: '48g', li: '16g', s: '<7g', t: '20 min', n: 2, ing: [['Saumon', '200g'], ['Riz japonais', '160g'], ['Sauce teriyaki', '3cs'], ['Avocat', '½'], ['Sésame', '1cs']], steps: [{ n: 'Mariner', d: 'Saumon + teriyaki 15 min.' }, { n: 'Cuire', d: 'Poêler + riz + avocat + sésame.' }] },
    ]
  },
  {
    id: 'curry',
    titre: 'Curry de pois chiches',
    cat: 'sale',
    tags: ['vegan', 'batch'],
    temps: 25,
    img: '/images/recettes/curry-classic.jpg',
    versions: [
      { l: 'Light', k: 320, p: '14g', g: '48g', li: '6g', s: '<5g', t: '25 min', n: 4, ing: [['Pois chiches', '400g'], ['Lait coco allégé', '200ml'], ['Curry', '2cc']], steps: [{ n: 'Faire revenir', d: 'Oignon + curry 2 min.' }, { n: 'Mijoter', d: 'Pois chiches + lait coco 15 min.' }] },
      { l: 'Intermédiaire', k: 420, p: '16g', g: '56g', li: '14g', s: '<6g', t: '25 min', n: 4, ing: [['Pois chiches', '400g'], ['Lait coco', '400ml'], ['Curry', '3cc'], ['Tomates', '2']], steps: [{ n: 'Faire revenir', d: 'Oignon + épices.' }, { n: 'Mijoter', d: 'Tout ensemble 20 min.' }] },
      { l: 'Classique', k: 520, p: '18g', g: '62g', li: '22g', s: '<7g', t: '25 min', n: 4, ing: [['Pois chiches', '400g'], ['Lait coco entier', '400ml'], ['Curry', '3cc'], ['Tomates', '2'], ['Riz basmati', '200g']], steps: [{ n: 'Faire revenir', d: 'Oignon + épices.' }, { n: 'Mijoter', d: 'Curry généreux 20 min + riz.' }] },
    ]
  },
  {
    id: 'smash-burger',
    titre: 'Smash burger',
    cat: 'sale',
    tags: ['classique', 'occasion'],
    temps: 15,
    img: '/images/recettes/smash-burger-classic.jpg',
    versions: [
      { l: 'Light', k: 420, p: '38g', g: '34g', li: '14g', s: '<5g', t: '15 min', n: 1, ing: [['Bœuf 5%', '150g'], ['Pain complet', '1'], ['Salade', '2 feuilles'], ['Tomate', '1']], steps: [{ n: 'Former', d: 'Boulette + écraser fort.' }, { n: 'Cuire', d: '2 min chaque côté.' }] },
      { l: 'Intermédiaire', k: 560, p: '42g', g: '44g', li: '22g', s: '<6g', t: '15 min', n: 1, ing: [['Bœuf 15%', '180g'], ['Pain brioche', '1'], ['Cheddar', '1 tranche'], ['Sauce burger', '1cs']], steps: [{ n: 'Former', d: 'Boulette + écraser fort.' }, { n: 'Cuire', d: '2 min + fromage.' }] },
      { l: 'Classique', k: 700, p: '46g', g: '54g', li: '30g', s: '<7g', t: '15 min', n: 1, ing: [['Bœuf 20%', '200g'], ['Pain brioche', '1'], ['Double cheddar', '2 tranches'], ['Bacon', '2 tranches'], ['Sauce spéciale', '2cs']], steps: [{ n: 'Former', d: 'Double smash.' }, { n: 'Cuire', d: 'Double fromage + bacon.' }] },
    ]
  },
  {
    id: 'shakshuka',
    titre: 'Shakshuka',
    cat: 'sale',
    tags: ['express', 'vegan'],
    temps: 20,
    img: '/images/recettes/shakshuka-classic.jpg',
    versions: [
      { l: 'Light', k: 240, p: '14g', g: '22g', li: '10g', s: '<5g', t: '20 min', n: 2, ing: [['Oeufs', '3'], ['Tomates concassées', '400g'], ['Paprika', '1cc']], steps: [{ n: 'Sauce', d: 'Tomates + épices 10 min.' }, { n: 'Oeufs', d: 'Casser dans la sauce, couvrir 5 min.' }] },
      { l: 'Intermédiaire', k: 320, p: '18g', g: '28g', li: '14g', s: '<6g', t: '20 min', n: 2, ing: [['Oeufs', '4'], ['Tomates', '400g'], ['Poivron', '1'], ['Feta', '50g']], steps: [{ n: 'Sauce', d: 'Tomates + poivron 10 min.' }, { n: 'Oeufs + feta', d: 'Couvrir 5 min.' }] },
      { l: 'Classique', k: 420, p: '22g', g: '32g', li: '22g', s: '<7g', t: '20 min', n: 2, ing: [['Oeufs', '4'], ['Tomates', '400g'], ['Poivron', '1'], ['Feta', '80g'], ['Pain pita', '2']], steps: [{ n: 'Sauce généreuse', d: 'Tomates + poivron + épices.' }, { n: 'Oeufs + feta + pita', d: 'Cuire 5 min.' }] },
    ]
  },
  {
    id: 'poke-bowl',
    titre: 'Poké bowl thon & mangue',
    cat: 'sale',
    tags: ['express', 'muscu'],
    temps: 15,
    img: '/images/recettes/poke-classic.jpg',
    versions: [
      { l: 'Light', k: 340, p: '30g', g: '38g', li: '6g', s: '<8g', t: '15 min', n: 1, ing: [['Thon', '120g'], ['Riz sushi', '120g'], ['Mangue', '½'], ['Sauce soja', '1cs']], steps: [{ n: 'Mariner', d: 'Thon + soja 5 min.' }, { n: 'Assembler', d: 'Riz + thon + mangue.' }] },
      { l: 'Intermédiaire', k: 460, p: '34g', g: '52g', li: '12g', s: '<10g', t: '15 min', n: 1, ing: [['Thon', '150g'], ['Riz sushi', '150g'], ['Avocat', '½'], ['Mangue', '½'], ['Edamame', '60g']], steps: [{ n: 'Mariner', d: 'Thon + soja.' }, { n: 'Assembler', d: 'Tout ensemble.' }] },
      { l: 'Classique', k: 580, p: '36g', g: '58g', li: '20g', s: '<12g', t: '15 min', n: 1, ing: [['Thon', '150g'], ['Riz sushi', '160g'], ['Avocat', '1'], ['Mangue', '½'], ['Mayo sriracha', '1cs']], steps: [{ n: 'Mariner', d: 'Thon + ponzu.' }, { n: 'Assembler', d: 'Bowl généreux + mayo sriracha.' }] },
    ]
  },
  {
    id: 'overnight-oats',
    titre: 'Overnight oats',
    cat: 'sucre',
    tags: ['cardio', 'express'],
    temps: 5,
    img: '/images/recettes/overnight-oats-classic.jpg',
    versions: [
      { l: 'Light', k: 280, p: '14g', g: '42g', li: '6g', s: '<8g', t: '5 min + nuit', n: 1, ing: [['Flocons avoine', '60g'], ['Lait amande', '180ml'], ['Myrtilles', '40g']], steps: [{ n: 'Mélanger', d: 'Avoine + lait.' }, { n: 'Réfrigérer', d: 'Toute la nuit.' }] },
      { l: 'Intermédiaire', k: 380, p: '18g', g: '52g', li: '10g', s: '<10g', t: '5 min + nuit', n: 1, ing: [['Flocons avoine', '70g'], ['Lait avoine', '180ml'], ['Banane', '½'], ['Beurre amande', '1cc']], steps: [{ n: 'Mélanger', d: 'Avoine + lait + beurre amande.' }, { n: 'Réfrigérer', d: 'Toute la nuit.' }] },
      { l: 'Classique', k: 480, p: '22g', g: '62g', li: '14g', s: '<12g', t: '5 min + nuit', n: 1, ing: [['Flocons avoine', '80g'], ['Lait entier', '180ml'], ['Banane', '1'], ['Beurre cacahuète', '2cs'], ['Chocolat noir', '10g']], steps: [{ n: 'Mélanger', d: 'Avoine + lait + PB.' }, { n: 'Réfrigérer', d: 'Nuit entière + chocolat au matin.' }] },
    ]
  },
  {
    id: 'acai-bowl',
    titre: 'Açaï bowl',
    cat: 'sucre',
    tags: ['cardio', 'express'],
    temps: 8,
    img: '/images/recettes/acai-bowl-classic.jpg',
    versions: [
      { l: 'Light', k: 220, p: '8g', g: '36g', li: '6g', s: '<14g', t: '8 min', n: 1, ing: [['Açaï', '100g'], ['Lait amande', '60ml'], ['Myrtilles', '40g']], steps: [{ n: 'Mixer', d: 'Açaï + lait. Épais.' }, { n: 'Bowl', d: 'Myrtilles + granola.' }] },
      { l: 'Intermédiaire', k: 320, p: '10g', g: '50g', li: '10g', s: '<18g', t: '8 min', n: 1, ing: [['Açaï', '100g'], ['Banane', '½'], ['Lait amande', '60ml'], ['Granola', '25g']], steps: [{ n: 'Mixer', d: 'Açaï + banane + lait.' }, { n: 'Bowl', d: 'Granola + fruits.' }] },
      { l: 'Classique', k: 420, p: '12g', g: '64g', li: '16g', s: '<22g', t: '8 min', n: 1, ing: [['Açaï', '100g'], ['Banane', '1'], ['Lait coco', '80ml'], ['Granola coco', '35g'], ['Fruits frais', '80g']], steps: [{ n: 'Mixer', d: 'Açaï + banane + lait coco.' }, { n: 'Bowl généreux', d: 'Granola + fruits + coco.' }] },
    ]
  },
  {
    id: 'protein-pancakes',
    titre: 'Protein pancakes',
    cat: 'sucre',
    tags: ['muscu', 'express'],
    temps: 12,
    img: '/images/recettes/protein-pancakes-classic.jpg',
    versions: [
      { l: 'Light', k: 260, p: '24g', g: '28g', li: '6g', s: '<8g', t: '12 min', n: 1, ing: [['Banane', '1'], ['Oeufs', '2'], ['Protéines vanille', '20g']], steps: [{ n: 'Mixer', d: 'Banane + oeufs + protéines.' }, { n: 'Cuire', d: '2 min chaque côté.' }] },
      { l: 'Intermédiaire', k: 360, p: '28g', g: '38g', li: '10g', s: '<10g', t: '12 min', n: 1, ing: [['Banane', '1'], ['Oeufs', '2'], ['Protéines', '20g'], ['Myrtilles', '40g'], ['Miel', '1cc']], steps: [{ n: 'Mixer', d: 'Banane + oeufs + protéines.' }, { n: 'Cuire', d: 'Pancakes + myrtilles + miel.' }] },
      { l: 'Classique', k: 460, p: '32g', g: '48g', li: '14g', s: '<12g', t: '12 min', n: 1, ing: [['Banane', '1'], ['Oeufs', '2'], ['Protéines', '25g'], ['Beurre amande', '1cs'], ['Sirop érable', '2cs']], steps: [{ n: 'Mixer', d: 'Banane + oeufs + protéines.' }, { n: 'Cuire + garnir', d: 'Beurre amande + sirop érable.' }] },
    ]
  },
  {
    id: 'tiramisu-healthy',
    titre: 'Tiramisu healthy',
    cat: 'sucre',
    tags: ['occasion', 'batch'],
    temps: 20,
    img: '/images/recettes/tiramisu-classic.jpg',
    versions: [
      { l: 'Light', k: 180, p: '12g', g: '20g', li: '4g', s: '<14g', t: '20 min + 4h', n: 4, ing: [['Skyr', '300g'], ['Café', '150ml'], ['Biscuits cuillère', '12']], steps: [{ n: 'Crème', d: 'Skyr + agave.' }, { n: 'Monter', d: 'Couches biscuits + crème. Réfrigérer 4h.' }] },
      { l: 'Intermédiaire', k: 280, p: '14g', g: '30g', li: '10g', s: '<18g', t: '20 min + 4h', n: 4, ing: [['Mascarpone allégé', '250g'], ['Skyr', '150g'], ['Café', '150ml'], ['Biscuits', '16']], steps: [{ n: 'Crème', d: 'Mascarpone + skyr.' }, { n: 'Monter + réfrigérer', d: '4h minimum.' }] },
      { l: 'Classique', k: 380, p: '10g', g: '32g', li: '22g', s: '<26g', t: '20 min + 4h', n: 4, ing: [['Mascarpone', '500g'], ['Oeufs', '4'], ['Sucre', '80g'], ['Café', '150ml'], ['Biscuits', '20']], steps: [{ n: 'Crème classique', d: 'Jaunes + sucre + mascarpone + blancs.' }, { n: 'Monter + réfrigérer', d: 'Meilleur le lendemain.' }] },
    ]
  },
]