import React from 'react';
import TableOfContents, { Entry } from 'components/TableOfContents';

const ToC = () => (
  <TableOfContents>
    <Entry to="/primers/1">The Basics of Mormon Transhumanism</Entry>
    <Entry to="/primers/2">The Purpose of the Mormon Transhumanist Association</Entry>
    <Entry to="/primers/3">Humanity+ and The Transhumanist Declaration</Entry>
    <Entry to="/primers/4">Exponential Change</Entry>
  </TableOfContents>
);

export default ToC;
