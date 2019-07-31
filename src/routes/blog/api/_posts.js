import fs from 'fs';
import path from 'path';
import process_md from './_process-md.js';
import marked from 'marked';
import hljs from 'highlight.js';

const posts = fs.readdirSync('src/md').map(file => {

		if (path.extname(file) !== '.md') return;

		const markdown = fs.readFileSync(`src/md/${file}`, 'utf-8');

		const { content, frontmatter } = process_md(markdown);

		frontmatter.dateString = new Date(`${frontmatter.date} PST`).toDateString();

		marked.setOptions({
			renderer: new marked.Renderer(),
			highlight: function(code) {
				return hljs.highlightAuto(code).value;
			},
			pedantic: false,
			gfm: true,
			breaks: false,
			silent: false,
			smartLists: true,
			smartypants: false,
			xhtml: false
		});
		
		const html = marked(
				content.replace(/^\t+/gm, 
				match => match.split('\t').join('  '))
			)
			
		return {
			html,
			frontmatter,
			slug: file.replace(/^[\d-]+/, '').replace(/\.md$/, '')
		};
	})
	.sort((a, b) => {
		return a.frontmatter.date < b.frontmatter.date ? 1 : -1;
	});

export default posts;
