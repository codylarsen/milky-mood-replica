import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";
import {ColourChanger} from "./ColourChanger";
import {TitleImage} from "./TitleImage";

function App() {
    return (
    <div className="App">
        <Header/>
        <ColourChanger/>
        <TitleImage/>
        <Footer/>
    </div>
  );
}

export default App;
