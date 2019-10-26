import React from 'react';
import styled from 'styled-components';

import { below } from '../../utilities';

const AccentLine = styled.span`
  height: 4rem;
  border-right: 2px solid ${({ theme }) => theme.colors.tertiary};
  position: absolute;
  top: 13rem;
`;

const RoundImage = ({ className, imageUrl, size }) => {
  return (
    <>
      <img src={imageUrl} className={className} />
      <AccentLine size={size / 20} />
    </>
  );
};

export default styled(RoundImage)`
  width: ${({ size }) => size / 10}rem;
  height: ${({ size }) => size / 10}rem;
  border-radius: ${({ size }) => size / 10}rem;
`;
