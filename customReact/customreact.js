 // Created Dom Element In react
 function customRender(reactElement, container){

    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)
   const domElement =  document.createElement
   (reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)

 }
 
 const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
 }
 
 const mainContainer = document.querySelector('#root')

 // element ko react mai render krta hai 
 // Method to inject in react ||  kya inject krna hai((reactElement) || Kaha pr inject krna hai( mainContainer)          
 
 customRender(reactElement, mainContainer)
 