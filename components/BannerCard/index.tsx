import Image from "next/image";

import { Body } from "./styles";

const BannerCard: React.FC<{
  id: number;
  title: string;
  type: number;
  tag?: string;
}> = ({ id, title, type, tag }) => {
  return (
    <Body type={type}>
      <Image
        src={require(`@/public/img/banners/banner${id}.jpg`)}
        layout="fill"
        objectFit="cover"
        alt={`SportSul Banner de ${title}`}
      />
      <div className="layer">
        {tag ? <span>{tag}</span> : ""}
        <p>{title}</p>
      </div>
    </Body>
  );
};

export default BannerCard;
