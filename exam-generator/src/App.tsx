import './App.css';
import Input from './shared/input/Input';

function App() {
  const handleFormSubmission = (formdata: FormData) => {
    console.log(formdata.get('topic'));
  };

  return (
    <div className='bg-amber-400 flex flex-col'>
      <form action={handleFormSubmission}>
        <Input label='What is the topic of exam?' type='text' name='topic' />
        <Input label='Describe the focus of exam' type='text' name='focus' />
        <Input label='What is your name?' type='text' name='name' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
