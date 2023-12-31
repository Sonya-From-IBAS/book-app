import { DivComponent } from "../../common/div-components";
import { Card } from "../card/card";
import './cardList.css';

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }

  render() {
    if (this.parentState.loading) {
      this.el.innerHTML = `<div class="card_list__loader">Загрузка...</div>`;
      return this.el;
    }

    const cardGrid = document.createElement("div");
    cardGrid.classList.add("card_grid");
    this.el.append(cardGrid);
    console.log(this.parentState.list);
    for (const card of this.parentState.list) {
      cardGrid.append(new Card(this.appState, card).render());
    }
    return this.el;
  }
}
