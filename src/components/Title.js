import React, {Component} from 'react';
import './Title.css';

class Title extends Component{
    constructor( props ){
        super( props );
            this.state = { estado : 'Asistente'};
            this.update = this.update.bind(this);
    }
    update(){
    this.setState({ estado : 'Speaker'})
    }

    render(){
        return(
            <div class="level-1">
                <div>SCESI</div>
                <div>OWEN WILSON</div>
                <div>{this.state.estado}</div>
                <div>
                    <button onClick={ this.update }>Click me!</button>
                </div>
            </div>
        );
    }
}

export default Title;
