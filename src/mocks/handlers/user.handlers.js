import { http as router } from "msw";

import { convertArguments, setBaseURI } from "../common";
import * as userController from "../controllers/user.controller";



// [GET]
const listRoute = router.get(
    setBaseURI('/user/list'), 
    ( ...attrs ) => convertArguments( attrs, userController.userListGET )
);

const infoRoute = router.get(
    setBaseURI('/user/info'), 
    ( ...attrs ) => convertArguments( attrs, userController.userInfoGET )
);


// [POST]
const joinRoute = router.post(
    setBaseURI('/user/join'),
    ( ...attrs ) => convertArguments( attrs, userController.userJoinPOST )
);

export default [ 
    listRoute, 
    infoRoute, 
    joinRoute 
];