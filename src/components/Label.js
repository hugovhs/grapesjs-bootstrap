import labelIcon from "../icons/label.svg?raw";

export const LabelBlock = (bm, label) => {
  bm.add("label", {
    label: `
      ${labelIcon}
      <div>${label}</div>`,
    category: "Forms",
    content: "<label>Label</label>",
  });
};

export default (dc, traits, config = {}) => {
  const textType = dc.getType("text");
  const textModel = textType.model;
  const textView = textType.view;

  dc.addType("label", {
    isComponent(el) {
      if (el.tagName == "LABEL") {
        return { type: "label" };
      }
    },
    model: {
      ...defaultModel,
      ...{
        defaults: {
          ...textModel.prototype.defaults,
          "custom-name": config.labels.label,
          tagName: "label",
          traits: [traits.for],
        },
      },
    },
    view: textView,
  });
};
