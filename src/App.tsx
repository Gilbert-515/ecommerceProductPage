import { Header, DescriptionProduct, Carousel } from './components';

function App() {
  return (
    <div>
      <Header />
      <main className='flex'>
        <div className='w-[45%]'>
          <Carousel />
        </div>
        <div className='w-[50%]'>
          <DescriptionProduct />
        </div>
      </main>
    </div>
  )
}

export default App;
