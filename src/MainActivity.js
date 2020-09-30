import React, { Component } from 'react';
class MainActivity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            buffer: ""
        }
    }

    getTask = (e) => {
        this.setState({ buffer: e.target.value })
    }
    addTask = () => {
        var newVal = this.state.buffer;
        var arr = this.state.tasks;
        arr.push(newVal)
        this.setState({ tasks: arr })
    }

    removetask = (k) => {
        if(!window.confirm("Are you sure, you want to delete this task?")){
            return;
        }
        var arr = this.state.tasks;
        arr.splice(k,1);
        this.setState({tasks:arr})
    }

    render() {
        return (
            <div >
                <input className="textBox" type="text" onChange={this.getTask} placeholder="Enter a task" />
                <button onClick={this.addTask}>add to list</button>
                <ul>
                    {
                        this.state.tasks.map((itm, k) => {
                            return (
                                <li key={k}>
                                    {itm}<button onClick={() => (this.removetask(k))}>delete</button>
                                </li>
                            )
                        })
                    }
                </ul>


            </div>
        );
    }
};




export default MainActivity;