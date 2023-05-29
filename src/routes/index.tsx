import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {

	const location = useLocation();
	
	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<h1>Hi 👋</h1>
			<p>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
			</p>

			<p 
				style={{ 
					color: "#fff", 
					padding: "2px 4px", 
					borderRadius: "2px",
					width: "fit-content", 
					backgroundColor: "#000", 
				}}
			>
				{location.url.origin}
			</p>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Dynamic Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
