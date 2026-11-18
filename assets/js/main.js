(function () {
    'use strict';

    var root = document.documentElement;

    /* ---------- i18n ---------- */
    // English lives in the HTML (default, good for SEO). PT-PT strings below.
    var PT = {
        'skip': 'Saltar para o conteúdo',
        'theme': 'Alternar modo escuro',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.skills': 'Competências',
        'nav.contact': 'Contacto',
        'nav.education': 'Formação e idiomas',
        'hero.eyebrow': 'Software Engineer @ Finantech',
        'hero.lead': 'Desenvolvo e evoluo sistemas <strong>.NET</strong> para <strong>mercados financeiros</strong> &mdash; desde os requisitos e a arquitetura até à produção. Mais de 8 anos a entregar software em equipas de produto.',
        'hero.cv': 'Descarregar CV',
        'hero.contact': 'Entrar em contacto',
        'stats.years': 'anos em software',
        'stats.stack': 'C# · ASP.NET Core · SQL Server',
        'stats.domain': 'mercados de capitais e banca de investimento',
        'about.p1': 'Sou engenheiro de software focado no ecossistema .NET e, atualmente, desenvolvo funcionalidades para o SIFOX®, uma suite de produtos para mercados financeiros utilizada por bancos de investimento. Trabalho em todo o ciclo de desenvolvimento — análise de requisitos, desenho, implementação, testes e integração — e dou contributos técnicos e de arquitetura às equipas com quem trabalho.',
        'about.p2': 'Antes disso, fui responsável pela equipa de desenvolvimento da área financeira da e-Schooling, onde também fiz o onboarding de novos engenheiros e dei suporte técnico à equipa. Valorizo software fiável, código claro e equipas que trabalham bem em conjunto.',
        'about.p3': 'Fora do trabalho: boa comida, viagens de mochila leve e uma dose diária de humildade no ginásio.',
        'present': 'Presente',
        'm.jan': 'Jan', 'm.feb': 'Fev', 'm.apr': 'Abr', 'm.jun': 'Jun', 'm.jul': 'Jul',
        'job.fin.role': 'Software Engineer',
        'job.fin.1': 'Desenvolvimento de novas funcionalidades para a suite de produtos SIFOX®, focada em mercados financeiros.',
        'job.fin.2': 'Análise e desenho de protótipos, desenvolvendo soluções para integração com sistemas de banca de investimento.',
        'job.fin.3': 'Responsabilidade em todo o ciclo de desenvolvimento, da análise de requisitos aos testes e integração.',
        'job.fin.4': 'Contributos técnicos e de arquitetura a outras equipas; garantia da qualidade e fiabilidade do que entregamos aos clientes.',
        'job.es.role': 'Software Developer',
        'job.es.1': 'Responsável pelo desenvolvimento da área financeira da plataforma.',
        'job.es.2': 'Desenho e entrega de novas funcionalidades de acordo com a lógica de negócio e as necessidades dos clientes.',
        'job.es.3': 'Análise e correção de problemas reportados por clientes em produção.',
        'job.es.4': 'Suporte técnico à equipa e onboarding de novos engenheiros.',
        'job.pri.role': 'Developer',
        'job.pri.1': '<strong>Junior Software Developer</strong> (dez 2018 – abr 2019): integrado numa equipa Scrum a desenvolver uma oferta cloud da PRIMAVERA em .NET Core.',
        'job.pri.2': '<strong>Associate Developer</strong> (abr – dez 2018): responsável pela PRIMAVERA Developers Network, ligando a comunidade de developers — exemplos de código no GitHub, conteúdos técnicos com as equipas de produto e suporte à comunidade em fóruns e no Stack Overflow.',
        'job.solo.role': 'Frontend Developer (Estágio)',
        'job.solo.1': 'Desenvolvimento de aplicações web e híbridas (single-page applications) para clientes, segundo uma abordagem MVP.',
        'skills.backend': 'Backend',
        'skills.data': 'Dados',
        'skills.frontend': 'Frontend',
        'skills.practices': 'Práticas',
        'skills.p1': 'Desenho e arquitetura de software',
        'skills.p2': 'Mentoria e onboarding',
        'edu.degree': 'Engenharia Informática',
        'edu.languages': 'Idiomas',
        'edu.langlist': 'Português (nativo) · Inglês (profissional)',
        'contact.lead': 'Aberto a conversas sobre funções de engenharia sénior, problemas interessantes em FinTech, ou simplesmente uma boa conversa sobre .NET.',
        'footer': 'Feito à mão — HTML, CSS e um pouco de JavaScript.'
    };

    // Snapshot the English text that ships in the HTML
    var EN = {};
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        EN[el.getAttribute('data-i18n')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        EN[el.getAttribute('data-i18n-html')] = el.innerHTML;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
        var parts = el.getAttribute('data-i18n-attr').split(':');
        EN[parts[1]] = el.getAttribute(parts[0]);
    });

    var META = {
        en: {
            title: 'Flávio Jardim | Software Engineer',
            desc: 'Flávio Jardim — Software Engineer specialised in .NET, C# and SQL Server, building financial-markets software. Based in Braga, Portugal.'
        },
        pt: {
            title: 'Flávio Jardim | Engenheiro de Software',
            desc: 'Flávio Jardim — Engenheiro de Software especializado em .NET, C# e SQL Server, a desenvolver software para mercados financeiros. Braga, Portugal.'
        }
    };

    function setLang(lang) {
        var dict = lang === 'pt' ? PT : EN;
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var v = dict[el.getAttribute('data-i18n')];
            if (v != null) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var v = dict[el.getAttribute('data-i18n-html')];
            if (v != null) el.innerHTML = v;
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var parts = el.getAttribute('data-i18n-attr').split(':');
            var v = dict[parts[1]];
            if (v != null) el.setAttribute(parts[0], v);
        });
        document.querySelectorAll('[data-set-lang]').forEach(function (b) {
            b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang));
        });
        root.setAttribute('lang', lang === 'pt' ? 'pt-PT' : 'en');
        root.setAttribute('data-lang', lang);
        document.title = META[lang].title;
        var d = document.querySelector('meta[name="description"]');
        if (d) d.setAttribute('content', META[lang].desc);
        try { localStorage.setItem('lang', lang); } catch (e) {}
    }

    document.querySelectorAll('[data-set-lang]').forEach(function (b) {
        b.addEventListener('click', function () {
            setLang(b.getAttribute('data-set-lang'));
        });
    });

    var initial = root.getAttribute('data-lang') === 'pt' ? 'pt' : 'en';
    if (initial === 'pt') setLang('pt');
    else document.querySelectorAll('[data-set-lang]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === 'en'));
    });

    /* ---------- theme ---------- */
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    function currentTheme() {
        return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light');
    }
    document.getElementById('theme-toggle').addEventListener('click', function () {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) {}
    });

    /* ---------- misc ---------- */
    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal sections on scroll
    if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
            });
        }, { rootMargin: '0px 0px -10% 0px' });
        document.querySelectorAll('.section, .stats').forEach(function (el) {
            el.classList.add('reveal');
            io.observe(el);
        });
    }

    // Highlight active nav link
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
    if ('IntersectionObserver' in window) {
        var navIo = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                links.forEach(function (a) {
                    a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        ['about', 'experience', 'skills', 'contact'].forEach(function (id) {
            var s = document.getElementById(id);
            if (s) navIo.observe(s);
        });
    }
})();
