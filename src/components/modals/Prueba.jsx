import React from 'react';

import Modal from './Modal.jsx';

class Prueba extends React.Component {
  state = {
    modalIsOpen: false,
  };

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  render(){
    return (
      <div>
        <button onClick={this.handleOpenModal}>
          Delete
        </button>
        <Modal onOpen={this.state.modalIsOpen} onClose={this.handleCloseModal}>
          <div className="">
            <h1>hello world</h1>
            <p>You are about to delete this badge.</p>

            <div>
              {/* <button onClick={} className="btn btn-danger mr-4">
                Delete
              </button> */}
              <button onClick={ this.handleCloseModal } className="">
                Cancel
              </button>
            </div>            
          </div>
        </Modal>  
      </div>
    );
  }  
};

export default Prueba;
