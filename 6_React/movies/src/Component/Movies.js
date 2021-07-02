  import React, { Component } from 'react'
import { funName } from './getMovies';
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:funName()
        }
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
                            <button>delete</button>
                        </div>
                    ))
                }
            </div>
        )
    }
}
