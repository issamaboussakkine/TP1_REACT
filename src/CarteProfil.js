import PropTypes from 'prop-types';

function CarteProfil({ personne, tailleImage, couleurFond }) {
  return (
    <div style={{ 
      backgroundColor: couleurFond || '#f9f9f9',
      padding: '20px',
      borderRadius: '10px',
      margin: '10px',
      maxWidth: '300px',
      textAlign: 'center',
      border: '1px solid #ddd'
    }}>
      <img 
        src={personne.photo} 
        alt={personne.nom}
        style={{ 
          width: tailleImage, 
          height: tailleImage,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '3px solid white',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      />
      <h3 style={{ marginBottom: '5px', color: '#333' }}>{personne.nom}</h3>
      {personne.age && <p style={{ margin: '5px 0', color: '#666' }}>Âge : {personne.age} ans</p>}
      {personne.ville && <p style={{ margin: '5px 0', color: '#666' }}>Ville : {personne.ville}</p>}
    </div>
  );
}

CarteProfil.propTypes = {
  personne: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    age: PropTypes.number,
    ville: PropTypes.string
  }).isRequired,
  tailleImage: PropTypes.number,
  couleurFond: PropTypes.string
};

CarteProfil.defaultProps = {
  tailleImage: 120,
  couleurFond: '#e6f7ff'
};

export default CarteProfil;