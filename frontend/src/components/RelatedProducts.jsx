import React, { useContext, useEffect, useState, useRef } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products
        .filter(item => item.category === category && item.subCategory === subCategory);
      setRelated(filtered);
    }
  }, [products, category, subCategory]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className='my-24 relative'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      {/* Scroll buttons */}
      <button onClick={scrollLeft} className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full'>
        <ChevronLeft />
      </button>
      <button onClick={scrollRight} className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow rounded-full'>
        <ChevronRight />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory scroll-smooth'
      >
        {related.map((item, index) => (
          <div key={index} className='min-w-[200px] snap-start'>
            <ProductItem
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
