# DocMind — Landing Page

Landing page do [DocMind](https://github.com/KaiD3v/DocMind), leitor desktop de documentação Markdown para Windows com navegação sequencial determinística e modo estrito de somente leitura.

## Conteúdo da página

- **Downloads da v1.0.0**: Links diretos para o instalador (`.exe`) e a versão portável (`.zip`), com aviso explicativo sobre o Windows SmartScreen.
- **Comparativo técnico**: Tabela detalhando as diferenças práticas entre ler documentação em um editor de código convencional e em um leitor dedicado.
- **Detalhamento de recursos**: Explicações sobre a fila sequencial de arquivos, outline automático em tempo real, renderização com `rehype-sanitize` e atualização via Chokidar.
- **Atalhos de teclado**: Tabela de referência rápida para navegação sem mouse (`Ctrl+O`, `Ctrl+P`, `Ctrl+F`, `Ctrl+B`, `Alt+→`, `Alt+←`).
- **Temas**: Alternância entre modo claro e escuro, com sincronização automática do sistema operacional e persistência em `localStorage`.
- **FAQ**: Respostas diretas sobre integridade de arquivos, suporte a formatos e código aberto.

## Estrutura do projeto

```text
.
├── index.html        # Estrutura semântica e conteúdo
├── styles.css        # Estilos, tokens de tema e responsividade
├── script.js         # Alternância de tema, menu mobile e acordeom
└── assets/
    └── screenshot.png# Captura de tela do aplicativo
```

## Execução local

Abra o arquivo `index.html` diretamente no navegador ou execute um servidor estático:

```bash
# Com Node.js
npx serve .

# Com Python
python -m http.server 3000
```

Acesse em `http://localhost:3000`.

## Licença

[MIT](https://github.com/KaiD3v/DocMind/blob/main/LICENSE) — Veja o projeto principal em [KaiD3v/DocMind](https://github.com/KaiD3v/DocMind).
