import matheus from '../../assets/Matheus.jpeg';
import joao from '../../assets/Joao.jpg';
import luan from '../../assets/Luan.png';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4F7942] p-8">
      <section className="bg-[#e2e8eb] rounded-lg shadow-lg p-16 w-full max-w-6xl min-h-[85vh] mx-auto">
        <h1 className="text-6xl text-[#6BBF59] font-bold text-center mb-16">Sobre Nós</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-16">
          <div className="lg:w-1/2 text-center lg:text-left lg:pr-12 mb-12 lg:mb-0">
            <h2 className="text-[#6BBF59] text-5xl font-semibold mb-8">Quem Somos:</h2>
            <p className="mb-6 leading-relaxed text-2xl">
              Somos estudantes comprometidos em criar soluções sustentáveis. Nosso objetivo é fornecer ferramentas acessíveis para capacitar a transição para fontes de energia renovável.
            </p>
            <p className="mb-6 leading-relaxed text-2xl">
              Com foco em energia solar, buscamos simplificar o processo de implementação, destacando benefícios financeiros e ambientais.
            </p>
            <p className="leading-relaxed text-2xl">
              Nossa equipe está localizada em São Paulo, unindo inovação e sustentabilidade para criar um futuro mais verde.
            </p>
          </div>

          <div className="lg:w-1/2 flex flex-wrap gap-12 justify-center">
            <div className="relative w-60 h-60">
              <img
                src={matheus}
                alt="Matheus"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40 rounded-full"></div>
            </div>
            <div className="relative w-60 h-60">
              <img
                src={joao}
                alt="Joao"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40 rounded-full"></div>
            </div>
            <div className="relative w-60 h-60">
              <img
                src={luan}
                alt="Luan"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-40 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-[#6BBF59] text-5xl font-semibold mb-8">Nossa Visão</h2>
          <p className="mb-8 leading-relaxed text-2xl">
            Facilitar o acesso à energia solar, promovendo economia e reduzindo a pegada de carbono.
          </p>
          <p className="leading-relaxed text-2xl">
            Cada passo em direção à sustentabilidade faz a diferença, e estamos aqui para ajudar nesse processo.
          </p>
        </div>
      </section>
    </div>
  );
}
