import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  // constructor(props){
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);
  // }

  // handleAddOption(e) { // 아래에 props로 상위클래스에서 가져온 handleAddOption이 있지만 여기서도 같은 이름으로 함수를 설정가능하다
  //   e.preventDefault();

  //   const option = e.target.elements.option.value.trim();
  //   const error = this.props.handleAddOption(option);
  
  //   this.setState(() => ({error}));
  //   if(!error){
  //     e.target.elements.option.value = '';
  //   }
  // } 

  handleAddOption = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));
    if(!error){
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && (<p>{this.state.error}</p>)}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}