import { Link } from "gatsby"
import React, { Component } from "react"
import instagramIcon from "../../images/icons/iconmonstr-instagram-11.svg"
import twitterIcon from "../../images/icons/iconmonstr-twitter-1.svg"
import facebookIcon from "../../images/icons/iconmonstr-facebook-3.svg"
import footerLogo from "../../images/web-logo-wide.png"

import styles from "./footer.module.scss"

class Footer extends Component {
  render() {
    return (
      <footer className={styles.siteFooter}>
        <nav className={styles.footerNav}>
          {/* LOGO */}
          <Link to="/">
            <img
              src={footerLogo}
              width="180px"
              alt="fleming-logo-wide"
              className={styles.footerLogo}
            />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About the Website</Link>
            </li>
          </ul>
        </nav>
        <nav className={styles.footerNav2}>
          <a
            href="https://www.instagram.com/ucl.fleming.society"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              className={styles.footerIcon}
              width="24px"
              alt="instagram-social-link"
            />
          </a>
          <a
            href="https://www.facebook.com/flemingsociety"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              className={styles.footerIcon}
              width="24px"
              alt="facebook-social-link"
            />
          </a>
          <a
            href="https://twitter.com/flemingsocucl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              className={styles.footerIcon}
              width="24px"
              alt="twitter-social-link"
            />
          </a>
        </nav>
      </footer>
    )
  }
}

export default Footer
