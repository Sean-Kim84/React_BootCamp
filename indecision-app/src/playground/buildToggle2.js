// Visible Toggle -render, constructor, handleToggleVisibility
// visibility -> false

class Toggle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            visible: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1,
                visible: !prevState.visible
            }
        })
    }
    
    render(){
        return (
            <div>
                <h1>VisibilityToggle</h1>
                <p>{this.state.count}</p>
                <button onClick={this.handleToggleVisibility}>Visible</button>
                <p>{this.state.visible && "This is showing up!!"}</p>
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));