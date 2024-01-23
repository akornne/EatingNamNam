/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    // Insert fake data into the 'recipe' table

    await database.query(
      "INSERT INTO recipe (title, cooking_time, preparation_time, difficulty, image, type) VALUES ('Poulet au Curry', 20, 15, 1, 'https://img.freepik.com/photos-gratuite/curry-poulet-oignons-cuisine-indienne-cuisine-asiatique_2829-4415.jpg?w=1060&t=st=1704983141~exp=1704983741~hmac=f398628e97636fb81de03109ef5c1769a81b147a235c4b902d56a66fa77f36ae', 'light'), ('Salade de Quinoa', 35, 25, 1, 'https://img.freepik.com/photos-gratuite/salade-taboule_2829-10886.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Soupe aux légumes', 50, 25, 3, 'https://img.freepik.com/photos-gratuite/soupe-tomate-au-vert-table_140725-2447.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Lasagnes au Bœuf', 65, 40, 2, 'https://img.freepik.com/photos-gratuite/lasagne-traditionnelle-riche-sauce-bolognaise_60438-3536.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Saumon Grillé', 55, 10, 1, 'https://img.freepik.com/photos-gratuite/poisson-grille-bouchent-decore-legumes_1303-12328.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healty'), ('Risotto aux Champignons', 70, 35, 3, 'https://img.freepik.com/photos-gratuite/risotto-vegetarien-sain-garniture-persil-frais-genere-par-ia_24640-80365.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Burger', 25, 12, 2, 'https://img.freepik.com/photos-gratuite/burger-boeuf-grille-fromage-tomate-oignon-pain-rustique-genere-par-intelligence-artificielle_25030-63164.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=sph', 'fat'), ('Pâtes Carbonara', 50, 18, 2, 'https://img.freepik.com/photos-gratuite/spaghetti-sauce-bolognaise-table-boisxa_123827-22962.jpg?size=626&ext=jpg&ga=GA1.1.2106550799.1701789518&semt=ais', 'fat'), ('Salade César', 30, 25, 2, 'https://img.freepik.com/photos-gratuite/salade-plate-au-poulet-graines-sesame_23-2148700369.jpg?size=626&ext=jpg&ga=GA1.1.2106550799.1701789518&semt=ais', 'light'), ('Tacos au Poulet', 35, 20, 1, 'https://img.freepik.com/photos-gratuite/tacos-mexicains-au-boeuf-sauce-tomate-salsa_2829-14270.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Pizza Margarita', 60, 25, 3, 'https://img.freepik.com/photos-gratuite/pizza_144627-39500.jpg?size=626&ext=jpg&ga=GA1.1.2106550799.1701789518&semt=ais', 'fat'), ('Crevettes à l Ail', 25, 13, 2, 'https://img.freepik.com/photos-gratuite/pions-frits-herbes-vertes-interieur-casserole-rouge_114579-3313.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Tajine de Poulet', 35, 25, 3, 'https://img.freepik.com/photos-gratuite/vue-laterale-poulet-cuit-oignons-verts-grenade-dans-plat-argile_141793-5116.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Salmon Poke Bowl', 25, 10, 2, 'https://img.freepik.com/photos-gratuite/photographie-plat-poke-bowl-au-saumon_53876-108183.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Wraps au Thon', 5, 5, 1, 'https://img.freepik.com/photos-gratuite/wrap-au-poulet_144627-33297.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Ratatouille Provençale', 42, 30, 3, 'https://img.freepik.com/photos-gratuite/ratatouille-legumes-dans-poele-table-bois_2829-19906.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=sph', 'fat'), ('Poulet Teriyaki', 55, 18, 3, 'https://img.freepik.com/photos-gratuite/poulet-prepare-sauce-servi-tranches-citron_141793-1148.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Salade de Lentilles', 25, 35, 1, 'https://img.freepik.com/photos-gratuite/bol-bouddha-vegetarien-quinoa-tofu-legumes-frais-concept-aliments-sains-salade-vegetalienne_2829-6931.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Galette de Pommes de Terre', 32, 14, 1, 'https://img.freepik.com/photos-gratuite/vue-plat-du-delicieux-plat-tortillas-espagnoles_23-2150165668.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Poisson Grillé', 52, 20, 2, 'https://img.freepik.com/photos-gratuite/poisson-grille-salade-legumes-orange_114579-3656.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Riz Cantonais', 36, 13, 2, 'https://img.freepik.com/photos-gratuite/riz-cuit-vapeur-fruits-mer-calamary-cors-pois-carotte-vue-laterale_141793-3564.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Quiche Lorraine', 40, 18, 2, 'https://img.freepik.com/photos-gratuite/photographie-culinaire-concept-restaurant-tarte-aux-legumes-maison_176420-15970.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Spaghetti Bolognese', 45, 25, 2, 'https://img.freepik.com/photos-gratuite/pates-italiennes-authentiques_24972-2334.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Couscous aux Légumes', 73, 40, 3, 'https://img.freepik.com/photos-premium/nourriture-bresilienne-typique-haricots-tropeiro_434193-4340.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Poulet au Citron', 45, 22, 3, 'https://img.freepik.com/photos-gratuite/vue-dessus-du-diner-noel_23-2147716303.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Salade de Fruits de Mer', 15, 5, 2, 'https://img.freepik.com/photos-gratuite/salade-plaque_1232-1296.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Steak de Thon', 55, 42, 3, 'https://img.freepik.com/photos-gratuite/graines-sesame-garnies-thon-cuit-salade-verte_1147-527.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Fajitas au Bœuf', 30, 15, 1, 'https://img.freepik.com/photos-gratuite/vue-laterale-croustilles-nachos-tortilla-viande-hachee-grillee-tomate-oignon-printemps-fromage-tomate-piment-jalapeno-creme-sure-dessus_141793-5032.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Chili Con Carne', 50, 21, 3, 'https://img.freepik.com/photos-gratuite/repas-savoureux-arrangement-sambal_23-2149076154.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Sushi', 65, 35, 3, 'https://img.freepik.com/photos-gratuite/vue-laterale-sushis-sauce-soja-baguettes-dans-planche-service-bois_176474-3234.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=sph', 'light'), ('Pâtes au pesto', 15, 9, 1, 'https://img.freepik.com/photos-gratuite/pates-penne-sauce-pesto-courgettes-petits-pois-basilic-nourriture-italienne_2829-5842.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Gratin de courgette', 55, 25, 2, 'https://img.freepik.com/photos-gratuite/lasagne-aux-epinards_74190-523.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Tomate farcie', 70, 40, 3, 'https://img.freepik.com/photos-gratuite/vue-dessus-poivrons-cuits-surface-grise-nourriture-repas-legumes-dolma-boeuf_140725-74493.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'),('Tarte aux Légumes', 35, 15, 1, 'https://img.freepik.com/photos-gratuite/photo-gros-plan-quiche-lorraine-classique-aux-tomates_176420-15965.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Crevettes à la Créole', 48, 22, 2, 'https://img.freepik.com/photos-gratuite/delicieux-plat-crevettes-high-angle_23-2148771282.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Hachis Parmentier', 62, 30, 3, 'https://img.freepik.com/photos-gratuite/delicieux-plat-empadao-traditionnel-portugais_23-2149862991.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'),  ('Falafel', 25, 8, 2, 'https://img.freepik.com/photos-gratuite/falafel-houmous-pita-plats-du-moyen-orient-arabes-nourriture-halal_2829-14339.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=sph', 'fat'), ('Nouilles', 24, 13, 2, 'https://img.freepik.com/photos-gratuite/vue-dessus-du-concept-delicieuses-nouilles_23-2148773774.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=sph', 'healthy'), ('Rôti de poulet', 65, 32, 3, 'https://img.freepik.com/photos-gratuite/table-noel-servie-dinde-decoree-guirlandes-lumineuses-bougies_2829-18829.jpg?size=626&ext=jpg&ga=GA1.1.2106550799.1701789518&semt=sph', 'light'),  ('Gratin de Pommes de Terre', 38, 15, 1, 'https://img.freepik.com/photos-gratuite/casserole-vegetarienne-legumes-aux-courgettes-champignons-tomates-cerises_2829-11068.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Penne Arrabiata', 58, 28, 2, 'https://img.freepik.com/photos-gratuite/pates-sauce-tomate-servies-dans-bol_1220-7550.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Curry de Légumes', 73, 40, 3, 'https://img.freepik.com/photos-gratuite/chili-poulet-saute-poivrons-tomates-carottes_1150-27209.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Omelette aux Champignons', 12, 8, 1, 'https://img.freepik.com/photos-gratuite/frittata-aux-champignons-courgettes-fromage_2829-8507.jpg?size=626&ext=jpg&ga=GA1.1.2106550799.1701789518&semt=ais', 'healthy'), ('Tagliatelles au Saumon', 26, 14, 2, 'https://img.freepik.com/photos-gratuite/penne-carbonara-au-saumon_74190-2783.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy'), ('Tagliatelles au champignons', 23, 14, 1, 'https://img.freepik.com/photos-gratuite/vue-rapprochee-fettuccine-pates_23-2148305664.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Camembert rôti', 30, 5, 1, 'https://img.freepik.com/photos-gratuite/composition-delicieux-repas-cuisine-locale_23-2148833813.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Magret de canard', 52, 22, 3, 'https://img.freepik.com/photos-gratuite/delicieuses-cailles-frites-aux-herbes-tomates-cerises_114579-65625.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Risotto aux Asperges', 67, 38, 3, 'https://img.freepik.com/photos-gratuite/salade-legumes-mayyonaise-salee-savoureuse-interieur-plaque-blanche-fourchette-pain-pendant-journee_140725-14988.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'light'), ('Pizza Végétalienne', 40, 18, 3, 'https://img.freepik.com/photos-gratuite/composition-savoureuses-pizzas-traditionnelles_23-2148921364.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'fat'), ('Poulet aux Herbes', 55, 30, 2, 'https://img.freepik.com/photos-gratuite/poulet-au-four-garni-asperges-herbes_2829-11074.jpg?size=626&ext=jpg&ga=GA1.2.2106550799.1701789518&semt=ais', 'healthy')"
    );

    await database.query(
      "INSERT INTO unit (name, mesure_unit) VALUES ('solid', 'g kg cac cas'),('liquid','cl dc l cac cas')"
    );

    // Insert fake data into the 'ingredient' table
    await database.query(
      "INSERT INTO ingredient (name, calories, fat, sugar, protein, unit_id) VALUES ('Tomate', 18, 1, 4, 1, 1),('Oignon', 40, 1, 9, 1, 1),('Poivron rouge', 31, 1, 5, 1, 1),('Poulet cuit', 165, 3, 0, 31, 1), ('Pâtes', 220, 1, 43, 8, 1), ('Huile d/olive', 120, 13, 0, 0, 2),('Sel', 0, 0, 0, 0, 1), ('Poivre', 0, 0, 0, 0, 1), ('Ail', 4, 0, 1, 0, 1), ('Cumin', 8, 0, 0, 0, 1), ('Laitue', 5, 0, 1, 0, 1), ('Poisson', 206, 11, 0, 22, 1), ('Riz', 130, 0, 28, 2, 1), ('Haricots noirs', 114, 0, 20, 7, 1), ('Œuf', 68, 4, 0, 5, 1), ('Fromage râpé', 110, 9, 1, 7, 1), ('Avocat', 160, 14, 2, 2, 1), ('Crevettes', 99, 0, 0, 24, 1), ('Brocoli', 55, 0, 11, 4, 1), ('Carotte', 41, 0, 10, 1, 1),('Yaourt nature', 59, 3, 4, 3, 1), ('Lentilles ', 230, 0, 39, 18, 1), ('Champignons', 22, 0, 1, 3, 1), ('Saumon', 206, 13, 0, 22, 1), ('Chou-fleur', 29, 0, 5, 2, 1), ('Citron', 29, 0, 9, 1, 1), ('Cerises', 50, 0, 12, 1, 1), ('Miel', 304, 0, 82, 0, 1),('Pomme', 52, 0, 14, 0, 1), ('Pomme de terre', 93, 0, 21, 2, 1), ('Poulet', 165, 3, 0, 31, 1), ('Pois chiches', 164, 2, 27, 8, 1), ('Thon en conserve', 115, 0, 0, 26, 1),('Quinoa', 120, 1, 21, 4, 1), ('Ananas', 50, 0, 13, 0, 1), ('Fraise', 32, 0, 7, 0, 1), ('Beurre', 717, 81, 0, 1, 1), ('Raisins secs', 299, 0, 79, 2, 1), ('Noix', 654, 65, 6, 15, 1),('Crème fraîche', 340, 35, 2, 2, 2), ('Sirop d/érable', 260, 0, 67, 0, 2), ('Cacao en poudre', 12, 0, 0, 1, 1), ('Chocolat noir', 546, 31, 61, 7, 1), ('Moutarde', 66, 3, 6, 3, 2), ('Vinaigre balsamique', 88, 0, 17, 0, 2), ('Crabe', 84, 0, 0, 18, 1),('Gingembre', 80, 0, 17, 1, 1), ('Patate douce', 90, 0, 21, 2, 1), ('Asperges', 20, 0, 3, 2, 1), ('Courgette', 17, 0, 3, 1, 1), ('Sauce soja', 61, 0, 10, 6, 2), ('Câpres', 3, 0, 0, 0, 1)"
    );

    await database.query(
      "INSERT INTO ingredient_recipe (quantity, recipe_id, Ingredient_id) VALUES (1, 1, 1), (2, 1, 2), (12, 2, 2), (13, 3, 3), (1, 4, 4), (1, 5, 5), (14, 6, 6), (1, 7, 7), (1, 8, 8), (28, 9, 9), (1, 10, 10), (4, 11, 11), (1, 12, 12), (8, 13, 13), (9, 14, 14), (1, 15, 15), (2, 16, 16), (1, 17, 17), (1, 18, 18), (1, 19, 19), (3, 20, 20), (1, 21, 21), (20, 22, 22), (61, 23, 23), (1, 24, 24), (34, 25, 25), (1, 26, 26), (87, 27, 27), (1, 28, 28), (71, 29, 29), (1, 30, 30), (1, 31, 31), (1, 32, 32), (1, 33, 33), (1, 34, 34), (1, 35, 35), (1, 36, 36), (1, 37, 37), (8, 38, 38), (1, 39, 39), (1, 40, 40),(1, 41, 41), (1, 42, 42), (1, 43, 43), (1, 44, 44), (3, 45, 45), (1, 46, 46), (1, 47, 47), (1, 48, 48), (1, 49, 49), (1, 50, 50)"
    );

    await database.query(
      "INSERT INTO step (text, recipe_id) VALUES ('Couper le poulet en morceaux. Mélanger le curry avec le poulet, faire cuire le poulet pendant 12min. Servez-vous', 1), ('Faire cuire le quinoa, Mettez les dans un bol. Coupez les légumes puis ajoutez les au bol. Mélangez, et mettez des épices. Servez-vous', 2), ('Couper les légumes en petit morceau, ajouter une cueillère à soupe d/huile d/olive et faire revenir. Ajouter un peu de farine puis faire mijoter dans 1L d/eau, attendre 10min puis mixer le tous. Servez-vous.', 3), ('Couper les oignons en petit morceau, ajouter la viande hachée puis faire revenir pendant 10min. Ajouter des carottes, puis la purée de tomate. Faire la béchamal. Prendre un plat et alterner entre béchamel, sauce et les lasagnes jusqu/à épuisement des ingrédients. Mettre au four pendant 30min . Servez-vous', 4), ('Griller le saumon après avoir préparé une marinade à base de jus de citron, d/huile d/olive et d/herbes. Laisser mariner le saumon pendant 30 minutes.', 5),('Réaliser une sauce aux champignons. Cuire les pâtes et mélanger avec la sauce. Servir avec du parmesan râpé.', 6),('Préparer les ingrédients pour le burger. Griller le bœuf et assembler le burger avec les garnitures de votre choix.', 7),('Cuire les pâtes. Préparer la sauce carbonara avec de la crème, du bacon et des œufs. Mélanger avec les pâtes cuites.', 8),('Préparer la vinaigrette pour la salade césar. Couper le poulet en lanières et les faire griller. Mélanger le poulet grillé avec la salade et la vinaigrette.', 9), ('Préparer la garniture pour les tacos au poulet. Faire cuire le poulet avec les épices. Assembler les tacos avec la garniture et servir.', 10), ('Préparer la pâte à pizza. Étaler la pâte, ajouter la sauce tomate et les garnitures de votre choix. Cuire au four jusqu/à ce que la croûte soit dorée.', 11),('Faire mariner les crevettes avec de l/ail et des épices. Cuire les crevettes à la poêle jusqu/à ce qu/elles soient roses. Servir avec du riz.', 12),('Préparer le tajine en coupant le poulet et en le faisant cuire avec des épices et des légumes. Servir avec de la semoule.', 13),('Préparer le saumon pour le poke bowl. Assembler le poke bowl avec du riz, des légumes et du saumon mariné.', 14),('Préparer les wraps au thon en mélangeant le thon avec des légumes et de la mayonnaise. Envelopper le mélange dans des tortillas.', 15),('Réaliser une ratatouille provençale en coupant les légumes et en les faisant mijoter dans une casserole. Servir chaud.', 16),('Préparer le poulet teriyaki en faisant mariner le poulet dans la sauce teriyaki et en le faisant griller. Servir avec du riz.', 17),('Préparer la salade de lentilles en faisant cuire les lentilles et en les mélangeant avec des légumes. Assaisonner avec une vinaigrette légère.', 18),('Faire des galettes de pommes de terre en râpant les pommes de terre, en les mélangeant avec des œufs et en les faisant frire jusqu/à ce qu/elles soient croustillantes.', 19),('Faire griller le poisson en l/assaisonnant avec des herbes et des épices. Servir avec une salade de légumes frais.', 20), ('Préparer le riz cantonais en faisant cuire le riz et en le sautant avec des légumes, des œufs et des crevettes. Assaisonner avec de la sauce soja.', 21),('Préparer la quiche lorraine en préparant la pâte et en la garnissant de lardons, de crème et de fromage. Cuire au four jusqu/à ce que la quiche soit dorée.', 22),('Préparer les spaghetti bolognese en faisant cuire la viande hachée avec une sauce tomate maison. Servir sur des spaghetti cuits al dente.', 23),('Préparer le couscous aux légumes en faisant cuire le couscous et en le mélangeant avec des légumes cuits à la vapeur. Servir chaud.', 24),('Préparer le poulet au citron en faisant mariner le poulet dans une sauce citronnée. Cuire au four jusqu/à ce que le poulet soit bien cuit.', 25),('Préparer la salade de fruits de mer en mélangeant des fruits de mer cuits avec une vinaigrette légère. Servir sur un lit de laitue.', 26),('Faire griller le steak de thon en le marinant avec des herbes et des épices. Servir avec une salade verte fraîche.', 27),('Préparer les fajitas au bœuf en faisant griller la viande hachée avec des poivrons et des oignons. Servir dans des tortillas avec des garnitures.', 28),('Préparer le chili con carne en faisant cuire la viande avec des haricots et des épices. Servir avec du riz ou des tortillas.', 29),('Préparer les sushis en préparant du riz vinaigré, du poisson cru et des légumes. Rouler les sushis dans des feuilles d/algue.', 30), ('Faire cuire les pâtes au pesto en faisant cuire les pâtes et en les mélangeant avec une sauce pesto maison. Servir avec des légumes.', 31),('Préparer le gratin de courgette en coupant les courgettes et en les gratinant avec du fromage. Cuire au four jusqu/à ce que le gratin soit doré.', 32),('Préparer les tomates farcies en évidant les tomates et en les farcissant d/un mélange de viande hachée et de riz. Cuire au four jusqu/à ce qu/elles soient tendres.', 33),('Préparer la tarte aux légumes en préparant la pâte et en la garnissant de légumes colorés. Cuire au four jusqu/à ce que la tarte soit dorée.', 34),('Faire cuire les crevettes à la créole en les faisant sauter avec des épices créoles et des légumes. Servir sur du riz cuit.', 35),('Préparer le hachis parmentier en faisant cuire la viande hachée avec des épices et en la superposant avec de la purée de pommes de terre. Cuire au four jusqu/à ce que le dessus soit doré.', 36),('Préparer les falafels en mélangeant des pois chiches écrasés avec des épices et des herbes. Former des boules et les faire frire jusqu/à ce qu/elles soient croustillantes.', 37),('Faire cuire les nouilles en les faisant bouillir et en les mélangeant avec une sauce aux légumes. Garnir de légumes frais.', 38),('Rôtir le poulet en l/assaisonnant avec des herbes et des épices. Servir avec des légumes rôtis et une sauce légère.', 39),('Préparer le gratin de pommes de terre en faisant cuire les pommes de terre et en les gratinant avec du fromage. Cuire au four jusqu/à ce que le gratin soit doré.', 40),('Faire cuire les penne arrabiata en faisant cuire les pâtes et en les mélangeant avec une sauce piquante à la tomate. Servir avec du parmesan.', 41),('Préparer le curry de légumes en faisant cuire les légumes dans une sauce au curry épicée. Servir sur du riz cuit à la vapeur.', 42),('Préparer l/omelette aux champignons en battant les œufs avec des champignons coupés. Cuire jusqu/à ce que l/omelette soit bien prise.', 43),('Faire cuire les tagliatelles au saumon en faisant cuire les pâtes et en les mélangeant avec une sauce crémeuse au saumon. Servir avec des câpres.', 44),('Préparer les tagliatelles aux champignons en faisant cuire les pâtes et en les mélangeant avec une sauce crémeuse aux champignons. Garnir de persil frais.', 45),('Rôtir le camembert en l/assaisonnant avec des herbes et en le faisant cuire au four jusqu/à ce qu/il soit fondant. Servir avec du pain frais.', 46),('Rôtir le magret de canard en le faisant mariner avec des épices. Cuire au four jusqu/à ce que le magret soit bien cuit. Servir avec une sauce aux fruits rouges.', 47),('Préparer le risotto aux asperges en faisant cuire le riz dans un bouillon crémeux avec des asperges. Servir chaud.', 48),('Faire cuire la pizza végétalienne en étalant une pâte à pizza végétalienne et en la garnissant de légumes colorés. Cuire au four jusqu/à ce que la croûte soit dorée.', 49),('Préparer le poulet aux herbes en faisant mariner le poulet avec des herbes fraîches. Cuire au four jusqu/à ce que le poulet soit bien doré.', 50)"
    );

    // Insert fake data into the 'comment' table
    for (let i = 0; i < 80; i += 1) {
      queries.push(
        database.query("INSERT INTO comment (content) VALUES (?)", [
          faker.lorem.words(50),
        ])
      );
    }

    await database.query("INSERT INTO role (type)VALUES ('member'), ('admin')");

    await database.query(
      "INSERT INTO user (firstname, lastname, birthdate, pseudo, mail, password, week_time_kitchen, weight, role_id ) VALUES ('Toto', 'TheBest', '2000-10-10', 'Toto le magnifique','toto@toto.fr', '$argon2id$v=19$m=19456,t=2,p=1$hRqD1webqd/IpIymyLxq5A$rzJ/Wean/U4x8G7AlFoQl6q1EqNCLOEhnOGzT//pfxM','7', '45', '1'), ('Benoit', 'Redfish', '1980-05-10', 'Splagadou','benoit@wcs.fr', '$argon2id$v=19$m=19456,t=2,p=1$hRqD1webqd/IpIymyLxq5A$rzJ/Wean/U4x8G7AlFoQl6q1EqNCLOEhnOGzT//pfxM','9', '75', '2')"
    );

    for (let i = 0; i < 80; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO recipe_comment (comment_id, user_id, recipe_id) VALUES (?,?,?)",
          [
            faker.number.int({ min: 1, max: 80 }),
            1,
            faker.number.int({ min: 1, max: 30 }),
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
