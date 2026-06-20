import { useParams, Link } from 'react-router-dom'
import { profiles } from '../data/profiles'

function Profile() {
  // 1. Read the URL parameter
  const { id } = useParams()
  
  // 2. Find the matching profile (Note: URL params are strings, so we parse to int)
  const profile = profiles.find(p => p.id === parseInt(id))

  // Fallback if the ID doesn't match anyone
  if (!profile) {
    return (
      <div>
        <h1>Profile Not Found</h1>
        <p>Sorry, we couldn't find a team member with that ID.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Directory</Link>
      <h1>{profile.name}</h1>
      <div style={styles.details}>
        <p><strong>Role:</strong> {profile.role}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Location:</strong> {profile.location}</p>
        <p><strong>Bio:</strong> {profile.bio}</p>
      </div>
    </div>
  )
}

const styles = {
  container: { maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' },
  backLink: { display: 'inline-block', marginBottom: '20px', color: '#007bff', textDecoration: 'none' },
  details: { lineHeight: '1.8', fontSize: '16px' }
}

export default Profile