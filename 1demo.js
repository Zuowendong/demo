/**
 * designer项目
 * 将组件内部props数据转换格式挂载到组件实例上
 */

const properties = [
	{
		id: "base",
		name: "基本配置",
		attrs: [
			{
				name: "宽度",
				key: "width",
				compKey: "dui-input-number",
				value: 200,
			},
			{
				name: "高度",
				key: "height",
				compKey: "dui-input-number",
				value: 30,
			},
		],
	},
	{
		id: "style",
		name: "文字样式",
		attrs: [
			{
				name: "字号",
				key: "fontSize",
				compKey: "dui-input-number",
				value: 24,
			},
			{
				name: "颜色",
				key: "color",
				compKey: "dui-color-picker",
				value: "rgba(51, 51, 51, 1)",
			},
		],
	},
	{
		id: "content",
		name: "文字内容",
		attrs: [
			{
				name: "文本",
				key: "text",
				required: true,
				compKey: "dui-input-text",
				value: "文本标签",
			},
		],
	},
];

function getMapList(list) {
	return list.map((item) => {
		const { key, ...params } = item;
		return [key, params];
	});
}
function formatPropType(list) {
	let componentProp = {};
	list.forEach((item) => {
		const { id, ...params } = item;
		componentProp[id] = params;
		const entries = new Map(getMapList(params.attrs));
		const props = Object.fromEntries(entries);
		componentProp[id] = {
			name: params.name,
			props,
		};
	});

	return componentProp;
}

const res = formatPropType(properties);
console.log(res);
