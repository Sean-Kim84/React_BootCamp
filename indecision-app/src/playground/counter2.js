class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name:"Sean"
        };
    }

    handleAddOne() {
        this.setState({
            count: this.state.count+1
        })
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     };
        // });
        // this.state.count = this.state.count +1;
        console.log(this.state);
    };

    handleMinusOne() {
        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count-1
        //     }
        // }) 
        this.setState({ //prevState에 직접접근
            count: this.state.count -1
        })
        console.log(this.state);
    };

    handleReset() {
        // this.setState(() => {
        //     return {
        //         count: 0 
        //     }
        // })
        this.setState(() => { // 이 방식의 setState는 component render를 두번하게된다(아래함수도 실행)
            return {
                count: 0
            };
        });

        this.setState((prevState) => {
            return {
                count: prevState.count +1
            };
        })

    };

    render(){
        return (
            <div>
                {this.state.name}
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
