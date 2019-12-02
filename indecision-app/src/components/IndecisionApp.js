import React from 'react';

import Header from './Header';
import Action from './Action';
import AddOption from './AddOption';
import Options from './Options';
import OptionsModal from './OptionModal';

class IndecisionApp  extends React.Component {
  state = {
      options: [], 
      selectedOption: undefined
    }

  // componentDidMount(){
  //   try {
  //     const json = localStorage.getItem('options');
  //     const options = JSON.parse(json)
    
  //     if(options) {
  //       this.setState(() => ({options}));
  //     }   
  //   } catch (e){}
  //     // Do nothing at all!
  // };

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.options.length !== this.state.options.length){
  //     const json = JSON.stringify(this.state.options);
  //     localStorage.setItem('options', json);
  //     console.log('Saving the Data');
      
  //   }
  // }; 

  // componentWillUnmount() {
  //   console.log('Component WILL UNMOUNT!')
  // }

  // handlDelete Options
  handleDeleteOptions = ()  => {
    this.setState(() => ({ // 한줄로도 이렇게 options를 비워줄수 있다
      options: []
    })) 
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  // handlePick --passDown to Action and setup onClick -bind here
  // randomly pick an option and alert
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  };

  handleAddOption = (option) => {
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
        <div className="container">
          <Action 
          hasOptions={this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <div className="widget">
          <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
        <AddOption 
          handleAddOption={this.handleAddOption}  
        />
        </div>
        <OptionsModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
        </div>
      </div>
    )
  }
}

export default IndecisionApp;