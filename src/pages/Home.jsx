import {signal} from "@preact/signals";
import {useEffect} from "preact/hooks";
import {getProducts} from "../api";

const products = signal([]);

async function fetchData () {
	products.value = await getProducts();
	console.log(products.value);
}

export function Home () {

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div class="home">
			<h1>Products</h1>
			{products.value.map((product) => (
				<div key={product.id}>
					{product.title}
				</div>
			))}
		</div>
	);
}