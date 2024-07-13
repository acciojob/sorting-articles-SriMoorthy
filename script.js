//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

$input = document.getElementById('band')

for(let i  = 0 ; i < bands.length ; i++){
    $list = document.createElement('li')
    $list.innerHTML = bands[i]
    $input.appendChild($list)
}
