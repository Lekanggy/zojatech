import styled from 'styled-components';
import { Row } from '../../globalStyles';

const CircleContainer = styled(Row)`
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckMark = styled.div`
  width: 60%;
  height: 60%;
  border-bottom: 4px solid #fff;
  border-right: 4px solid #fff;
  transform: rotate(45deg);
`;

const CheckCircle = () => {
  return (
    <CircleContainer>
      <CheckMark />
    </CircleContainer>
  );
};

export default CheckCircle;
