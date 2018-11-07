import React, { Component } from 'react';

const Text = (props) => {
  console.log(props);
  return (
    <div>
      <span className="text-holder">{props.greeting}</span>
    </div>
  );
};

export default Text;
