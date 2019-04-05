import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Reset from './components/_shared/Reset';
import Header from './components/_shared/Header';

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <Reset />
            <Header>Header</Header>
        </Fragment>
    </ThemeProvider>
);

export default App;
