import image from '../../assets/image-product-1.jpg';
import thumb1 from '../../assets/image-product-1-thumbnail.jpg';
import thumb2 from '../../assets/image-product-2-thumbnail.jpg';
import thumb3 from '../../assets/image-product-3-thumbnail.jpg';
import thumb4 from '../../assets/image-product-4-thumbnail.jpg';


export function Carousel () {
  return (
    <section className='px-32'>
      <main>
        <img src={ image } alt='imagem' className='rounded-xl' />
      </main>

      <footer className='flex justify-between mt-9'>
        <img src={ thumb1 } alt="" className='rounded-xl w-[20%]' />
        <img src={ thumb2 } alt="" className='rounded-xl w-[20%]' />
        <img src={ thumb3 } alt="" className='rounded-xl w-[20%]' />
        <img src={ thumb4 } alt="" className='rounded-xl w-[20%]' />
      </footer>
    </section>
  )
}