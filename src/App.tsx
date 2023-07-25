import Navigation from "./components/Navigation";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase/firebase-config";
import AllNews from "./components/AllNews";


function App() {

  const firebaseConfig = getFirebaseConfig();
  initializeApp(firebaseConfig);
  
  return (
    <div>
      <Navigation />
      <AllNews />
    </div>
  );
}

export default App;
