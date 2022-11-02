import { Outlet } from 'react-router-dom';

import Directory from "../../components/directory/directory.component";
const Home = () => {

  return (
    <div>
      <Directory />
      <Outlet /> {/* Displays Outlet <Shop/> below the directory */}
    </div>
  );
}

export default Home