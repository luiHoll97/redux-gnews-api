import Navigation from "./components/Navigation";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "./firebase/firebase-config";


function App() {

  const firebaseConfig = getFirebaseConfig();
  initializeApp(firebaseConfig);
  
  return (
    <div>
      <Navigation />
    </div>
  );
}

export default App;
