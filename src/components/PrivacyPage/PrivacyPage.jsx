import React from "react";
import "./PrivacyPage.css";
import Footer from "../Footer/Footer";

const PrivacyPage = () => {
  return (
    <>
      <div className="privacy-page">
        <h1>Políticas de Privacidade</h1>
        <div>
          <p>Bem-vindo(a) à Política de Privacidade da Maritaca!</p>

          <h2>1. Informações Coletadas</h2>
          <p>
            Nós não recolhemos nenhum dado pessoal dos usuários deste website.
            Pode navegar no nosso site sem fornecer nenhuma informação pessoal.
          </p>

          <h2>2. Uso de Cookies</h2>
          <p>Este site não usa qualquer tipo de Cookies.</p>

          <h2>3. Links para Sites de Terceiros</h2>
          <p>
            O nosso site pode conter links para outros sites que não são
            operados por nós. Ao clicar nesses links, Será direcionado para o
            site de terceiros. Lembre-se que não temos controlo sobre o conteúdo
            ou as práticas de privacidade desses sites e recomendamos que reveja
            a política de privacidade deles antes de fornecer qualquer
            informação pessoal.
          </p>

          <h2>6. Alterações na Política de Privacidade</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente.
            Quaisquer alterações serão publicadas nesta página e a data da
            "Última Atualização" será revisada.
          </p>

          <h2>7. Contacto</h2>
          <p>
            Se tiver alguma dúvida ou preocupação em relação à nossa Política de
            Privacidade, por favor, entre em contato connosco através do email:
            quiosquemaritaca@gmail.com.
          </p>

          <p>Última atualização: 01/09/2023 - V1</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPage;
