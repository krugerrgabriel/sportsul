import Image from "next/image";

import { Body, FirstBase, Info, SecondBase } from "./styles";

import PhoneIcon from "@/public/img/icons/phone.svg";
import PinIcon from "@/public/img/icons/map-pin.svg";
import ClockIcon from "@/public/img/icons/clock.svg";
import FacebookIcon from "@/public/img/icons/facebook.svg";
import InstagramIcon from "@/public/img/icons/instagram.svg";

const TopBar: React.FC = () => {
  return (
    <Body>
      <FirstBase>
        <Info>
          <div className="layer">
            <Image
              src={PhoneIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Telefone"
            />
          </div>
          <p> +55 (99) 9 9999-9999 </p>
        </Info>

        <Info>
          <div className="layer pin">
            <Image
              src={PinIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Pin de Mapa"
            />
          </div>
          <p> Rua Lorem Ipsum da Silva </p>
        </Info>

        <Info>
          <div className="layer">
            <Image
              src={ClockIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Relógio"
            />
          </div>
          <p> Segunda a Sábado das 09 às 20h30 </p>
        </Info>
      </FirstBase>

      <SecondBase>
        <a href="#!">
          <div className="layer">
            <Image
              src={FacebookIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Facebook"
            />
          </div>
        </a>

        <a href="#!">
          <div className="layer">
            <Image
              src={PhoneIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Telefone"
            />
          </div>
        </a>

        <a href="#!">
          <div className="layer">
            <Image
              src={InstagramIcon}
              layout="fill"
              objectFit="cover"
              alt="SportSul Ícone de Instagram"
            />
          </div>
        </a>
      </SecondBase>
    </Body>
  );
};

export default TopBar;
