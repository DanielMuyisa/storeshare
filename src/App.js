import { Box } from '@mui/material';
import './App.css';
import BoxSx from './components/appBar';
import shopping from './assets/images/shopping.png';

function App() {
  return (
    <div className="App">
      <BoxSx />
      <Box
        sx={{
          height: 400,
          backgroundColor: "whitesmoke"
        }}
      >
        <img src={shopping} width={"80%"} alt={'bannier'} />
      </Box>
      <Box
        sx={{
          height: 400,
        }}
      >
      </Box>
      {/* <Box
        sx={{
          height: 400,
        }}
      >
      </Box> */}
    </div>
  );
}

export default App;
