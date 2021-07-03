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
            return id!==obj._id
            console.log(id);
        })
        this.setState({arr:narr});
    }
    render() {
        let arr=this.state.arr;
        return (
            <div className='row'>
                <div className='col-3'>Hello</div>
                <div className='col-9'></div>
                <input type='text'></input>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                <table class='table'>
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
                arr.map(obj=>(
                    <tr scope="row" key={obj._id}>
                        <td></td>
                        <td>{obj.title}</td>
                        <td>{obj.genre.name}</td>
                        <td>{obj.numberInStock}</td>
                        <td>{obj.dialyRentalRate}</td>
                        <td><button type="button" class="btn btn-danger" onClick={()=>this.onDelete(obj._id)}>Delet</button></td>
                    </tr>
                ))
            }
        </tbody>
        </table>
            </div>
        )
    }
}
