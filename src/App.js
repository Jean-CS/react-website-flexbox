import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import Reset from './components/_shared/Reset';

const App = () => (
    <ThemeProvider theme={theme}>
        <Fragment>
            <Reset />
        </Fragment>
    </ThemeProvider>
);

export default App;
