selector_to_html = {"a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Cancelar Enter+Nueva L\u00ednea (CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">A\u00f1adir Enter(CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Cancelar Enter(CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#terminator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminador<a class=\"headerlink\" href=\"#terminator\" title=\"Link to this heading\">#</a></h1><h2>Configuraci\u00f3n de End Caracter<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>El car\u00e1cter final se a\u00f1ade despu\u00e9s de los datos decodificados en el formato de datos decodificados + car\u00e1cter final.</p>", "a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">A\u00f1adir entrada+nueva l\u00ednea (CRLF)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Cancelar Enter+Nueva L\u00ednea (CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#cancel-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Cancelar Enter(CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#add-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">A\u00f1adir Enter(CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#add-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">A\u00f1adir entrada+nueva l\u00ednea (CRLF)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#end-character-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Configuraci\u00f3n de End Caracter<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>El car\u00e1cter final se a\u00f1ade despu\u00e9s de los datos decodificados en el formato de datos decodificados + car\u00e1cter final.</p>"}
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
