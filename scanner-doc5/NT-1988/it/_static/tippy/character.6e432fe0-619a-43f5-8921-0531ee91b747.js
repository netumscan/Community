selector_to_html = {"a[href=\"#id3\"]": "<figure class=\"align-center\" id=\"id3\">\n<a class=\"reference internal image-reference\" href=\"../../media/890001..png\"><img alt=\"../../media/890001..png\" src=\"../../media/890001..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Aggiungi Invio + Nuova Riga (Crlf)</span><a class=\"headerlink\" href=\"#id3\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#cancel-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Annulla Invio + Nuova Linea (CRLF)<a class=\"headerlink\" href=\"#cancel-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#add-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Aggiungi Enter(CR)<a class=\"headerlink\" href=\"#add-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#add-enter-new-line-crlf\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Aggiungi Invio + Nuova Riga (Crlf)<a class=\"headerlink\" href=\"#add-enter-new-line-crlf\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#id4\"]": "<figure class=\"align-center\" id=\"id4\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Annulla Invio + Nuova Linea (CRLF)</span><a class=\"headerlink\" href=\"#id4\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#terminator\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Terminatore<a class=\"headerlink\" href=\"#terminator\" title=\"Link to this heading\">#</a></h1><h2>Impostazioni Dei Caratteri Finali<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>Il carattere finale viene aggiunto dopo i dati decodificati nel formato dei dati decodificati + carattere finale.</p>", "a[href=\"#cancel-enter-cr\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Annulla Invio (CR)<a class=\"headerlink\" href=\"#cancel-enter-cr\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#end-character-settings\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Impostazioni Dei Caratteri Finali<a class=\"headerlink\" href=\"#end-character-settings\" title=\"Link to this heading\">#</a></h2><p>Il carattere finale viene aggiunto dopo i dati decodificati nel formato dei dati decodificati + carattere finale.</p>", "a[href=\"#id1\"]": "<figure class=\"align-center\" id=\"id1\">\n<a class=\"reference internal image-reference\" href=\"../../media/890000..png\"><img alt=\"../../media/890000..png\" src=\"../../media/890000..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Aggiungi Enter(CR)</span><a class=\"headerlink\" href=\"#id1\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#id2\"]": "<figure class=\"align-center\" id=\"id2\">\n<a class=\"reference internal image-reference\" href=\"../../media/888003..png\"><img alt=\"../../media/888003..png\" src=\"../../media/888003..png\" style=\"width: 300px;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-text\">Annulla Invio (CR)</span><a class=\"headerlink\" href=\"#id2\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
