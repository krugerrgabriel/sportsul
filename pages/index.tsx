import { useState } from "react";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import BannerCard from "@/components/BannerCard";
import ProductCard from "@/components/ProductCard";

import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { Body } from "@/styles/globalStyle";

import {
  AdvantagesBox,
  Info,
  ProductBox,
  Title,
  Tag,
} from "@/styles/pages/index";

import TruckIcon from "@/public/img/icons/truck.svg";
import RotateIcon from "@/public/img/icons/rotate.svg";
import SupportIcon from "@/public/img/icons/support.svg";

export default function Home() {
  const [filterOne, setFilterOne] = useState(0);

  const productOne = {
    _id: 1,
    tag: "camiseta",
    name: "Camiseta de Esporte",
    price: 150,
    oldPrice: 250,
    rating: 3,
  };

  return (
    <>
      <TopBar />
      <Navbar />

      <Body>
        <Container>
          <Row>
            <Col lg={6}>
              <BannerCard
                id={1}
                title="Lorem Ipsum"
                tag="Lorem Ipsum"
                type={1}
              />
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <BannerCard id={2} title="Lorem" type={2} />
                </Col>

                <Col lg={6}>
                  <BannerCard id={3} title="Lorem" type={2} />
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <BannerCard id={4} title="Lorem" type={3} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <AdvantagesBox>
          <Container>
            <Row>
              <Col lg={4}>
                <Info className="justify-content-start">
                  <div className="layer truck">
                    <Image
                      src={TruckIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="SportSul Banner de Caminhão"
                    />
                  </div>
                  <div>
                    <p> FRETE GRÁTIS </p>
                    <span> Em todos os pedidos acima de R$250,00 </span>
                  </div>
                </Info>
              </Col>

              <Col lg={4}>
                <Info className="justify-content-center">
                  <div className="layer">
                    <Image
                      src={RotateIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="SportSul Banner de Rotacionar"
                    />
                  </div>
                  <div>
                    <p> REEMBOLSO EM ATÉ 30 DIAS </p>
                    <span>Reembolso em até 30 dias para efetivar a troca</span>
                  </div>
                </Info>
              </Col>

              <Col lg={4}>
                <Info className="justify-content-end">
                  <div className="layer">
                    <Image
                      src={SupportIcon}
                      layout="fill"
                      objectFit="cover"
                      alt="SportSul Banner de Suporte"
                    />
                  </div>
                  <div>
                    <p> SUPORTE 24/7 </p>
                    <span>
                      Fale conosco 24 horas por dia, 7 dias por semana
                    </span>
                  </div>
                </Info>
              </Col>
            </Row>
          </Container>
        </AdvantagesBox>

        <ProductBox>
          <Container>
            <Row className="justify-content-between">
              <Col lg={3}>
                <Title> MASCULINO </Title>
              </Col>

              <Col>
                <div className="links">
                  <Tag
                    active={filterOne == 0 ? true : false}
                    onClick={() => setFilterOne(0)}
                  >
                    NOVOS
                  </Tag>
                  <Tag
                    active={filterOne == 1 ? true : false}
                    onClick={() => setFilterOne(1)}
                  >
                    ESPECIAIS
                  </Tag>
                  <Tag
                    active={filterOne == 2 ? true : false}
                    onClick={() => setFilterOne(2)}
                  >
                    MAIS VENDIDOS
                  </Tag>
                  <Tag
                    active={filterOne == 3 ? true : false}
                    onClick={() => setFilterOne(3)}
                  >
                    MAIS VISTOS
                  </Tag>
                  <Tag
                    active={filterOne == 4 ? true : false}
                    onClick={() => setFilterOne(4)}
                  >
                    RECOMENDADOS
                  </Tag>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={3}>
                <ProductCard product={productOne} />
              </Col>
            </Row>
          </Container>
        </ProductBox>
      </Body>
    </>
  );
}
