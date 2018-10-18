import React from 'react';

const Scroll = props => {
  return (
    <div className="br3 ba dark-gray b--black-10 mv4 mh4 shadow-5 overflow-y-scroll vh-50 pt3 pb3">
      {props.children}
    </div>
  );
};

export default Scroll;
