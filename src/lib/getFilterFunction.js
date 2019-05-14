function getFilterFunction(searchTerm, state) {
  if (searchTerm === "name") {
    return elem =>
      elem[searchTerm].toLowerCase().includes(state[searchTerm].toLowerCase());
  } else {
    return searchTerm.length === 0
      ? () => true
      : elem =>
          elem[searchTerm].toLowerCase() === state[searchTerm].toLowerCase();
  }
}

export default getFilterFunction;
