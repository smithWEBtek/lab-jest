import catKick from "../src/Assets/Images/roundhouse.jpeg";
import "./App.css";

function App() {
  console.log('new Date() ms time: ', new Date().getMilliseconds());
  console.log('new Date(Date.now()) ms time: ', new Date(Date.now()).getMilliseconds());
  console.log('new Date() s time: ', new Date().getSeconds());
  console.log('new Date(Date.now()) s time: ', new Date(Date.now()).getSeconds());
  console.log('new Date() time: ', new Date());
  console.log('new Date(Date.now()) time: ', new Date(Date.now()));
  console.log('Date.now() time: ', Date.now());
  console.log('new Date().getTime() time: ', new Date().getTime());

  return (
    <div className="App">
      <figure>
        <img
          src={catKick}
          alt="Cat executing a roundhouse kick"
        />
        <br />
        <figcaption>
          Master Cat demonstrates proper form of a roundhouse kick.
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
