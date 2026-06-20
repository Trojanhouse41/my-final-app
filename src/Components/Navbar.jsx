import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={styles.nav}>
      {/* 'end' prop ensures Home is only active on exactly "/" */}
      <NavLink to="/" end style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
        Home
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => isActive ? styles.activeLink : styles.link}>
        About
      </NavLink>
    </nav>
  )
}

const styles = {
  nav: { display: 'flex', gap: '20px', padding: '15px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' },
  link: { textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '16px' },
  activeLink: { textDecoration: 'none', color: '#007bff', fontWeight: 'bold', fontSize: '16px', borderBottom: '2px solid #007bff', paddingBottom: '2px' }
}

export default Navbar