import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%',margin:'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2043-NPUB30481_00-AVAMIXSSROCKER00/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Backend Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB |Express</p>
                            <div className="social-links">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;