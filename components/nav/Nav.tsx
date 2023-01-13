import React from 'react'
import Link from 'next/link'
import styles from './Nav.module.scss'
import Image from 'next/image'
type Props = {}

function Nav({}: Props) {
  return (
    <div className={styles.navContainer}>
    <div className={styles.nav}>
        <div className={styles.nav__left}>
                <Image 
                src="/assets/logo.png"
                alt="Real Trust logo brand color blue real estate logo"
                width={109}
                height={42}
                className={styles.logo}
                />
        </div>
        <div className={styles.nav__right}>
                <ul className={styles.navList}>
                    <Link href="" className={styles.navList__navLink}>
                    <li className={styles.navList__item}>Home</li>
                    </Link>
                    <Link href="" className={styles.navList__navLink}>
                    <li className={styles.navList__item}>About Us</li>
                    </Link>
                    <Link href="" className={styles.navList__navLink}>
                    <li className={styles.navList__item}>Listing</li>
                    </Link>
                    <Link href="" className={styles.navList__navLinkContact}>
                    <li className={styles.navList__item}>Contact Us</li>
                    </Link>
                    <Link href="" className={styles.navList__navLinkLogin}>
                    <li className={styles.navList__item}>Log in</li>
                    </Link>
                    <Link href="" className={styles.navList__navLinkreg}>
                    <li className={styles.navList__item}>Register</li>
                    </Link>
                </ul>

        </div>
                <div className={styles.hamburger}>
                  <span></span><span></span><span></span>
                </div>
    </div>
    </div>
  )
}

export default Nav