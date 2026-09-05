export const works=[
{subject:'bol',size:'60×80cm',year:'2024',note:"Peinte un matin de février, la lumière s'est arrêtée au bord du bol.",accent:'#9a7e4e'},
{subject:'chaise',size:'70×90cm',year:'2024',note:"Peinte un après-midi de mars, la chaise était restée près du mur.",accent:'#7b8574'},
{subject:'fenêtre',size:'80×100cm',year:'2025',note:"Peinte un matin de novembre, la lumière n'a duré que vingt minutes.",accent:'#738391'},
{subject:'vase',size:'60×80cm',year:'2025',note:"Peinte un matin d'avril, l'ombre du vase traversait la table.",accent:'#a56e58'},
{subject:'rideau',size:'80×100cm',year:'2025',note:"Peinte un après-midi de mai, le rideau retenait encore la lumière.",accent:'#8c8291'},
{subject:'livre',size:'50×65cm',year:'2025',note:"Peinte un matin de juin, le livre était ouvert à la même page.",accent:'#8a646a'},
{subject:'porte',size:'90×110cm',year:'2025',note:"Peinte un soir de septembre, la porte laissait passer un dernier jour.",accent:'#858364'},
{subject:'poire',size:'40×50cm',year:'2025',note:"Peinte un matin d'octobre, la poire reposait seule sur le linge.",accent:'#a48f52'},
{subject:'drap',size:'80×100cm',year:'2026',note:"Peinte un matin de janvier, les plis du drap gardaient leur ombre.",accent:'#ad8e8b'},
{subject:'verre',size:'60×80cm',year:'2026',note:"Peinte un matin de février, la lumière traversait le verre sans bruit.",accent:'#71918d'}
];
export const artUrl=(i:number)=>'/paintings/'+String(i+1).padStart(2,'0')+'.webp';
