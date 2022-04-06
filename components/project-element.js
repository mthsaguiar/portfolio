class projectElement extends HTMLElement {
    constructor(){
        super();
        let template = document.getElementById('project-element');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(templateContent.cloneNode(true));


    }

}

customElements.define('project-element', projectElement);

