import UserProfile from './Profile/Profile';
import userData from './Profile/user.json';


export const App = () => {
  return (
   <UserProfile 
   username={userData.username}
   tag={userData.tag}
   location={userData.location}
   avatar={userData.avatar}
   stats={userData.stats}
   />
  );
};



