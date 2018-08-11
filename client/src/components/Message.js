import React from 'react';

const Message = ({ index, text }) => {
  return (
    <p className={index % 2 === 0 ? 'them' : 'me'}>{text}</p>
  );
}

export default Message;
