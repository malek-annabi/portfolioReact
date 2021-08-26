
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Modal } from 'react-bootstrap';
// import Mymodal from './Mymodal/Mymodal';
// export default function Portfolio() {

//   function constructor(props) {
//     super(props);

//     this.state = {
//       show: false,
//       title: '',
//       body: '',
//       data: []
//     };
//   }

//   handleShow = () => {

//     const myObject = [
//       {
//         id: 1,
//         name: 'Victor Rippin',
//         address: '4032 Cordia Streets'
//       }, {
//         id: 2,
//         name: 'Jamey Zieme',
//         address: '3733 Tremblay Throughway'
//       }, {
//         id: 3,
//         name: 'Madelyn Ruecker Sr.',
//         address: '44487 Reba Drive'
//       },
//     ];

//     this.setState({
//       show: true,
//       title: 'Group People',
//       body: 'Hi, find my group details',
//       data: myObject
//     });
//   };

//   handleClose = (fromModal) => {
//     alert(fromModal.msg);

//     this.setState({
//       show: false
//     });
//   };


//   function render(){



//     return (
//       <div>
//         <Button variant="primary" onClick={this.handleShow} >
//           Launch Bootstrap Modal
//         </Button>

//         <MyModalComponent
//           show={this.state.show}
//           title={this.state.title}
//           body={this.state.body}
//           data={this.state.data}
//           onClick={this.handleClose}
//           onHide={this.handleClose} />

//       </div>
//     );
//   };
//   const list = [
//     {
//       id: "featured",
//       title: "Featured",
//     },
//     {
//       id: "web",
//       title: "Web App",
//     },
//     {
//       id: "mobile",
//       title: "Mobile App",
//     },
//     {
//       id: "design",
//       title: "Design",
//     }
//   ];

//   useEffect(() => {
//     switch (selected) {
//       case "featured":
//         setData(featuredPortfolio);
//         break;
//       case "web":
//         setData(webPortfolio);
//         break;
//       case "mobile":
//         setData(mobilePortfolio);
//         break;
//       case "design":
//         setData(designPortfolio);
//         break;
//       default:
//         setData(featuredPortfolio);
//     }
//   }, [selected]);
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  

//   return (
//     <div className="portfolio" id="portfolio">
//       <h1>Portfolio</h1>
//       <ul>
//         {list.map((item) => (
//           <PortfolioList
//             title={item.title}
//             active={selected === item.id}
//             setSelected={setSelected}
//             id={item.id}
//           />
//         ))}
//       </ul>
//       <div className="container">
//         {data.map((d) => (
//           <div className="item">
//             <img
//             onClick={handleShow}
//               src={d.img}
//               alt="d.title"
//             />
//             <h3>{d.title}</h3>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{d.title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{d.content}</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Mymodal from '../mymodal/Mymodal';
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";

class Portfolio extends Component {


  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: '',
      body: '',
      data: []
    };
  }

  handleShow = () => {

    const myObject = [
      {
        id: 1,
        name: 'Victor Rippin',
        address: '4032 Cordia Streets'
      }, {
        id: 2,
        name: 'Jamey Zieme',
        address: '3733 Tremblay Throughway'
      }, {
        id: 3,
        name: 'Madelyn Ruecker Sr.',
        address: '44487 Reba Drive'
      },
    ];

    this.setState({
      show: true,
      title: 'Group People',
      body: 'Hi, find my group details',
      data: myObject
    });
  };

  handleClose = (fromModal) => {
    alert(fromModal.msg);

    this.setState({
      show: false
    });
  };


  render() {



    return (
      <div>
        <Button variant="primary" onClick={this.handleShow} >
          Launch Bootstrap Modal
        </Button>

        <Mymodal
          show={this.state.show}
          title={this.state.title}
          body={this.state.body}
          data={this.state.data}
          onClick={this.handleClose}
          onHide={this.handleClose} />

      </div>
    );
  }

}

export default Portfolio;
