import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Form = styled.form`
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
  display: flex;

  input {
    height: 55px;
    flex: 1;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #f00' : 0)};
  }

  button {
    height: 55px;
    width: 80px;
    padding: 0 20px;
    background: #63f5b8;
    margin-left: 10px;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: #52d89f;
    }
  }
`;
