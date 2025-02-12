import "./App.css";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalItem from "./components/JournalItem/JournalItem";
import JournalList from "./components/JournalList/JournalList";
import Body from "./layouts/Body/Body";
import LeftPanel from "./layouts/LeftPanel/LeftPanel";

function App() {
  const data = [
    {
      title: "Это заголовок который придумал Ильдар",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, eum ullam eaque laborum.",
      date: new Date(),
    },
    {
      title: "qerbqerb qokrwenmg o okqergqm [erpwogmpq ",
      text: " kqnmwerog knqo[prg knqo[er kng[qopkren [opqienr go[qierngoqeinrg [oiqrneopijg nqeoirjng oqiperjrng ",
      date: new Date(),
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
