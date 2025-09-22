# 🔥 Prova das Chamas da Verdade - Kyojuro Rengoku

## 📖 Sobre o Projeto

Projeto interativo inspirado no universo de Demon Slayer, onde você ajuda Kyojuro Rengoku, o Hashira das Chamas, a derrotar um Oni que manipula luz e trevas. O desafio consiste em identificar quais cores resistiram ao poder das trevas.

## 🎯 O Desafio

Kyojuro Rengoku enfrenta um Oni que rouba as cores do mundo. Sua missão é criar uma função que, a partir de:
- **Cores originais**: Lista das cores iniciais
- **Cores perdidas**: Lista das cores consumidas pelas trevas

Retorne apenas as **cores que permaneceram intactas**.

### Exemplo:
- **Entrada**: 
  - Cores originais: `vermelho, azul, verde, amarelo`
  - Cores perdidas: `verde, amarelo`
- **Saída**: `vermelho, azul`

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm

### Instalação
```bash
# 1. Clone ou baixe os arquivos do projeto
# 2. Navegue até a pasta do projeto
cd prova-das-chamas-da-verdade

# 3. Instale as dependências
npm install
```

### Execução em Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento com watch do SCSS
npm run dev
```

### Scripts Disponíveis
- `npm run dev` - Inicia servidor local e watch do SCSS
- `npm run sass:compile` - Compila SCSS para CSS uma vez
- `npm run sass:watch` - Observa mudanças no SCSS e compila automaticamente
- `npm run build` - Compila os estilos para produção

## 📁 Estrutura do Projeto

```
prova-das-chamas-da-verdade/
├── index.html          # Página principal
├── styles.scss         # Estilos em SCSS
├── styles.css          # Estilos compilados (gerado automaticamente)
├── script.js           # Lógica JavaScript
├── package.json        # Configurações do projeto
├── assets/
│   └── background-video.mp4  # Vídeo de fundo (adicione aqui)
└── README.md           # Este arquivo
```

## 🎬 Configuração do Vídeo

1. Adicione seu vídeo de fundo na pasta `assets/` com o nome `background-video.mp4`
2. O vídeo deve ter dimensões 3840x2160 para melhor qualidade
3. O sistema já está configurado para adaptar automaticamente o vídeo à tela

## 🎨 Características do Design

- **Design Cyberpunk**: Cores vibrantes com gradientes de fogo
- **Animações Avançadas**: Efeito gooey nos botões com bolhas animadas
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Container Lateral**: Posicionado no lado esquerdo para desktop
- **Scrollbar Personalizada**: Design elegante que combina com o tema

## ⚡ Funcionalidades

- **Input Dinâmico**: Aceita listas de cores separadas por vírgula
- **Validação em Tempo Real**: Feedback imediato sobre erros
- **Cálculo Detalhado**: Mostra passo a passo da resolução
- **Interface Responsiva**: Funciona perfeitamente em mobile e desktop
- **Navegação por Teclado**: Suporte completo para acessibilidade

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **SCSS**: Pré-processador CSS com recursos avançados
- **JavaScript ES6+**: Lógica moderna e eficiente
- **CSS Grid/Flexbox**: Layout responsivo
- **SVG Filters**: Efeitos visuais avançados

## 🎮 Como Usar

1. **Digite as Cores Originais**: Insira as cores separadas por vírgula
2. **Digite as Cores Perdidas**: Insira as cores consumidas pelas trevas
3. **Clique em INICIAR**: Execute o desafio das chamas
4. **Veja o Resultado**: Analise o cálculo detalhado e o resultado final
5. **Clique em VOLTAR**: Redefina para um novo desafio

## 🔧 Personalização

Para alterar as cores do tema, modifique as variáveis SCSS no início do arquivo `styles.scss`:

```scss
$prime: #E45323;        // Cor principal
$accent: #ff6b35;       // Cor de destaque
$second: #0c1016;       // Cor secundária
```

## 📱 Responsividade

O projeto foi desenvolvido com **mobile-first** e inclui:
- Breakpoints para tablets (768px)
- Breakpoints para smartphones (480px)
- Ajustes automáticos de layout e tipografia
- Prevenção de zoom indesejado no iOS

## 🎯 Próximas Melhorias

- [ ] Modo escuro/claro
- [ ] Histórico de desafios
- [ ] Diferentes níveis de dificuldade
- [ ] Sons temáticos do anime
- [ ] Animações de partículas mais elaboradas

---

**Desenvolvido com 🔥 inspirado no universo de Demon Slayer**
