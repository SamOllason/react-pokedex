import React from 'react';

type ScrollProps = {
  children?: JSX.Element
}

const Scroll: React.FC<ScrollProps> = ({children}) => {

  return (
    <div style={{ overflow: 'scroll', border: '5px solid black'}}>
      {children}
    </div>
  );
};

export default Scroll;