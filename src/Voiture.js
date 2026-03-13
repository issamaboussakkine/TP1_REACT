import PropTypes from 'prop-types';

function Voiture({ marque, modele, couleur, annee }) {
  const getBackgroundColor = () => {
    if (couleur === 'Rouge') return '#ffebee';
    if (couleur === 'Bleue') return '#e3f2fd';
    if (couleur === 'Noire') return '#f5f5f5';
    if (couleur === 'Blanche') return '#ffffff';
    if (couleur === 'Grise') return '#eeeeee';
    return '#f9f9f9';
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '12px 18px',
      margin: '8px',
      backgroundColor: getBackgroundColor(),
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      minWidth: '200px'
    }}>
      <p style={{ margin: 0, fontSize: '1.1em' }}>
        <span style={{ fontWeight: 'bold' }}>{marque} {modele}</span> - {couleur}
        {annee && <span style={{ color: '#666', marginLeft: '8px' }}>({annee})</span>}
      </p>
    </div>
  );
}

Voiture.propTypes = {
  marque: PropTypes.string.isRequired,
  modele: PropTypes.string.isRequired,
  couleur: PropTypes.string.isRequired,
  annee: PropTypes.number
};

export default Voiture;