import textareaIcon from "../icons/textarea.svg?raw";

export const TextareaBlock = (bm, label) => {
  bm.add("textarea", {
    label: `
      ${textareaIcon}
      <div>${label}</div>`,
    category: "Forms",
    content: '<textarea name="textarea1" class="form-control"></textarea>',
  });
};

export default (dc, traits, config = {}) => {
  const defaultType = dc.getType("default");
  const defaultView = defaultType.view;
  const inputType = dc.getType("input");
  const inputModel = inputType.model;

  // TEXTAREA
  dc.addType("textarea", {
    isComponent(el) {
      if (el.tagName === "TEXTAREA") {
        return { type: "textarea" };
      }
    },
    model: {
      ...defaultModel,
      ...{
        defaults: {
          ...inputModel.prototype.defaults,
          "custom-name": config.labels.textarea,
          tagName: "textarea",
          traits: [traits.name, traits.placeholder, traits.required],
        },
      },
    },
    view: defaultView,
  });
};
