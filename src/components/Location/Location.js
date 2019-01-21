import React, {Component} from 'react';
import axios from 'axios';
import Weather from '../Weather/Weather';
import './Location.css'


class Location extends Component{

    constructor(props){
        super(props);
        this.state={
            location: '',
            currentLoc: '',
            locUpdate: '',
            weather: [],
            favorites: [],
            favs: []
        }
    }
    
    componentDidMount(){
        axios.get('/api/weather').then(response=>{
            // console.log(response.data)
            this.setState({weather:response.data})
        }).catch(err=>console.log(err))

        axios.get('/api/city').then(response=>{
            // console.log(response.data)
            this.setState({currentLoc:response.data})
        }).catch(err=>console.log(err))
    }
        

    inputLocation=(e)=>{
        this.setState({location:e})
    }

    getMoreWeather=()=>{
        axios.post('/api/weather/location', {location: this.state.location}).then(response=>{
            this.setState({locUpdate:response.data})
        }).catch(err=>console.log(err))

        this.setState({currentLoc:this.state.location})
    }

    addFavs=()=>{
        // this.setState({favorites:[...this.state.favorites,this.state.locUpdate]})

        axios.post('/api/weather/saved', {locUpdate:this.state.locUpdate}).then(response=>{
            this.setState({favs:response.data})
        }).catch(err=>console.log(err))
    }

    render(){
        // console.log(this.state.favs)
        let {locUpdate, currentLoc, favs} = this.state
        
        return(
            <div className="input-flex">
                <div className='inputFields'>
                    <input onChange={(e)=> this.inputLocation(e.target.value)}
                           placeholder='Enter Your Location'
                           className='input'/>
                    <button onClick={this.getMoreWeather} className='button'>Check Weather</button>
                </div>
                <div>
                {locUpdate ? <h3 className='weatherTitle'>Current Weather for {currentLoc}</h3> : null}
                <Weather main={locUpdate.main} 
                         icon={locUpdate.icon} 
                         description={locUpdate.description} 
                         locUpdate={this.locUpdate}/>
                </div>
                {/* <button onClick={this.addFavs}>Add to Favorites</button>
                {favs.map((e, i) => {
                    return(
                        <div key={i}><h5>{e.description}</h5></div>
                    )
                })} */}
            </div>
         )
    }
}

export default Location;