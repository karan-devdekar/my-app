import './App.css';
import DynamicTable from './dynamicTable';


//object for data
const data = [
  {
    age: 30,
    policyYear: 5,
    annualizedPremium: 1200,
    guaranteed: {
      incomeBenefit: 200,
      otherBenefits: 50,
      deathBenefit: 50000,
      maturityBenefit: 40000,
      minGuaranteedValue: 30000,
      newBenefit: 1000,
    },
    nonGuaranteed: 1500
  },
  {
    age: 35,
    policyYear: 7,
    annualizedPremium: 1300,
    guaranteed: {
      incomeBenefit: 250,
      otherBenefits: 70,
      deathBenefit: 60000,
      maturityBenefit: 50000,
      minGuaranteedValue: 40000
    },
    nonGuaranteed: 1700
  }
];

function App() {
  return (
    <DynamicTable data={data} />
  );
}

export default App;
