import formGroupIcon from "../icons/form-group.svg?raw";
import inputGroupIcon from "../icons/input-group.svg?raw";

export const InputGroupBlock = (bm, label, c) => {
  bm.add("form_group_input", {
    label: `
      ${formGroupIcon}
      <div>${label}</div>`,
    category: "Forms",
    content: `
      <div class="form-group">
        <label>Name</label>
        <input name="name" placeholder="Type here your name" class="form-control"/>
      </div>
      `,
  });

  bm.add("input_group", {
    label: `
      ${inputGroupIcon}
      <div>${label}</div>`,
    category: "Forms",
    content: `
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input name="input1" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>
      `,
  });
};

export default (dc, traits, config = {}) => {
  const defaultType = dc.getType("default");
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  dc.addType("input_group", {
    isComponent(el) {
      if (el && el.classList && el.classList.contains("form_group_input")) {
        return { type: "form_group_input" };
      }
    },
    model: {
      ...defaultModel,
      ...{
        defaults: {
          ...defaultModel.prototype.defaults,
          "custom-name": config.labels.input_group,
          tagName: "div",
          traits: [],
        },
      },
    },
    view: defaultView,
  });
};
