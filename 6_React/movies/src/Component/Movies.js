  import React, { Component } from 'react'
import { funName } from './getMovies';
export default class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
            arr:funName(),
            currText:""
        }
    }
    handleChange=(e)=>{
      this.setState({currText:e.target.value})
    //   let narr=this.state.oarr.filter(obj=>{
    //     return (e.target.value==""||obj.title.toLowerCase().includes(e.target.value.toLowerCase()))
    // })
    // this.setState({arr:narr});
    }
    onDelete=(id)=>{
        let narr=this.state.arr.filter(obj=>{
            return id!==obj._id
            console.log(id);
        })
        this.setState({arr:narr});
    }
    render() {
        let {arr,currText}=this.state;
        let filterArr=[];
        if(currText!="")
        {
          filterArr=arr.filter(obj=>{
            return obj.title.toLowerCase().includes(currText.toLowerCase())
          })
        }
        else
        filterArr=arr;
        return (
            <div className="row">
                <div className='col-3'><h1>Hello</h1></div>
                <div className='col-9'>
                <input className="w-25"value={this.state.currText} onChange={this.handleChange} type='text'></input>
                <table className='table'>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">genre</th>
                <th scope="col">stock</th>
                <th scope="col">rate</th>
            </tr>
        </thead>        
        <tbody>
            {
                filterArr.map(obj=>(
                    <tr scope="row" key={obj._id}>
                        <td></td>
                        <td>{obj.title}</td>
                        <td>{obj.genre.name}</td>
                        <td>{obj.numberInStock}</td>
                        <td>{obj.dailyRentalRate}</td>
                        <td><button type="button" class="btn btn-danger" onClick={()=>this.onDelete(obj._id)}>Delete</button></td>
                    </tr>
                ))
            }
        </tbody>
        </table>
        </div>
            </div>
        )
    }
}
