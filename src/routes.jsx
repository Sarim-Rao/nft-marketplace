import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./Pages/Home";
import Artist from "./Pages/Artist";
import Nft from "./Pages/Nft";
import MarketPlace from "./Pages/MarketPlace";
import Ranking from "./Pages/Ranking";
import ConnectWallet from "./Pages/Auth/ConnectWallet";
import CreateAccount from "./Pages/Auth/CreateAccount";
import NotFound from "./Pages/NotFound";

const routes =createBrowserRouter([
    {
        path:"/",
        element:<DefaultLayout />,

        children:[
            {
                index:true,  
                element:<Home />
            },
            {
                path:"/artist",
                element:<Artist />
            },
            {
                path:"/nft",
                element:<Nft />
            },
            {
                path:"/marketplace",
                element:<MarketPlace />
            },
            {
                path:"/ranking",
                element:<Ranking />
            },
            {
                path:"/connectwallet",
                element:<ConnectWallet />
            },
            {
                path:"/createaccount",
                element:<CreateAccount />
            }
           
            
        ]

    },
    {
        path:"*",
       element: <NotFound/>
    }
])

export default routes