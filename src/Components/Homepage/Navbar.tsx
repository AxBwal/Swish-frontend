import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Button } from "@/Components/ui/button"

function Navbar() {
  const navbarItem = [
    {
      id: 1,
      title: " Why Swish?",
    },
    {
      id: 2,
      title: "Services",
    },
    {
      id: 3,
      title: "Menu",
    },
    {
      id: 4,
      title: "Contact",
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center px-5 py-3'>
        <div className='text-4xl text-[#34C363] font-bold drop-shadow-lg cursor-pointer tracking-tighter'>Swish</div>

        <div className='flex gap-5'>
          {
            navbarItem.map((item) => {
              return <div key={item.id}>
                <div className='hover:text-[#34C363] cursor-pointer'>{item.title}</div>
              </div>
            })
          }
        </div>

        <div className='flex gap-5 items-center'>
          <div className='hover:text-[#34C363] cursor-pointer'> <Search /></div>
          <div className='hover:text-[#34C363] cursor-pointer'> <ShoppingCart /></div>
          <Button className="bg-[#34C363] text-white hover:bg-[#2ba352] rounded-full py-5" variant="outline">Signup</Button>
          <Button className="bg-[#34C363] text-white hover:bg-[#2ba352] rounded-full py-5" variant="outline">Login</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
