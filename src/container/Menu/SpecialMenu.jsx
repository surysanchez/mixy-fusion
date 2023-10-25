import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';

import './SpecialMenu.css';

// ***** ACCORDION MENU ******
// import { useContext } from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import AccordionContext from 'react-bootstrap/AccordionContext';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import Card from 'react-bootstrap/Card';

// const WHITE = '#a67c00';
// const GOLD = '#F0F5F6';


// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey),
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <button
//       type="button"
//       style={{ backgroundColor: isCurrentEventKey ? GOLD : WHITE }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu' >
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your Palatte"  />
     <h1 className='headtext__cormorant'>Our Menu</h1>


        {/*  ****** ACCORDION MENU ******  */}
{/*    
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="0">Show Menu</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <img src={images.foodmenu} alt="" />
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}

      {/* <Card>
        <Card.Header>
          <ContextAwareToggle eventKey="1"></ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <img src="" alt="" />
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}
    {/* </Accordion> */}
    </div>

                                      {/* DRINKS MENU */}
    {/* Other way to set up the menu  */}
    <div className='app__specialMenu-menu'>
    <div className='app_specialMenu-menu_wine flex__center'>
      <p className='app__specialMenu_menu_heading'>Starters/Appetisers</p>
      <div className='app__specialMenu_menu_items'>
      {data.wines.map((wine, index) => (
        <p>{wine.title}</p>
      ))}
      </div>
    </div>

    <div className='app__specialMenu-menu_img'>
      <img src={images.menu} alt="menu img" />
    </div>

    <div className='app_specialMenu-menu_cocktails flex__center'>
      <p className='app__specialMenu_menu_heading'>Starters/Appetisers</p>
      <div className='app__specialMenu_menu_items'>
      {data.cocktails.map((cocktail, index) => (
        <p>{cocktail.title}</p>
      ))}
      </div>
    </div>


    </div>
  </div>
);

export default SpecialMenu;
