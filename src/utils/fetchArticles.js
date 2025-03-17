export async function fetchArticles() {
	const response = await fetch('https://dev.to/api/articles?per_page=3'); // Pobieramy tylko 3 artykuły
	const data = await response.json();
	return data;
}
