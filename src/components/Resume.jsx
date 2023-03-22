import React from 'react';

function Resume() {
  return (
      <a href={process.env.PUBLIC_URL + '/test.txt'} download>Download File</a>
  )
}

export default Resume