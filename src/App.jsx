import "./App.css";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";
import { useState } from "react";

const INITIAL_STATE = [
  // {
  //   id: 1,
  //   title: "Это заголовок который придумал Ильдар",
  //   text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, eum ullam eaque laborum.",
  //   date: new Date(),
  // },
  // {
  //   id: 2,
  //   title: "qerbqerb qokrwenmg o okqergqm [erpwogmpq ",
  //   text: " kqnmwerog knqo[prg knqo[er kng[qopkren [opqienr go[qierngoqeinrg [oiqrneopijg nqeoirjng oqiperjrng ",
  //   date: new Date(),
  // },
];
function App() {
  const [items, setItems] = useState(INITIAL_STATE);

  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        id: oldItems > 0 ? Math.max(...oldItems.map((el) => el.id)) + 1 : 1,
        title: item.title,
        text: item.text,
        date: new Date(item.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm addItem={addItem} />
      </Body>
    </div>
  );
}

export default App;
