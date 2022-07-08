/**
 * Change all chart colors
 */
const themeColors = {
  primary: '#e91e63',
  secondary: '#DA3F81',
  success: '#00D014',
  danger: '#FF3739',
  warning: '#FFB70F',
  info: '#00D0BD',
  dark: '#464D69',
  default: '#25B9D7',
  greyLighten: '#A5A7B2',
  grey: '#677080',
  white: '#FFFFFF',
  purple: '#896BD6',
  yellow: '#D46B08',
};

const {
  primary,
  info,
  danger,
  success,
  warning,
  purple,
  secondary,
  yellow,
  white,
  greyLighten,
  grey,
} = themeColors;

const ChartConfig = {
  color: {
    primary: primary,
    info: info,
    warning: warning,
    danger: danger,
    success: success,
    default: '#DEE4E8',
    purple: purple,
    secondary: secondary,
    yellow: yellow,
    white: '#FFFFFF',
    dark: white,
    greyLighten: greyLighten,
    grey: grey,
    c1: '#DA3F81',
    c2: '#DD528D',
    c3: '#E06398',
    c4: '#E374A3',
    c5: '#E785AF',
    c6: '#EA97BA',
    c7: '#EEA8C6',
    c8: '#F1B9D1',
    c9: '#ffb3d1 ',
    darkgreen1: '#C272FF',
    darkgreen2: '#DBADFE',
    darkgreen3: '#8AF96E',
    darkgreen4: '#00E670',
    darkgreen5: '#FF8560',
    darkgreen6: '#FA7B55',
    // darkgreen1: '#223485',
    // darkgreen2: '#2b41a7',
    // darkgreen3: '#334dc8',
    // darkgreen4: '#3956de',
    // darkgreen5: '#7489e8',
    // darkgreen6: '#b0bbf2',
  },
  legendFontColor: '#AAAEB3', // only works on react chart js 2
  chartGridColor: '#EAEAEA',
  axesColor: '#657786',
  shadowColor: 'rgba(0,0,0,0.6)',
};

// Tooltip Styles
export const tooltipStyle = {
  backgroundColor: '#DA3F81',
  border: '1px solid #DA3F81',
  borderRadius: '5px',
};

export const tooltipTextStyle = {
  color: '#DA3F81',
  fontSize: '12px',
  paddingTop: '5px',
  paddingBottom: '5px',
  lineHeight: '1',
};

export default ChartConfig;
