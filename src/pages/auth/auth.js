'use strict'

const loginContainer = document.getElementById('login-container');

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)
document.getElementById('open-login').addEventListener('click', moveOverlay)

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)


const form = document.getElementById('form');
const campos = document.getElementsByClassName('required');
const linha = document.getElementsByClassName('required-linha');
const spans = document.querySelectorAll('.span-required');
const texto = document.querySelectorAll('.required-text');
const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

const formlogin = document.getElementById('formlogin');
const camposlogin = document.getElementsByClassName('required-login');
const linhalogin = document.getElementsByClassName('required-linha-login');
const spanslogin = document.querySelectorAll('.span-required-login');
const textologin = document.querySelectorAll('.required-text-login');

function setError(index){
  texto[index].style = 'color: #e63636'
  spans[index].style.display = 'block';
  linha[index].style = 'background-color: #e63636;'
}

function removeError(index){
  texto[index].style = ''
  spans[index].style.display = 'none';
  linha[index].style = ''
}

function setErrorlogin(index){
  textologin[index].style = 'color: #e63636'
  spanslogin[index].style.display = 'block';
  linhalogin[index].style = 'background-color: #e63636;'
}

function removeErrorlogin(index){
  textologin[index].style = ''
  spanslogin[index].style.display = 'none';
  linhalogin[index].style = ''
}


function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    }
    else{
        removeError(0)
    }
}

function emailValidate(){
        if(!emailRegex.test(campos[1].value)){
             setError(1);
        } else{
             removeError(1);
        }
    }

    function PassorwdValidate(){
            if(campos[2].value.length < 8){
                setError(2)
            }else{
                removeError(2);
            }
    }

    
    function numerovalidate(){
            if(campos[3].value.length < 8){
                setError(3)
            }else{
                removeError(3);
            }
    }


    function PassorwdValidateLogin(){
    if(camposlogin[1].value.length < 8){
        setErrorlogin(1);
    }
    else{
        removeErrorlogin(1)
    }
    }

    function nameValidateLogin(){
    if(camposlogin[0].value.length < 3){
       setErrorlogin(0);
    }
    else{
        removeErrorlogin(0)
    }
}