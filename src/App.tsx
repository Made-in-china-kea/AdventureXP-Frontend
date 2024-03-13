import TextInput from "./component/TextInputField";
import DateInput from "./component/DateInputField";
import NumberInput from "./component/NumberInputField";
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
        <DateInput label="eventdato"/>
        <NumberInput label="Age" max={2} />
        <NumberInput label="Telefonnummer på kontakt person" max={8} />
        <TextInput label="Evt. kommentar til booking" placeholder="" />
        <div>
          <select name="Activity" id="Activity">
            <option value="select-title" >Vælg en aktivitet</option>
            <option value="Activity-1">Go-Kart</option>
            <option value="Activity-2">Paintball</option>
            <option value="Activity-3">Mini Golf</option>
            <option value="Activity-4">Sumo Wrestling</option>
            <option value="Activity-5">Biking</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h1>This is for company events</h1>
      <form>
        <TextInput label="Navn på kontakt person" placeholder="Eksempel. Dennis-Zixiang Zhou" />
        <NumberInput label="CVR" max={8}/>
        <DateInput label="Eventdato"/>
        <TextInput label="Email" placeholder="Enter your email" />
        <NumberInput label="Telefonnummer på kontakt person" max={8} />
        <TextInput label="Evt. kommentar til booking" placeholder="" />
        <div>
          <select name="Activity-Packages" id="Activity-Packages">
            <option value="select-title">Vælg en aktivitets pakke</option>
            <option value="package-1">Adventure Day</option>
            <option value="package-2">High Energy Challenge</option>
            <option value="package-3">Family Fun Day</option>
            <option value="package-4">Team Building Extravaganza</option>
            <option value="package-5">Ultimate Challenge</option>
          </select>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
