import React, { useEffect, useState } from 'react';
import {
  Container,
  ProductContainer,
  Image,
  Title,
  Description,
  Price,
  RatingContainer,
  RatingValue,
  StarContainer,
} from './ProductDetailsStyles';
import Rating from '../../components/Rating/Rating';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

  const {productId}=useParams();
  const [productDetails,setProductDetails]=useState(null);

  const {data,error,loading}=useFetch(`https://fakestoreapi.com/products/${productId}`)

  useEffect(()=>{
    setProductDetails(data)
  },[data])
  return (
    <Container>
      {
        data && <ProductContainer>

          {/* Product Image */}
        <Image src={data?.image} alt={data?.title} />

        {/* Product Name */}
        <Title>{data?.title}</Title>

         {/* Product Price */}
        <Price>${data?.price}</Price>

         {/* Product Ratings */}
        <RatingContainer>
          <RatingValue>{data?.rating?.rate}</RatingValue>
          <Rating value={data?.rating?.rate}/>
        </RatingContainer>

         {/* Product Description */}
        <Description>{data?.description}</Description>
      </ProductContainer>
      }
    </Container>
  );
};

export default ProductDetails;
