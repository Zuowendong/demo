/**
 * designer static data转换组件属性
 */

let staticData = {
	props: {
		base: {
			name: "基本配置",
			props: {
				width: {
					name: "宽度",
					compKey: "dui-input-number",
					value: 200,
				},
				height: {
					name: "高度",
					compKey: "dui-input-number",
					value: 30,
				},
			},
		},
		style: {
			name: "样式",
			props: {
				fontStyle: {
					name: "字体",
					compKey: "dui-complex-text",
					value: {
						fontSize: 24,
						color: "#3D39B1FF",
						fontWeight: "normal",
						letterSpacing: 0,
						lineHeight: 30,
						textAlign: "center",
					},
				},
			},
		},
		content: {
			name: "文字内容",
			props: {
				text: {
					name: "文本",
					required: true,
					compKey: "dui-input-text",
					value: "文本标签",
				},
			},
		},
	},
	data: null,
	events: null,
	functions: null,
};

function initCompStaticData(staticData) {
	const keys = Object.keys(staticData);
	for (let i = 0; i < keys.length; i++) {
		if (keys[i] === "props") {
			if (!staticData.props) return;
			initCompProps(staticData.props);
		}
		if (keys[i] === "events") {
			if (!staticData.events) return;
		}
		if (keys[i] === "data") {
			if (!staticData.props) return;
		}
		if (keys[i] === "functions") {
			if (!staticData.props) return;
		}
	}
}

function initCompProps(props) {
	// 初始化值塞入 current
	console.log(props);

	let obj = {};
	Object.keys(props).forEach((key) => {
		console.log(333, props[key].props);
		Object.keys(props[key].props).forEach((prop) => {
			console.log(111, prop);
			// console.log(222, props[key]);
			obj[prop] = props[key].props[prop].value;
		});
	});
	console.log(obj);
}

initCompStaticData(staticData);
