import logo from './logo.svg';
import './App.css';
import Header from './components/navbar/header_navbar';
import LeftPanel from './components/panels/left_panel/about';
import RightPanel from './components/panels/right_panel/right';

const App =()=>
{
  return(
    <>
    <Header/>
    <LeftPanel/>
    <RightPanel/>
    </>
  )
}
export default App;
