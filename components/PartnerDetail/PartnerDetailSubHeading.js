import styled from 'styled-components';

import { below } from '../../utilities';

const PartnerDetailSubHeading = styled.h4`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  width: 100%;
  margin-top: 0;

  ${below.med`
    font-size: 2rem;
  `};
`;

export default PartnerDetailSubHeading;
