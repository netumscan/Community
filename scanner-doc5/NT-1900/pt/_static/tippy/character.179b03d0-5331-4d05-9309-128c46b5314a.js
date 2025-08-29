selector_to_html = {"a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Cancelar Enter+Nova Line(CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#add-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Adicionar Enter(CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#end-character-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Finalizar Configura\u00e7\u00f5es do Personagem<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>O caractere final \u00e9 adicionado ap\u00f3s os dados decodificados no formato de dados decodificados + caractere final.</p>", "a[href=\"#add-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Adicionar Enter+Nova Line(CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Cancelar Enter+Nova Line(CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#terminator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exterminador<a class=\"headerlink\" href=\"#terminator\" title=\"Link to this heading\">#</a></h1><h2>Finalizar Configura\u00e7\u00f5es do Personagem<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>O caractere final \u00e9 adicionado ap\u00f3s os dados decodificados no formato de dados decodificados + caractere final.</p>", "a[href=\"#cancel-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Cancelar Enter(CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Adicionar Enter+Nova Line(CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Cancelar Enter(CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Adicionar Enter(CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
