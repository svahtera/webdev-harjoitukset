const paragraph = document.querySelector("#target");
const html = 
`<li>First item</li>
<li>Second item</li>
<li>Third item</li></ul>`;
paragraph.innerHTML = html;
paragraph.id = "my-list"