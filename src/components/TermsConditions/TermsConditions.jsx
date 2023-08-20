import React from "react";
import "./TermsConditions.css";
import Footer from "../Footer/Footer";

const TermsConditions = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  return (
    <>
      <div className="terms-page">
        <h1>Termos e Condições</h1>
        <div>
          <p>Bem-vindo(a) à Maritaca!</p>
          <h2>1. Introdução</h2>
          <p>
            Estes termos e condições regem o uso do nosso website. Ao acessar e
            utilizar este site, você concorda em obedecer a estes termos e
            condições. Se você não concorda com algum destes termos, por favor,
            não continue a utilizar o site.
          </p>
          <h2>2. Uso do Site</h2>
          <p>
            O uso deste site é permitido apenas para fins legítimos e de acordo
            com estes termos. Você concorda em não usar o site de maneira que
            possa causar danos ao site ou interferir no acesso de outras
            pessoas.
          </p>
          <h2>3. Propriedade Intelectual</h2>
          <p>
            Todos os conteúdos presentes no site, incluindo textos, gráficos,
            logotipos, imagens e software, são de propriedade exclusiva da
            Maritaca ou de seus licenciadores e estão protegidos pelas leis de
            direitos autorais e propriedade intelectual aplicáveis.
          </p>
          <h2>5. Limitação de Responsabilidade</h2>
          <p>
            Não nos responsabilizamos por quaisquer danos diretos, indiretos,
            incidentais, consequenciais ou punitivos resultantes do uso deste
            site ou de qualquer conteúdo presente nele.
          </p>
          <h2>6. Alterações nos Termos</h2>
          <p>
            Podemos modificar estes termos e condições a qualquer momento,
            portanto, verifique esta página regularmente para se manter
            atualizado(a) sobre as mudanças. O uso contínuo do site após a
            publicação de quaisquer alterações constituirá sua aceitação dessas
            mudanças.
          </p>
          <h2>7. Contacto</h2>
          <p>
            Se tiver alguma dúvida ou preocupação em relação a estes termos e
            condições, por favor, entre em contato conosco através do email:
            quiosquemaritaca@gmail.com.
          </p>
          <p>
            Última atualização: {day}/{month}/{year}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditions;
