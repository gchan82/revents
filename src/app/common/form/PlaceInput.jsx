import React, { Component } from "react";
import { Form, Label } from "semantic-ui-react";
import Script from "react-load-script";
import PlacesAutocomplete from "react-places-autocomplete";

const styles = {
  autocompleteContainer: {
    zIndex:1000
  }
}

export class PlaceInput extends Component {
  state = {
    scriptLoaded: false
  };

  handleScriptLoaded = () => this.setState({ scriptLoaded: true });

  render() {
    const {
      input,
      width,
      onSelect,
      placeholder,
      options,
      meta: { touched, error }
    } = this.props;
    return (
      <div>
        <Form.Field error={touched && !!error} width={width}>
          <Script
            url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJpX7EGnBhTC7GNcZOaZzHtnxw6GBu8fA&libraries=places"
            onLoad={this.handleScriptLoaded}
          />
          {this.state.scriptLoaded && (
            <PlacesAutocomplete
              inputProps={{ ...input, placeholder }}
              options={options}
              onSelect={onSelect}
              styles={styles}
            />
          )}
          {touched &&
            error && (
              <Label basic color="red">
                {error}
              </Label>
            )}
        </Form.Field>
      </div>
    );
  }
}

export default PlaceInput;
