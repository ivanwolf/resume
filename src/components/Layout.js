import React from 'react';


export const Page = ({ children, id }) => (
  <div id={id} className="page">{children}</div>
);

export const Header = ({ children }) => (
  <section className="header">{children}</section>
);

export const Item = ({ children }) => (
  <div className="item">{children}</div>
);

export const Left = ({ children }) => (
  <div className="left">{children}</div>
);

export const Right = ({ children }) => (
  <div className="right">{children}</div>
);

export const Icons = ({ children }) => (
  <div className="icons">{children}</div>
);

export const Body = ({ children }) => (
  <div className="body">{children}</div>
);

export const Labels = ({ children }) => (
  <div className="labels">{children}</div>
);
