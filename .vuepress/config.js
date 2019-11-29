module.exports = {
    title: 'Documentos Oficiais',
    description: 'Página dos documentos oficiais do JerimumHS',
    base: '/Documentos/',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: {
            '/assembleias/': [
                '/',     /* /assembleia/ */
                '2019-09-26',  /* /assembleia/2019-09-26.html */
                '2019-11-28'   /* /assembleia/2019-11-28.html */
            ],
            '/termos/': [
                '/',     /* /termos/ */
                'visitantes',  /* /termos/visitantes.html */
                'associados',   /* /termos/associados.html */
                'comunidades',  /* /termos/comunidades.html */
                'eventos'   /* /termos/eventos.html */
            ],
            // fallback
            '/': [
                '',
                'assembleias/',
                'termos/',
            ]
        },
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'jerimumhs/Documentos',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Github',

        // Optional options for generating "Edit this page" link
        // defaults to false, set to true to enable
        editLinks: true,
        // default value is true. Allows to hide next page links on all pages
        nextLinks: true,
        // default value is true. Allows to hide prev page links on all pages
        prevLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Nos ajude a melhorar essa página!'
    }
}