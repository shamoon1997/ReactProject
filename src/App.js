import EditBullet from './components/EditBullet';
import BulletPoint from './components/BulletPoint';
import { useState } from 'react';
import "./style/App.css"
import logo from './logo.svg';
function App() {
  const [heading, setheading] = useState();
  const [bullets, setbullets] = useState([]);
  function fixBullet(text) {
    if (text) {
      setbullets([...bullets, text])
    }

  }
  function removeBullet(index) {
    bullets.splice(index, 1);
    setbullets([...bullets]);
  }
  return (
    <div className="App">
      <EditBullet setheading={setheading} fixBullet={fixBullet} removeBullet={removeBullet} />
      <BulletPoint heading={heading} bullets={bullets} />
    </div>
  );
}

export default App;
