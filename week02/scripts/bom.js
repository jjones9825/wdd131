const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

const chapters = [];


button.addEventListener('click', function(){
    const chapter = input.value.trim();
    
    if (chapter !== ''){
        if(chapters.length >= 10){
            alert("You are only able to add 10 favorite chapters");
            input.value = '';
            input.focus();
            return;
        }

        const li = document.createElement('li');
        li.textContent = input.value;
       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function(){
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);
        input.value = '';

        chapters.push(chapter);
    }
    
    else {
        input.focus();
    }
    
    input.focus();
} );




