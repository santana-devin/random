# Aplicativo que gera numero aleatório

#npx react-native init random  
#cd random  
#adc devices  
#npx react-native run-android  
#adb devices  
// List of devices attached  
// emulator-5554	device  

// Aconteceu um erro no emumalador
// Foi pedido para executar  o comando:
#npx react-native start

### Criar APK

#cd android/app

#sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

### Configurando as 
Coloque o my-upload-key.keystorearquivo sob o android/appdiretório na pasta do seu projeto.

Edite o arquivo ~/.gradle/gradle.propertiesou android/gradle.properties, e adicione o seguinte (substitua *****pela senha correta do keystore, alias e senha da chave),

MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****

Essas serão variáveis ​​globais do Gradle, que podemos usar posteriormente em nossa configuração do Gradle para assinar nosso aplicativo.


### Adicionando a configuração de assinatura à release

#./gradlew bundleRelease

#./gradlew assembleRelease


![Overview](https://github.com/santana-devin/random/blob/master/images/screen-1.gif).

![Overview](https://github.com/santana-devin/random/blob/master/images/screen-2.gif).




