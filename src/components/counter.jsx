import React, { Component } from 'react';
import '../index.css'

class Counter extends Component {
    state ={
        value: this.props.value,// the value depends on counters value in counters.jsx
        tags: ['tag1','tag2','tag3']
    };

    styles ={
        fontSize: 20,
        fontWeight:'bold',
        margin:20,
        backgroundColor:'blue',
        padding:5,
        color:'white',
        borderRadius: 5
    };

    /*renderTags(){
        if(this.state.tags.length ===0) return <p>There's no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }*/

    handleIncrement = () => {  // () => is access to this props or objects and another ways beside using constructor and super
        this.setState({value : this.state.value + 1}) // setState used to update state
    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increment</button>
                {/*{this.renderTags()}*/}
            </div>
        );
    }

    getBadgeClasses() { // rendered class name dynamically using bootstrap 
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;