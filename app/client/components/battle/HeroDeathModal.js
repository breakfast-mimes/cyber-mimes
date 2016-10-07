import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const HeroDeathModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} aria-labelledby="contained-modal-title-lg">
        <Modal.Body className='heroDeathModal'>
          <h4>You Have Died</h4>
          <h4>You lost all your gold and experience.</h4>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Body>
      </Modal>
    );
  }
});

export default HeroDeathModal;