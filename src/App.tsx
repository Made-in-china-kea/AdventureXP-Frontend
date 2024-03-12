import TextInput from "./component/TextInputField";
import DateInputFields from "./component/DateInputField";
import NumberInputFields from "./component/NumberInputField";
import "./App.css";

function App() {
  return (
    <div>
      <h1>This is for private events</h1>
      <form>
        <TextInput
          label="Fulde navn på kontaktperson"
          placeholder="Eksempel. Dennis-Zixiang Zhou"
        />
        <TextInput label="Email" placeholder="Enter your email" />
        <DateInputFields />
        <NumberInputFields label="Age" max={2}/>
        <NumberInputFields label="Telefonnummer på kontaktperson" max={8}/>
        <TextInput label="Evt. kommentar til booking" placeholder="" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h1>This is for company events</h1>
      <form>
        <TextInput label="" placeholder=""/>
      </form>
    </div>
  );
}

export default App;
