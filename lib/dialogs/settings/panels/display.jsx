import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import RadioGroup from '../../radio-settings-group';
import SettingsGroup, { Item } from '../../settings-group';
import ToggleGroup from '../../toggle-settings-group';

import appState from '../../../flux/app-state';
import * as settingsActions from '../../../state/settings/actions';
import { loadTags } from '../../../state/domain/tags';

const DisplayPanel = props => {
  const {
    actions,
    activeTheme,
    buckets: { noteBucket },
    lineLength,
    loadNotes,
    noteDisplay,
    sortIsReversed,
    sortTagsAlpha,
    sortType,
  } = props;

  const withCallback = ({ action, callback }) => arg => {
    action(arg);
    callback();
  };

  return (
    <Fragment>
      <SettingsGroup
        title="Note display"
        slug="noteDisplay"
        activeSlug={noteDisplay}
        onChange={actions.setNoteDisplay}
        renderer={RadioGroup}
      >
        <Item title="Comfy" slug="comfy" />
        <Item title="Condensed" slug="condensed" />
        <Item title="Expanded" slug="expanded" />
      </SettingsGroup>

      <SettingsGroup
        title="Line length"
        slug="lineLength"
        activeSlug={lineLength}
        onChange={actions.setLineLength}
        renderer={RadioGroup}
      >
        <Item title="Narrow" slug="narrow" />
        <Item title="Full" slug="full" />
      </SettingsGroup>

      <SettingsGroup
        title="Sort type"
        slug="sortType"
        activeSlug={sortType}
        onChange={withCallback({
          action: actions.setSortType,
          callback: () => loadNotes(noteBucket),
        })}
        renderer={RadioGroup}
      >
        <Item title="Date modified" slug="modificationDate" />
        <Item title="Date created" slug="creationDate" />
        <Item title="Alphabetical" slug="alphabetical" />
      </SettingsGroup>

      <SettingsGroup
        title="Sort order"
        slug="sortOrder"
        activeSlug={sortIsReversed ? 'reversed' : ''}
        onChange={withCallback({
          action: actions.toggleSortOrder,
          callback: () => loadNotes(noteBucket),
        })}
        renderer={ToggleGroup}
      >
        <Item title="Reversed" slug="reversed" />
      </SettingsGroup>

      <SettingsGroup
        title="Tags"
        slug="sortTagsAlpha"
        activeSlug={sortTagsAlpha ? 'alpha' : ''}
        onChange={withCallback({
          action: actions.toggleSortTagsAlpha,
          callback: props.loadTags,
        })}
        renderer={ToggleGroup}
      >
        <Item title="Sort Alphabetically" slug="alpha" />
      </SettingsGroup>

      <SettingsGroup
        title="Theme"
        slug="theme"
        activeSlug={activeTheme}
        onChange={actions.activateTheme}
        renderer={RadioGroup}
      >
        <Item title="Light" slug="light" />
        <Item title="Dark" slug="dark" />
      </SettingsGroup>
    </Fragment>
  );
};

DisplayPanel.propTypes = {
  actions: PropTypes.object.isRequired,
  activeTheme: PropTypes.string.isRequired,
  buckets: PropTypes.shape({
    noteBucket: PropTypes.object.isRequired,
  }),
  lineLength: PropTypes.string.isRequired,
  loadNotes: PropTypes.func.isRequired,
  loadTags: PropTypes.func.isRequired,
  noteDisplay: PropTypes.string.isRequired,
  sortIsReversed: PropTypes.bool.isRequired,
  sortTagsAlpha: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = ({ settings }) => {
  return {
    activeTheme: settings.theme,
    lineLength: settings.lineLength,
    noteDisplay: settings.noteDisplay,
    sortIsReversed: settings.sortReversed,
    sortTagsAlpha: settings.sortTagsAlpha,
    sortType: settings.sortType,
  };
};

const mapDispatchToProps = dispatch => {
  const { loadNotes } = appState.actionCreators;
  return {
    actions: bindActionCreators(settingsActions, dispatch),
    loadNotes: noteBucket => dispatch(loadNotes({ noteBucket })),
    loadTags: () => dispatch(loadTags()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPanel);
