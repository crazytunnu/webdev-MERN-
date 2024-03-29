import React, { Component, createFactory } from 'react'
import { funName } from './getMovies';
import axios from "axios";
export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            currText: "",
            limit: 5,
            currPage: 1,
            cGenre:"All Genres",
            genres:[{_id:"abc",name:"All Genres"}]
        }
    }
    async componentDidMount() {
        let promise = axios("https://backend-react-movie.herokuapp.com/movies");
        let gPromise=axios("https://backend-react-movie.herokuapp.com/genres")
        let data = await promise;
        let gData= await gPromise;
        this.setState({ arr: data.data.movies ,genres:[...this.state.genres, ...gData.data.genres]});
    }
    handleChange = (e) => {
        this.setState({ currText: e.target.value })
        //   let narr=this.state.oarr.filter(obj=>{
        //     return (e.target.value==""||obj.title.toLowerCase().includes(e.target.value.toLowerCase()))
        // })
        // this.setState({arr:narr});
    }
    handleChangeNum = (e) => {
        let num = Number(e.target.value)
        this.setState({ limit: num })
    }
    handlePageClick = (pg) => {
        this.setState({ currPage: pg })
    }
    handleGenres=(name)=>{
        this.setState({cGenre:name});
    }
    onDelete = (id) => {
        let narr = this.state.arr.filter(obj => {
            return id !== obj._id
            console.log(id);
        })
        this.setState({ arr: narr });
    }
    sortByStock = (e) => {
        let order = e.target.className;
        let narr = []
        if (order == "fas fa-sort-up") {
            narr = this.state.arr.sort((obj1, obj2) => {
                return obj1.numberInStock - obj2.numberInStock;
            })
        }
        else {
            narr = this.state.arr.sort((obj1, obj2) => {
                return obj2.numberInStock - obj1.numberInStock;
            })
        }
        this.setState({ arr: narr })
    }
    sortByRate = (e) => {
        let order = e.target.className;
        let narr = []
        if (order == "fas fa-sort-up") {
            narr = this.state.arr.sort((obj1, obj2) => {
                return obj1.dailyRentalRate - obj2.dailyRentalRate;
            })
        }
        else {
            narr = this.state.arr.sort((obj1, obj2) => {
                return obj2.dailyRentalRate - obj1.dailyRentalRate;
            })
        }
        this.setState({ arr: narr })
    }
    render() {
        let { arr, currText, limit, currPage, cGenre,genres } = this.state;
        let filterArr = [];
        if (currText != "") {
            filterArr = arr.filter(obj => {
                return obj.title.toLowerCase().includes(currText.toLowerCase())
            })
        }
        else
        filterArr = arr;
        if(cGenre!="All Genres")
        {
            filterArr=filterArr.filter(function(obj){
                return obj.genre.name==cGenre;
            })
        }
        let si = (currPage - 1) * limit;
        let ei = si + limit;
        let pageNumber = Math.ceil(filterArr.length / limit);
        filterArr = filterArr.slice(si, ei);
        let pageNumberArr = [];
        for (let i = 0; i < pageNumber; i++) {
            pageNumberArr.push(i + 1);
        }
        return (
            <>
                {this.state.arr.length == 0 ? <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                </div> :
                    <div className="row">
                        <div className='col-3'>
                            <ul class="list-group">
                                {
                                    this.state.genres.map(obj=>(
                                        <li className='list-group-item' key={obj._id} onClick={()=>this.handleGenres(obj.name)}>{obj.name}</li>
                                    ))
                                }
                                <h5>Current Genre : {this.state.cGenre}</h5>
                            </ul>
                        </div>
                        <div className='col-9'>
                            <input className="w-25" value={this.state.currText} onChange={this.handleChange} type='text' placeholder="Search Movies"></input>
                            <input className="w-25" value={filterArr.length} min="1" max={this.state.arr.length} type="number" onChange={this.handleChangeNum} ></input>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">
                                            Stock
                                            <i class="fas fa-sort-up" onClick={this.sortByStock}></i>
                                            <i class="fas fa-sort-down" onClick={this.sortByStock}></i>
                                        </th>
                                        <th scope="col">
                                            Rate
                                            <i class="fas fa-sort-up" onClick={this.sortByRate}></i>
                                            <i class="fas fa-sort-down" onClick={this.sortByRate}></i>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterArr.map(obj => (
                                            <tr scope="row" key={obj._id}>
                                                <td></td>
                                                <td>{obj.title}</td>
                                                <td>{obj.genre.name}</td>
                                                <td>{obj.numberInStock}</td>
                                                <td>{obj.dailyRentalRate}</td>
                                                <td><button type="button" class="btn btn-danger" onClick={() => this.onDelete(obj._id)}>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <nav aria-label="...">
                                <ul class="pagination">
                                    {
                                        pageNumberArr.map(no => {
                                            let pageclass = no == currPage ? "page-item active" : "page-item"
                                            return (
                                                <li className={pageclass} onClick={() => this.handlePageClick(no)} key={no}>
                                                    <span class="page-link">{no}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                }
            </>
        )
    }
}
