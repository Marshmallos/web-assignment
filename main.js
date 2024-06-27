function h(tagName, attrs = {}, children = []) {
  return { tagName, attrs, children };
}

const render = ({ tagName, attrs, children }) => {
  $el = document.createElement(tagName);

  for (const [k, v] of Object.entries(attrs)) {
    $el.setAttribute(k, v);
  }

  for (const child of children) {
    if (typeof child === 'string') {
      $el.innerText = child;
    } else {
      $el.appendChild(render(child));
    }
  }

  return $el;
};
const vNode = h("div", {id:"app"}, [h("p", {}, ["Hello World"])]);

const root = document.getElementById("root");

root.appendChild(render(vNode));
