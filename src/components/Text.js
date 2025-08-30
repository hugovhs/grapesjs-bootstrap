import fontIcon from "../icons/font-solid.svg?raw";

export const TextBlock = (bm, label) => {
  bm.add("text", {
    label: `
            ${fontIcon}
            <div>${label}</div>
        `,
    category: "Typography",
    content: {
      type: "text",
      content: "Insert your text here",
    },
  });
};

export default (domc) => {
  const defaultType = domc.getType("default");
  const defaultModel = defaultType.model;
  const textType = domc.getType("text");
  const textView = textType.view;

  domc.addType("text", {
    model: {
      ...defaultModel,
      ...{
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          "custom-name": "Text",
          tagName: "div",
          droppable: true,
          editable: true,
        }),
      },
    },
    view: textView,
  });
};
