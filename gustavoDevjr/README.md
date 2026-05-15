# Perfil Dev Jr — Teste Técnico Dev Jr Mobile

---

**ATENÇÃO:**

Antes de iniciar o teste, faça um **fork** deste repositório para a sua conta do GitHub. Em seguida, utilize o comando `git clone` para baixar o seu fork para o seu computador:

```bash
git clone https://github.com/seu-usuario/perfil-dev-jr.git
```

Realize todo o desenvolvimento no seu repositório forkado. Ao finalizar, envie o **link do seu repositório** (com as alterações realizadas) como entrega.

> **Alerta sobre uso de IAs:**
> O uso de ferramentas de Inteligência Artificial (como ChatGPT, Copilot, Gemini, etc.) deve ser feito com responsabilidade. Utilize-as apenas como apoio para dúvidas ou revisão de código, nunca para copiar soluções prontas sem entender. Você será cobrado(a) sobre o entendimento do seu código na entrevista técnica.

---

## Sobre o desafio

A empresa fictícia **DevStart Mobile** está contratando um(a) **Desenvolvedor(a) Mobile Júnior**. O objetivo é criar um aplicativo mobile simples, organizado e funcional usando **React Native com Expo**.

Além da interface, serão avaliados:
- Criação do projeto com Expo
- Uso de componentes básicos do React Native
- Navegação por abas inferiores (TabBar)
- Organização de telas em arquivos separados
- Estilização com `StyleSheet`
- Uso de imagens, listas, campos de entrada e botões
- Versionamento no GitHub
- README completo e explicativo

---

## Requisitos do aplicativo

- Navegação inferior por abas (**TabBar/Bottom Tabs**) com pelo menos 3 telas:
  - **Perfil:** Nome, imagem, cargo e seção "Sobre mim"
  - **Habilidades:** Lista com pelo menos 5 habilidades
  - **Projetos/Contato:** Pelo menos 2 projetos, área de contato (e-mail, GitHub, LinkedIn/portfólio, campo de mensagem e botão "Enviar contato")
- Utilizar: `View`, `Text`, `Image`, `ScrollView` ou `FlatList`, `TextInput`, `Button`, `StyleSheet`
- Organização em pastas (ex: `screens/`, `assets/`)
- Código indentado e layout organizado
- Projeto funcionando no Expo Go, navegador ou emulador
- Não usar bibliotecas visuais prontas (ex: NativeBase, Paper, Tamagui, UI Kitten)

---

## Estrutura sugerida

```
perfil-dev-jr/
│
├── App.js
├── screens/
│   ├── PerfilScreen.js
│   ├── HabilidadesScreen.js
│   └── ProjetosScreen.js
├── assets/
│   └── imagem-perfil.png
└── README.md
```

---

## Como executar o projeto

1. Clone o repositório:
   ```bash
   git clone link-do-repositorio
   ```
2. Acesse a pasta:
   ```bash
   cd perfil-dev-jr
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto:
   ```bash
   npx expo start
   ```

---

## O que deve conter no README

- Descrição do projeto
- Tecnologias utilizadas
- Funcionalidades implementadas
- Explicação detalhada de tudo o que foi feito: telas, funcionalidades, decisões tomadas, organização do código, diferenciais
- Como executar o projeto
- Autor

Exemplo de tópicos:

```markdown
# Perfil Dev Jr

## Descrição
Aplicativo criado em React Native com Expo para apresentar um perfil profissional de candidato a Desenvolvedor Mobile Júnior.

## Tecnologias utilizadas
- React Native
- Expo
- JavaScript
- React Navigation
- Git
- GitHub

## Funcionalidades
- Exibe dados do candidato
- Apresenta uma tela de perfil
- Lista habilidades
- Mostra projetos
- Exibe informações de contato
- Possui navegação por abas inferiores

## Telas
- **Perfil:** ...
- **Habilidades:** ...
- **Projetos/Contato:** ...

## Organização do código
- ...

## Diferenciais
- ...

## Como executar o projeto
1. ...

## Autor
Nome do aluno
```

---

## Regras de entrega

1. Faça um **fork** deste repositório para a sua conta do GitHub.
2. Realize todo o desenvolvimento no seu repositório forkado.
3. Ao finalizar, envie as seguintes informações:

```
Link do seu repositório forkado no GitHub:
```

O link deve apontar para o seu repositório público com o código desenvolvido.

---

## Recomendações

- Use apenas estilos criados por você com `StyleSheet`
- Organize a aplicação em telas separadas
- Use nomes claros para arquivos, variáveis e estilos
- Teste a navegação entre as abas
- Teste o aplicativo antes de entregar
- Não copie código sem entender
- Faça commits durante o desenvolvimento
- Capriche na aparência da tela
- Cuide da experiência do usuário
- Pense como se estivesse entregando um teste para uma vaga de Dev Jr

---

## Critérios de avaliação

- Projeto criado corretamente com Expo
- Navegação com TabBar / Bottom Tabs
- Pelo menos 3 telas diferentes
- Organização visual e layout
- Uso correto dos componentes básicos
- Uso correto do `StyleSheet`
- GitHub, commits e README
- Explicação clara do projeto
- Postura profissional

---

## Observação importante

Esta avaliação simula um teste técnico para uma vaga de **Desenvolvedor Mobile Júnior**. Além do aplicativo funcionar, serão avaliados organização, clareza do código, capricho visual, uso correto do GitHub, capacidade de explicar o projeto e postura durante a entrevista técnica.
