import { Route, Router } from "react-router-dom";

<Router>
    <Route path="/about" Component={About} />
    <Route path="/detail" Component={Detail} />
    <Route path="/list" Component={List} />
    <Route path="/contact" Component={Contact} />
    <Route path="/" Component={Home} />
</Router>