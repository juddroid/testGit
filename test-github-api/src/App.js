import styled from 'styled-components';

function App() {
  const getData = async () => {
    const response = await fetch('https://api.github.com/repos/juddroid/ccoonlog/issues', {
      method: 'GET',
      'Content-Type': 'application/json',
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  const handleClickButton = () => getData();

  return (
    <AppStyle>
      <Button onClick={handleClickButton}>Click</Button>
      <button>{'name master button'}</button>
      <button>{'name master button1'}</button>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
`;
