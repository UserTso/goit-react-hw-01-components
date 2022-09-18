import UserProfile from './Profile/Profile';
import userData from './Profile/user.json';

import {Statistics} from './Statistics/Statistics';
import statData from './Statistics/data.json';


export const App = () => {
  return (
   <><UserProfile 
   username={userData.username}
   tag={userData.tag}
   location={userData.location}
   avatar={userData.avatar}
   stats={userData.stats}
   />
   <Statistics 
   title="Upload stats"
 stats={statData}
   />
   </>
   );
   
};





