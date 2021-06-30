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
