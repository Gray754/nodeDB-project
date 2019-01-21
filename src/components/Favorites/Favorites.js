import React, {Component} from 'react'
import './Favorites.css'


class Favorites extends Component{

    constructor(props){
        super(props);
        this.state={
            edit: false,
            inputVal: ''
        }
    }

    setEdit=()=>{
        this.state.edit ? this.setState({edit: false}) : this.setState({edit: true})
    }

    render(props){
        let {favs, addFavs, locUpdate, clearFavs, editInput} = this.props;
        console.log(this.state.inputVal)
        return(
            <div className='favs'>
                {locUpdate ? <div className='favbtns'>
                    <button onClick={addFavs}>Add to Favorites</button>
                    <button onClick={clearFavs}>Clear Favorites</button>
                </div> : null}
                
                <div className='fav-bar'>
                {favs.map((e, i) =>{
                    // console.log(e)
                    return(
                    <div key={i} className='saved'>
                        {this.props.id }
                        <h5>{e.main}</h5>
                        <p>{e.description}</p>
                        <button onClick={this.setEdit}>Edit</button>
                        {this.state.edit ? <div className="inputField">
                            <input onChange={(e)=>editInput(e.target.value)}/>  
                            <button className='editClick'onClick={()=>this.props.editText(i)}>Update</button> 
                        </div>: null}
                    </div>
                    )
                })}</div>
            </div>
        )
    }
}

export default Favorites