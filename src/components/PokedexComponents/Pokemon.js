import React from 'react';

export default class Pokemon extends React.Component {
    state = {}
    render() {
        let sprites = this.props.pokemon.sprites; 
        return ( 
            <div>
                {this.props.pokemon.name}
                {sprites ? <img src={sprites.front_default} /> : "" }
            </div> 
        );
    }
}
 
