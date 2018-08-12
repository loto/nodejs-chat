import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

const Messages = ({ messages }) => {
  return (
    <div className="messages">
      {messages.map((message, index) => <Message text={message} index={index} key={index} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
  };
}

function mapDispatchToProps() { return {}; }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);
