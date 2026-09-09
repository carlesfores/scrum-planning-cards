import './App.scss'

function App() {

  return (
    <>
      <div className='wrapper'>

        <header className='entity-header'>
          <h1>Scrum planning cards</h1>
        </header>

        <main className='entity-content'>
          <div>Main content </div>
          <div className='entity-card'>
            <div className='entity-card__title'>Card Title</div>
            <div className='entity-card__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='entity-card__content'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </main>

      </div>
    </>
  )
}

export default App
