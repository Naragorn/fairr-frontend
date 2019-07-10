import React from 'react';
import elements from './elements.json';

const Elements = () => {
  return (
    <div className="elements">
        {elements.map(el => <div>Title: {el.title}<br/>Description: {el.description}<br/><br/></div>)}
    </div>
  );
}


export default Elements;
