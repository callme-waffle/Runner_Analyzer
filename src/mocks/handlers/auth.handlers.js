import { http as router } from "msw";

import { convertArguments, setBaseURI } from "../common";
import * as authController from "../controllers/auth.controller";



// [GET]
const sessionRoute = router.get(
    setBaseURI('/auth/session'), 
    ( ...attrs ) => convertArguments( attrs, authController.sessionGET )
);


// [POST]
const loginRoute = router.post(
    setBaseURI('/auth/login'), 
    ( ...attrs ) => convertArguments( attrs, authController.loginPOST )
);
const logoutRoute = router.post(
    setBaseURI('/auth/logout'), 
    ( ...attrs ) => convertArguments( attrs, authController.logoutPOST )
);

export default [ sessionRoute, loginRoute, logoutRoute ];