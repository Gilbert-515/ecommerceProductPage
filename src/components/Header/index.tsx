import perfilImage from '../../assets/image-avatar.png';
import iconsCart from '../../assets/icon-cart.svg';

export function Header () {
  return (
    <header className='flex justify-between items-center border-b-2 pb-8 mb-24'>
      <div className='w-[50%] flex justify-between'>
        <h1 className='text-3xl font-bold'>sneakers</h1>

        <menu className='flex gap-6 items-center text-zinc-500 transition-colors'> 
          <li className='hover:text-zinc-700 cursor-pointer'>Collections</li>
          <li className='hover:text-zinc-700 cursor-pointer'>Men</li>
          <li className='hover:text-zinc-700 cursor-pointer'>Women</li>
          <li className='hover:text-zinc-700 cursor-pointer'>About</li>
          <li className='hover:text-zinc-700 cursor-pointer'>Contact</li>
        </menu>
      </div>

      <div className='flex gap-8 items-center'>
        <button>
          <img src={ iconsCart } alt='carrinho de compras' />
        </button>
        <img src={ perfilImage } alt='foto de perfil' width={ 40 } />
      </div>
    </header>
  );
}