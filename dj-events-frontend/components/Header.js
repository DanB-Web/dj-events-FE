import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import Link from 'next/link'
import Search from './Search'
import AuthContext from '@/context/AuthContext'
import styles from '@/styles/Header.module.css'

export default function Header() {

  const {user, logout} = useContext(AuthContext)

  return (
    <header className={styles.header}>

      <div>
        <Link href='/'>
          <a className={styles.logo}>DJ Events</a>
        </Link>
      </div>

      <Search/>
      
      <nav>
        <ul>
          <li>
            <Link href='/events'>
              <a>Events</a>
            </Link>
          </li>
          {user ? 
          //IF LOGGED IN
          <>
            <li>
              <Link href='/events/add'>
                <a>Add Event</a>
              </Link>
            </li>
            <li>
              <Link href='/account/dashboard'>
                <a>Dashboard</a>
              </Link>
            </li>
            <li>
              <button className='btn-secondary btn-icon' onClick={() => logout()}>
                <FaSignOutAlt/> Logout
              </button>
            </li> 
          </>:
          //IF LOGGED OUT 
          <li>
            <Link href='/account/login'>
              <a className='btn-secondary btn-icon'>
                <FaSignInAlt/> Login
              </a>
            </Link>
          </li>}    
        </ul>
      </nav>

    </header>
  )
}