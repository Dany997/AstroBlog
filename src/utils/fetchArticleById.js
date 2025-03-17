export async function fetchArticleById(id) {
	const response = await fetch(`https://dev.to/api/articles/${id}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch article with ID: ${id}`);
	}
	const data = await response.json();
	return data;
}
