const BASE = 16;

const hexToRGB = hex => {
    hex = hex.replace('#', '');

    const rgb = [0, 2, 4].map(start => parseInt(hex.slice(start, start + 2), BASE));

    return rgb.join(',');
};

export { hexToRGB };
