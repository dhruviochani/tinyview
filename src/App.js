import logo from './logo.svg';
import './App.css';
import Header from './components/header_navbar/header';
import Navbar from './components/header_navbar/navbar';
import LeftPanel from './components/panels/left_panel/about';
import RightPanel from './components/panels/right_panel/right';

const App =()=>
{
  return(
    <>
    <Header/>
    {/* <Navbar/> */}
    <LeftPanel/>
    <RightPanel/>
    </>
  )
}
export default App;
