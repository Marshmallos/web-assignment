function h({ tagName, attrs, children }) {
  return { tagName, attrs, children };
}

const render = ({ tagName, attrs, children }) => {
  $el = document.createElement(tagName);

  for (const [k, v] of attrs) {
    $el.setAttributes(k, v);
  }

  for (const child of children) {
    $el.appendChild(render(child));
  }

  return $el;
};

const vNode = h("div", {}, [h("p", {}, ["Hello World"])]);

const root = document.getElementById("root");
