import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Modal from '../components/Modal';
import Point from '../components/Point';
import ListAdd from '../components/List-add';
import { CheckUserPoint } from '../store/actions/CheckUserPoint';
import { bindActionCreators } from 'redux';

class PageIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Modal />
        <Search />
        {
          this.props.points.availablePoints.map(point => <Point point={point} onClick={() => this.props.checkPoint(point) } />)
        }
        <ListAdd />
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      points: state.availablePoints
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
      checkPoint: bindActionCreators(CheckUserPoint, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageIndex);