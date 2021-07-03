  import React, { Component } from 'react'
import { funName } from './getMovies';
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:funName()
        }
    }
    onDelete=(id)=>{
        let narr=this.state.arr.filter(obj=>{
            return id!=obj._id
            console.log(id);
        })
        this.setState({arr:narr});
    }
    render() {
        let arr=this.state.arr;
        return (
            <div>
                {
                    arr.map(obj=>(
                        <div className="movies-item" key={obj._id}>
                            <span>{obj.title}</span>
                            <span>{obj.genre.name}</span>
                            <span>{obj.numberInStock}</span>
                            <span>{obj.dailyRentalRate}</span>
                            <button onClick={()=>this.onDelete(obj._id)}>delete</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
