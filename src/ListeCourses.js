import PropTypes from 'prop-types';

function ListeCourses({ items, titre }) {
  return (
    <div style={{
      border: '2px solid #61dafb',
      borderRadius: '10px',
      padding: '15px 25px',
      margin: '15px',
      backgroundColor: '#f8f9fa',
      minWidth: '200px'
    }}>
      {titre && <h3 style={{ color: '#2c3e50', borderBottom: '2px solid #61dafb', paddingBottom: '8px' }}>{titre}</h3>}
      <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '1.1em' }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListeCourses.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  titre: PropTypes.string
};

export default ListeCourses;