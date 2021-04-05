const getTags = recipes => {
	let allTags = {};

	recipes.forEach(item => {
		item.content.tags.forEach(tag => {
			if (!allTags[tag]) return (allTags[tag] = 1);
			return (allTags[tag] += 1);
		});
	});
	// transfrom to array of arrays [key, value]
	allTags = Object.entries(allTags);
	// sort by key
	allTags = allTags.sort((a, b) => {
		return a[0].localeCompare(b[0]);
	});
	return allTags;
};

export default getTags;
