import React from 'react';

import GameContainer from './components/GameContainer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
          <GameContainer/>
      </main>
    </div>
  );
}

export default App;
