import Header from "./components/Header/Header";
import Expenses from "./components/Expenses/Expenses";

import "./css/typography.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <Expenses />
            </main>
        </>
    );
}

export default App;
