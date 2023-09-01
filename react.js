const createElement = (type, props, ...children) => {
    return {
        type,
        props: {
            ...props,
            children,
        },
    };
};

const render = (element, parent) => {
    // 子要素がテキストの場合
    if (typeof element === "string") {
        const text = document.createTextNode("");
        text["nodeValue"] = element;
        parent.appendChild(text);
        return;
    }

    const node = document.createElement(element.type);

    for (const [key, value] of Object.entries(element.props)) {
        if (key === "children") continue;
        node[key] = value;
    }

    if (element.props.children !== undefined) {
        if (Array.isArray(element.props.children)) {
            // 子要素を複数持つ場合
            element.props.children.forEach(child => {
                render(child, node);
            });
        } else {
            // 子要素を1つだけ持つ場合
            render(element.props.children, node);
        }
    }
    parent.appendChild(node);
};
