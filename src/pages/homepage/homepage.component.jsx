import React from 'react';
import Directory from '../../components/directory/directory.component'

import './homepage.styles.scss';

//functional component because it doesn't hold state. Renders HTML
const HomePage = () => (
  <div className= 'homepage'>
    <Directory />
  </div>
)


export default HomePage;