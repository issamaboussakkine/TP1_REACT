import Bienvenue from './Bienvenue';
import Presentation from './Presentation';
import CarteProfil from './CarteProfil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
 const profil1 = { 
  nom: 'Emma Martin', 
  photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  age: 28,
  ville: 'Paris'
};

const profil2 = {
  nom: 'Thomas Bernard',
  photo: 'https://randomuser.me/api/portraits/men/46.jpg',
  age: 32,
  ville: 'Lyon'
};

  const catalogueVoitures = [
    { marque: 'Toyota', modele: 'Corolla', couleur: 'Rouge', annee: 2020 },
    { marque: 'Renault', modele: 'Clio', couleur: 'Bleue', annee: 2021 },
    { marque: 'BMW', modele: 'Serie 3', couleur: 'Noire' },
    { marque: 'Peugeot', modele: '208', couleur: 'Blanche', annee: 2022 }
  ];

  const coursesFruits = ['Pommes', 'Poires', 'Bananes', 'Cerises'];
  const coursesLegumes = ['Carottes', 'Brocolis', 'Tomates', 'Courgettes'];
  const coursesBoissons = ['Eau', 'Jus d\'orange', 'Café', 'Thé'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Bienvenue />
      <Presentation />
      
      <h2 style={{ marginTop: '30px' }}>Profils des utilisateurs</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <CarteProfil personne={profil1} tailleImage={150} couleurFond="#d9f0d9" />
        <CarteProfil personne={profil2} />
      </div>

      <h2 style={{ marginTop: '30px' }}>Catalogue automobile</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {catalogueVoitures.map((voiture, index) => (
          <Voiture 
            key={index}
            marque={voiture.marque}
            modele={voiture.modele}
            couleur={voiture.couleur}
            annee={voiture.annee}
          />
        ))}
      </div>

      <h2 style={{ marginTop: '30px' }}>Listes de courses</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <ListeCourses items={coursesFruits} titre="Fruits" />
        <ListeCourses items={coursesLegumes} titre="Légumes" />
        <ListeCourses items={coursesBoissons} titre="Boissons" />
      </div>
    </div>
  );
}

export default App;