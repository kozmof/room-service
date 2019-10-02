import * as React from 'react';

interface CallPack<T> {
  callPack(): (item: T) => JSX.Element;
}

export interface StackItems<T> {
  items: Array<T>;
}

export abstract class IMStack<T, P extends StackItems<T>, S> extends React.Component<P, S> implements CallPack<T> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.callPack.bind(this)
  }

  abstract callPack(): (item: T) => JSX.Element;

  render(){
    const items = this.props.items || [];
    const rows = items.map(this.callPack());
    return(
      <table> 
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export abstract class MStack<T, P, S extends StackItems<T>> extends React.Component<P, S> implements CallPack<T> {
  constructor(props: P, initial_state: S){
    super(props); 
    this.state = initial_state;
    this.callPack.bind(this);
  }

  abstract callPack(): (item: T) => JSX.Element;

  render(){
    const rows = this.state.items.map(this.callPack());
    return(
      <table> 
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
