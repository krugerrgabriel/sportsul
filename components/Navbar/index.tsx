import Image from "next/image";

import { Body, LinkEdit, CartLayer } from "./styles";

import SearchIcon from "@/public/img/icons/search.svg";
import UserIcon from "@/public/img/icons/user.svg";
import CartIcon from "@/public/img/icons/cart.svg";

const Navbar: React.FC = () => {
  return (
    <Body>
      <div>
        <p className="logo"> SportSul </p>
      </div>

      <div>
        <LinkEdit href="#!">
          <a> Sobre nós </a>
        </LinkEdit>

        <LinkEdit href="#!">
          <a> Feminino </a>
        </LinkEdit>

        <LinkEdit href="#!">
          <a> Masculino </a>
        </LinkEdit>

        <LinkEdit href="#!">
          <a> Acessórios </a>
        </LinkEdit>

        <LinkEdit href="#!">
          <a> Contato </a>
        </LinkEdit>
      </div>

      <div>
        <div className="layer">
          <Image
            src={SearchIcon}
            layout="fill"
            objectFit="cover"
            alt="SportSul Ícone de Lupa"
          />
        </div>

        <div className="layer user">
          <Image
            src={UserIcon}
            layout="fill"
            objectFit="cover"
            alt="SportSul Ícone de Usuário"
          />
        </div>

        <CartLayer>
          <Image
            src={CartIcon}
            layout="fill"
            objectFit="cover"
            alt="SportSul Ícone de Carrinho"
          />
        </CartLayer>
      </div>
    </Body>
  );
};

export default Navbar;
