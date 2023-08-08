import Navigation from "./components/Navigation";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase/firebase-config";
import AllNews from "./components/AllNews";
import FavouriteNews from "./components/FavouriteNews";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";


function App() {

  const firebaseConfig = getFirebaseConfig();
  initializeApp(firebaseConfig);

  return (
    <div>
      <Navigation />
      <Tabs isFitted variant='enclosed' mt={5}>
        <TabList mb='1em'>
          <Tab>All News</Tab>
          <Tab>My Favourites</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AllNews />
          </TabPanel>
          <TabPanel>
            <FavouriteNews />
          </TabPanel>
        </TabPanels>
      </Tabs>
   

    </div>
  );
}

export default App;
