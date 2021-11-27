import Accordion from "./Components/Accordion";
import { items, options } from "./util";
import Search from "./Components/Search";
import DropDown from "./Components/DropDown";
import { useState } from "react/cjs/react.development";
import Translate from "./Components/Translate";
import Route from "./Components/Route";
import Header from "./Components/Header";

const App = () => {

    const [selectedColor,setSelectedColor] = useState(options[0]);

    return(
        <div>
            <Header />
            <Route path="/" >
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <DropDown options={options} selected={selectedColor} onDdChange={setSelectedColor} label="color"/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;
