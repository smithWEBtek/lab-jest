import React, { useState } from 'react';
// import { act } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';

import TestRenderer from 'react-test-renderer';
const { act } = TestRenderer;

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

const Link = ({ page, children }) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
      // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    act(() => {
      // fire events that update state
      setStatus(STATUS.HOVERED);
    });
  };

  const onMouseLeave = () => {
      // https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    act(() => {
      // fire events that update state
      setStatus(STATUS.NORMAL);
    });
  };

  return (
    <a
      className={status}
      href={page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
