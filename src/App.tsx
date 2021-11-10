import React from 'react';
import { observer as observer7 } from './lib/mobx-react7'
import { makeAutoObservable, configure } from './lib/mobx6';

import { observer as observer6 } from './lib/mobx-react6'
import { decorate, observable, action } from './lib/mobx5';

configure({ isolateGlobalState: true })

class Store1 {
  count: number = 0;
  constructor() {
    // makeAutoObservable(this);
  }
  ins() {
    this.count++
  }
}

decorate(Store1, {
  count: observable,
  ins: action
})

const store1 = new Store1();

class Store2 {
  count: number = 0;
  constructor() {
    makeAutoObservable(this)
  }
  ins() {
    this.count++
  }
}

const store2 = new Store2();

function App() {
  return (
    <div className="App" onClick={() => store2.ins()}>
      count2: {store2.count}
    </div>
  );
}


const WrapApp = observer7(App);

const App2 = () => (
  <div>
    <WrapApp />
    <div onClick={() => store1.ins()}>
      count1: {store1.count}
    </div>
  </div>
)

export default observer6(App2);
