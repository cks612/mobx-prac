import { makeObservable, observable } from "mobx";

export default class PersonStore {
  @observable
  name = "Mark";

  @observable
  age = 39;

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }
}
