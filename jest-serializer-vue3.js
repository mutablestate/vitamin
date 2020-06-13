module.exports = {
  test(value) {
    return (
      value &&
      value.__app &&
      typeof value.__app == 'object' &&
      typeof value.__app._container == 'object'
    );
  },
  print(value, serialize, indent) {
    const container = value.__app._container;
    return indent(serialize(container));
  }
};
