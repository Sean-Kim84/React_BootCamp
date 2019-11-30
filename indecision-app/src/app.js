class IndecisionApp  extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    }
  }

  // handlDelete Options
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };  
    });
  };

  // handlePick --passDown to Action and setup onClick -bind here
  // randomly pick an option and alert
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  } 

  render() {
    const title = "Indecision" // 부모 component가 자식컴포넌트에게 주는 값 = props
    const subTitle = "You should understand";

    //Option Components 에 options라는 props 값에 this.state.options 라는 state값을 할당!
    return (
      <div>
        <Header title={title} subtitle={subTitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button 
          onClick = {this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
        What should I do</button>
      </div>
    )
  }
}

class Options extends React.Component { 
  render() { // 아래 코드를 보면 실행하려는 함수측에서 bind로 무엇을 refer하는 지를 지칭한다
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
        {this.props.options.map(option => <Option key={option} optionText={option}/>)}
      </div> 
    )
  }
}

class Option extends React.Component {
  render(){
    return(
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if(option){
      alert(option)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// const jsx = (
//   <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOption />
//   </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app')) 