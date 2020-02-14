import React from 'react';

class bodSelector extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            month: '',
            day: '',
            year: '',
        };
        this.dobSetState = this.dobSetState.bind(this);
    }

    dobSetState (field) {
        const {dobUpdate} = this.props;
        let that = this; 
        e => this.setState({[field]: e.currenTarget.value});
        return (e) =>  {
            debugger
            that.setState({[field]: e.currentTarget.value}, () => dobUpdate(that.state)); 
        }

        // dobUpdate(this.state);
    };
   
    
    
    render () { 
         
    const years = []
    let d = new Date();

    for ( let year = d.getFullYear(); year > 1905; year--) {
            years.push(year);
    };

    return (
    <div className = "bday-selector">
    <label>Birthday</label>
    <div className='selectors'>
    <select id="month" onChange={this.dobSetState("month")}>
        <option value="0">Jan</option>
        <option value="1">Feb</option>
        <option value="2">Mar</option>
        <option value="3">Apr</option>
        <option value="4">May</option>
        <option value="5">Jun</option>
        <option value="6">Jul</option>
        <option value="7">Aug</option>
        <option value="8">Sep</option>
        <option value="9">Oct</option>
        <option value="10">Nov</option>
        <option value="11">Dec</option>
    </select>
     <select id='day' onChange={this.dobSetState("day")} className="date-select" >
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       <option value="9">9</option>
       <option value="10">10</option>
       <option value="11">11</option>
       <option value="12">12</option>
       <option value="13">13</option>
       <option value="14">14</option>
       <option value="15">15</option>
       <option value="16">16</option>
       <option value="17">17</option>
       <option value="18">18</option>
       <option value="19">19</option>
       <option value="20">20</option>
       <option value="21">21</option>
       <option value="22">22</option>
       <option value="23">23</option>
       <option value="24">24</option>
       <option value="25">25</option>
       <option value="26">26</option>
       <option value="27">27</option>
       <option value="28">28</option>
       <option value="29">29</option>
       <option value="30">30</option>
       <option value="31">31</option>
    </select>
    <select defaultValue="1995" id='year' onChange={this.dobSetState("year")} className="date-select" >
        {years.map (year => {
            if (year == 1995) {
                return  <option value="1995" key="1995" >1995</option>
            } else {
                return  <option value={year} key ={year}>{year}</option>
            }
            })}
    </select>
    </div>

    </div> )}
}

export default bodSelector; 