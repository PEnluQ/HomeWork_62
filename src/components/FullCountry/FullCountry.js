import React, {Component} from 'react';
import axios from 'axios';
import './FullCountry.css';

class FullCountry extends Component {
    state = {
        loaded: null,
        borders: null
    };

    async componentDidUpdate(prevProps) {
        if(this.props.id && this.props.id !== prevProps.id){
            const response = await axios.get('https://restcountries.eu/rest/v2/alpha/' + this.props.id);
            const loaded = response.data;
            let borderNames = [];
            for(let border of loaded.borders){
                let newResponse = await axios.get('https://restcountries.eu/rest/v2/alpha/' + border);
                borderNames.push(newResponse.data.name);
            }
            const newLoaded = {...loaded, borders: borderNames};
            this.setState({loaded: newLoaded});
        }
    }

    render() {
        return this.state.loaded ? (
            <div className='FullCountry'>
                <h3>Country: {this.state.loaded.name}</h3>
                <p>Capital: {this.state.loaded.capital}, Subregion: {this.state.loaded.subregion},
                   Population: {this.state.loaded.population}</p>
                <p>Borders</p>
                <ul className='countries'>
                    {this.state.loaded.borders.map(border => {
                        return <li className='list-group-countries' key={border}>{border}</li>
                    })}
                </ul>
            </div>
        ) : (<div className='FullCountry'>Choose Country</div>);
    }
}

export default FullCountry;