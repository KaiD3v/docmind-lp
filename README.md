# DocMind — Landing Page

Landing page oficial do **[DocMind](https://github.com/KaiD3v/DocMind)**, um leitor desktop para documentação Markdown com navegação sequencial determinística, segurança 100% somente leitura e visual inspirado no Visual Studio Code.

---

## 🎯 Sobre o Projeto

Esta landing page foi desenvolvida para apresentar com clareza a proposta de valor do DocMind, destacar seus diferenciais em relação a editores de código convencionais e fornecer links diretos para os downloads oficiais da versão v1.0.0.

O design foi construído sob uma disciplina técnica e editorial (guiada pelas diretrizes da skill `frontend-design`), priorizando alta densidade informativa, excelente contraste, ausência de clichês visuais ("AI slop") e responsividade completa.

---

## ✨ Destaques da Landing Page

- **Temas Claro e Escuro Nativos**:
  - Paletas fiéis ao ecossistema de desenvolvimento (**VS Code Dark+** e **Light+**).
  - Alternância instantânea com detecção da preferência do sistema operacional (`prefers-color-scheme`) e persistência via `localStorage`.
- **Tabela Comparativa Responsiva**:
  - Contraste direto entre *"Editor de Código Comum"* e o *"DocMind"*.
  - Visualização tabular tradicional de 3 colunas no desktop e conversão automática para **cards empilhados no mobile** (≤ 768px), eliminando a necessidade de scroll horizontal.
- **Showcase Fiel do Aplicativo**:
  - Demonstração visual com a captura real do DocMind (`screenshot.png`) com interface de leitor de Markdown e outline dinâmico.
- **Régua de Atalhos de Teclado**:
  - Seção inspirada na Command Palette e Status Bar para consulta rápida de teclas (`Ctrl+O`, `Ctrl+P`, `Ctrl+F`, `Ctrl+B`, `Alt+→`, `Alt+←`).
- **CTAs de Download Oficiais (v1.0.0)**:
  - **Instalador Windows**: `DocMind-Setup-1.0.0-x64.exe`
  - **Versão Portável**: `DocMind-Portable-1.0.0-x64.zip`
  - Nota de orientação clara e transparente sobre o Windows SmartScreen na primeira execução.
- **FAQ Interativo**:
  - Acordeom com respostas para dúvidas comuns sobre integridade de arquivos, extensões suportadas (`.md`, `.markdown`), atualização em tempo real com Chokidar e licença.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível com metatags completas de SEO, Open Graph e Twitter Cards.
- **CSS3 Moderno**:
  - Design Tokens com variáveis CSS nativas (`--bg`, `--text`, `--accent`, etc.).
  - Layout com CSS Grid e Flexbox.
  - Tipografia deliberada: `Inter` (Google Fonts) e `JetBrains Mono` (código e atalhos).
  - Zero dependências de frameworks CSS pesados (Vanilla CSS puro).
- **JavaScript Vanilla (ES6+)**:
  - Gerenciamento de temas (Dark/Light).
  - Controle do menu mobile responsivo.
  - Acordeom expansível com acessibilidade.
  - Rolagem suave com compensação para cabeçalho fixo.

---

## 📁 Estrutura de Arquivos

```text
.
├── index.html        # Estrutura da landing page e conteúdo semântico
├── styles.css        # Design system, temas claro/escuro e responsividade
├── script.js         # Lógica de alternância de tema, menu e interações
├── assets/
│   └── screenshot.png# Captura de tela real do DocMind em execução
└── README.md         # Documentação deste repositório
```

---

## 🚀 Como Executar Localmente

Como a landing page foi desenvolvida em HTML, CSS e JavaScript puros, nenhuma etapa de compilação ou instalação pesada é necessária.

### Opção 1: Abrir diretamente no navegador
Basta dar duplo clique no arquivo `index.html` ou abri-lo pelo seu navegador favorito.

### Opção 2: Servidor local HTTP

Com **Node.js**:
```bash
npx serve .
```

Com **Python 3**:
```bash
python -m http.server 3000
```

Em seguida, acesse `http://localhost:3000` no seu navegador.

---

## 🔗 Links Relacionados

- **Repositório Oficial do DocMind**: [github.com/KaiD3v/DocMind](https://github.com/KaiD3v/DocMind)
- **Releases do DocMind**: [github.com/KaiD3v/DocMind/releases](https://github.com/KaiD3v/DocMind/releases)

---

## 📄 Licença

Distribuído sob a licença **MIT**. Consulte o repositório principal para obter mais informações.

Desenvolvido por **[KaiD3v](https://github.com/KaiD3v)**.
