import ContentCard from "@/layout/pages/home/ContentCard";
import {  animacao, icon, iconeBalanca, iconeRaio, iconeCoracao} from "@/assets";
import {  Container,  Title,  SubTitle,  ListCards,  Cards,  ButonImc,  TextSecurity,  ImgBackground,  Footer} from "@/layout/pages/home/style";

function Home() {
  return (
    <>
      <Container>
        <div>
          <Title>
            Seu bem estar começa no <span>Equilibrio</span>
          </Title>
          <SubTitle>
            Estar no peso ideal para sua altura é um passo simples que
            transforma seu dia a dia.{" "}
          </SubTitle>
          <ListCards>
            <Cards>
              <ContentCard
                avatar={iconeRaio}
                text="Mais energia para o dia a dia"
              />
            </Cards>
            <Cards>
              <ContentCard
                avatar={iconeBalanca}
                text="Escolhas leves, resultados  reais"
              />
            </Cards>
            <Cards>
              <ContentCard
                avatar={iconeCoracao}
                text="Cuidar de você é prioridade"
              />
            </Cards>
          </ListCards>
          <ButonImc>Calcule meu IMC</ButonImc>
          <TextSecurity>
            Rápido, seguro e confidencial <img src={icon} alt="" />
          </TextSecurity>
        </div>
        <ImgBackground src={animacao} alt="" />
        <Footer>
          <p>© 2026 . All rights reserved.</p>
          <p>
            | dev_glener | Privacy Policy | Terms of Service | Contact Support
          </p>
        </Footer>
      </Container>
    </>
  );
}

export default Home;
