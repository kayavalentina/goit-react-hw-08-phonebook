import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: 12px;
`;

export const UserText = styled.p`
  font-weight: 700;
`;

export const AccentText = styled.span`
  color: white;
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-family: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;

  min-width: 80px;
  min-height: 30px;
  margin: 0;

  background-color: white;
  border: 2px black solid;
  border-radius: 5px;
  cursor: pointer;

  font-size: 16px;
  font-family: inherit;

  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);

  &:hover {
    color: white;
    background-color: black;
    border-color: white;
  }
`;
