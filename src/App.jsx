import React, { useState, useEffect } from 'react';

function ProfileCard({ card, index, onDelete }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardName}>{card.name}</h3>
      <p><strong>Role:</strong> {card.role}</p>
      <p><strong>Location:</strong> {card.location}</p>
      <button style={styles.deleteButton} onClick={() => onDelete(index)}>
        Delete
      </button>
    </div>
  );
}

export default function App() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    document.title = `${cards.length} profiles`;
  }, [cards.length]);

  function handleSubmit(e) {
    e.preventDefault();
    const newCard = { id: Date.now(), name, role, location };
    setCards([...cards, newCard]);
    setName('');
    setRole('');
    setLocation('');
  }

  function deleteCard(index) {
    setCards(cards.filter((_, i) => i !== index));
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Interactive Profile Card App</h1>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required style={styles.input} />
          <small style={styles.charCount}>{name.length} characters</small>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="role">Role:</label>
          <input id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)} required style={styles.input} />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="location">Location:</label>
          <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} required style={styles.input} />
        </div>

        <button type="submit" style={styles.submitButton}>Add Profile</button>
      </form>

      <div style={styles.cardsContainer}>
        {cards.length === 0 ? (
          <p style={styles.emptyMessage}>No profiles added yet. Add one above!</p>
        ) : (
          cards.map((card, index) => (
            <ProfileCard key={card.id} card={card} index={index} onDelete={deleteCard} />
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: '2rem auto', padding: '2rem', fontFamily: 'system-ui, sans-serif', backgroundColor: '#f8f9fa', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
  header: { textAlign: 'center', color: '#2c3e50', marginBottom: '1.5rem' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', padding: '1.5rem', backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e0e0e0' },
  formGroup: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
  input: { padding: '0.6rem', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '6px', outline: 'none' },
  charCount: { fontSize: '0.8rem', color: '#6c757d', textAlign: 'right' },
  submitButton: { padding: '0.75rem', fontSize: '1rem', fontWeight: 'bold', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '0.5rem' },
  cardsContainer: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  card: { padding: '1.25rem', backgroundColor: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '0.5rem' },
  cardName: { margin: '0', color: '#2c3e50' },
  deleteButton: { alignSelf: 'flex-start', padding: '0.5rem 1rem', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', marginTop: '0.75rem', fontSize: '0.9rem' },
  emptyMessage: { textAlign: 'center', color: '#6c757d', fontStyle: 'italic' }
};