/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H1 from 'components/H1';
import Section from './Section';
import messages from './messages';

export default class ItemsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
    };

    this.handleChange = this.handleIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleSubmit(e) {
    alert(`An essay was submitted: ${this.state.name}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <H2>
          <FormattedMessage {...messages.itemID} />
        </H2>
        <input
          type="text"
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <H2>
          <FormattedMessage {...messages.itemName} />
        </H2>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
