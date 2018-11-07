import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import Video from './Video';
import Text from './Text';

import './css/main.css';
import '../../node_modules/video-react/dist/video-react.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      interiorVideoSrc: ['./src/client/media/segments/00012.mov', './src/client/media/segments/00003.mov', './src/client/media/segments/00004.mov', './src/client/media/segments/00005.mov', './src/client/media/segments/00006.mov'],
      greeting: 'hello',
    };
  }

  render() {
    return (
      <div>
        <Video src={this.state.interiorVideoSrc} />
        <Text greeting={this.state.greeting} />
      </div>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import Video from './Video';
// import Text from './Text';

// import './css/main.css';
// import '../../node_modules/video-react/dist/video-react.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       greeting: 'Welcome to React',
//     };
//   }

//   componentDidMount() {}

//   render() {
//     console.log('this', this.state.greeting)
//     return (
//       <div>
//         <Text greeting={this.state.greeting} />
//       </div>
//     );
//   }
// }

// export default App;
