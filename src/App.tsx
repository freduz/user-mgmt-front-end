import './App.css';
import Header from './common/header/header.component';
import UserList from './components/user-list/user-list.component';


function App() {
  return (
    <div className="App">
      <div className="container max-w-screen-2xl m-auto p-20 flex flex-col justify-between gap-4">
      <Header/>
      <UserList/>
      </div>
    </div>
  );
}

export default App;
