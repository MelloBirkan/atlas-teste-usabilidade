export default function Home() {
  return (
    <div className="px-20 bg-white text-gray-800 text-xm flex flex-col">
      <div className="flex flex-start">
        <h1 className="text-slate-950 text-6xl font-bold pb-4 pt-4">
          Atlas das Américas: Avaliação de usabilidade
        </h1>
      </div>
      <div className="text-justify">
        <p className="pb-4">
          A avaliação de usabilidade busca entender como os usuários interagem
          com o produto, identificar problemas de usabilidade, e coletar
          feedbacks para melhorar a experiência do usuário. Essa avaliação será
          realizada em um protótipo, ou seja, é uma versão inicial e
          simplificada do produto final, criada especificamente para testar
          ideias e funcionalidades-chave.
        </p>
        <p className="pb-4">
          Abaixo, temos as tarefas que serão realizadas e testadas por você no
          protótipo. Ao final de cada tarefa, olhe a próxima tarefa antes de
          realizar qualquer ação.
        </p>
        <p className="pb-0">
          Após realizar todas as tarefas, temos outro link para o preenchimento
          de um questionário pós teste com o propósito de entender sua
          experiência e coletar feedbacks. Desde já, agradecemos sua
          colaboração!
        </p>
      </div>
      <h2 className="text-slate-950 text-4xl font-bold pb-2 pt-10 text-left">
        Protótipo
      </h2>
      <p className="pb-1">
        Por favor, clique no seguinte link para acessar o protótipo e com ele
        aberto, faça as tarefas:
      </p>
      <a
        href="https://www.figma.com/proto/mI8jPFOK39MSB1AyiQmkOT/Atlas-prototipo?page-id=0%3A1&type=design&node-id=461-13978&viewport=-6628%2C-5350%2C0.34&t=RXELGDCSVspqvtg0-1&scaling=scale-down&starting-point-node-id=461%3A13978&mode=design"
        target="_blank"
      >
        <span className="font-bold text-blue-700 underline-4">
          Clique aqui para entrar no protótipo
        </span>
      </a>
      <h2 className="text-slate-950 text-4xl font-bold pb-1 pt-10 text-left">
        Tarefas
      </h2>
      <h3 className="text-lg pt-1 pb-4">Encontrar fichas</h3>
      <ol className="list-inside space-y-10 ">
        <li className="">
          <strong>1.</strong> Encontre a Ficha Americana{' '}
          <span className="font-bold">Citação/Intimação/Notificação</span> do
          país <strong>Brasil</strong>
          <p className="pt-1 pb-1">
            <strong className="text-lg text-yellow-700 m-1">
              Resultado esperado
            </strong>
          </p>
          <img className="w-46 h-96" src="../images/tarefa 1.png"></img>
        </li>
        <li className="">
          <strong>2.</strong> Volte para as Fichas Americanas do país{' '}
          <strong>Brasil</strong>
          <p className="pt-1 pb-1">
            <strong className="text-lg m-1 text-yellow-700">
              Resultado esperado
            </strong>
          </p>
          <img className="w-46 h-96" src="../images/tarefa 2.png"></img>
        </li>
        <li className="">
          <strong>3.</strong> Encontre a Ficha Americana
          <span className="font-bold "> Citação/Intimação/Notificação</span> do
          país <strong>Argentina</strong>
          <p className="pt-1 pb-1">
            <strong className="text-lg m-1 text-yellow-700">
              Resultado esperado
            </strong>
          </p>
          <img className="w-46 h-96" src="../images/tarefa 3.png"></img>
        </li>
        <li className="">
          <strong>4.</strong> Deixe a Ficha Americana
          <span className="font-bold "> Citação/Intimação/Notificação</span> do
          país <strong>Brasil</strong> no <strong>idioma espanhol</strong>
          <p className="pt-1 pb-1">
            <strong className="text-lg m-1 text-yellow-700">
              Resultado esperado
            </strong>
          </p>
          <img className="w-46 h-96" src="../images/tarefa 4.png"></img>
        </li>
        <li className="my-4">
          <strong> 5.</strong> Volte a deixar a página da Ficha Americana{' '}
          <span className="font-bold "> Citação/Intimação/Notificação</span> do
          país <strong>Brasil</strong> no <strong>idioma portugues</strong>
          <p className="pt-2 pb-1">
            <strong className="text-lg m-1 text-yellow-700">
              Resultado esperado
            </strong>
          </p>
          <img className="w-46 h-96" src="../images/tarefa 3.png"></img>
        </li>
      </ol>
      <h2 className="text-slate-950 text-4xl font-bold pb-2 pt-10 text-left">
        Questionário pós teste
      </h2>
      <p className="pb-1">
        Obrigado por chegar até aqui! Clique no seguinte link para acessar o
        questionário pós teste:
      </p>
      <a
        className="font-bold text-blue-700 pb-16"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdEOmA-zsTKw609oyvKEWt0ig-2S6CWhFsBNx_bGntWD9kGvQ/viewform?usp=sf_link"
        target="_blank"
      >
        Link para o questionário
      </a>
    </div>
  )
}
