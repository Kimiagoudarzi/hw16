import React, { Component } from "react";
import './card.css';

class Card extends Component {
    state ={}
    render() { 
        return ( 
            <div className="box  blue">
                {this.props.contacts.map((item) => 
                    <div className="box blue">{item}</div>
                )}
            </div> 
         );
    }
}
 
export default Card;