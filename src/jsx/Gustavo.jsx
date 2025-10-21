import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
// import formatNr from './helpers/FormatNr.js';
// import roundNr from './helpers/RoundNr.js';

// const appID = '#app-root-gustavo.teelmo.info';

// https://github.com/prabhuignoto/react-chrono
import { Chrono } from 'react-chrono';

function Timeline() {
  // Data states.
  // const [data, setData] = useState(false);

  const items = [{
    cardDetailedText: ['This room is going to be too loud for working.”', 'Tim and Teemo are also present, nodding along.'],
    cardSubtitle: 'Gustavo expresses a concern to Amalia:',
    cardTitle: '📍 Concordia Room',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/gustavo.png'
      }
    },
    title: 'Thursday around 3:00 PM'
  }, {
    cardDetailedText: ['No meetings or calls should take place here. Gustavo is assumably happy!'],
    cardSubtitle: 'Please note: the Concordia room is for work only.',
    cardTitle: 'Email to All Staff',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/amalia.png'
      }
    },
    title: 'Thursday around 7:30 PM'
  }, {
    cardDetailedText: [''],
    cardSubtitle: '',
    cardTitle: '',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/unctad.jpg'
      }
    },
    title: 'Days go by'
  }, {
    cardDetailedText: ['"I need to call Tim to clear this, but I will try to be very subtle".'],
    cardSubtitle: '',
    cardTitle: 'Teemo calls Tim',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/teemo.png'
      }
    },
    title: 'Tuesday around 13:00 PM'
  }, {
    cardDetailedText: ['... there is a problem with the "audio".'],
    cardSubtitle: 'Teemo explains the question but…',
    cardTitle: 'Tim answers from the Concordia room',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/tim.png'
      }
    },
    title: ''
  }, {
    cardDetailedText: [''],
    cardSubtitle: '',
    cardTitle: 'As all Teemo can hear is Gustavo talking in the background',
    media: {
      type: 'IMAGE',
      source: {
        url: './assets/img/gustavo.png'
      }
    },
    title: ''
  }];

  useEffect(() => {
    try {
      console.log('');
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="app">
      <div className="timeline_header">The start</div>
      <div className="timeline_container">

        <Chrono
          activeItemIndex={false}
          disableClickOnCircle
          disableInteraction
          disableToolbar
          fontSizes={{
            cardSubtitle: '16px',
            cardText: '16px',
            cardTitle: '24px',
            title: '24px',
          }}
          items={items}
          lineWidth={5}
          mediaSettings={{ fit: 'contain' }}
          mode="VERTICAL_ALTERNATING"
          parseDetailsAsHTML
          theme={{
            cardBgColor: '#EBEAE6',
            cardMediaBgColor: '#EBEAE6',
            cardTitleColor: '#000',
            primary: '#009edb',
            secondary: '#ffc800',
            titleColor: '#000',
            titleColorActive: '#000',
          }}
          useReadMore={false}
        />
      </div>
      <div className="timeline_header">The end</div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default Timeline;
