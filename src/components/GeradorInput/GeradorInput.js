export default function GeradorInput({
  geradorNome,
  ingredientesList,
  setIngredientesList,
}) {
  const handleIngredientesList = (e, index) => {
    const { name, value } = e.target; //service, o que foi digitado dentro do imput
    const list = [...ingredientesList];
    list[index] = value;
    setIngredientesList(list);
  };

  const handleIngredientesRemove = (index) => {
    const list = [...ingredientesList];
    list.splice(index, 1);
    setIngredientesList(list);
  };

  const handleIngredientesAdd = () => {
    setIngredientesList([...ingredientesList, ""]);
  };

  return (
    <div className="gerador-input">
      <label>{geradorNome}</label>
      {ingredientesList.map((unicoIngrediente, index) => (
        <div key={index} className="services">
          <div className="first-division">
            <input
              name="ingrediente"
              type="text"
              id="ingrediente"
              value={unicoIngrediente}
              onChange={(e) => handleIngredientesList(e, index)}
              required
            />
            {ingredientesList.length - 1 === index && (
              <button
                type="button"
                onClick={handleIngredientesAdd}
                className="add-btn"
              >
                <span>Adicionar mais</span>
              </button>
            )}
          </div>
          <div className="second-division">
            {ingredientesList.length !== 1 && (
              <button
                type="button"
                onClick={() => handleIngredientesRemove(index)}
              >
                <span>remover</span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
