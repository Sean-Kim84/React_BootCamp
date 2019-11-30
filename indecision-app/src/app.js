class Indecision  extends React.Component {
  render() {
    const title = "Indecision" // 부모 component가 자식컴포넌트에게 주는 값 = props
    const subTitle = "You should understand";
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subTitle}/>
        <Action />
        <Options options={options}/>
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
  handleClick() {
    alert('handlePick')
  }
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>What should I do</button>
      </div>
    )
  }
}

class Options extends React.Component { 
  
  handleRemoveAll() {
    //  binding 을 하지 않으면 부모클래스의 props를 가지고 올 수 없다
    console.log(this.props.options);
  
  }
  render() { // 아래 코드를 보면 실행하려는 함수측에서 bind로 무엇을 refer하는 지를 지칭한다
    return (
      <div>
        <button onClick={this.handleRemoveAll.bind(this)}>RemoveAll</button>
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

ReactDOM.render(<Indecision />, document.getElementById('app')) 