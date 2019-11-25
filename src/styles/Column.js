import styled from "styled-components";

const Container = styled.section`
  width: 272px;
  min-width: 272px;
  height: 100%;
  max-height: 100%;
  margin: 0 8px;
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;
  border-radius: 3px;
  white-space: normal;
  vertical-align: top;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    width: calc(100vw - 16px);
    min-width: calc(100vw - 16px);
  }
`;

const H1 = styled.h1`
  padding: 10px 16px;
  min-height: 20px;
  color: #172b4d;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

const Tabs = styled.div`
  width: 100%;
  min-height: 30px;
`;

const Add = styled.div`
  height: 38px;
  margin: 2px 8px 8px 8px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  color: #5e6c84;
  border-radius: 3px;
  font-weight: 300;
  line-height: 30px;
  cursor: pointer;
  transition: color ease-in-out 300ms, background-color ease-in-out 300ms;

  span:first-of-type {
    margin-right: 8px;
    color: rgb(107, 119, 140);
    font-size: 24px;
  }

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }
`;

const Tab = styled.div`
  min-height: 32px;
  margin: 0 8px 8px 8px;
  padding: 0 8px;
  color: #172b4d;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: opacity ease-in-out 400ms;

  &:hover {
    opacity: 0.7;
  }
`;

const Form = styled.form`
  min-height: 32px;
  margin: 0 8px 8px 8px;
  padding: 8px;
  color: #172b4d;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  display: flex;
  flex-direction: column;
  line-height: 32px;
  font-size: 14px;
  font-weight: 400;
  cursor: auto;
  transition: opacity ease-in-out 400ms;
`;

const FormInput = styled.input`
  margin-bottom: 8px;
  padding: 0 8px;
  height: 32px;
  border: ${({ error }) => (error ? "red" : "#ccc")} solid 1px;
  border-radius: 3px;
`;

const FormTextarea = styled.textarea`
  height: ${({ height }) => height}px;
  margin-bottom: 8px;
  padding: 8px;
  border: ${({ error }) => (error ? "red" : "#ccc")} solid 1px;
  border-radius: 3px;
  resize: none;
  font-family: "Roboto";
  overflow: hidden;
`;

const FormImageInput = styled.input`
  display: none;
`;

const FormImageLabel = styled.label`
  margin-top: -8px;
  color: ${({ error }) => error && "red"};
  cursor: pointer;

  p {
    margin-bottom: 16px;
    color: ${({ error }) => error && "red"};
    font-size: 12px;
    line-height: 1;
  }
`;

const FormImage = styled.img`
  max-width: 100%;
  margin-bottom: 8px;
`;

const FormSubmit = styled.input`
  display: inline-block;
  width: 72px;
  height: 32px;
  color: #fff;
  background-color: #5aac44;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity ease-in-out 300ms;

  &:hover {
    opacity: 0.7;
  }
`;

export default {
  Container,
  H1,
  Tabs,
  Add,
  Tab,
  Form,
  FormInput,
  FormTextarea,
  FormImageInput,
  FormImageLabel,
  FormImage,
  FormSubmit
};
