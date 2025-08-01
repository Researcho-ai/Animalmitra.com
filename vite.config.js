import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"privacy-policy":{"outputDir":"./privacy-policy","lang":"en","cacheVersion":9,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/privacy-policy/"},{"rel":"alternate","hreflang":"en","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/privacy-policy/"}]},"index":{"outputDir":"./","lang":"en","cacheVersion":9,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/"}]},"old-home":{"outputDir":"./old-home","lang":"en","cacheVersion":9,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/old-home/"},{"rel":"alternate","hreflang":"en","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/old-home/"}]},"aboute-us":{"outputDir":"./aboute-us","lang":"en","cacheVersion":9,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/aboute-us/"},{"rel":"alternate","hreflang":"en","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/aboute-us/"}]},"term-and-condition":{"outputDir":"./term-and-condition","lang":"en","cacheVersion":9,"meta":[{"name":"twitter:card","content":"summary"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/term-and-condition/"},{"rel":"alternate","hreflang":"en","href":"https://e5512968-0c98-4611-b8e6-3717d11a65a3.weweb-preview.io/term-and-condition/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
