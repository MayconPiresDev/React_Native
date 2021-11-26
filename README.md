# React_Native

## Iniciando projeto

Para iniciar seu primeiro projeto em React Native teremos que passar por algumas etapas.

## Ambiente Linux <img src="https://media.giphy.com/media/U6M4L81SA1rVdfr8ZK/giphy.gif" width="40" height="40">

- verificar se está com o `curl` rodando no terminal o comando:

  ```
      curl --version
  ```

  caso ele retorne a versão podera prosseguir. Caso não tenha retornado nada, execute o seguinte comando:

  ```
      sudo apt-get install curl
  ```

- Com o **curl** instalado, execute o comando da instalação da versão mais recete do node.js na versão LTS

  - Ubunto

  ```
  curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

  - Debian (com root)

  ```
  curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
  apt-get install -y nodejs
  ```

  Feche o terminal e abra novamente para que as alteraçoes tenham efeito.

- Então execute os seguintes comandos no terminal:
  ```
  node -v
  npm -v
  ```
- Instalação do Yarn basta executar:
  ```
  sudo npm install --global yarn
  ```
  Após a instalação, verefique se a instalação ocorreu com sucesso utilizando o comando:
  ```
  yarn -v
  ```
  <!-- falta windows e macOS -->

## Instalando JDK (Java Development kit)

- Para a instalação do JDK na versão 11(LTS mais recente) com o seguinte comando:

  ```
   sudo add-apt-repository ppa:openjdk-r/ppa
   sudo apt-get update
   sudo apt-get install openjdk-11-jdk
  ```

  Podemos testar a instalação do JDK com o seguinte comando:

  ```
  java -version
  ```

  Caso possua outra versão do java, pode selecionar a versão 11 como padrão usando o comando:

  ```
  sudo update-alternatives --config java
  ```

<!-- Instalação do android studio e config -->

Caso esteja em um ambiente linux ou windows, ira precisar de um emulador como o android studio.

## vs code <img src="https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif" width="20">

- Para criar um projeto execute o comando em um diretório:

  ```
  npx react-native init nomedoprojeto
  ```

  Apos isso, para dar start no seu projeto tanto em windows ou linux, execute um dos seguintes comandos para que o `Metro` seja iniciado:

  ```
  npx react-native start
  npm start
  yarn start
  ```

  E em outro terminal execute um dos seguintes comandos para que seu projeto seja compilado:

  ```
  npx react-native run-android
  yarn run react-native run-android
  yarn android
  ```
