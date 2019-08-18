import { Link } from "gatsby"
import React, { Component } from "react"
import Img from "gatsby-image"

import styles from "./header.module.scss"

import logo from "../../../src/images/logo-no-outer.png"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li>
        <Link to={props.to} activeClassName={styles.activeLink}>
          {props.children}
        </Link>
      </li>
    )
    return (
      <header className={styles.siteHeader}>
        <nav>
          <ul>
            <ListLink to={`/`}>
              <img src={ logo } style={{ height:18 + "px" }}/>  home
            </ListLink>
            <ListLink to={`/workshops/`}><span role="img" aria-label="hammer and spanner">🛠</span> workshops</ListLink>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
