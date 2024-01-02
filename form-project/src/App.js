import './App.css';
import PrimaryButton from './components/PrimaryButton';

function App() {

  const handleButtonClick = () => {
    console.log("Bouton cliqué !");
  }

  return (
    <div>
      <PrimaryButton text="Cliquez-moi" onClick={handleButtonClick}/>
    </div>
   
  );
}

export default App;
