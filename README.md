Minimal random image redirect.

- Data: images.json (array of direct image URLs)
- Page: index.html (inline script fetches JSON and redirects)

Update images.json to add/remove images. Deploy as static site.

images.json format:

	[
		"https://example.com/a.jpg",
		"https://example.com/b.png"
	]