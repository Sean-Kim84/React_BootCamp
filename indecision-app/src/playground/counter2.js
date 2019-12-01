class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            name:"Sean",
            count: props.count 
        };
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)){
            this.setState(() => ({
                count
            }))
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    };

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

        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count +1
        //     };
        // })

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

Counter.defaultProps = {
    count: 1 
}

ReactDOM.render(<Counter />, document.getElementById('app'));
