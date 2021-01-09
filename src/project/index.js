import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./about/about"
import Footer from "./footer/footer"
import Home from "./home"
import Menu from "./menu/menu"
import Services from './services'
import Contact from "./contact"
import PortFolio from "./portfolio"

const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Menu />
                <Switch>
                <Route path="/about"><About/></Route>
                <Route path="/services"><Services/></Route>
                <Route path="/contact"><Contact/></Route>
                <Route path="/portfolio"><PortFolio/></Route>
                <Route path="/"><Home/></Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default Index