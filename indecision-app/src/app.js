class IndecisionApp  extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    }
  } 
  componentDidMount(){
    console.log("fetching the data");
  };

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidUpdate!");
    console.log(prevProps);
    conssole.log(prevState);
  }; 

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  // handlDelete Options
  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };  
    // });
    this.setState(() => ({ // 한줄로도 이렇게 options를 비워줄수 있다
      options: []
    })) 
  };

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  // handlePick --passDown to Action and setup onClick -bind here
  // randomly pick an option and alert
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  } 

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item'
    } else if(this.state.options.indexOf(option) > -1){ // 중복되는값 체크
      return 'This option already exists'
    } else {
      this.setState((prevState) => (
        {
          options: prevState.options.concat([option])
        }
      ))
    }
    
  }

  render() {
    const title = "Indecision"  // 부모 component가 자식컴포넌트에게 주는 값 = props
    const subTitle = "You should understand";

    //Option Components 에 options라는 props 값에 this.state.options 라는 state값을 할당!
    return (
      <div>
        <Header />
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption 
          handleAddOption={this.handleAddOption}  
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};


Header.defaultProps = { // 부모 Component에서 title 값을 전달해 주지 않았을 경우 deafult Props값을 설정
  title: 'some default!',
  subtitle: 'this is the default subtitle'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do? 
      </button>
    </div>
  );
};

// class Action extends React.Component {
//   render(){
//     return (
//       <div>
//         <button 
//           onClick = {this.props.handlePick}
//           disabled={!this.props.hasOptions}
//           >
//         What should I do</button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Delete All</button>
      {props.options.map(option => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  )
}

// class Options extends React.Component { 
//   render() { // 아래 코드를 보면 실행하려는 함수측에서 bind로 무엇을 refer하는 지를 지칭한다
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
//         {this.props.options.map(option => <Option key={option} optionText={option}/>)}
//       </div> 
//     )
//   }
// }

const Option = (props) => {
  return(
      <div>
        {props.optionText}
        <button 
          onClick={(e) => {
            props.handleDeleteOption(props.optionText);
          }}>
          remove
        </button>
      </div>
    )
}
    
  
class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) { // 아래에 props로 상위클래스에서 가져온 handleAddOption이 있지만 여기서도 같은 이름으로 함수를 설정가능하다
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    
    this.setState(() => ({error}));
  } 

  render() {
    return (
      <div>
        {this.state.error && (<p>{this.state.error}</p>)}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


//functional Component 
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p> 
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp options={['option1', 'option3', 'optin2']}/>, document.getElementById('app')) 