import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import PointAdd from '../PointAdd';

import { Link } from 'react-router-dom';
import { CheckUserPoint } from '../../store/actions/CheckUserPoint';

class ListAdd extends React.Component {
  render() {
    return (
      <section className='listAdd'>
        <div className='listAdd__wrapper'>
          <ul className='trips__elements'>
            {
              this.props.points.checkedPoints.map(point => <PointAdd />)
            }
          </ul>

          <Link to='/route' className='listAdd__button'>
            Как добраться?
          </Link>
        </div>
      </section>
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
    loadAvailablePoints: () => {
      dispatch(CheckUserPoint());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListAdd);