import React, { Component } from 'react';
import elements from './elements.json';
import Modal from 'react-responsive-modal';

class Elements extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleChange = this.handleChange.bind(this);
    this.initElementsToState();
  }

  initElementsToState() {
    let desc,descr,name,title;
    elements.map((el, i) => {
      title = el[Object.keys(el)[1]];
      desc = el[Object.keys(el)[2]];
      name = "title" + i;
      descr = "desc" + i;
      this.state[name] = title;
      this.state[descr] = desc;
      this.state["open"+i] = false;
    });
  }

  onOpenModal = (i) => {
    this.state["open"+i] = true;
  };

  onCloseModal = () => {
    elements.map((el, i) => {
      this.state["open"+i] = false;
    });
  };

  onSaveModal = () => {
    // doesn nothing now, future save to db 
    this.onCloseModal();
  };

  handleChange = event => {
      this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { open } = this.state;
    return (
     <div className="elements">
         {elements.map((el, i) => 
           <div>
               Title: {this.state["title"+i]}
               <br/>
               Description: {this.state["desc"+i]}
               <br/>
               <button onClick={this.onOpenModal(i)}>Edit</button>
               <br/><br/>
               <Modal open={["open"+i]} onClose={this.onCloseModal} center>
                 <h1>Edit</h1>
                 <p>Title:</p>
                 <p>
                   <input type="text" name={"title"+i} value={this.state["title"+i]}
                     onChange={this.handleChange.bind(this)} />
                 </p>
                 <p>Description:</p>
                 <p>
                   <input type="text" name={"desc"+i} value={this.state["desc"+i]}
                     onChange={this.handleChange.bind(this)} />
                </p>
                 <button onClick={this.onSaveModal}>
                   Save
                 </button>
               </Modal>
           </div>
         )}
      </div>
    );
  }
}


export default Elements;
