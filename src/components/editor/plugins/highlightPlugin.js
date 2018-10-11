import { RichUtils } from "draft-js";

export default () => {
	return {
		customStyleMap: {
			HIGHLIGHT: {
				background: "#009688",
				color: "#fff"
			}
		},
		keyBindingFn: e => {
			if (e.metaKey && e.key === "h") {
				return "highlight";
			}
		},
		handleKeyCommand: (command, editorState, { setEditorState }) => {
			if (command === "highlight") {
				setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
				return true;
			}
		}
	};
};
