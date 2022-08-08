import { Button } from "../Button";
import { QuantityProduct } from "../QuantityProduct";

export function DescriptionProduct () {
  return (
    <section className='w-full py-14'>
      <h4 className='text-orange-500 font-bold tracking-wider my-4'>SNEAKER COMPANY</h4>
      <h1 className='text-4xl font-bold mb-8 w-[60%]'>Fall Limited Edition Sneakers</h1>

      <main className='text-zinc-500 w-[50%]'>
        These low-profile sneakers are you perfect casual wear companion. 
        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
      </main>

      <div className='flex flex-col my-9'>
        <div className='flex items-center'>
          <label className='font-bold text-2xl mr-4'> $125.00 </label>
          <span className='bg-orange-200 rounded text-orange-500 px-1 font-semibold'> 50% </span>
        </div>
        <small className='text-gray-400 font-semibold text-base decoration-slice line-through mt-1'> $250.00 </small>
      </div>

      <footer className='flex justify-start gap-5'>
        <div className='w-[25%]'>
          <QuantityProduct />
        </div>
        <div className='w-[35%]'>
          <Button />
        </div>
      </footer>
    </section>
  );
}