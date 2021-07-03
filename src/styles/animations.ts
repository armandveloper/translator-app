import { keyframes } from 'styled-components';

export const showAlertAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const hideAlertAnimation = keyframes`
  from {
    opacity: 1;
   }
  to {
    opacity: 0;
  }
`;

export const showToastAnimation = keyframes`
  from {
    transform: translate3d(0, 10rem, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

export const hideToastAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 10rem, 0);
  }
`;

export const spinnerGrowAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
`;
