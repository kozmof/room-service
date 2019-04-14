import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Editor, EditorState } from 'draft-js';

interface TestState {
  editorState: EditorState;
}

export class TestEditor extends React.Component<{}, TestState> {
  constructor() {
    super({});
    this.state = { editorState: EditorState.createEmpty() };
  }

  handleChange(e: EditorState) {
    this.setState({ editorState: e });
  }

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={e => this.handleChange(e)} />
    );
  }
}
