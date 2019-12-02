import React from 'react';

const Header = (props) => {
  return(
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  );
};


Header.defaultProps = { // 부모 Component에서 title 값을 전달해 주지 않았을 경우 deafult Props값을 설정
  title: 'some default!',
  subtitle: 'this is the default subtitle'
};

export default Header;