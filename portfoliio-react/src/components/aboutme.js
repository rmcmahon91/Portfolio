import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";

class About extends Component {
    render() {
        return (
            <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Ryan McMahon</h2>
                <img
                  src="https://cdn4.vectorstock.com/i/thumb-large/26/38/professional-programmer-charatcter-smiling-man-vector-21172638.jpg"
                  alt="avatar"
                  style={{ height: "250px" }}
                />
                <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
                Hello! Let me tell you a little bit about myself
                </p>
              </Cell>
              <Cell col={6}>
                <h2>About Me</h2>
                <hr />
                <div className="about-me-grid">
                <p>Hi! My name is Ryan. I graduated from Northwestern Coding Bootcamp and I'm eager to chase my passion in the tech industry. I grew up on Long Island. I lived in Chicago for 4 years, where I obtained my coding bootcamp certificate. The reason I decided to pursue a career in web development is my eagerness to create and further both my professional and personal growth in the ever growing world of tech. I enjoy reading writing, playing guitar. I love to travel, my favorite destinations are anywhere there is a beach or mountains nearby. I hope to one day break into the fields that involves AI development and database algorithms.</p>
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default About;