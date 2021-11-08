import { Body } from "./styles";

import Image from "next/image";

const ProductCard: React.FC<{
  product: {
    _id: number;
    tag: string;
    name: string;
    price: number;
    oldPrice?: number;
    rating: number;
  };
}> = (props) => {
  const { _id, tag, name, price, oldPrice, rating } = props.product;
  return (
    <Body>
      <div className="layer">
        <Image
          src={require(`@/public/img/products/${_id}/image01.jpg`)}
          layout="fill"
          objectFit="cover"
          alt={`SportSul Produto ${name}`}
        />
      </div>
      <div className="info">
        <strong>{tag}</strong>
        <p>{name}</p>
        <span>{price}</span>
        {oldPrice ? <span>{oldPrice}</span> : ""}
        <div className="starLayer">
          <Image
            src={require(`@/public/img/icons/rating/star_0${rating}.svg`)}
            layout="fill"
            objectFit="cover"
            alt={`SportSul Avaliação do Produto ${name}`}
          />
        </div>
      </div>
    </Body>
  );
};

export default ProductCard;
