import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListOfDocs from "./listOfDocs";
import "../css/listStyle.css"

class Anunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleChange = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <React.Fragment>
        {this.props.expanded === true ?
          <div>
            <ListItem button onClick={this.handleChange}>
              <ListItemIcon>
                <img
                  src={this.props.icon}
                  alt="Lista_concursuri_si_anunturi"
                />
              </ListItemIcon>
              <ListItemText style={{padding:0}} className="SublistItemText" inset primary={this.props.titlu} secondary={this.props.subtitlu}/>
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            {this.props.text ? <p className="TextBeforeList">{this.props.text}</p> : ""}
              <ListOfDocs
                // list={item.listOfDocs}
                list={this.props.docs}
                button={true}
                icon1={require("../images/icons/list.png")}
                component="div"
              />
            </Collapse>
          </div>
          :
          <ListOfDocs
            list={this.props.docs}
            button={true}
            icon1={require("../images/icons/law2.png")}
            component="div"
          />
        }
      </React.Fragment>
    );
  }
}

export default Anunt;
