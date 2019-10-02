import * as React from 'react';
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
    const selectionState = e.getSelection();
    const anchorKey = selectionState.getAnchorKey();

    const currentContent = e.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);

    const start = selectionState.getStartOffset();
    const end = selectionState.getEndOffset();

    const selectedText = currentContentBlock.getText().slice(start, end);

    console.log("--")
    console.log(anchorKey);
    console.log(start);
    console.log(end);
    console.log(selectedText)
    this.setState({ editorState: e });
  }

  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={e => this.handleChange(e)} />
    );
  }
}
