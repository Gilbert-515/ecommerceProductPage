import iconCart from '../../assets/icon-cartButton.svg';

export function Button () {
  return (
    <button className='bg-orange-500 text-white p-4 flex rounded-lg font-semibold w-full justify-center hover:opacity-70 transition-opacity'>
      <img src={ iconCart } alt='icone de carrinho de compras' className='mr-4' />
      Add To cart
    </button>
  );
}