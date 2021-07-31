import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Badges from "./pages/Badges";
import BadgeNew from "./pages/BadgeNew";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import RickAndMortyAPI from "./pages/RickAndMortyApi";
import HomePageStore from "./componentes/store/pages/homepage/home-page.component";
import BagdeDetailsContainer from "./componentes/badge/badgedetails/BagdeDetailsContainer";
import Layout from "./componentes/layout/Layout";
import Monsters2 from "./componentes/monsters/Monsters2";
import BagdeEdit from "./pages/BadgeEdit";
import ShopPage from "./componentes/store/pages/shop/shop-page.component";
import StorePage from "./componentes/store/pages/storePage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route
            exact
            path="/badges/:badgeId"
            component={BagdeDetailsContainer}
          />
          <Route exact path="/badges/:badgeId/edit" component={BagdeEdit} />
          <Route exact path="/api" component={RickAndMortyAPI} />
          <Route exact path="/monsters" component={Monsters2} />

          <StorePage exact path="/:path?" />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
