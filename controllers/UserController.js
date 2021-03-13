class UserController {

    constructor(formId, tableId){
        this.formElement = document.getElementById(formId);
        this.tableElement = document.getElementById(tableId);

        this.onSubimit() //semelhante ao estado no react será chamado assim que o documento estiver executando, "ficará disponivel para uso"
    }// nesse caso selecionamos partes do formulario para ter acesso aqui dentro de forma dinamica


    onSubimit(){

        this.formElement.addEventListener('submit', (event)=>{

            event.preventDefault();

            let values = this.getValues();

            values.photo = ""; // feito para atualizar o campo photo no objeto manualmente
            this.getPhoto( (resultURL)=>{
                values.photo = resultURL;

            this.addLine(values); //  chama o metodo de adicionar linha passando como parametro o objeto tratado e criado // this.getValues() // pega o objeto tratado e criado
            console.log(values)
            } );
        });

    } //envia os dados coletados e tratados

    getPhoto(callbackResultURL){

        let fileReader = new FileReader();

        let elements = [...this.formElement.elements].filter(item=>{

             if(item.name === 'photo') {
                 return item
            };

        });// busca o photo dentro de formElement.elements

        let file = elements[0].files[0];

        fileReader.onload = ()=>{
            callbackResultURL(fileReader.result); //retorna o endereço como base64
        };//  função callback, verifica quando o arquivo é carregado e retorna a URL em base64 nesse caso

        fileReader.readAsDataURL(file); // valida/carrega a url e tranforma em base64

        
    }// trata o campo photo usando o FileReader Class

    getValues() {

        let user = {};

        [...this.formElement.elements].forEach( (field, index) => {

            if(field.name == "gender"){
                if(field.checked) {
                    user[field.name] = field.value;
                }
            }else {
                user[field.name] = field.value;
            };

            if(field.name == "admin"){
                if(field.checked){
                    user[field.name] = "on";

                } else{
                    user[field.name] = "off";
                }
            }
        });

        //como só usamos uma vez ao invés de usar var objectUser = new User(); pode-se retornar o objeto direto com return
        return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
        ); // tem que se chamar o modelo do objeto criado dentro do Models/User
        return objetcUser;
    } // coleta dados trata e cria objetos

    addLine(dataUser) {
        //dataUser => são os dados gravados no 'user' depois de serem submetidos pelo botão submit do formulario;
            this.tableElement.innerHTML=`
            <tr>
                <td>
                    <img src=${dataUser.photo} alt="User Image" class="img-circle img-sm">
                    </td>
                    <td>${dataUser.name}</td>
                    <td>${dataUser.email}</td>
                    <td>${dataUser.admin}</td>
                    <td>${dataUser.birth}</td>
                    <td>
                        <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                        <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                </td>
            <tr>
            `;
        }// adiciona o contéudo para a visualização final

}