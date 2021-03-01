import React from 'react';

import '../styles/css/components/sectionContainer.css';

const SectionContainer = (props) => (
  <section className="sectionArea">
    <h2>{props.title}</h2>
    <div className="container" style={{padding: `${props.verticalPadding} ${props.horizontalPadding}`}}>
      {props.children}
    </div>
  </section>
);

export default SectionContainer;


