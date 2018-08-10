import React from 'react';

const Message = (props) => {
  return (
    <p className={props.index % 2 === 0 ? 'them' : 'me'}>{props.text}</p>
  );
}

export default Message;
