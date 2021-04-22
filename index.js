const tables = document.getElementsByClassName('contents');

for(i=0;i<tables.length;i++)
{
    tables[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}