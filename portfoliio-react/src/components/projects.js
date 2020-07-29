import React, { Component } from "react";
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText,} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover",
            }}
          ></CardTitle>
          <CardText>Food banks have responded to increased demand by serving clients through drive-up mobile sites: people who need food can drive to a particular location, where workers and volunteers will load bagged groceries into their backseats or trunks.</CardText>
          <CardActions border>
            <Button href="https://github.com/rmcmahon91/Food-Bank-Analysis" colored>Github</Button>
            <Button href= "https://food-bank-project.herokuapp.com/" colored>Link</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        
      );
    } else if (this.state.activeTab === 1) {
        return (
          <div className="project-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098155260-OD3QNLD1RK7DGPWMCUA6/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w) center / cover",
          }}
        ></CardTitle>
        <CardText>With COVID affecting everyone's live. Help Handing is design to give the less fortunate a boost in getting their basic needs.</CardText>
        <CardActions border>
          <Button href="https://github.com/rmcmahon91/Helping_Hand" colored>Github</Button>
          <Button href= "https://helpinghand2.herokuapp.com/"colored>Link</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background: "url(https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098155260-OD3QNLD1RK7DGPWMCUA6/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/js.jpg?format=2500w) center / cover",
          }}
        ></CardTitle>
        <CardText>Lorem Ipsum</CardText>
        <CardActions border>
          <Button href="" colored>Github</Button>
          <Button href="" colored>Link</Button>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}>
          <IconButton name="share" />
        </CardMenu>
            </Card>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover",
            }}
          ></CardTitle>
          <CardText>Food banks have responded to increased demand by serving clients through drive-up mobile sites: people who need food can drive to a particular location, where workers and volunteers will load bagged groceries into their backseats or trunks.</CardText>
          <CardActions border>
            <Button href="https://github.com/rmcmahon91/Food-Bank-Analysis" colored>Github</Button>
            <Button href= "https://food-bank-project.herokuapp.com/" colored>Link</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>      
      </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="project-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px"}}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(data:image/jpeg;base64,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) center / cover",
            }}
          ></CardTitle>
          <CardText>Lorem Ipsum</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Link</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
              </Card>
              <Card shadow={5} style={{ minWidth: "450", margin: "auto", paddingTop: "5px"}}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background: "url(data:image/jpeg;base64,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) center / cover",
            }}
          ></CardTitle>
          <CardText>Lorem Ipsum</CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Link</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>Nodejs</Tab>
        </Tabs>

            <Grid>
                <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
        
      </div>
    );
  }
}

export default Projects;
