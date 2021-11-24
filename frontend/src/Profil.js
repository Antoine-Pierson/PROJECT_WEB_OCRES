import React from 'react';
import './Button.js'
import { Button } from './Button';
import './Profil.css';
import {Text} from './Text'

const colors = ['#ff6a6a', '#79cdcd', '#29ab87', '#c8a2c8', '#f8b878']

export class Profil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null,
        nom: null,
        prenom: null,
        birth: null,
        lastPublished: null,
        likes: 0,
        bgdColor: '#c8a2c8'
      }
      this.handleChangeStyle = this.handleChangeStyle.bind(this);
    }

    handleChangeStyle (e) {
      this.setState( () => ({bgdColor: this.getRandomColor()}))
    };
  
    render() {
      return(
      <div className="profil" style={{ backgroundColor: this.state.bgdColor }}>
        <img src={this.props.image}/>
        <p>Nom: {this.props.nom}</p>   
        <p>Prenom: {this.props.prenom}</p>
        <p>Date de naissance: {this.props.birth}</p>

        <Button name={"Change Style"} handleChange={this.handleChangeStyle}/>

        <Text txt={this.props.lastPublished} nbLikes={this.props.likes}/>
      </div>
      )
    }
  }