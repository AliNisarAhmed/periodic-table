function getFilterFunction(searchTerm, state) {
  if (searchTerm === "name") {
    return elem =>
      elem[searchTerm].toLowerCase().includes(state[searchTerm].toLowerCase());
  } else if (searchTerm === "symbol") {
    return state[searchTerm].length === 0
      ? () => true
      : elem =>
          elem[searchTerm].toLowerCase() === state[searchTerm].toLowerCase();
  } else if (searchTerm === "number") {
    let number = Number(state[searchTerm]) || 0;
    if (!number) return () => true;
    return elem => elem[searchTerm] === number;
  }
}

export default getFilterFunction;
