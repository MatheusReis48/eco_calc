import { useState, useEffect } from "react";
import axios from "axios";

export default function Calculator() {
  const [consumoMensal, setConsumoMensal] = useState<string>("");
  const [custoInstalacao, setCustoInstalacao] = useState<string>("");
  const [economia, setEconomia] = useState<number | null>(null);
  const [retorno, setRetorno] = useState<number | null>(null);
  const [calculos, setCalculos] = useState<any[]>([]);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const calcular = () => {
    const economiaMensal = parseFloat(consumoMensal) * 0.7; 
    const tempoRetorno = parseFloat(custoInstalacao) / economiaMensal;

    setEconomia(economiaMensal);
    setRetorno(tempoRetorno);
  };

  const salvar = async () => {
    if (economia && retorno) {
      try {
        await axios.post(`http://localhost:8080/calculos`, {
          economia,
          retorno,
        });
        setError("");
        listar();
      } catch (err) {
        console.error(err);
        setError("Erro ao salvar os dados.");
      }
    }
  };

  const listar = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/calculos`);
      setCalculos(response.data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Erro ao carregar os cálculos.");
    }
  };

  const excluir = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/calculos/${id}`);
      setCalculos((prevCalculos) =>
        prevCalculos.filter((calculo) => calculo.id !== id)
      );
      setError("");
    } catch (err) {
      console.error(err);
      setError("Erro ao excluir o cálculo.");
    }
  };

  useEffect(() => {
    listar();
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Alterna o estado do menu
  };

  const handleConsumoMensalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setConsumoMensal(value);
    }
  };

  const handleCustoInstalacaoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) || value === "") {
      setCustoInstalacao(value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4F7942] p-4">
      <section className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#6BBF59] mb-12">
          Calculadora de Energia Solar
        </h1>

        <div className="mb-6">
          <label
            htmlFor="consumoMensal"
            className="text-xl font-semibold text-[#6BBF59]"
          >
            Consumo Mensal (kWh):
          </label>
          <input
            type="text"
            id="consumoMensal"
            value={consumoMensal}
            onChange={handleConsumoMensalChange}
            className="mt-2 p-3 w-full rounded-md border border-gray-300"
            placeholder="Digite o consumo mensal em kWh"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="custoInstalacao"
            className="text-xl font-semibold text-[#6BBF59]"
          >
            Custo da Instalação (R$):
          </label>
          <input
            type="text"
            id="custoInstalacao"
            value={custoInstalacao}
            onChange={handleCustoInstalacaoChange}
            className="mt-2 p-3 w-full rounded-md border border-gray-300"
            placeholder="Digite o custo da instalação"
          />
        </div>

        <button
          onClick={calcular}
          className="bg-[#6BBF59] text-white font-semibold py-3 px-6 rounded-md w-full mt-6"
        >
          Calcular
        </button>

        {economia !== null && retorno !== null && (
          <div className="mt-6">
            <p className="text-[#6BBF59] mt-4">
              Economia Mensal Estimada: R$ {economia.toFixed(2)}
            </p>
            <p className="text-[#6BBF59] mt-4">
              Tempo de Retorno do Investimento: {retorno.toFixed(1)} anos
            </p>
            <button
              onClick={salvar}
              className="bg-[#6BBF59] text-white font-semibold py-3 px-6 rounded-md w-full mt-6"
            >
              Salvar no Banco de Dados
            </button>
          </div>
        )}

        <div className="mt-12">
          <button
            onClick={toggleMenu}
            className="bg-[#6BBF59] text-white font-semibold py-3 px-6 rounded-md w-full"
          >
            {showMenu ? "Fechar Lista de Cálculos" : "Abrir Lista de Cálculos"}
          </button>
          {showMenu && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {calculos.map((calculo) => (
                <div
                  key={calculo.id}
                  className="bg-gray-100 p-4 rounded-md shadow-md relative"
                >
                  <button
                    onClick={() => excluir(calculo.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                  >
                    X
                  </button>
                  <p className="font-semibold text-[#6BBF59]">
                    Economia Mensal: R$ {calculo.economia.toFixed(2)}
                  </p>
                  <p className="text-gray-700">
                    Tempo de Retorno: {calculo.retorno.toFixed(1)} anos
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {error && (
          <div className="mt-6 text-red-500 text-center">
            <p>{error}</p>
          </div>
        )}
      </section>
    </div>
  );
}
