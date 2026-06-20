import ProfileCard from '../components/ProfileCard'
import { profiles } from '../data/profiles'

function Home() {
  return (
    <div>
      <h1>Team Directory</h1>
      <p>Welcome! Click on a profile to learn and know more about our team members.</p>
      <div style={styles.grid}>
        {profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }
}

export default Home