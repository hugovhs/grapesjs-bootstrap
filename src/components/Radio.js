import radioIcon from "../icons/dot-circle-regular.svg?raw";

export const RadioBlock = (bm, label) => {
  bm.add("radio", {
    label: `
            ${radioIcon}
            <div>${label}</div>
        `,
    category: "Forms",
    content: `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
          <label class="form-check-label" for="exampleRadios1">
            Default radio
          </label>
        </div>
      `,
  });
};

export default (dc, traits, config = {}) => {
  const checkType = dc.getType("checkbox");

  // RADIO
  dc.addType("radio", {
    isComponent(el) {
      if (el.tagName === "INPUT" && el.type === "radio") {
        return { type: "radio" };
      }
    },
    model: {
      ...checkType,
      defaults: {
        ...checkType.model.prototype.defaults,
        "custom-name": config.labels.radio,
        attributes: { type: "radio" },
      },
    },
    view: checkType.view,
  });
};
