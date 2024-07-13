//your JS code here. If required.
//const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bands = ['Anywhere But Here','The Bled','Counterparts','The Devil Wears Prada','The Midway State','Norma Jean','Oh, Sleeper', 'An Old Dog','Pierce the Veil','The Plot in You','Say Anything']
$input = document.getElementById('band')

for(let i  = 0 ; i < bands.length ; i++){
    $list = document.createElement('li')
    $list.innerHTML = bands[i]
    $input.appendChild($list)
}
