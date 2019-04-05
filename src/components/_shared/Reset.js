import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: ${p => p.theme.fontFamily};
        font-weight: ${p => p.theme.fontWeight.regular};
        font-size: ${p => p.theme.fontSize.normal};
        line-height: 1.7;
        color: ${p => p.theme.colors.gray};
    }
`;
