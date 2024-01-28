    import Swal from "sweetalert2"
    
    const input = document.querySelector('#input')
    const button = document.querySelector('#button')
    const dados = document.querySelector('#dados')
    
    
    button.addEventListener('click', async () => {
            const API = `https://viacep.com.br/ws/${input.value}/json/`
            dados.innerHTML = ''

            try {
            const response = await fetch(API)
            const data = await response.json()
            Object.entries(data).map((item) => {
                const divNova = document.createElement('div')
                divNova.id = 'divNova'
                divNova.innerHTML = item[0] +': ' + item[1]

                dados.appendChild(divNova)
                
            })
                
            } catch (error) {
                Swal.fire({
                    title: 'Erro!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            } 
            finally{
                input.value = ''
            }

        })
   