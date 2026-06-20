import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={styles.container}>
      <h1>404 - Page Not Found</h1>
      <p>Oopsie! The page you are looking for unfortunately does not exist .</p>
      <Link to="/" style={styles.button}>
        Go back to Home
      </Link>
    </div>
  )
}

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  button: { display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }
}

export default NotFound