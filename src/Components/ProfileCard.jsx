import { Link } from 'react-router-dom'

function ProfileCard({ profile }) {
  return (
    <div style={styles.card}>
      <h2>{profile.name}</h2>
      <p><strong>Role:</strong> {profile.role}</p>
      <Link to={`/profile/${profile.id}`} style={styles.button}>
        View Profile
      </Link>
    </div>
  )
}

const styles = {
  card: { border: '1px solid #ddd', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  button: { display: 'inline-block', marginTop: '10px', padding: '8px 15px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }
}

export default ProfileCard