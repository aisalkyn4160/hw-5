import './App.css';
import { TextArea } from './components/Textarea';
import {Inp} from './components/Input'
import Select from './components/Select';

function App() {
  return (
    <div className="App">
      <h1>Two way data binding</h1>
      <TextArea/>
      <Inp/>
      <Select/>
    </div>
  );
}

export default App;
