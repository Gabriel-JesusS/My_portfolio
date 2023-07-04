import Home from './SectionsOfPage/Home';
import Projects from './SectionsOfPage/Projects';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Home />
<Projects/>
    </div>
  )
}

export default App
