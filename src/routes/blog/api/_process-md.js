export default function process_markdown(markdown) {
    
	const match = 
		/---\n([\s\S]+?)\n---/.exec(markdown) 
		|| /---\r\n([\s\S]+?)\r\n---/.exec(markdown) ;
	const metadata = match[1];
	const content = markdown.slice(match[0].length);
	const frontmatter = {};
	metadata.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		frontmatter[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});
    
	return { frontmatter, content };
}