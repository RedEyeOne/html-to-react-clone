import "/src/css/NavTab.css";
interface TextProps {
	text: string;
}
export function NavTab(props: TextProps) {
	return <button>{props.text}</button>;
}
