import React, { useEffect, useState } from 'react';
import { CardGroup, HomeContainer, ButtonGroup } from './HomeStyles';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import useFetch from '../../Hooks/useFetch';
import Button from '../../components/Button/Button';
import { setProducts } from '../../Redux/Slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productDetails);

  //Fetching the products form  useFetch Hook
  const { data, error, isLoading } = useFetch('https://fakestoreapi.com/products');

  // sending the data to the redux on change of data 
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  // limiting the words from title of the product
  function sentenceWithLimitedWords(sentence, length) {
    return sentence.split(' ', length).join(' ');
  }
 
  // filter button types
  const buttonTypes = [
    { label: 'All', value: 'all' },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: 'Jewelery', value: 'jewelery' },
    { label: 'Electronics', value: 'electronics' },
    { label: "Women's Clothing", value: "women's clothing"},
  ];
   
  // filter products
  function filterProducts(value) {
    if (value === 'all') {
      setFilteredProduct(products);
    } else {
      const filtered = products.filter((product) => product.category === value);
      setFilteredProduct(filtered);
    }
  }

  return (
    <HomeContainer>

      {/* Button Group to apply Filter */}
      <ButtonGroup>
        {buttonTypes.map((button) => (
          <Button key={button.value} label={button.label} onClickHandler={() => filterProducts(button.value)} />
        ))}
      </ButtonGroup>

      {/* Card Group to show list of images */}
      <CardGroup>
        {filteredProduct.length > 0
          ? filteredProduct.map((data) => (
              <Card
                key={data.id}
                title={sentenceWithLimitedWords(data.title, 3)}
                image={data.image}
                price={data.price}
                rating={data.rating}
                productId={data.id}
              />
            ))
          : data.map((data) => (
              <Card
                key={data.id}
                title={sentenceWithLimitedWords(data.title, 3)}
                image={data.image}
                price={data.price}
                rating={data.rating}
                productId={data.id}
              />
            ))}
      </CardGroup>
    </HomeContainer>
  );
};

export default Home;
