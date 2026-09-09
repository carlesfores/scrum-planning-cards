import './App.scss';
import Card from '@/components/Card.jsx';
import MainHeader from '@/components/MainHeader.jsx';

function App() {
  return (
      <div className='entity'>
        <MainHeader></MainHeader>

        <main className='entity-content'>
          <Card>
            <p>Slot content</p>
          </Card>
          <Card title="Card Title" description="Lorem ipsum dolor sit amet">
            <p>Slot content</p>
          </Card>
          <Card>
            <p>Slot content</p>
          </Card>
        </main>
        
      </div>
  )
};

export default App
