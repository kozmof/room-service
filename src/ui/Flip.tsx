import * as React from "react"; 

export type FlipState<R> = {
  isMutable: boolean;
  refs: R;
}

export type RexFlipState<R, S extends FlipState<R>> = Readonly<Exclude<S, "isMutable" | "refs">>;

interface JSXFactory<R, S extends FlipState<R>, RES extends RexFlipState<R, S>> {
  mutableJSX(refs: R): JSX.Element;
  immutableJSX(rexState: RES): JSX.Element;
  toRES(s: S): RES;
}

export abstract class Flipper <R, P, S extends FlipState<R>, RES extends RexFlipState<R, S>> extends React.Component<P, S> implements JSXFactory<R, S, RES>{
  constructor(props: P, initState: S) {
    super(props);

    Object.keys(initState.refs).forEach(
      (key) => {
        initState.refs[key] = React.createRef();
      } 
    )

    this.state = initState;

    this.flip.bind(this);
    this.mutableJSX.bind(this);
    this.immutableJSX.bind(this);
    this.toRES.bind(this);

  }

  abstract mutableJSX(refs: R) : JSX.Element;
  abstract immutableJSX(rexState: RES) : JSX.Element;
  abstract toRES(s: S): RES;

  flip () {
    if(this.state.isMutable) {
      this.setState({ isMutable: false });
    } else {
      this.setState({ isMutable: true }); 
    }
  }  

  render () {
    if(this.state.isMutable){
      return(
        this.mutableJSX(this.state.refs)
      );
    } else {
      return(
        this.immutableJSX(this.toRES(this.state))
      ); 
    }
  }
}
