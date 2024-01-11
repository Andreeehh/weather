import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120%;
  width: 120%;
`;

export const LightBeam = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  background: linear-gradient(to bottom, rgba(240, 255, 137, 0) 0%, rgba(240, 255, 137, 0.1) 50%, rgba(0, 0, 0, 0) 100%);
  transform-origin: 100% 50%;
`;
