import './App.scss';
import Card from '@/components/Card.jsx';

function App() {

  return (
    <>
      <div className='wrapper'>
        <header className='entity-header'>
          <h1>Scrum planning cards</h1>
        </header>
        <main className='entity-content'>
          <div>Main content </div>
          <Card 
            title="Card Title"
            description="Lorem ipsum dolor sit amet"
          >
            <p>Slot content</p>
          </Card>
        </main>
      </div>
    </>
  )
}

export default App
