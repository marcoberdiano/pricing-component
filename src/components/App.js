import Secondary from './cards/Secondary';
import Primary from './cards/Primary';
import {useState} from 'react';
import Switch from './switch/Switch';

function App() {

  const [plan, setPlan] = useState('Anually');

  const handlePlan = () => {
    console.log(plan)
    plan === 'Anually' ? setPlan('Monthly' ): setPlan('Anually');
  }
  
  return (
    <div className="app-container">
      <header className='header-container'>
            <h1>Our Pricing</h1>
            <div className='switch-container'>
                <p>Annually</p>
                <Switch onClick={handlePlan}/>
                <p>Monthly</p>
            </div>
      </header>
      <main className='main-container'>
        <Secondary planPrice={plan} plan='Basic' />
        <Primary planPrice={plan}/>
        <Secondary planPrice={plan} plan='Master'/>
      </main>
      <footer class="footer">
        Challenge by <a className='link' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='link' href="https://www.frontendmentor.io/profile/marcoberdiano"><span className='author'>Marco</span></a>.
      </footer>
    </div>
  );
}

export default App;
