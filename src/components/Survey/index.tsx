import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';


import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationState } from '../../store';
import * as RepositoriesActions from '../../store/ducks/repositories/actions';

// State props
interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;


class Survey extends Component<Props> {
  componentDidMount(){
    
  }

  render(){
    const { repositories } = this.props;
    
    return (
      <ul>
        {repositories.map(repo => <li>{repo.name}</li>)}
      </ul>
    )
  }
}
  
const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Survey);