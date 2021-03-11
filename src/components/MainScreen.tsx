import React from 'react';

interface IMainScreenProps {
  description: string;
  imageUrl: string;
  name: string;
  capital: string;
}

const MainScreen: React.FunctionComponent<IMainScreenProps> = (props) => {
  const { description, imageUrl, name, capital } = props;
  
  return (<>{description}{imageUrl}{name}{capital}</>);
};

export default MainScreen;
