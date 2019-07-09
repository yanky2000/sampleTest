import React, { useState } from "react";
// import { Login } from './Login';

export const Root = props => {
  return (
    <>
      <h1>Hello there i'm root!!!sdf!2</h1>
      <Sample />
      <Sample2 />
      {/* <Login title='hey'/> */}
    </>
  );
};

export const Sample = props => {
  return <h1>life is tickingadf a</h1>;
};
export const Sample2 = props => {
  return <h1>life is tickingadf again</h1>;
};
