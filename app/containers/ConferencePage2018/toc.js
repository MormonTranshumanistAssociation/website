import * as React from 'react';
import PropTypes from 'prop-types';
import TableOfContents, { Entry } from 'components/TableOfContents';
import { inject, observer } from 'mobx-react';

const ToC = ({ authStore }) => (
  <TableOfContents>
    <Entry to="/conf/2018">Welcome</Entry>
    <Entry to="/conf/2018/schedule">Schedule</Entry>
    <Entry to="/conf/2018/presenters">Presenters</Entry>
    {!!authStore.token && <Entry to="/conf/2018/timer">Timer</Entry>}
    {!!authStore.token && <Entry onClick={() => authStore.setToken(null)}>Log out</Entry>}
  </TableOfContents>
);
ToC.propTypes = {
  authStore: PropTypes.object,
};

export default inject('authStore')(observer(ToC));
