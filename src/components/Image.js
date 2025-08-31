import imageIcon from "../icons/image-solid.svg?raw";

export const ImageBlock = (bm, label) => {
  bm.add("bs-image", {
    label: `
            ${imageIcon}
            <div>${label}</div>
        `,
    category: "Media",
    content: {
      type: "bs-image",
    },
  });
};

export default (domComponent) => {
  const img_src_default = "https://dummyimage.com/800x500/999/222";
  const imageType = domComponent.getType("image");
  const model = imageType.model;
  const view = imageType.view;
  const type = "bs-image";

  domComponent.addType(type, {
    isComponent: function (el) {
      if (el && el.tagName === "IMG") {
        return { type: type };
      }
    },
    model: {
      ...model,
      ...{
        defaults: Object.assign({}, model.prototype.defaults, {
          "custom-name": "Image",
          tagName: "img",
          resizable: 1,
          attributes: {
            src: img_src_default,
          },
          classes: ["img-fluid"],
          traits: [
            {
              type: "text",
              label: "Source (URL)",
              name: "src",
            },
            {
              type: "text",
              label: "Alternate text",
              name: "alt",
            },
          ].concat(model.prototype.defaults.traits),
        }),
      },
    },
    view: view,
  });
};
