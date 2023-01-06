import styled from "styled-components";

export default function Home(): JSX.Element {
  return (
    <MainHeader>
      <h2>Welcome</h2>
      <a href="/">
        <Button>Sair</Button>
      </a>
    </MainHeader>
  );
}

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background: #008800;
  border-radius: 12px;
  color: #fff;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  cursor: pointer;
`;
