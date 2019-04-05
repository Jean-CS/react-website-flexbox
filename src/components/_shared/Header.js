import React from 'react';
import styled from 'styled-components';

import { hexToRGB } from '../../utils/color';
import images from '../../res/images';

const Header = styled.header`
    height: 95vh;
    background-image: linear-gradient(
            to right,
            rgba(${p => hexToRGB(p.theme.colors.primaryLight)}, 0.8),
            rgba(${p => hexToRGB(p.theme.colors.primaryDark)}, 0.8)
        ),
        url(${images.hero});
    background-size: cover;
    background-position: top;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export default () => <Header>Header</Header>;
