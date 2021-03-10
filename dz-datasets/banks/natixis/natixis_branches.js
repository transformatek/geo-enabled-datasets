var natixisBranches = [
    { "title": "CHERAGA", "address": "09 rue Aissat Idir, Alger", "tel_fax": "TEL : 021 34 17 44 - 45 - FAX : 021 34 17 49", "lat": 36.7575, "lon": 2.9554 },
    { "title": "GUE DE CONSTANTINE", "address": "9 Rue Cité Solari,Gué de Constantine, Alger", "tel_fax": "TEL : 021 85 50 33 - 83 - FAX : 021 83 54 86", "lat": 36.699383, "lon": 3.096291 },
    { "title": "ROUIBA", "address": "25 Rue Layachi, lot Raouraoua, Rouiba, Alger", "tel_fax": "TEL : 023 85 53 53 68 - 87 - FAX : 021 85 55 33", "lat": 36.737259, "lon": 3.280697 },
    { "title": "BAB EZZOUAR", "address": "Immeuble El Ksar, lot 34 - 35 Zone d'Affaires Mercure, Alger", "tel_fax": "TEL : 023 92 43 20 - FAX : 023 92 43 16", "lat": 36.7139, "lon": 3.202918 },
    { "title": "LARBI BEN M'HIDI", "address": "19 rue Larbi Ben M'hidi 16006, Alger", "tel_fax": "TEL : 023 49 40 64 - 65 ; 023 50 83 34 - FAX : 023 49 40 62", "lat": 36.777696, "lon": 3.057856 },
    { "title": "BLIDA", "address": "16 Rue Mohamed Boudiaf, Blida", "tel_fax": "TEL : 025 22 64 66 - FAX : 025 22 64 62", "lat": 36.4835048, "lon": 2.8272803 },
    { "title": "TIZI OUZOU", "address": "16 Boulevard Stiti Ali 15000, Tizi Ouzou", "tel_fax": "TEL : 026 20 04 04 -  026 20 01 18 - FAX : 026 20 07 01", "lat": 36.70848, "lon": 4.034049 },
    { "title": "BEJAIA", "address": "09 Boulevard Krim Belkacem, Béjaïa", "tel_fax": "TEL : 034 12 47 39 - 40  - FAX : 034 12 47 45", "lat": 36.748466, "lon": 5.053448 },
    { "title": "AKBOU", "address": "Carrefour de la Gare, Akbou, Béjaïa", "tel_fax": "TEL : 034 35 99 61 - 62 - FAX : 034 35 99 67", "lat": 36.458442, "lon": 4.541231 },
    { "title": "CONSTANTINE", "address": "6 rue Demak Mohamed Salah 25001, Constantine", "tel_fax": "TEL : 031 92 45 46  - 47 - FAX : 031 92 39 43", "lat": 36.3509053, "lon": 6.6081818 },
    { "title": "ANNABA", "address": "06, Bd Ben Abdelmalek RAMDAN, Annaba ( L'avant-Port), Annaba", "tel_fax": "TEL : 038 45 47 47 - FAX : 038 55 76 35", "lat": 36.903175, "lon": 7.76881 },
    { "title": "BATNA", "address": "243 Cité Lombarkia, Route de Tazoult, Batna", "tel_fax": "TEL : 033 24 95 32 - 33 - FAX : 033 24 95 37", "lat": 35.540787, "lon": 6.187976 },
    { "title": "Setif 1", "address": "05 rue Said Boukhrissa, Setif, Sétif", "tel_fax": "TEL : 036 82 86 41 - 42 - FAX : 036 82 86 45", "lat": 36.189106, "lon": 5.402039 },
    { "title": "Setif 2", "address": "Numéro 10 Cité Dallas, Coopérative Larbi Ben M'Hidi, lot Bouaroua, Setif, Sétif", "tel_fax": "TEL : 036 52 61 65 - FAX : 036 52 61 62", "lat": 36.194258, "lon": 5.432452 },
    { "title": "MOSTAGANEM", "address": "Cours de la Culture, Route d'Oran 27000, Mostaganem, Mostaganem", "tel_fax": "TEL : 045 70 40 - 41 - FAX : 045 30 70 38", "lat": 35.92352, "lon": 0.07765 },
    { "title": "MASCARA", "address": "Rue du Docteur Khaled et rue Salah Eddine El Ayoubi 29000, Mascara, Mascara", "tel_fax": "TEL : 045 81 57 07 - 52 - FAX : 045 72 28 24", "lat": 35.399156, "lon": 0.1419083 },
    { "title": "CHLEF", "address": "26 rue des Martyrs Chlef, Chlef", "tel_fax": "TEL : 027 79 00 88 - 04 - FAX : 027 79 02 08", "lat": 36.167456, "lon": 1.33544 },
    { "title": "RELIZANE", "address": "47 Boulevard Mohamed Khemisiti, Relizane", "tel_fax": "TEL : 046 91 24 24 - FAX : 046 91 37 37", "lat": 35.74432, "lon": 0.555611 },
    { "title": "SIDI BEL ABBES", "address": "Rue Boukhari Larbi (ex place Carnot), Sidi Bel Abbès", "tel_fax": "TEL : 048 54 42 94 - 07 - FAX : 048 74 31 37", "lat": 35.190134, "lon": -0.633276 },
    { "title": "TLEMCEN", "address": "Angle Boulvard Mohamed V, 02 rue des frères Bouadia, Tlemcen", "tel_fax": "TEL : 043 41 45 70 - 71 - 72 - FAX : 043 41 45 47 - 69", "lat": 34.876544, "lon": -1.319331 },
    { "title": "ORAN 3", "address": "01 Cité Djamel (USTO), Coopérative Zahrat Ennassim, Oran", "tel_fax": "TEL : 041 40 99 73 - 71 - FAX : 041 42 79 20", "lat": 35.700226, "lon": -0.601754 },
    { "title": "ORAN 4", "address": "04 Rue Mekki Khelifa El Othmania (Maraval), Oran, Oran", "tel_fax": "TEL : 041 25 06 21 - 22 - FAX : 041 25 06 30", "lat": 35.6762, "lon": -0.6502 },
    { "title": "HYDRA 3", "address": "Micro zone d'activité Hydra 20 Chemin DOUDOU Mokhtar, Hydra, Alger", "tel_fax": "TEL : 023 53 13 60 - 62", "lat": 36.744891, "lon": 3.022992 },
    { "title": "ORAN  Es Sénia", "address": "El Kerma 31000 Oran, Algérie, Oran", "tel_fax": "TEL : 041 81 11 00", "lat": 35.702839, "lon": -0.5876180862918264 }
];


branchs_df = 'num, title, address, tel_fax, lat, lon \n';

natixisBranches.forEach((branch, index) => {
    branch_keys = Object.keys(branch);
    // console.log(branch_keys);

    branch_line = index;

    branch_keys.forEach((key, index) => {

        // branch_line += '| ' + key + '  | | \n';
        // console.log(branch_line);

        branch_line += ', "' + branch[key] + '"';
    });
    // console.log(branch_line);
    branchs_df += branch_line + '\n';
});

// console.log(branchs_df);

fs = require('fs');
fs.writeFile('natixis_branches.csv', branchs_df, () => {});