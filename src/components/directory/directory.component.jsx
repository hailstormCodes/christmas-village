import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import accessories from '../../assets/images/directory/accessories.png';
import figurines from '../../assets/images/directory/figurines.png';
import villages from '../../assets/images/directory/lemax-villages.png'
import lightedBuilding from '../../assets/images/directory/lighted-buildings.png'
import facades from '../../assets/images/directory/facades.png'


import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id:1,
          imageURL: villages,
          title: 'Villages',
          websiteURL:'https://www.lemaxcollection.com/villages',
        },
        {
          id:2,
          imageURL: facades,
          title: 'Facades',
          websiteURL:'https://www.lemaxcollection.com/categories/facades',
        },
        {
          id:3,
          imageURL: lightedBuilding,
          title: 'Lighted Buildings',
          websiteURL:'https://www.lemaxcollection.com/categories/lighted-buildings'
        },
        {
          id:4,
          imageURL: figurines,
          title: 'Figurines',
          websiteURL:'https://www.lemaxcollection.com/categories/figurines',
          size: 'large'
        },
        {
          id:5,
          imageURL: accessories,
          title: 'Accessories',
          websiteURL:'hhttps://www.lemaxcollection.com/categories/accessories',
          size: 'large'
        }
      ]
    }
  }
 
  render() {
    return (
      <div className='directory-menu'> 
        {
          this.state.sections.map(({title, imageURL, websiteURL,id, size}) => (
            <MenuItem key={id} title={title} imageURL={imageURL} size={size}/>
           ))
        }
      </div>
    )
}
}

export default Directory