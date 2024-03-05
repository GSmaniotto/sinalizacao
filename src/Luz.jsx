export const Luz = ({ id, cor, ligado, nome, onClick }) => {
  return (
    <button
      className="sinalizacao_button"
      id={id}
      onClick={onClick}
      disabled={ligado}
    >
      <div
        className={`luz ${ligado ? "luz-ligado" : ""}`}
        style={{ backgroundColor: cor }}
      />
      <span>Ligar Cor {nome} </span>
    </button>
  );
};
