const size = {
    mobileD: '520px',
    mobile600: '650px',
    tablet: '768px',
    laptop: '950px',
    laptopL: '1340px',
    desktop: '2560px'
}

export const device = {
    mobileD: `(min-width: ${size.mobileD})`,
    mobile600:`(min-width: ${size.mobile600})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
};